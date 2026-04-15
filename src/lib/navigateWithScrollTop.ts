import type { NavigateFunction } from "react-router-dom";
import { scrollToPageTop } from "./scrollToPageTop";

export function navigateWithScrollTop(
  navigate: NavigateFunction,
  currentPathname: string,
  targetPathname: string,
) {
  if (currentPathname === targetPathname) {
    scrollToPageTop();
    window.requestAnimationFrame(() => {
      scrollToPageTop();
    });
    return;
  }

  navigate(targetPathname);
}
