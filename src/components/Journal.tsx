import Reveal from "./Reveal";

export default function Journal() {
  return (
    <section id="journal" className="relative bg-olive-900 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Quote */}
        <Reveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl font-light leading-snug text-cream sm:text-3xl lg:text-4xl">
              “93% of small businesses now rely on technology platforms to run and
              grow — and the ones who adopt more tech see higher
              <span className="italic text-crust"> sales, profits, and customer growth</span>.”
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-display text-xl font-light leading-snug text-cream/80 sm:text-2xl">
              “Small businesses using 6+ digital tools are nearly twice as likely to
              grow revenue compared to low-tech adopters.”
            </p>
            <footer className="mt-8 text-sm uppercase tracking-[0.25em] text-cream/55">
              — US Chamber of Commerce et al., 2022
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
