import { createFileRoute } from "@tanstack/react-router";
import {
  Ruler,
  Ban,
  HandHeart,
  Route as RouteIcon,
  Footprints,
  Megaphone,
  AlertTriangle,
} from "lucide-react";
import { ActionLink, BackToDashboard, Card, Page, PageHeader } from "@/components/site/ui";

export const Route = createFileRoute("/safety-guidelines")({
  head: () => ({
    meta: [
      { title: "Wild Gaur Safety Guidelines — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Six clear safety guidelines for wild gaur encounters: keep distance, do not approach, move away calmly and report responsibly.",
      },
      { property: "og:title", content: "Wild Gaur Safety Guidelines — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Practical safety guidance for staying safe around wild gaur.",
      },
    ],
  }),
  component: Guidelines,
});

const rules = [
  {
    icon: Ruler,
    title: "MAINTAIN DISTANCE",
    body: "Keep a safe distance from the animal.",
  },
  {
    icon: Ban,
    title: "DO NOT APPROACH",
    body: "Never move closer for photographs or videos.",
  },
  {
    icon: HandHeart,
    title: "DO NOT FEED OR PROVOKE",
    body: "Avoid feeding, shouting at or disturbing wildlife.",
  },
  {
    icon: RouteIcon,
    title: "DO NOT BLOCK ITS PATH",
    body: "Give the animal enough space to move away.",
  },
  {
    icon: Footprints,
    title: "MOVE AWAY CALMLY",
    body: "Avoid sudden movements and move to a safe location.",
  },
  {
    icon: Megaphone,
    title: "REPORT RESPONSIBLY",
    body: "Use appropriate wildlife/community reporting channels.",
  },
];

function Guidelines() {
  return (
    <Page>
      <PageHeader
        title="Wild Gaur Safety Guidelines"
        subtitle="General safety practices presented as part of this academic prototype."
        badge="ACADEMIC PROTOTYPE"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rules.map((r, i) => (
          <Card key={r.title}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <r.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-bold text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            <h2 className="mt-4 font-display text-base font-bold tracking-wide">{r.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-risk-high/30 bg-risk-high-soft/50">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-risk-high/10 text-risk-high">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 className="text-base font-bold">Important notice</h2>
            <p className="mt-1 text-sm">
              If a wild animal is nearby, prioritize personal safety and follow instructions from
              local authorities.
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-6 flex flex-wrap gap-3">
        <ActionLink to="/assistant">Ask the Safety Assistant</ActionLink>
        <ActionLink to="/report" variant="outline">
          Report a Sighting
        </ActionLink>
      </div>

      <BackToDashboard />
    </Page>
  );
}
