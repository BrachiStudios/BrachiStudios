import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.45 },
  },
};
const lineUp = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};
const fade = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src="/images/hero-studio.jpg"
          alt="Abstract sculptural 3D forms in warm olive and gold tones"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-950/70 via-olive-950/40 to-olive-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-950/80 via-transparent to-transparent" />
        <div className="grain absolute inset-0 opacity-[0.18] mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={fade} className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
            <span className="h-px w-10 bg-crust" />
            Est. 2026 · Creative Digital Studio
          </motion.div>

          <h1 className="font-display text-[15vw] font-light leading-[0.86] tracking-[-0.02em] text-cream sm:text-[12vw] lg:text-[8.5rem]">
            <span className="block overflow-hidden">
              <motion.span variants={lineUp} className="block">
                Websites,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineUp} className="block italic text-crust">
                crafted.
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p variants={fade} className="max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
              Brachi Studios is a creative digital studio. We design and build
              premium, fast, beautifully animated websites for brands that refuse
              to look like everyone else.
            </motion.p>

            <motion.div variants={fade} className="flex shrink-0 items-center gap-4">
              <a
                href="#order"
                className="group inline-flex items-center gap-2 rounded-full bg-crust px-7 py-4 text-sm font-semibold text-olive-950 transition-all duration-300 hover:bg-cream"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#loaves"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-cream/10"
              >
                See Pricing
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="h-8 w-px bg-gradient-to-b from-cream/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
