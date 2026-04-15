export function scrollToPageTop() {
  const previousInlineBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousInlineBehavior;
  });
}
