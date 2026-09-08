import { createFileRoute } from "@tanstack/react-router";
import { Eye, Brain, BellRing, ShieldCheck } from "lucide-react";
import { ActionLink, BackToDashboard, Card, Notice, Page, PageHeader } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GAURGUARD AI — Academic Prototype" },
      {
        name: "description",
        content:
          "GAURGUARD AI is an academic prototype for Project Better Tomorrow exploring AI-assisted human–wildlife safety around Ooty.",
      },
      { property: "og:title", content: "About GAURGUARD AI — Academic Prototype" },
      {
        property: "og:description",
        content: "Detect. Analyse. Alert. Protect. Built as an academic prototype.",
      },
    ],
  }),
  component: About,
});

const concept = [
  { icon: Eye, title: "DETECT", body: "Capture wildlife observations from community and sample observation data." },
  { icon: Brain, title: "ANALYSE", body: "Interpret location, time and frequency to estimate a risk level." },
  { icon: BellRing, title: "ALERT", body: "Surface clear, timely alerts for areas showing higher activity." },
  { icon: ShieldCheck, title: "PROTECT", body: "Share practical safety guidance for safer encounters." },
];

function About() {
  return (
    <Page>
      <PageHeader
        title="About GAURGUARD AI"
        subtitle="AI-Powered Human–Wildlife Safety & Monitoring — an academic prototype."
        badge="ACADEMIC PROTOTYPE"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold">The problem</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Human–wildlife encounters can create safety risks for both communities and wildlife.
            Around Ooty, Tamil Nadu, wild gaur frequently move between forest cover and human-use
            areas such as roads, tea estates, tourist spots and settlements.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-bold">The solution</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            GAURGUARD AI demonstrates how AI-assisted observation, risk awareness, community
            reporting and safety guidance could work together in one simple interface.
          </p>
        </Card>
      </div>

      <h2 className="mt-10 text-xl font-bold">Core concept</h2>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {concept.map((c) => (
          <Card key={c.title}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold tracking-wide">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="text-lg font-bold">Project details</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Project type
            </dt>
            <dd className="mt-1 text-sm font-semibold">
              Project Better Tomorrow / CoE Growth C29
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Pathway
            </dt>
            <dd className="mt-1 text-sm font-semibold">Pathway A — Continuation Track</dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Stage
            </dt>
            <dd className="mt-1 text-sm font-semibold">
              Project Review 1 — approximately 35% completion
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Focus area
            </dt>
            <dd className="mt-1 text-sm font-semibold">
              Wild gaur safety in and around Ooty, Tamil Nadu
            </dd>
          </div>
        </dl>
        <p className="mt-5 text-sm font-semibold text-primary">
          Built as an academic prototype for Project Better Tomorrow.
        </p>
      </Card>

      <div className="mt-8">
        <Notice>
          This prototype is not a production system. It is not connected to live cameras, real-time
          GPS, forest department databases, government APIs or any real detection system. All data
          shown is realistic sample data created for demonstration.
        </Notice>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <ActionLink to="/dashboard">Explore Dashboard</ActionLink>
        <ActionLink to="/safety-guidelines" variant="outline">
          Safety Guidelines
        </ActionLink>
      </div>

      <BackToDashboard />
    </Page>
  );
}
