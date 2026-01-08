export function scrollToId(sectionId: string, extraOffset = 0) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const header = document.querySelector("header") as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;

  const y =
    el.getBoundingClientRect().top + window.scrollY - headerHeight + extraOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
