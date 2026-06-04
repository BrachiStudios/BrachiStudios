import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import Logo from "./Logo";

// Web3Forms access keys are PUBLIC by design (client-side, no account access).
// We read it from a Netlify environment variable (VITE_WEB3FORMS_KEY) for easy
// rotation, with a fallback so the site still works if the var isn't set.
// NOTE: never store a TRULY secret key here — VITE_ vars are visible in the bundle.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "6f556d3d-21ae-4145-a9d1-8db351f9eb39";

type Status = "idle" | "loading" | "error" | "success";

export default function Footer() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New lead from Brachi Studios website");
    data.append("from_name", "Brachi Studios Website");
    // Lets you hit "Reply" and respond straight to the lead's own email.
    const submitterEmail = data.get("email");
    if (typeof submitterEmail === "string" && submitterEmail) {
      data.append("replyto", submitterEmail);
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Order CTA */}
      <section id="order" className="relative overflow-hidden bg-crust py-24 text-olive-950 sm:py-36">
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]">
              Now booking · 2026
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Let's build
              <br />
              <span className="italic">something great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-olive-950/80">
              Tell us about your project. We'll get back within one business day —
              no bots, no sales pitch, just a real conversation.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            {status === "success" ? (
              <p className="mx-auto mt-10 max-w-md rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 font-semibold text-olive-950">
                ✓ Thank you — we've received your details and will be in touch
                within one business day.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 flex max-w-xl flex-col gap-3"
              >
                {/* Honeypot spam trap (hidden from humans) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    name="first_name"
                    required
                    maxLength={60}
                    autoComplete="given-name"
                    aria-label="First name"
                    placeholder="First name"
                    className="w-full rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                  />
                  <input
                    type="text"
                    name="last_name"
                    required
                    maxLength={60}
                    autoComplete="family-name"
                    aria-label="Last name"
                    placeholder="Last name"
                    className="w-full rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    name="company"
                    required
                    maxLength={100}
                    autoComplete="organization"
                    aria-label="Company name"
                    placeholder="Company name"
                    className="w-full rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                  />
                  <input
                    type="text"
                    name="zip_code"
                    required
                    inputMode="numeric"
                    pattern="[0-9A-Za-z \-]{3,12}"
                    maxLength={12}
                    autoComplete="postal-code"
                    aria-label="ZIP or postal code"
                    placeholder="ZIP code"
                    className="w-full rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70 sm:max-w-[40%]"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={120}
                    autoComplete="email"
                    aria-label="Email address"
                    placeholder="your@email.com"
                    className="w-full rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={25}
                    autoComplete="tel"
                    aria-label="Phone number"
                    placeholder="Phone number"
                    className="w-full rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                  />
                </div>
                <div className="relative">
                  <select
                    name="plan"
                    required
                    defaultValue=""
                    aria-label="Which plan are you interested in?"
                    className="w-full appearance-none rounded-full border border-olive-950/20 bg-cream/40 px-6 py-4 pr-12 text-olive-950 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                  >
                    <option value="" disabled>
                      Which plan are you interested in?
                    </option>
                    <option value="Starter — $499">Starter — $499</option>
                    <option value="Growth — $799">Growth — $799</option>
                    <option value="Premium — $1499">Premium — $1499</option>
                    <option value="Custom / Not sure yet">Custom / Not sure yet</option>
                  </select>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-olive-950/60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={2000}
                  aria-label="Tell us about your project"
                  placeholder="Tell us about your project…"
                  className="w-full resize-none rounded-3xl border border-olive-950/20 bg-cream/40 px-6 py-4 text-olive-950 placeholder:text-olive-950/50 outline-none transition focus:border-olive-950/60 focus:bg-cream/70"
                />
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 self-center rounded-full bg-olive-950 px-10 py-4 text-sm font-semibold text-cream transition-colors hover:bg-olive-800 disabled:opacity-60 sm:self-start"
                >
                  {status === "loading" ? "Sending…" : "Get in touch →"}
                </motion.button>
              </form>
            )}
            {status === "error" && (
              <p className="mx-auto mt-4 max-w-md text-sm font-medium text-olive-950">
                Something went wrong. Please email us directly at hello@brachi.studio.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive-950 pb-10 pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 border-b border-olive-800 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="text-cream">
                <Logo className="h-9" />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
                A creative digital studio designing and building premium animated
                websites for brands that care about the details.
              </p>
            </div>

            {[
              {
                h: "Studio",
                items: [
                  { label: "Remote · Worldwide", href: "#top" },
                  { label: "Mon–Fri", href: "#top" },
                  { label: "Booking 2026", href: "#order" },
                ],
              },
              {
                h: "Services",
                items: [
                  { label: "Web Design", href: "#craft" },
                  { label: "Development", href: "#craft" },
                  { label: "Motion & 3D", href: "#craft" },
                  { label: "Brand Identity", href: "#craft" },
                ],
              },
              {
                h: "Connect",
                items: [
                  { label: "Instagram", href: "https://www.instagram.com/brachistudios/" },
                  { label: "Dribbble", href: "#top" },
                  { label: "hello@brachi.studio", href: "mailto:hello@brachi.studio" },
                  { label: "LinkedIn", href: "#top" },
                ],
              },
            ].map((col) => (
              <div key={col.h}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-crust">{col.h}</h4>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it) => {
                    const external = it.href.startsWith("http");
                    return (
                      <li key={it.label}>
                        <a
                          href={it.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-sm text-cream/60 transition-colors hover:text-cream"
                        >
                          {it.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-cream/40 sm:flex-row">
            <p>© {new Date().getFullYear()} Brachi Studios. Crafted with care.</p>
            <p className="font-display text-2xl italic text-olive-700">Websites, crafted.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
