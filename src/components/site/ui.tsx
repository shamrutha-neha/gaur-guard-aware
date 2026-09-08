import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export type Risk = "high" | "medium" | "low";

export function DemoBadge({ label = "DEMO DATA", className }: { label?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-bold tracking-wider text-secondary-foreground uppercase",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/70" />
      {label}
    </span>
  );
}

export function RiskPill({ risk, className }: { risk: Risk; className?: string }) {
  const map: Record<Risk, string> = {
    high: "bg-risk-high-soft text-risk-high border-risk-high/25",
    medium: "bg-risk-medium-soft text-risk-medium border-risk-medium/25",
    low: "bg-risk-low-soft text-risk-low border-risk-low/25",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase",
        map[risk],
        className,
      )}
    >
      {risk} risk
    </span>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60";

export const buttonStyles = {
  primary: cn(buttonBase, "bg-primary text-primary-foreground hover:bg-primary/90"),
  outline: cn(buttonBase, "border border-border bg-card text-foreground hover:bg-secondary"),
  soft: cn(buttonBase, "bg-primary-soft text-primary hover:bg-primary-soft/70"),
};

export function ActionLink({
  to,
  variant = "primary",
  className,
  children,
}: {
  to: string;
  variant?: keyof typeof buttonStyles;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(buttonStyles[variant], className)}>
      {children}
    </Link>
  );
}

export function PageHeader({
  title,
  subtitle,
  badge = "ACADEMIC PROTOTYPE · DEMO DATA",
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <header className="mb-8">
      <DemoBadge label={badge} />
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p> : null}
    </header>
  );
}

export function BackToDashboard() {
  return (
    <div className="mt-12 border-t border-border pt-6">
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" />
        Back to Dashboard
      </Link>
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-dashed border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
      {children}
    </p>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">{children}</div>;
}
