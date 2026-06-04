import { motion } from "framer-motion";
import Reveal from "./Reveal";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    oldPrice: "$800",
    tagline: "Get online, fast.",
    features: [
      "1–3 page website",
      "Modern template",
      "Mobile optimized",
      "Basic SEO",
      "Contact form",
      "3-day delivery",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$799",
    oldPrice: "$1000",
    tagline: "Built to convert.",
    features: [
      "3–5 page website",
      "Custom layout sections",
      "Mobile + speed optimization",
      "Basic SEO + Google indexing",
      "Domain + Vercel setup",
      "5-day delivery",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$1499",
    oldPrice: "$2000",
    tagline: "The full experience.",
    features: [
      "5–10 page website",
      "Fully custom design",
      "Advanced animations",
      "SEO-ready structure",
      "Domain + Vercel setup",
      "7-day delivery",
    ],
    featured: false,
  },
];

export default function Loaves() {
  return (
    <section id="loaves" className="relative overflow-hidden bg-olive-900 py-24 sm:py-36">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06]" />
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-crust/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-crust">
                <span className="h-px w-10 bg-crust" /> Pricing
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
                Simple, honest <span className="italic text-crust">pricing.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-cream/65">
              One flat price, no surprises. Every plan includes a free domain and
              hosting — yours forever.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className={`group relative flex flex-col rounded-3xl border p-8 backdrop-blur-xl transition-all duration-500 sm:p-9 ${
                t.featured
                  ? "border-crust/50 bg-crust/15 lg:-translate-y-4 lg:scale-[1.03]"
                  : "border-cream/15 bg-cream/[0.04] hover:border-cream/30 hover:bg-cream/[0.07]"
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-crust px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-olive-950">
                  Most Popular
                </span>
              )}

              <p className="text-[11px] uppercase tracking-[0.25em] text-crust">{t.tagline}</p>
              <h3 className="mt-3 font-display text-3xl font-light text-cream">{t.name}</h3>

              <div className="mt-5 flex items-end gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-light text-cream">{t.price}</span>
                  <span className="text-sm text-cream/50">one-time</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-light text-cream/40 line-through decoration-crust/80 decoration-2">
                    {t.oldPrice}
                  </span>
                </div>
              </div>
              <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-crust/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-crust">
                Limited offer · Save now
              </span>

              <div className="my-7 h-px w-full bg-cream/10" />

              <ul className="flex flex-1 flex-col gap-3.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream/80">
                    <svg
                      viewBox="0 0 24 24"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-crust" : "text-crust/80"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#order"
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  t.featured
                    ? "bg-crust text-olive-950 hover:bg-cream"
                    : "border border-cream/25 text-cream hover:bg-cream hover:text-olive-950"
                }`}
              >
                Choose {t.name}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-cream/50">
            Need something bigger? <a href="#order" className="text-cream underline-offset-4 transition-colors hover:text-crust hover:underline">Let's talk custom →</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
