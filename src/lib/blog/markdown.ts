function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(value: string) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return text;
}

export function renderMarkdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      html.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
      listItems = [];
    }
  };

  const flushCode = () => {
    if (codeLines.length) {
      html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      codeLines = [];
    }
  };

  lines.forEach((line) => {
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        flushCode();
      } else {
        flushParagraph();
        flushList();
      }
      inCodeBlock = !inCodeBlock;
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      html.push(`<h3>${renderInline(trimmed.slice(4))}</h3>`);
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${renderInline(trimmed.slice(3))}</h2>`);
      return;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      html.push(`<h1>${renderInline(trimmed.slice(2))}</h1>`);
      return;
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  flushCode();

  return html.join("");
}
