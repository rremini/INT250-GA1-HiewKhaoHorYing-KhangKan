import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classList) {
  return clsx(twMerge(...classList));
}
