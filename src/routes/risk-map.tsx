import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin } from "lucide-react";
import {
  ActionLink,
  BackToDashboard,
  Card,
  DemoBadge,
  Notice,
  Page,
  PageHeader,
  RiskPill,
  type Risk,
} from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/risk-map")({
  head: () => ({
    meta: [
      { title: "Wildlife Risk Map — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Simplified prototype risk visualization of sample gaur activity zones around Ooty. Not a real-time map.",
      },
      { property: "og:title", content: "Wildlife Risk Map — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Prototype visualization of sample wildlife risk zones. Demo data only.",
      },
    ],
  }),
  component: RiskMap,
});

type Zone = {
  id: string;
  name: string;
  risk: Risk;
  sightings: number;
  detail: string;
  x: number;
  y: number;
};

const zones: Zone[] = [
  {
    id: "forest-edge",
    name: "Forest Edge",
    risk: "high",
    sightings: 6,
    detail:
      "Boundary between forest cover and human-use land. Sample data shows frequent early-morning and evening gaur movement here.",
    x: 26,
    y: 30,
  },
  {
    id: "tourist-area",
    name: "Tourist Area",
    risk: "medium",
    sightings: 3,
    detail:
      "Popular viewpoint and garden area. Crowds and parked vehicles can block animal movement paths in sample scenarios.",
    x: 66,
    y: 26,
  },
  {
    id: "residential-area",
    name: "Residential Area",
    risk: "low",
    sightings: 1,
    detail:
      "Settlement zone with occasional sightings near boundary walls and estate paths in sample data.",
    x: 34,
    y: 70,
  },
  {
    id: "roadside-zone",
    name: "Roadside Zone",
    risk: "medium",
    sightings: 2,
    detail:
      "Hill road stretch where sample reports describe animals crossing or standing near the carriageway.",
    x: 74,
    y: 66,
  },
];

const riskDot: Record<Risk, string> = {
  high: "bg-risk-high",
  medium: "bg-risk-medium",
  low: "bg-risk-low",
};

function RiskMap() {
  const [selectedId, setSelectedId] = useState("forest-edge");
  const selected: Zone = zones.find((z) => z.id === selectedId) ?? zones[0]!;

  return (
    <Page>
      <PageHeader
        title="Wildlife Risk Map"
        subtitle="Prototype visualization using sample data."
        badge="DEMO RISK MAP — NOT REAL-TIME"
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Card className="min-w-0 p-4 sm:p-5">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <h2 className="min-w-0 truncate text-lg font-bold">Ooty region — simplified view</h2>
            <DemoBadge label="NOT REAL-TIME" className="shrink-0" />
          </div>

          <div className="relative mt-4 aspect-4/3 w-full overflow-hidden rounded-2xl border border-border bg-primary-soft/50">
            {/* Decorative simplified terrain */}
            <div className="absolute inset-0 opacity-70">
              <div className="absolute -top-10 -left-10 h-56 w-72 rounded-full bg-risk-low/15" />
              <div className="absolute top-1/3 right-0 h-64 w-64 rounded-full bg-accent/40" />
              <div className="absolute bottom-0 left-1/4 h-40 w-80 rounded-full bg-muted" />
              <div className="absolute top-1/2 left-0 h-1.5 w-full -rotate-6 rounded-full bg-border" />
              <div className="absolute top-1/4 left-0 h-1 w-full rotate-12 rounded-full bg-border/70" />
            </div>

            {zones.map((z) => (
              <button
                key={z.id}
                type="button"
                onClick={() => setSelectedId(z.id)}
                aria-pressed={z.id === selectedId}
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-card/95 px-2.5 py-1.5 text-[11px] font-bold shadow-card transition-transform hover:scale-105 sm:px-3 sm:text-xs",
                  z.id === selectedId ? "border-primary ring-2 ring-primary/30" : "border-border",
                )}
              >
                <span className="flex items-center gap-1.5">
                  <span className={cn("h-2 w-2 shrink-0 rounded-full", riskDot[z.risk])} />
                  {z.name}
                </span>
              </button>
            ))}
          </div>

          <ul className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-risk-low" /> LOW RISK
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-risk-medium" /> MEDIUM RISK
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-risk-high" /> HIGH RISK
            </li>
          </ul>
        </Card>

        <div className="min-w-0 space-y-4">
          <Card>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="mt-3 text-lg font-bold">{selected.name}</h2>
            <div className="mt-2">
              <RiskPill risk={selected.risk} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{selected.detail}</p>
            <p className="mt-3 text-sm font-semibold">
              Recent sightings (sample): {selected.sightings}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionLink to="/safety-guidelines" variant="soft" className="px-4 py-2 text-[13px]">
                Safety Guidelines
              </ActionLink>
              <ActionLink to="/report" variant="outline" className="px-4 py-2 text-[13px]">
                Report Sighting
              </ActionLink>
            </div>
          </Card>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold">Sample Risk Areas</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {zones.map((z) => (
          <button
            key={z.id}
            type="button"
            onClick={() => setSelectedId(z.id)}
            className={cn(
              "rounded-2xl border bg-card p-5 text-left shadow-card transition-colors hover:bg-secondary",
              z.id === selectedId ? "border-primary" : "border-border",
            )}
          >
            <RiskPill risk={z.risk} />
            <h3 className="mt-2 text-base font-bold">{z.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Recent sightings: {z.sightings}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Notice>
          DEMO RISK MAP — NOT REAL-TIME. This is a simplified illustration, not a live map service,
          and it does not use GPS or forest department data.
        </Notice>
      </div>

      <BackToDashboard />
    </Page>
  );
}
