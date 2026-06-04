import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Brief & reference",
    body: "We dig into your brand, audience and goals, then pull a tight visual direction so we're aligned before a pixel moves.",
  },
  {
    n: "02",
    title: "Design & build",
    body: "Layout, type and color come together in a clean, custom build — no templates, no page-builder bloat. Real code from day one.",
  },
  {
    n: "03",
    title: "Motion & polish",
    body: "We layer in the animations that make it feel premium: staggered reveals, scroll choreography and tactile hover states.",
  },
  {
    n: "04",
    title: "Optimize & launch",
    body: "Compressed assets, lazy loading, 90+ Lighthouse scores. We ship it, then stay on to help it grow.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative overflow-hidden bg-olive-950 py-24 sm:py-36">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-crust">
              <span className="h-px w-10 bg-crust" /> The Process
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Four steps. <span className="italic text-crust">One process.</span> A
              site worth the wait.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-olive-800 bg-olive-800 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
              className="group relative bg-olive-950 p-8 transition-colors duration-500 hover:bg-olive-900 sm:p-12"
            >
              <span className="font-display text-6xl font-extralight text-olive-700 transition-colors duration-500 group-hover:text-crust">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-2xl font-light text-cream sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-cream/60">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
