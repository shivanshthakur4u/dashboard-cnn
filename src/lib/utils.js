import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const NameInitial = (name) => {
  const NameArray = name.split(" ");
  if (NameArray.length >= 2) {
    const MergedInitial = `${NameArray[0][0]}${NameArray[1][0]}`.toUpperCase();
    return MergedInitial;
  }
  return NameArray[0][0].toUpperCase();
}
