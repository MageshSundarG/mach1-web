import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { renderMarkdownToHtml } from "@/lib/blog/markdown";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

type FormatCommand =
  | "bold"
  | "italic"
  | "underline"
  | "insertUnorderedList"
  | "insertOrderedList"
  | "undo"
  | "redo";

function escapeMarkdown(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function inlineMarkdown(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || "";
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const element = node as HTMLElement;
  const children = Array.from(element.childNodes).map(inlineMarkdown).join("");
  const text = escapeMarkdown(children);

  switch (element.tagName.toLowerCase()) {
    case "strong":
    case "b":
      return text ? `**${text}**` : "";
    case "em":
    case "i":
      return text ? `*${text}*` : "";
    case "u":
      return text ? `++${text}++` : "";
    case "code":
      return text ? `\`${text}\`` : "";
    case "a": {
      const href = element.getAttribute("href");
      return href && text ? `[${text}](${href})` : text;
    }
    case "img": {
      const src = element.getAttribute("src");
      const alt = element.getAttribute("alt") || "Image";
      return src ? `![${alt}](${src})` : "";
    }
    case "br":
      return "\n";
    default:
      return children;
  }
}

function blockMarkdown(element: Element, index = 0): string {
  const tagName = element.tagName.toLowerCase();
  const inline = escapeMarkdown(Array.from(element.childNodes).map(inlineMarkdown).join(""));

  switch (tagName) {
    case "h1":
      return inline ? `# ${inline}` : "";
    case "h2":
      return inline ? `## ${inline}` : "";
    case "h3":
      return inline ? `### ${inline}` : "";
    case "blockquote":
      return inline ? `> ${inline}` : "";
    case "li":
      return inline ? `${index + 1}. ${inline}` : "";
    case "pre":
      return `\`\`\`\n${element.textContent || ""}\n\`\`\``;
    case "ul":
      return Array.from(element.children)
        .filter((child) => child.tagName.toLowerCase() === "li")
        .map((child) => `- ${escapeMarkdown(Array.from(child.childNodes).map(inlineMarkdown).join(""))}`)
        .filter(Boolean)
        .join("\n");
    case "ol":
      return Array.from(element.children)
        .filter((child) => child.tagName.toLowerCase() === "li")
        .map((child, childIndex) => blockMarkdown(child, childIndex))
        .filter(Boolean)
        .join("\n");
    case "div":
    case "p":
      return inline;
    default:
      if (element.children.length) {
        return Array.from(element.children).map((child) => blockMarkdown(child)).filter(Boolean).join("\n\n");
      }
      return inline;
  }
}

function htmlToMarkdown(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return Array.from(doc.body.children)
    .map((child) => blockMarkdown(child))
    .filter(Boolean)
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function ToolbarButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onMouseDown={(event) => {
        event.preventDefault();
        onClick();
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-white/76 transition hover:bg-white/12 hover:text-white"
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastMarkdownRef = useRef(value);
  const [rawMode, setRawMode] = useState(false);

  useEffect(() => {
    if (!editorRef.current || rawMode || value === lastMarkdownRef.current) {
      return;
    }

    editorRef.current.innerHTML = renderMarkdownToHtml(value);
    lastMarkdownRef.current = value;
  }, [rawMode, value]);

  const emitChange = () => {
    if (!editorRef.current) {
      return;
    }

    const nextMarkdown = htmlToMarkdown(editorRef.current.innerHTML);
    lastMarkdownRef.current = nextMarkdown;
    onChange(nextMarkdown);
  };

  const runCommand = (command: FormatCommand, detail?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, detail);
    emitChange();
  };

  const formatBlock = (tagName: "p" | "h1" | "h2" | "h3" | "blockquote") => {
    editorRef.current?.focus();
    document.execCommand("formatBlock", false, tagName);
    emitChange();
  };

  const addLink = () => {
    const href = window.prompt("Paste the link URL");
    if (!href) {
      return;
    }

    editorRef.current?.focus();
    document.execCommand("createLink", false, href);
    emitChange();
  };

  const addImage = () => {
    const src = window.prompt("Paste the image URL");
    if (!src) {
      return;
    }

    const alt = window.prompt("Image description", "Blog image") || "Blog image";
    editorRef.current?.focus();
    document.execCommand("insertImage", false, src);
    const inserted = editorRef.current?.querySelector(`img[src="${CSS.escape(src)}"]`);
    inserted?.setAttribute("alt", alt);
    emitChange();
  };

  if (rawMode) {
    return (
      <div className="overflow-hidden rounded-[18px] border border-white/14 bg-[#080d14]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/48">Raw Markdown</span>
          <button
            type="button"
            onClick={() => setRawMode(false)}
            className="rounded-md border border-white/12 px-3 py-1.5 text-sm text-white/78"
          >
            Rich Editor
          </button>
        </div>
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-[28rem] w-full resize-y bg-transparent px-5 py-4 font-mono text-[14px] leading-7 text-white outline-none placeholder:text-white/36"
          placeholder="Write markdown here..."
          required
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[18px] border border-white/14 bg-[#080d14] shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.035] p-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <ToolbarButton label="Paragraph" onClick={() => formatBlock("p")}>
            <Pilcrow size={17} />
          </ToolbarButton>
          <ToolbarButton label="Heading 1" onClick={() => formatBlock("h1")}>
            <Heading1 size={17} />
          </ToolbarButton>
          <ToolbarButton label="Heading 2" onClick={() => formatBlock("h2")}>
            <Heading2 size={17} />
          </ToolbarButton>
          <ToolbarButton label="Heading 3" onClick={() => formatBlock("h3")}>
            <Heading3 size={17} />
          </ToolbarButton>
        </div>
        <div className="mx-1 h-6 w-px bg-white/12" />
        <div className="flex flex-wrap items-center gap-1.5">
          <ToolbarButton label="Bold" onClick={() => runCommand("bold")}>
            <Bold size={17} />
          </ToolbarButton>
          <ToolbarButton label="Italic" onClick={() => runCommand("italic")}>
            <Italic size={17} />
          </ToolbarButton>
          <ToolbarButton label="Underline" onClick={() => runCommand("underline")}>
            <Underline size={17} />
          </ToolbarButton>
        </div>
        <div className="mx-1 h-6 w-px bg-white/12" />
        <div className="flex flex-wrap items-center gap-1.5">
          <ToolbarButton label="Bulleted list" onClick={() => runCommand("insertUnorderedList")}>
            <List size={17} />
          </ToolbarButton>
          <ToolbarButton label="Numbered list" onClick={() => runCommand("insertOrderedList")}>
            <ListOrdered size={17} />
          </ToolbarButton>
          <ToolbarButton label="Quote" onClick={() => formatBlock("blockquote")}>
            <Quote size={17} />
          </ToolbarButton>
        </div>
        <div className="mx-1 h-6 w-px bg-white/12" />
        <div className="flex flex-wrap items-center gap-1.5">
          <ToolbarButton label="Link" onClick={addLink}>
            <Link size={17} />
          </ToolbarButton>
          <ToolbarButton label="Image" onClick={addImage}>
            <Image size={17} />
          </ToolbarButton>
          <ToolbarButton label="Undo" onClick={() => runCommand("undo")}>
            <Undo2 size={17} />
          </ToolbarButton>
          <ToolbarButton label="Redo" onClick={() => runCommand("redo")}>
            <Redo2 size={17} />
          </ToolbarButton>
        </div>
        <button
          type="button"
          onClick={() => setRawMode(true)}
          className="ml-auto rounded-md border border-white/12 px-3 py-2 text-sm text-white/72 transition hover:bg-white/10 hover:text-white"
        >
          Markdown
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={emitChange}
        onBlur={emitChange}
        className={cn(
          "min-h-[28rem] bg-white px-6 py-6 text-[#26303c] outline-none md:px-8",
          "[&_a]:text-[#155eef] [&_a]:underline [&_blockquote]:my-5 [&_blockquote]:border-l-4 [&_blockquote]:border-[#d8cfbe] [&_blockquote]:bg-[#fbfaf7] [&_blockquote]:py-2 [&_blockquote]:pl-4",
          "[&_h1]:my-5 [&_h1]:text-[32px] [&_h1]:font-normal [&_h1]:leading-tight [&_h2]:my-5 [&_h2]:text-[26px] [&_h2]:font-normal [&_h3]:my-4 [&_h3]:text-[21px] [&_h3]:font-normal",
          "[&_img]:my-5 [&_img]:max-h-96 [&_img]:w-full [&_img]:rounded-[18px] [&_img]:object-cover [&_li]:ml-6 [&_li]:leading-7 [&_ol]:my-4 [&_ol]:list-decimal [&_p]:my-4 [&_p]:leading-7 [&_ul]:my-4 [&_ul]:list-disc",
        )}
        dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(value) }}
      />
    </div>
  );
}
