import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Studio", href: "#craft" },
  { label: "Pricing", href: "#loaves" },
  { label: "Process", href: "#method" },
  { label: "Journal", href: "#journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "my-3 rounded-full border border-olive-700/60 bg-olive-950/80 py-3 backdrop-blur-xl"
            : "my-5 py-2"
        }`}
      >
        <a href="#top" className="text-cream transition-colors hover:text-crust">
          <Logo className="h-8" />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium tracking-wide text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-crust transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="hidden rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-olive-950 transition-all duration-300 hover:bg-crust hover:text-olive-950 sm:inline-block"
          >
            Start a Project
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-olive-700/60 text-cream md:hidden"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 overflow-hidden rounded-3xl border border-olive-700/60 bg-olive-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-lg font-medium text-cream/80 transition-colors hover:bg-olive-800 hover:text-cream"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-crust px-4 py-3 text-center text-lg font-semibold text-olive-950"
              >
                Start a Project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
