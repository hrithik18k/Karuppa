import Link from "next/link";
import { navItems } from "@/lib/nav";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { KaruppuWordmark } from "@/components/brand/KaruppuWordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-sacred/10 bg-stone/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex flex-col leading-none [&>span]:sr-only">
              <KaruppuWordmark className="h-auto w-40 drop-shadow-[0_0_18px_rgba(255,24,20,0.18)]" />
              <span className="font-tamil text-sm text-sacred/70">கருப்பு சாமி</span>
              <span className="sr-only">
                KARUPPA
              </span>
            </Link>
            <p className="mt-5 font-serif text-base italic leading-relaxed text-sacred/55">
              A dark devotional shrine for Karuppu Swamy, held with reverence.
            </p>
            <p className="sr-only">
              A cinematic digital shrine for the guardian deity Karuppu Swamy —
              revealed form by form, power by power.
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-relaxed text-sacred/40">
              <BeliefTag kind="belief" /> marks devotional tradition.
              <BeliefTag kind="verify" /> marks claims to confirm before publishing.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-2 text-sm text-sacred/65 transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-[10px] text-sacred/30 group-hover:text-accent">
                      {item.num}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-sacred/10 pt-6 text-xs text-sacred/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Kaval Deivam — the Guardian of Justice. Built with reverence.</p>
          <p>
            A living faith, presented factually. Concept inspired by{" "}
            <span className="italic">Anniyan</span> (2005) — never its violence.
          </p>
        </div>
      </div>
    </footer>
  );
}
