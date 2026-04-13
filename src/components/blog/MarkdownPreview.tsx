import { renderMarkdownToHtml } from "@/lib/blog/markdown";

export default function MarkdownPreview({ markdown }: { markdown: string }) {
  return (
    <div
      className="blog-prose border border-[#ddd3c2] bg-white px-6 py-8 text-[#26303c] shadow-[0_22px_60px_rgba(35,44,60,0.06)] md:px-10 md:py-12 [&_a]:text-[#155eef] [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-[#f3ede1] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[#8a4b08] [&_h1]:font-['Georgia'] [&_h1]:text-[34px] [&_h1]:leading-[1.15] [&_h1]:text-[#16202b] [&_h2]:mt-12 [&_h2]:font-['Georgia'] [&_h2]:text-[30px] [&_h2]:leading-[1.2] [&_h2]:text-[#16202b] [&_h3]:mt-8 [&_h3]:font-['Georgia'] [&_h3]:text-[24px] [&_h3]:leading-[1.25] [&_h3]:text-[#16202b] [&_li]:ml-6 [&_li]:list-disc [&_li]:pl-1 [&_p]:text-[18px] [&_p]:leading-9 [&_p]:text-[#33404d] [&_pre]:overflow-x-auto [&_pre]:rounded-[20px] [&_pre]:bg-[#16202b] [&_pre]:p-5 [&_pre]:text-white [&_strong]:text-[#16202b] [&_ul]:space-y-3"
      dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(markdown) }}
    />
  );
}
