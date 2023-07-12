export function DisableScroll(element: HTMLElement, disabled: Boolean) {
  if (!element) {
    return;
  }

  element.style.overflowY = disabled ? "hidden" : "scroll";

  return () => {
    element.style.overflowY = "scroll";
  };
}
