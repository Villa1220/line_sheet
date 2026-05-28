import Image from "next/image";
import { cn } from "@/components/ui";

const assets = {
  wordmark: { src: "/brand/isotipo.svg", w: 140, h: 36, alt: "AYALMA" },
  imagotipo: { src: "/brand/isotipo.svg", w: 48, h: 48, alt: "AYALMA — imagotipo" },
  isotipo: { src: "/brand/isotipo.svg", w: 40, h: 40, alt: "AYALMA — isotipo" },
  system: { src: "/brand/isotipo.svg", w: 48, h: 48, alt: "AYALMA — sistema de marca" }
} as const;

export type BrandLogoVariant = keyof typeof assets;

export function BrandLogo({
  variant = "wordmark",
  className,
  priority
}: {
  variant?: BrandLogoVariant;
  className?: string;
  priority?: boolean;
}) {
  const asset = assets[variant];

  if (variant === "wordmark" || variant === "imagotipo") {
    return (
      <span
        className={cn(
          "font-display tracking-[0.22em] text-ink inline-flex items-center gap-2",
          variant === "imagotipo" ? "text-lg" : "text-xl",
          className
        )}
        aria-label={asset.alt}
      >
        <Image
          src={asset.src}
          alt=""
          width={variant === "imagotipo" ? 32 : 28}
          height={variant === "imagotipo" ? 32 : 28}
          priority={priority}
          className="object-contain"
          aria-hidden
        />
        {variant === "wordmark" || variant === "imagotipo" ? "AYALMA" : null}
      </span>
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.w}
      height={asset.h}
      priority={priority}
      className={cn("h-auto w-auto max-h-9 object-contain", className)}
      style={{ width: "auto", height: "auto", maxHeight: 36 }}
    />
  );
}
