import { XS } from "@assets/constant/number";
import { MOBILE, DESKTOP } from "@assets/constant/string";

export function getGlobalState() {
  const rect = document.body.getBoundingClientRect();

  const device =
    /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ||
    rect.width <= XS
      ? MOBILE
      : DESKTOP;
  const collapsed = device !== DESKTOP;
  return { device, collapsed } as const;
}
