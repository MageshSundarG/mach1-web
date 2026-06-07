import { renderMarkdownToHtml } from "@/lib/blog/markdown";
import { cn } from "@/lib/utils";

export default function MarkdownPreview({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "blog-prose rounded-[28px] bg-white px-6 py-8 text-[#26303c] shadow-[0_22px_60px_rgba(35,44,60,0.06)] md:px-10 md:py-12",
        "[&_a]:text-[#155eef] [&_a]:underline [&_a]:underline-offset-4",
        "[&_blockquote]:my-7 [&_blockquote]:border-l-4 [&_blockquote]:border-[#d8cfbe] [&_blockquote]:bg-[#fbfaf7] [&_blockquote]:py-3 [&_blockquote]:pl-5 [&_blockquote]:pr-4 [&_blockquote]:text-[16px] [&_blockquote]:leading-7 [&_blockquote]:text-[#4d5764]",
        "[&_code]:rounded [&_code]:bg-[#f3ede1] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[14px] [&_code]:text-[#8a4b08]",
        "[&_em]:text-[#33404d] [&_h1:first-child]:mt-0 [&_h1]:mt-8 [&_h1]:text-[30px] [&_h1]:font-normal [&_h1]:leading-[1.12] [&_h1]:text-[#16202b] [&_h1]:md:text-[40px]",
        "[&_h2]:mt-10 [&_h2]:text-[26px] [&_h2]:font-normal [&_h2]:leading-[1.16] [&_h2]:text-[#16202b] [&_h2]:md:text-[32px]",
        "[&_h3]:mt-8 [&_h3]:text-[22px] [&_h3]:font-normal [&_h3]:leading-[1.2] [&_h3]:text-[#16202b] [&_h3]:md:text-[26px]",
        "[&_img]:my-8 [&_img]:max-h-[34rem] [&_img]:w-full [&_img]:rounded-[24px] [&_img]:object-cover [&_img]:shadow-[0_18px_50px_rgba(35,44,60,0.08)]",
        "[&_li]:ml-6 [&_li]:pl-1 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[#33404d] [&_li]:md:text-[16px]",
        "[&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-3 [&_p]:my-5 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#33404d] [&_p]:md:text-[16px]",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-white [&_pre]:my-8 [&_pre]:overflow-x-auto [&_pre]:rounded-[20px] [&_pre]:bg-[#16202b] [&_pre]:p-5 [&_pre]:text-[14px] [&_pre]:text-white",
        "[&_strong]:font-semibold [&_strong]:text-[#16202b] [&_u]:decoration-[#c2a56f] [&_u]:decoration-2 [&_u]:underline-offset-4 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-3",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(markdown) }}
    />
  );
}
