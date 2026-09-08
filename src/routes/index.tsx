import { createFileRoute } from "@tanstack/react-router";
import { Camera, Map, Users } from "lucide-react";
import heroImg from "@/assets/gaur-hero.jpg";
import { ActionLink, Card, DemoBadge, Page } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAURGUARD AI — AI-Powered Human–Wildlife Safety & Monitoring" },
      {
        name: "description",
        content:
          "Academic prototype for wild gaur safety near Ooty: sighting reports, risk awareness and safety guidance. Demo data only.",
      },
      { property: "og:title", content: "GAURGUARD AI — Human–Wildlife Safety & Monitoring" },
      {
        property: "og:description",
        content:
          "Detect. Analyse. Alert. Protect. An academic prototype for safer human–wildlife coexistence.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Camera,
    title: "AI-Assisted Detection",
    body: "Identify potential wildlife presence from observation data.",
  },
  {
    icon: Map,
    title: "Risk Awareness",
    body: "Visualise potential wildlife risk zones using prototype data.",
  },
  {
    icon: Users,
    title: "Community Reporting",
    body: "Allow people to report wildlife sightings and contribute observations.",
  },
];

function Landing() {
  return (
    <>
      <Page>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <DemoBadge label="ACADEMIC PROTOTYPE · DEMO DATA" />
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">GAURGUARD AI</h1>
            <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">
              AI-Powered Human–Wildlife Safety &amp; Monitoring
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              An intelligent academic prototype designed to help communities understand wildlife
              sightings, identify potential risk zones and receive timely safety guidance during wild
              gaur encounters.
            </p>
            <p className="mt-6 font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase">
              Detect. Analyse. Alert. Protect.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink to="/dashboard">Explore Dashboard</ActionLink>
              <ActionLink to="/report" variant="outline">
                Report a Sighting
              </ActionLink>
            </div>
          </div>

          <div className="min-w-0">
            <figure className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={heroImg}
                alt="A wild Indian gaur standing at a misty forest edge in the Nilgiri hills"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
              <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">
                Illustrative image — the prototype is not connected to live cameras or real-time
                wildlife feeds.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-bold">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-10 bg-primary-soft/60">
          <p className="text-sm text-secondary-foreground">
            <strong>Academic prototype notice:</strong> GAURGUARD AI is a college project prototype
            built for Project Better Tomorrow. All alerts, statistics, detections and risk levels
            shown are realistic sample data. There is no connection to live cameras, GPS trackers,
            forest department databases or government APIs.
          </p>
        </Card>
      </Page>
    </>
  );
}
