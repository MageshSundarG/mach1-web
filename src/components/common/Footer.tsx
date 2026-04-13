import ScrollResetLink from "./ScrollResetLink";

const SocialIcon = ({ d }: { d: string }) => (
  <svg
    className="elegant-transition h-5 w-5 fill-current text-white/82 hover:text-white"
    viewBox="0 0 24 24"
  >
    <path d={d} />
  </svg>
);

const footerColumns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Packages", href: "/packages" },
      { label: "Solutions", href: "/solutions" },
      { label: "Consultant", href: "/consultant" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = ({ variant: _variant }: { variant?: string }) => {
  return (
    <div data-header-tone="dark" className="bg-[#020817]">
      <footer className="relative">
        <div className="pointer-events-none absolute left-1/2 z-0 w-full -translate-x-1/2 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1440 180"
            fill="none"
          >
            <path
              d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
              fill="#020817"
            />
          </svg>
        </div>

        <div className="relative z-10 overflow-hidden bg-[#020817] pb-12 pt-20 text-white">
          <div className="site-shell">
            <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div className="grid gap-12 md:grid-cols-3">
                <div className="motion-fade-up">
                  <img
                    src="/assets/logo.png"
                    alt="Mach1 logo"
                    className="h-10 w-24 object-contain"
                  />
                  <p className="copy-balanced mt-5 max-w-xs text-[15px] text-white/65">
                    MACH1 brings airport operations, safety intelligence, and real-time visibility into one calm, modern operating layer.
                  </p>
                  <div className="mt-6 flex gap-4 text-gray-500">
                    <SocialIcon d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    <SocialIcon d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    <SocialIcon d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    <SocialIcon d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </div>
                </div>

                {footerColumns.map((column, index) => (
                  <div
                    key={column.title}
                    className={`motion-fade-up ${index === 0 ? "motion-delay-1" : "motion-delay-2"}`}
                  >
                    <h3 className="text-[20px] font-semibold tracking-tight text-white">
                      {column.title}
                    </h3>
                    <ul className="mt-6 space-y-3.5 text-[15px] text-white/72">
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <ScrollResetLink
                            to={link.href}
                            className="elegant-transition inline-flex hover:text-white"
                          >
                            {link.label}
                          </ScrollResetLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="motion-fade-up motion-delay-3 hidden lg:flex lg:justify-end">
                <div className="glass-panel w-full max-w-[32rem] rounded-[32px] p-6">
                  <img
                    src="/assets/footer/Group 399.png"
                    alt="Global aviation network illustration"
                    className="motion-float w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
