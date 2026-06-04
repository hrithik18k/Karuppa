import { Lamp, FlameMandala } from "@/components/icons";

/**
 * The Oracle — the dramatic centerpiece of the Worship chapter. A single,
 * focused, lamp-lit panel for சாமி ஆடுதல் (Swami Aadudhal): the god descending
 * into a chosen body to speak, judge and bless. Pure Server Component — the only
 * motion is the global, reduced-motion-safe `aura` / `slow-spin` / lit-flame
 * utilities, so it stays hydration-stable.
 */
export function OraclePanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-stone/50 px-6 py-16 text-center sm:px-12 md:py-24">
      {/* Living glow bound to the chapter's --glow */}
      <div
        aria-hidden
        className="aura pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 42%, color-mix(in srgb, var(--glow) 26%, transparent), transparent 72%)",
        }}
      />
      {/* Slow ceremonial mandala behind the flame */}
      <FlameMandala
        aria-hidden
        rays={24}
        className="slow-spin pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-[58%] text-accent opacity-[0.10]"
      />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        {/* The lamp, lit */}
        <div
          aria-hidden
          className="relative grid place-items-center"
          style={{
            filter:
              "drop-shadow(0 0 28px color-mix(in srgb, var(--glow) 55%, transparent))",
          }}
        >
          <Lamp lit className="h-20 w-20 text-accent md:h-24 md:w-24" />
        </div>

        <p className="mt-9 font-tamil text-2xl text-sacred/80 md:text-3xl">
          சாமி ஆடுதல்
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-accent md:text-5xl">
          The Oracle
        </h2>

        <p className="mt-7 font-serif text-xl italic leading-relaxed text-sacred/85 md:text-2xl">
          The drum quickens, the camphor flares, and the god comes down into a
          chosen body. The oracle is no longer himself — Karuppu speaks through
          him.
        </p>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-sacred/60">
          In trance he hears grievances, names the guilty, settles disputes and
          gives his word. To the village this voice is the god&rsquo;s own — and
          it is binding.
        </p>

        {/* The three offices of the descended god */}
        <div className="mt-12 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-sacred/10 sm:grid-cols-3">
          {[
            { tamil: "பேசு", en: "Speak", note: "He answers the faithful." },
            { tamil: "தீர்ப்பு", en: "Judge", note: "He names truth from lie." },
            { tamil: "அருள்", en: "Bless", note: "He gives his word as boon." },
          ].map((office) => (
            <div key={office.en} className="bg-void/40 px-5 py-7">
              <p className="font-tamil text-lg text-sacred/65">{office.tamil}</p>
              <p className="mt-1 font-display text-lg font-semibold text-sacred">
                {office.en}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-sacred/55">
                {office.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
