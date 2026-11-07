import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "link";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-8 py-4 text-sm font-medium tracking-wide text-obsidian transition-colors duration-300 ease-luxury hover:bg-ivory",
  outline:
    "inline-flex items-center justify-center border border-champagne/40 px-4 py-2 text-xs uppercase tracking-[0.15em] text-champagne transition-all duration-300 ease-luxury hover:border-champagne hover:bg-champagne hover:text-obsidian",
  link:
    "group inline-flex items-center gap-2 py-2 text-sm tracking-wide text-ivory underline decoration-champagne/40 decoration-1 underline-offset-[10px] transition-colors duration-300 ease-luxury hover:text-champagne hover:decoration-champagne",
};

export function Button({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  target,
  rel,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      {...rest}
      target={external ? "_blank" : target}
      rel={external || target === "_blank" ? `noopener noreferrer ${rel ?? ""}`.trim() : rel}
      className={["font-sans motion-reduce:transition-none", variantClasses[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </a>
  );
}
