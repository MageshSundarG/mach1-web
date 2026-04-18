import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingVideo from "@/components/common/FloatingVideo";
import MarkdownPreview from "@/components/blog/MarkdownPreview";
import ScrollResetLink from "@/components/common/ScrollResetLink";
import { blogApi } from "@/lib/api/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();
  const postQuery = useQuery({
    queryKey: ["published-post", slug],
    queryFn: () => blogApi.getPublishedPost(String(slug)),
    enabled: Boolean(slug),
    staleTime: 60_000,
  });

  const relatedPostsQuery = useQuery({
    queryKey: ["published-posts", 1, 6],
    queryFn: () => blogApi.getPublishedPosts(1, 6),
    staleTime: 60_000,
  });

  const post = postQuery.data?.post;
  const relatedPosts =
    relatedPostsQuery.data?.posts.filter((entry) => entry.slug !== slug).slice(0, 3) || [];

  return (
    <>
      <Header variant="light" />
      <main data-header-tone="light" className="bg-white pb-24 pt-32 text-[#1c2430]">
        <article className="site-shell">
          <div className="border-x border-[#d8cfbe] bg-white">
            <div className="border-b border-[#d8cfbe] px-6 py-6 md:px-10">
              <ScrollResetLink
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8cfbe] bg-white px-5 py-2.5 text-sm text-[#4f5966] shadow-[0_10px_30px_rgba(35,44,60,0.05)]"
              >
                <ArrowLeft size={16} /> Back to Journal
              </ScrollResetLink>
            </div>

            {post ? (
              <>
                <div className="border-b border-[#d8cfbe] px-6 py-10 md:px-10 md:py-14">
                  <div className="text-center">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8c7f69]">
                      <span>{post.tags[0] || "MACH1 Journal"}</span>
                      <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                      <span>8 min read</span>
                    </div>
                    <h1 className="title-balanced mx-auto mt-6 max-w-5xl text-[34px] font-normal leading-[1.08] text-[#16202b] md:text-[48px]">
                      {post.title}
                    </h1>
                    <p className="copy-balanced mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-[#5d6673] md:text-[17px]">
                      {post.excerpt}
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-[#6d7480]">
                      <span className="rounded-full border border-[#d8cfbe] bg-white px-4 py-2">
                        MACH1 Editorial
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[#d8cfbe] px-6 py-6 md:px-10 md:py-8">
                  <div className="overflow-hidden border border-[#ddd3c2] bg-white p-3 shadow-[0_25px_70px_rgba(35,44,60,0.08)] md:p-4">
                    <img
                      src={post.cover_image_url || "/assets/home/session7/1.png"}
                      alt={post.title}
                      className="h-[18rem] w-full object-cover md:h-[32rem]"
                    />
                  </div>
                </div>

                <div className="border-b border-[#d8cfbe] px-6 py-8 md:px-10 md:py-10">
                  <div className="mb-8 border border-[#ddd3c2] bg-white px-6 py-5 text-[15px] leading-7 text-[#57616e] shadow-[0_14px_40px_rgba(35,44,60,0.04)] md:text-[16px]">
                    <p>
                      This article is part of the MACH1 Journal, a publication focused on how
                      airport operations teams use safety systems, workflow design, and applied AI
                      to make better decisions.
                    </p>
                  </div>

                  <MarkdownPreview markdown={post.content_md} />
                </div>

                {relatedPosts.length ? (
                  <section className="px-6 py-10 md:px-10 md:py-12">
                    <div className="mb-8 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8c7f69]">
                          Keep Reading
                        </p>
                        <h2 className="title-balanced mt-3 text-[28px] font-normal leading-tight text-[#16202b] md:text-[36px]">
                          More articles from the journal
                        </h2>
                      </div>
                    </div>

                    <div className="grid gap-0 border border-[#ddd3c2] bg-white md:grid-cols-3">
                      {relatedPosts.map((entry) => (
                        <ScrollResetLink
                          key={entry.slug}
                          to={`/blog/${entry.slug}`}
                          className="group flex min-h-[28rem] flex-col border-b border-[#ddd3c2] md:border-b-0 md:border-r md:last:border-r-0"
                        >
                          <img
                            src={entry.cover_image_url || "/assets/home/session7/2.png"}
                            alt={entry.title}
                            className="h-48 w-full border-b border-[#ddd3c2] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="flex flex-1 flex-col p-6">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8c7f69]">
                              {entry.tags[0] || "Journal"}
                            </p>
                            <h3 className="mt-3 text-[22px] font-normal leading-[1.2] text-[#16202b] md:text-[24px]">
                              {entry.title}
                            </h3>
                            <p className="mt-4 flex-1 text-[15px] leading-7 text-[#5c6571] md:text-[16px]">
                              {entry.excerpt}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#155eef]">
                              Read next <ArrowRight size={16} />
                            </span>
                          </div>
                        </ScrollResetLink>
                      ))}
                    </div>
                  </section>
                ) : null}
              </>
            ) : (
              <div className="px-6 py-10 md:px-10">
                <div className="border border-[#ddd3c2] bg-white p-8 text-[#5d6673] shadow-[0_20px_60px_rgba(35,44,60,0.06)]">
                  {postQuery.isLoading ? "Loading article..." : "Article not found."}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer variant="dark" />
      <FloatingVideo />
    </>
  );
};

export default BlogPostPage;
