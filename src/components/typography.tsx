import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function TypographyDisplay({ children, className }: Props) {
  return (
    <h1
      className={cn(
        className,
        "font-display scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl"
      )}
    >
      {children}
    </h1>
  );
}

export function TypographySub({ children, className }: Props) {
  return (
    <h2
      className={cn(
        className,
        "font-sub italic scroll-m-20 text-2xl font-semibold tracking-tight;"
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        className,
        "font-sub italic scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        className,
        "font-sub italic scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: Props) {
  return (
    <h3
      className={cn(
        className,
        "font-sub italic scroll-m-20 text-2xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: Props) {
  return (
    <h4
      className={cn(
        className,
        "font-sub italic scroll-m-20 text-xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: Props) {
  return (
    <p
      className={cn(
        className,
        "leading-7 font-body [&:not(:first-child)]:mt-6 max-w-[60ch]"
      )}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: Props) {
  return (
    <blockquote
      className={cn(
        className,
        "mt-6 border-l-2 font-body border-red-600 pl-6 italic"
      )}
    >
      {children}
    </blockquote>
  );
}

export function TypographyLead({ children, className }: Props) {
  return (
    <p className={cn(className, "text-xl font-body text-muted-foreground")}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: Props) {
  return (
    <div
      className={cn(className, "text-lg font-accent font-semibold uppercase")}
    >
      {children}
    </div>
  );
}

export function TypographySmall({ children, className }: Props) {
  return (
    <small
      className={cn(
        className,
        "text-sm font-accent font-medium leading-none uppercase"
      )}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: Props) {
  return (
    <p
      className={cn(
        className,
        "text-sm font-accent text-muted-foreground uppercase"
      )}
    >
      {children}
    </p>
  );
}
