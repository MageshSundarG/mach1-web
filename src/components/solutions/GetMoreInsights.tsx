import ScrollResetLink from "@/components/common/ScrollResetLink";
import { blogApi } from "@/lib/api/blog";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";

const GetMoreInsights = () => {
  const postsQuery = useQuery({
    queryKey: ["published-posts", 1, 3],
    queryFn: () => blogApi.getPublishedPosts(1, 3),
    staleTime: 60_000,
  });

  const posts = postsQuery.data?.posts.slice(0, 3) || [];

  return (
    <div data-header-tone="dark" className="relative">
      <div className="pointer-events-none absolute bottom-full left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1440 80"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#020B18"
          />
        </svg>
      </div>

      <div className="overflow-x-hidden font-sans text-white">
        <div className="bg-[#020B18] px-4 pb-44">
          <section className="site-shell relative py-24">
            <div className="mb-16 text-left">
              <span className="motion-fade-up inline-block rounded-full border border-[#A4A1A1] bg-[#F4F9EC1A] px-6 py-2">
                <span className="text-[14px] font-regular">Recent Blogs</span>
              </span>

              <h2 className="motion-fade-up motion-delay-1 title-balanced mt-6 text-[36px] font-regular lg:text-[56px]">
                Get More{" "}
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                  Insights
                </span>
              </h2>
              <p className="motion-fade-up motion-delay-2 copy-balanced mt-4 text-[15px] text-white/74 lg:text-[16px]">
                Let&apos;s build the future of airport operations together.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, idx) => (
                <ScrollResetLink
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`glass-panel motion-fade-up elegant-transition group rounded-[28px] p-4 hover:-translate-y-1 ${idx === 1 ? "motion-delay-1" : idx === 2 ? "motion-delay-2" : ""}`}
                >
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={post.cover_image_url || "/assets/home/session7/1.png"}
                      alt={post.title}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <h3 className="elegant-transition text-[26px] font-regular leading-[1.12] text-white group-hover:text-[#8CC0FF] lg:text-[32px]">
                      {post.title}
                    </h3>
                    <p className="copy-balanced mt-3 line-clamp-3 text-[15px] text-white/72 lg:text-[16px]">
                      {post.excerpt}
                    </p>
                  </div>
                </ScrollResetLink>
              ))}
            </div>

            <div className="motion-fade-up motion-delay-3 mt-12">
              <ScrollResetLink
                to="/blog"
                className="elegant-transition inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-[15px] font-semibold text-white/82 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
              >
                View More Insights <ArrowRight size={16} />
              </ScrollResetLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GetMoreInsights;
