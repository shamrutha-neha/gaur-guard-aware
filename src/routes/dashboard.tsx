import { createFileRoute } from "@tanstack/react-router";
import { Bell, Map, FilePlus2, MessageSquare, ArrowRight } from "lucide-react";
import { ActionLink, Card, Notice, Page, PageHeader, RiskPill } from "@/components/site/ui";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Wildlife Safety Dashboard — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Prototype dashboard showing sample wildlife alerts, sighting counts and risk zones around Ooty.",
      },
      { property: "og:title", content: "Wildlife Safety Dashboard — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Monitor sample wildlife activity and safety information in the GAURGUARD AI prototype.",
      },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Active Alerts", value: "2" },
  { label: "Gaur Sightings", value: "18" },
  { label: "High-Risk Zones", value: "4" },
  { label: "Community Reports", value: "42" },
];

const alerts = [
  {
    risk: "high" as const,
    title: "Wild Gaur Detected",
    place: "Ooty – Forest Edge Area",
    time: "10:42 AM",
  },
  {
    risk: "medium" as const,
    title: "Gaur Sighting Reported",
    place: "Roadside Zone",
    time: "09:15 AM",
  },
];

const actions = [
  { to: "/alerts", label: "View Live Alerts", icon: Bell },
  { to: "/risk-map", label: "Open Risk Map", icon: Map },
  { to: "/report", label: "Report Sighting", icon: FilePlus2 },
  { to: "/assistant", label: "Safety Assistant", icon: MessageSquare },
];

const flow = ["OBSERVE", "DETECT", "ANALYSE RISK", "ALERT", "PROTECT"];

function Dashboard() {
  return (
    <Page>
      <PageHeader
        title="Wildlife Safety Dashboard"
        subtitle="Monitor wildlife activity and safety information."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {s.label}
            </p>
            <p className="mt-2 font-display text-3xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Sample value</p>
          </Card>
        ))}
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <h2 className="text-xl font-bold">Recent Wildlife Alerts</h2>
          <div className="mt-4 space-y-4">
            {alerts.map((a) => (
              <Card key={a.title}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <RiskPill risk={a.risk} />
                    <h3 className="mt-2 truncate text-lg font-bold">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">{a.place}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                    {a.time}
                  </span>
                </div>
                <div className="mt-4">
                  <ActionLink to="/alerts" variant="soft" className="px-4 py-2 text-[13px]">
                    Open alert details <ArrowRight className="h-4 w-4" />
                  </ActionLink>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold">Quick Actions</h2>
          <div className="mt-4 grid gap-3">
            {actions.map((a) => (
              <ActionLink
                key={a.to}
                to={a.to}
                variant="outline"
                className="w-full justify-start rounded-2xl px-4 py-3.5"
              >
                <a.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 truncate">{a.label}</span>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
              </ActionLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">How GAURGUARD AI Works</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {flow.map((step, i) => (
            <li
              key={step}
              className="rounded-2xl border border-border bg-card p-4 text-center shadow-card"
            >
              <span className="font-display text-xs font-bold text-muted-foreground">
                STEP {i + 1}
              </span>
              <p className="mt-1 font-display text-sm font-bold tracking-wide text-primary">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-8">
        <Notice>
          Prototype demonstration — all dashboard figures and alerts are simulated sample data, not
          real-time information.
        </Notice>
      </div>
    </Page>
  );
}
