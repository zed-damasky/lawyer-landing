import type { SocialIconProps } from "@/types/socialIcon";
import { cn } from "@/utils/cn";

export function SocialIcon({ renderIcon, className }: SocialIconProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-8 h-8 rounded-full text-white hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200",
        className,
      )}
    >
      {renderIcon({ className: "w-5 h-5", fill: "currentColor" })}
    </span>
  );
}
