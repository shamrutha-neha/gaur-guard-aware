import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bot, ShieldCheck } from "lucide-react";
import {
  BackToDashboard,
  Card,
  DemoBadge,
  Notice,
  Page,
  PageHeader,
  buttonStyles,
} from "@/components/site/ui";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "AI Safety Assistant — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Prototype safety assistant with predefined guidance for wild gaur encounters. Demo responses only.",
      },
      { property: "og:title", content: "AI Safety Assistant — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Get quick prototype safety guidance for wildlife encounters.",
      },
    ],
  }),
  component: Assistant,
});

const qa: { q: string; a: string }[] = [
  {
    q: "What should I do if I see a wild gaur?",
    a: "Stay calm and maintain a safe distance. Do not approach, feed, chase or provoke the animal. Avoid blocking its path and move away calmly. Follow local wildlife authorities’ instructions when available.",
  },
  {
    q: "How can I stay safe near forest edges?",
    a: "Avoid walking alone along forest boundaries at dawn, dusk or night. Stay on open paths, keep noise low, carry a torch after dark and watch for fresh signs of animal movement. Keep children and pets close to you.",
  },
  {
    q: "What should I do if a gaur is blocking the road?",
    a: "Stop at a safe distance and stay inside your vehicle. Switch off the headlights on full beam, avoid repeated honking, and do not try to drive past closely. Wait patiently until the animal moves away, then pass slowly.",
  },
  {
    q: "How do I report a sighting?",
    a: "Open the Report a Sighting page in this prototype and fill in the location, date, time, animal and risk level, with an optional description. In a real situation, always inform local forest or wildlife authorities through official channels.",
  },
];

type Msg = { role: "user" | "bot"; text: string };

const greeting: Msg = {
  role: "bot",
  text: "Hello! I am the GAURGUARD AI Safety Assistant (prototype). Pick one of the suggested questions below and I will share the matching safety guidance.",
};

function Assistant() {
  const [messages, setMessages] = useState<Msg[]>([greeting]);

  function ask(item: { q: string; a: string }) {
    setMessages((prev) => [...prev, { role: "user", text: item.q }, { role: "bot", text: item.a }]);
  }

  return (
    <Page>
      <PageHeader
        title="GAURGUARD AI Safety Assistant"
        subtitle="Get quick safety guidance for wildlife encounters."
        badge="AI SAFETY ASSISTANT · PROTOTYPE DEMO"
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Card className="min-w-0 p-0">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold">Safety Assistant</span>
                <span className="block text-[11px] text-muted-foreground">
                  Predefined demo responses
                </span>
              </span>
            </div>
            <DemoBadge label="PROTOTYPE DEMO" className="shrink-0" />
          </div>

          <div className="space-y-3 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                      : "max-w-[90%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm text-foreground"
                  }
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Suggested questions
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {qa.map((item) => (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => ask(item)}
                  className="rounded-full border border-border bg-card px-3.5 py-2 text-left text-[13px] font-semibold transition-colors hover:bg-secondary"
                >
                  {item.q}
                </button>
              ))}
            </div>
            <button
              type="button"
              className={`${buttonStyles.soft} mt-4 px-4 py-2 text-[13px]`}
              onClick={() => setMessages([greeting])}
            >
              Reset conversation
            </button>
          </div>
        </Card>

        <div className="min-w-0 space-y-4">
          <Card>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="mt-3 text-lg font-bold">How this assistant works</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This prototype uses a small set of predefined safety responses written for the project.
              It does not call any AI service, does not use API keys and does not learn from your
              input.
            </p>
          </Card>
          <Notice>
            In a real emergency, prioritise personal safety and follow instructions from local
            authorities.
          </Notice>
        </div>
      </div>

      <BackToDashboard />
    </Page>
  );
}
