import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  ActionLink,
  BackToDashboard,
  Card,
  Notice,
  Page,
  PageHeader,
  buttonStyles,
} from "@/components/site/ui";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Report a Wildlife Sighting — GAURGUARD AI" },
      {
        name: "description",
        content:
          "Prototype form for reporting a wild gaur sighting. Demonstration only — no report is transmitted or stored.",
      },
      { property: "og:title", content: "Report a Wildlife Sighting — GAURGUARD AI" },
      {
        property: "og:description",
        content: "Help improve community awareness by reporting wildlife observations (demo form).",
      },
    ],
  }),
  component: ReportPage,
});

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

const emptyForm = {
  location: "",
  date: "",
  time: "",
  animal: "Wild Gaur",
  risk: "Medium",
  description: "",
};

function ReportPage() {
  const [form, setForm] = useState(emptyForm);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Page>
        <PageHeader
          title="Report a Wildlife Sighting"
          subtitle="Help improve community awareness by reporting wildlife observations."
        />
        <Card className="max-w-2xl border-primary/30 bg-primary-soft/50 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <h2 className="mt-4 text-2xl font-bold">✓ Report Submitted Successfully</h2>
          <p className="mt-2 text-sm text-secondary-foreground">
            Thank you for contributing to wildlife awareness.
          </p>

          <dl className="mx-auto mt-6 grid max-w-md gap-2 rounded-xl border border-border bg-card p-4 text-left text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-muted-foreground">Location</dt>
              <dd className="min-w-0 truncate font-semibold">{form.location || "Not specified"}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted-foreground">Date &amp; Time</dt>
              <dd className="font-semibold">
                {form.date || "—"} {form.time}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted-foreground">Animal</dt>
              <dd className="font-semibold">{form.animal}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted-foreground">Risk level</dt>
              <dd className="font-semibold">{form.risk}</dd>
            </div>
            {fileName ? (
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Attachment</dt>
                <dd className="min-w-0 truncate font-semibold">{fileName}</dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className={buttonStyles.primary}
              onClick={() => {
                setForm(emptyForm);
                setFileName("");
                setSubmitted(false);
              }}
            >
              Submit Another Report
            </button>
            <ActionLink to="/dashboard" variant="outline">
              Back to Dashboard
            </ActionLink>
          </div>
        </Card>

        <div className="mt-8 max-w-2xl">
          <Notice>Prototype demonstration — no real report is transmitted.</Notice>
        </div>
        <BackToDashboard />
      </Page>
    );
  }

  return (
    <Page>
      <PageHeader
        title="Report a Wildlife Sighting"
        subtitle="Help improve community awareness by reporting wildlife observations."
      />

      <Card className="max-w-3xl">
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="min-w-0 text-sm font-semibold">
              Location
              <input
                required
                type="text"
                placeholder="e.g. Ooty – Forest edge near tea estate"
                className={fieldClass}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </label>
            <label className="min-w-0 text-sm font-semibold">
              Animal
              <select
                className={fieldClass}
                value={form.animal}
                onChange={(e) => setForm({ ...form, animal: e.target.value })}
              >
                <option>Wild Gaur</option>
              </select>
            </label>
            <label className="min-w-0 text-sm font-semibold">
              Date
              <input
                required
                type="date"
                className={fieldClass}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </label>
            <label className="min-w-0 text-sm font-semibold">
              Time
              <input
                required
                type="time"
                className={fieldClass}
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              />
            </label>
            <label className="min-w-0 text-sm font-semibold sm:col-span-2">
              Risk Level
              <select
                className={fieldClass}
                value={form.risk}
                onChange={(e) => setForm({ ...form, risk: e.target.value })}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>
          </div>

          <label className="text-sm font-semibold">
            Description
            <textarea
              rows={4}
              placeholder="What did you observe? Include distance, direction of movement and surroundings."
              className={fieldClass}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </label>

          <label className="text-sm font-semibold">
            Photo / Video Upload (optional)
            <input
              type="file"
              accept="image/*,video/*"
              className={fieldClass}
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            />
            <span className="mt-1.5 block text-xs font-normal text-muted-foreground">
              Files are not uploaded or stored — this field is for demonstration only.
            </span>
          </label>

          <div className="flex flex-wrap gap-3">
            <button type="submit" className={buttonStyles.primary}>
              Submit Report
            </button>
            <button
              type="button"
              className={buttonStyles.outline}
              onClick={() => {
                setForm(emptyForm);
                setFileName("");
              }}
            >
              Clear Form
            </button>
          </div>
        </form>
      </Card>

      <div className="mt-8 max-w-3xl">
        <Notice>
          Prototype demonstration — no real report is transmitted, and no data is stored or shared.
        </Notice>
      </div>

      <BackToDashboard />
    </Page>
  );
}
