import { createFileRoute } from "@tanstack/react-router";
import {
  BackToDashboard,
  Card,
  Notice,
  Page,
  PageHeader,
  RiskPill,
  type Risk,
} from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Wildlife Insights — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Sample analytics for the GAURGUARD AI prototype: sightings by risk level and time of day. Demo data only.",
      },
      { property: "og:title", content: "Wildlife Insights — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Sample analytics for prototype demonstration — not actual Ooty statistics.",
      },
    ],
  }),
  component: Insights;
});

const totals = [
  { label: "Total Sightings", value: 42, tone: "text-primary" },
  { label: "High Risk", value: 12, tone: "text-risk-high" },
  { label: "Medium Risk", value: 18, tone: "text-risk-medium" },
  { label: "Low Risk", value: 12, tone: "text-risk-low" },
];

const byRisk = [
  { label: "High", value: 12, bar: "bg-risk-high" },
  { label: "Medium", value: 18, bar: "bg-risk-medium" },
  { label: "Low", value: 12, bar: "bg-risk-low" },
];

const byTime = [
  { label: "Early morning", value: 14 },
  { label: "Midday", value: 6 },
  { label: "Evening", value: 15 },
  { label: "Night", value: 7 },
];

const reports: { place: string; risk: Risk; when: string }[] = [
  { place: "Forest Edge Area", risk: "high", when: "Today · 10:42 AM" },
  { place: "Roadside Zone", risk: "medium", when: "Today · 09:15 AM" },
  { place: "Tourist Area", risk: "medium", when: "Yesterday · 05:40 PM" },
  { place: "Residential Area", risk: "low", when: "Yesterday · 07:05 AM" },
  { place: "Forest Edge Area", risk: "high", when: "2 days ago · 06:20 PM" },
];

const maxTime = Math.max(...byTime.map((t) => t.value));

function Insights() {
  return (
    <Page>
      <PageHeader
        title="Wildlife Insights"
        subtitle="Sample analytics for prototype demonstration."
        badge="DEMO ANALYTICS — SAMPLE DATA"
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {totals.map((t) => (
          <Card key={t.label}>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {t.label}
            </p>
            <p className={cn("mt-2 font-display text-3xl font-bold", t.tone)}>{t.value}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Sample value</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="min-w-0">
          <h2 className="text-lg font-bold">Sightings by Risk Level</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sample distribution of 42 reports.</p>
          <ul className="mt-5 space-y-4">
            {byRisk.map((r) => (
              <li key={r.label}>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>{r.label}</span>
                  <span className="text-muted-foreground">{r.value}</span>
                </div>
                <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full", r.bar)}
                    style={{ width: `${(r.value / 42) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="min-w-0">
          <h2 className="text-lg font-bold">Sightings by Time of Day</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sample pattern across the day.</p>
          <div className="mt-6 grid grid-cols-4 items-end gap-3" style={{ height: "180px" }}>
            {byTime.map((t) => (
              <div key={t.label} className="flex h-full min-w-0 flex-col justify-end text-center">
                <span className="text-xs font-bold text-muted-foreground">{t.value}</span>
                <div
                  className="mt-1.5 w-full rounded-t-lg bg-primary/80"
                  style={{ height: `${(t.value / maxTime) * 100}%` }}
                />
                <span className="mt-2 text-[11px] leading-tight text-muted-foreground">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-8">
        <h2 className="text-lg font-bold">Recent Wildlife Reports</h2>
        <ul className="mt-4 divide-y divide-border">
          {reports.map((r, i) => (
            <li key={i} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{r.place}</p>
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
              <RiskPill risk={r.risk} className="shrink-0" />
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-8">
        <Notice>
          DEMO ANALYTICS — SAMPLE DATA. These figures were created for the prototype demonstration
          and are not actual statistics for Ooty or any other location.
        </Notice>
      </div>

      <BackToDashboard />
    </Page>
  );
}
