import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Объединяет классы, разрешая конфликты Tailwind в пользу последних

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
