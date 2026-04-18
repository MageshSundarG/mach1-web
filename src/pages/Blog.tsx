import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingVideo from "@/components/common/FloatingVideo";
import { blogApi } from "@/lib/api/blog";
import { ArrowRight } from "lucide-react";
import ScrollResetLink from "@/components/common/ScrollResetLink";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useRef } from "react";

const Blog = () => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const postsQuery = useInfiniteQuery({
    queryKey: ["published-posts-infinite", 6],
    queryFn: ({ pageParam }) => blogApi.getPublishedPosts(pageParam, 6),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next_page ?? undefined,
    staleTime: 60_000,
  });

  const posts = useMemo(
    () => postsQuery.data?.pages.flatMap((page) => page.posts ?? []) || [],
    [postsQuery.data],
  );

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && postsQuery.hasNextPage && !postsQuery.isFetchingNextPage) {
            postsQuery.fetchNextPage();
          }
        });
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [postsQuery]);

  return (
    <>
      <Header variant="light" />
      <main data-header-tone="light" className="bg-white pb-24 pt-32 text-[#1c2430]">
        <section className="site-shell">
          <div className="border-x border-[#d8cfbe] bg-white">
            <div className="border-b border-[#d8cfbe] px-6 py-12 md:px-10 md:py-16">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-[#d8cfbe] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7a6d58]">
                  MACH1 Journal
                </span>
                <h1 className="title-balanced mt-7 text-[34px] font-normal leading-[1.08] text-[#16202b] md:text-[48px]">
                  Perspectives on operations, technology, leadership, and how modern teams work.
                </h1>
                <p className="copy-balanced mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-[#5d6673] md:text-[17px]">
                  Authors share insights on building better systems, making clearer decisions, and
                  running resilient organizations.
                </p>
              </div>
            </div>

            {posts.length ? (
              <section className="px-6 py-10 md:px-10 md:py-12">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8c7f69]">
                      Latest Articles
                    </p>
                    <h2 className="title-balanced mt-3 text-[28px] font-normal leading-tight text-[#16202b] md:text-[36px]">
                      Recent insights from the journal
                    </h2>
                  </div>
                </div>

                <div className="grid gap-0 border border-[#ddd3c2] bg-white sm:grid-cols-2 xl:grid-cols-3">
                  {posts.map((post) => (
                    <ScrollResetLink
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group flex min-h-[31rem] flex-col border-b border-[#ddd3c2] sm:border-r xl:[&:nth-child(3n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 xl:[&:nth-last-child(-n+3)]:border-b-0"
                    >
                      <div className="overflow-hidden border-b border-[#ddd3c2]">
                        <img
                          src={post.cover_image_url || "/assets/home/session7/2.png"}
                          alt={post.title}
                          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8c7f69]">
                          <span>{post.tags[0] || "Journal"}</span>
                          <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                        </div>
                        <h3 className="mt-4 line-clamp-3 text-[22px] font-normal leading-[1.2] text-[#16202b] md:text-[24px]">
                          {post.title}
                        </h3>
                        <p className="mt-4 flex-1 line-clamp-4 text-[15px] leading-7 text-[#5c6571] md:text-[16px]">
                          {post.excerpt}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#155eef]">
                          Continue reading <ArrowRight size={16} />
                        </span>
                      </div>
                    </ScrollResetLink>
                  ))}
                </div>
              </section>
            ) : (
              <div className="px-6 py-12 md:px-10">
                <div className="border border-[#ddd3c2] bg-white p-8 text-[#5d6673] shadow-[0_20px_60px_rgba(35,44,60,0.06)]">
                  {postsQuery.isLoading ? "Loading posts..." : "No published posts yet."}
                </div>
              </div>
            )}

            <div ref={loadMoreRef} className="h-10" />

            {postsQuery.isFetchingNextPage ? (
              <div className="px-6 pb-10 md:px-10">
                <div className="border border-[#ddd3c2] bg-white p-6 text-center text-[#5d6673] shadow-[0_18px_50px_rgba(35,44,60,0.06)]">
                  Loading more posts...
                </div>
              </div>
            ) : null}

            {!postsQuery.hasNextPage && posts.length > 0 ? (
              <div className="px-6 pb-10 md:px-10">
                <div className="border border-[#ddd3c2] bg-white p-6 text-center text-[#6c727d]">
                  You've reached the end of the journal.
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer variant="dark" />
      <FloatingVideo />
    </>
  );
};

export default Blog;
