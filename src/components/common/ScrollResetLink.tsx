import type { MouseEvent, ReactNode } from "react";
import { Link, type LinkProps, useLocation } from "react-router-dom";
import { scrollToPageTop } from "@/lib/scrollToPageTop";

type ScrollResetLinkProps = LinkProps & {
  children: ReactNode;
};

export default function ScrollResetLink({
  children,
  onClick,
  to,
  ...props
}: ScrollResetLinkProps) {
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (typeof to === "string") {
      const [pathname = "", hash = ""] = to.split("#");
      const samePath = pathname === location.pathname;
      const sameHash = `${hash ? `#${hash}` : ""}` === location.hash;

      if (samePath && sameHash) {
        scrollToPageTop();
        window.requestAnimationFrame(() => {
          scrollToPageTop();
        });
      }
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
