import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="truncate font-display font-bold">GAURGUARD AI</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Human–Wildlife Safety &amp; Monitoring
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Smarter technology for safer human–wildlife coexistence.
          </p>
          <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
            Academic Prototype | Demo Data
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          <Link to="/dashboard" className="text-muted-foreground hover:text-primary">
            Dashboard
          </Link>
          <Link to="/alerts" className="text-muted-foreground hover:text-primary">
            Alerts
          </Link>
          <Link to="/risk-map" className="text-muted-foreground hover:text-primary">
            Risk Map
          </Link>
          <Link to="/report" className="text-muted-foreground hover:text-primary">
            Report Sighting
          </Link>
          <Link to="/assistant" className="text-muted-foreground hover:text-primary">
            Safety Assistant
          </Link>
          <Link to="/insights" className="text-muted-foreground hover:text-primary">
            Insights
          </Link>
          <Link to="/safety-guidelines" className="text-muted-foreground hover:text-primary">
            Safety Guidelines
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary">
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
