import * as React from "react";
export function Container({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
