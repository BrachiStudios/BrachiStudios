const words = [
  "Web Design",
  "Motion Design",
  "Development",
  "Brand Identity",
  "Art Direction",
  "Three.js & WebGL",
  "Framer & React",
  "No Templates",
];

export default function Marquee() {
  return (
    <div className="marquee-pause relative overflow-hidden border-y border-olive-800 bg-olive-900 py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {words.map((w) => (
              <span key={w + dup} className="flex items-center">
                <span className="px-8 font-display text-2xl font-light italic text-cream/85 sm:text-3xl">
                  {w}
                </span>
                <span className="text-crust">✶</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
