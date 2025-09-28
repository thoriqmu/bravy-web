"use client";

import * as React from "react";

type Props = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Dialog({ open, onOpenChange, children }: Props) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange?.(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] grid place-items-center p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onOpenChange?.(false);
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/10">
        <div className="absolute right-3 top-3">
          <button
            aria-label="Close dialog"
            onClick={() => onOpenChange?.(false)}
            className="rounded-md px-2 py-1 text-sm text-slate-700 hover:bg-black/5"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
