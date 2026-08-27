import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Footer, Header, PageChrome } from "@/components/site/chrome";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a fit call with QB Pro" },
      {
        name: "description",
        content:
          "Tell us about your product in six steps. If there is a fit, you will hear from QB Pro within two business days.",
      },
      { property: "og:title", content: "Contact — Book a fit call with QB Pro" },
      { property: "og:description", content: "Get in touch with the QB Pro studio." },
    ],
  }),
  component: ContactPage,
});

type StepKey = "full_name" | "work_email" | "company" | "need" | "budget" | "brief";

const NEEDS = [
  "New product / MVP",
  "Rebuild or harden a prototype",
  "Web app / SaaS",
  "Mobile",
  "Launch with a product behind it",
  "Not sure",
];

const BUDGETS = [
  "Under $10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000–$100,000",
  "$100,000+",
  "Not sure",
];

const STEPS: {
  key: StepKey;
  q: string;
  optional?: boolean;
  type: "text" | "email" | "choice" | "textarea";
  choices?: string[];
}[] = [
  { key: "full_name", q: "What's your name?", type: "text" },
  { key: "work_email", q: "What's your work email?", type: "email" },
  { key: "company", q: "What's your company?", type: "text", optional: true },
  { key: "need", q: "What do you need?", type: "choice", choices: NEEDS },
  { key: "budget", q: "What's your budget range?", type: "choice", choices: BUDGETS },
  { key: "brief", q: "Tell us about the project.", type: "textarea" },
];

const EMPTY: Record<StepKey, string> = {
  full_name: "",
  work_email: "",
  company: "",
  need: "",
  budget: "",
  brief: "",
};

function ContactPage() {
  const send = useServerFn(submitLead);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(EMPTY);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const current = STEPS[step]!;
  const value = values[current.key];

  const canAdvance =
    current.optional || (value.trim().length > 0 && (current.key !== "work_email" || /.+@.+\..+/.test(value)));

  async function advance(e?: FormEvent) {
    e?.preventDefault();
    if (!canAdvance || busy) return;
    setError(null);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }
    if (!consent) {
      setError("Please accept the Terms of Use and Privacy Policy to continue.");
      return;
    }
    setBusy(true);
    try {
      await send({
        data: {
          full_name: values.full_name.trim(),
          work_email: values.work_email.trim(),
          company: values.company.trim(),
          need: values.need,
          budget: values.budget,
          brief: values.brief.trim(),
          consent: true,
        },
      });
      setDone(true);
    } catch {
      setError("Something went wrong. Email info@qbprosupportservices.com and we will pick it up there.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <PageChrome title="Contact" descriptor={["Get in", "touch"]} />

        <section className="px-5 py-24 md:px-10">
          <div className="mx-auto max-w-[100rem]">
            <div className="grid gap-10 md:grid-cols-2">
              <h2 className="text-[9vw] leading-[1.05] tracking-tight md:text-[3.4rem]">
                Get in touch
              </h2>
              <p className="self-end text-lg text-muted-foreground">Book a fit call</p>
            </div>

            <div className="mt-20 max-w-4xl border-t border-hairline pt-10">
              {done ? (
                <div className="rise">
                  <p className="crumb">// received</p>
                  <p className="mt-8 text-3xl leading-snug md:text-4xl">
                    Received. If there is a fit, you will hear from us within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={advance}>
                  <div className="flex items-baseline justify-between">
                    <p className="crumb">Book a fit call</p>
                    <p className="crumb">
                      {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
                    </p>
                  </div>

                  <div key={current.key} className="rise mt-10">
                    <label
                      htmlFor={current.key}
                      className="block text-3xl leading-snug md:text-5xl"
                    >
                      {current.q}
                      {current.optional ? (
                        <span className="ml-3 align-middle text-base text-muted-foreground">
                          (optional)
                        </span>
                      ) : null}
                    </label>

                    {current.type === "choice" ? (
                      <div className="mt-10 flex flex-wrap gap-3">
                        {current.choices!.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => {
                              setValues((v) => ({ ...v, [current.key]: c }));
                              if (step < STEPS.length - 1) setTimeout(() => setStep(step + 1), 220);
                            }}
                            className={`border px-5 py-3 text-base transition-colors ${
                              value === c
                                ? "border-foreground bg-foreground text-background"
                                : "border-hairline text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    ) : current.type === "textarea" ? (
                      <textarea
                        id={current.key}
                        rows={5}
                        maxLength={4000}
                        autoFocus
                        value={value}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [current.key]: e.target.value }))
                        }
                        placeholder="What are you building, who is it for, and what is the deadline?"
                        className="mt-10 w-full resize-none border-b border-hairline bg-transparent pb-4 text-xl outline-none placeholder:text-muted-foreground focus:border-foreground"
                      />
                    ) : (
                      <input
                        id={current.key}
                        type={current.type}
                        maxLength={255}
                        autoFocus
                        value={value}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [current.key]: e.target.value }))
                        }
                        className="mt-10 w-full border-b border-hairline bg-transparent pb-4 text-2xl outline-none focus:border-foreground"
                      />
                    )}
                  </div>

                  {step === STEPS.length - 1 ? (
                    <label className="mt-10 flex max-w-2xl items-start gap-3 text-sm text-muted-foreground">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1"
                      />
                      <span>
                        I accept the{" "}
                        <Link to="/terms" className="text-foreground underline">
                          Terms of Use
                        </Link>{" "}
                        and the{" "}
                        <Link to="/privacy" className="text-foreground underline">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                  ) : null}

                  {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}

                  <div className="mt-12 flex flex-wrap items-center gap-6">
                    <button
                      type="submit"
                      disabled={!canAdvance || busy}
                      className="border border-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-foreground"
                    >
                      {busy
                        ? "Sending…"
                        : step === STEPS.length - 1
                          ? "Submit ↵"
                          : "press Enter ↵ Continue"}
                    </button>
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="crumb hover:text-foreground"
                      >
                        ← Back
                      </button>
                    ) : null}
                  </div>
                </form>
              )}
            </div>

            <div className="mt-24 grid gap-8 border-t border-hairline pt-10 md:grid-cols-2">
              <p className="text-lg">
                <span className="crumb block">Email</span>
                info@qbprosupportservices.com
              </p>
              <p className="text-lg">
                <span className="crumb block">Address</span>
                4431 Silver Cedar Ln, Sacramento, CA 95834
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
