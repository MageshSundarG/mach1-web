import ScrollResetLink from "@/components/common/ScrollResetLink";
import { blogApi } from "@/lib/api/blog";
import { useQuery } from "@tanstack/react-query";

const InsightsSection = () => {
  const postsQuery = useQuery({
    queryKey: ["published-posts", 1, 3],
    queryFn: () => blogApi.getPublishedPosts(1, 3),
    staleTime: 60_000,
  });

  const posts = postsQuery.data?.posts.slice(0, 3) || [];

  return (
    <div data-header-tone="dark" className="relative isolate mt-20 overflow-visible">
      <div className="pointer-events-none absolute left-1/2 z-10 w-full -translate-x-1/2 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 480"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#020B18"
          />
        </svg>
      </div>

      <div className="relative z-20 overflow-x-hidden font-sans text-white">
        <div className="bg-[#020B18] pb-40">
          <section className="site-shell pb-24 pt-20 text-center">
            <h2 className="motion-fade-up title-balanced mb-8 text-[40px] font-regular md:text-[56px]">
              Why MACH1
            </h2>
            <p className="motion-fade-up motion-delay-1 copy-balanced mx-auto max-w-4xl text-[18px] text-white md:text-[20px]">
              Airports accumulate disconnected systems that slow operations and strain staff. MACH1 unifies everything into one AI-driven platform with the calm, clarity, and operational depth modern teams actually need.
            </p>
          </section>

          <div className="hidden lg:block">
            <div className="site-shell overflow-visible">
              <img
                src="/assets/home/session7/Subtract.png"
                className="relative w-full max-w-none translate-x-[18.2%] object-contain"
                alt="Mask"
              />
            </div>
          </div>

          <section className="site-shell">
            <div className="mb-16 text-center">
              <span className="motion-fade-up inline-block rounded-full border border-[#A4A1A1] bg-[#F4F9EC1A] px-6 py-2">
                <span className="text-[14px] font-regular">Recent Blogs</span>
              </span>

              <h1 className="motion-fade-up motion-delay-1 title-balanced mt-6 text-[40px] font-regular md:text-[56px]">
                Get More{" "}
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="motion-fade-up motion-delay-2 copy-balanced mt-4 text-[16px] text-white/80">
                Thoughtful writing on the future of airport operations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {posts.map((post, idx) => (
                <article
                  key={post.slug}
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
                    <div className="flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.24em] text-white/42">
                      <span>{post.tags[0] || "Journal"}</span>
                      <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="mt-4 text-[24px] font-regular leading-[1.18] text-white lg:text-[28px]">
                      {post.title}
                    </h3>
                    <p className="copy-balanced mt-3 line-clamp-3 text-[16px] text-white/70">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
