"use client";
import * as React from "react";
import Link from "next/link";

export type ButtonProps = React.PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  iconRight?: React.ReactNode;
}>;

export function Button({
  href,
  onClick,
  variant = "solid",
  className = "",
  iconRight,
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all";
  const style =
    variant === "solid"
      ? "bg-bravy-accent text-bravy-deep shadow-glow hover:brightness-95"
      : variant === "outline"
      ? "border border-bravy-accent text-bravy-deep hover:bg-bravy-accent/10"
      : "text-slate-700 hover:text-slate-900";

  if (href) {
    return (
      <Link href={href} className={`${base} ${style} ${className}`}>
        <span>{children}</span>
        {iconRight && <span className="-mr-1">{iconRight}</span>}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${style} ${className}`}>
      <span>{children}</span>
      {iconRight && <span className="-mr-1">{iconRight}</span>}
    </button>
  );
}
