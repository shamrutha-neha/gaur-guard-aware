import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Gauge, ShieldAlert } from "lucide-react";
import {
  ActionLink,
  BackToDashboard,
  Card,
  Notice,
  Page,
  PageHeader,
  RiskPill,
} from "@/components/site/ui";

export const Route = createFileRoute("/alerts")({
  head: () => ({
    meta: [
      { title: "Wildlife Alerts — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Sample wild gaur alert cards with simulated detection confidence and safety recommendations.",
      },
      { property: "og:title", content: "Wildlife Alerts — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Prototype wildlife alert feed with simulated detection information.",
      },
    ],
  }),
  component: Alerts,
});

const secondary = [
  {
    risk: "medium" as const,
    title: "Gaur Sighting Reported",
    location: "Roadside Zone — Ooty–Coonoor route",
    confidence: "78%",
    time: "09:15 AM",
    status: "Demo Community Report",
    advice:
      "Slow down, stay inside your vehicle and wait for the animal to move away on its own. Do not honk repeatedly.",
  },
  {
    risk: "low" as const,
    title: "Movement Near Tea Estate Boundary",
    location: "Residential Area — estate boundary path",
    confidence: "61%",
    time: "07:05 AM",
    status: "Demo Detection",
    advice:
      "Stay aware while walking near boundaries at dawn and dusk. Keep children and pets close.",
  },
];

function Alerts() {
  return (
    <Page>
      <PageHeader
        title="Wildlife Alerts"
        subtitle="Sample alerts generated for prototype demonstration."
      />

      <Card className="border-risk-high/30 bg-risk-high-soft/50">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="min-w-0">
            <RiskPill risk="high" />
            <h2 className="mt-3 text-2xl font-bold">Wild Gaur Detected</h2>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-risk-high/10 text-risk-high">
            <ShieldAlert className="h-5 w-5" />
          </span>
        </div>

        <dl className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="min-w-0">
            <dt className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              <MapPin className="h-3.5 w-3.5 shrink-0" /> Location
            </dt>
            <dd className="mt-1 text-sm font-semibold">
              Ooty – Human-use / Forest-edge area
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              <Gauge className="h-3.5 w-3.5 shrink-0" /> Detection Confidence
            </dt>
            <dd className="mt-1 text-sm font-semibold">94% (simulated)</dd>
          </div>
          <div className="min-w-0">
            <dt className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              <Clock className="h-3.5 w-3.5 shrink-0" /> Time
            </dt>
            <dd className="mt-1 text-sm font-semibold">10:42 AM</dd>
          </div>
        </dl>

        <p className="mt-4 text-xs font-bold tracking-wider text-risk-high uppercase">
          Status: Demo Detection
        </p>

        <div className="mt-5 rounded-xl border border-border bg-card p-4">
          <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
            Safety recommendation
          </p>
          <p className="mt-2 text-sm">
            Maintain a safe distance. Do not approach, chase, feed or provoke the animal. Avoid
            blocking its path and move away calmly.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <ActionLink to="/risk-map">View Location</ActionLink>
          <ActionLink to="/safety-guidelines" variant="outline">
            Safety Guidelines
          </ActionLink>
        </div>
      </Card>

      <h2 className="mt-10 text-xl font-bold">Other Sample Alerts</h2>
      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        {secondary.map((a) => (
          <Card key={a.title}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <RiskPill risk={a.risk} />
                <h3 className="mt-2 text-lg font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.location}</p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-muted-foreground">{a.time}</span>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              <li>Detection confidence: {a.confidence} (simulated)</li>
              <li>Status: {a.status}</li>
            </ul>
            <p className="mt-3 rounded-xl bg-muted p-3 text-sm">{a.advice}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionLink to="/risk-map" variant="soft" className="px-4 py-2 text-[13px]">
                View Location
              </ActionLink>
              <ActionLink to="/safety-guidelines" variant="outline" className="px-4 py-2 text-[13px]">
                Safety Guidelines
              </ActionLink>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Notice>Prototype demonstration — detection information is simulated.</Notice>
      </div>

      <BackToDashboard />
    </Page>
  );
}
