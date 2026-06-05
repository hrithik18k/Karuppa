"use client";

import { signIn } from "next-auth/react";

export function GoogleLoginCard() {
  return (
    <section className="relative isolate mx-auto flex min-h-dvh w-full max-w-5xl items-center px-6 py-10 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(231,227,218,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_65%)]"
      />
      <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-sacred/40">
            Access is guarded
          </p>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-[0.08em] text-sacred sm:text-5xl lg:text-6xl">
            Sign in with Google to enter Karuppa.
          </h1>
          <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-sacred/65 sm:text-xl">
            This shrine is protected. Every visitor must authenticate before
            the landings, galleries, and chapters become visible.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-sacred/40">
            After login, you will be sent back to the home page automatically.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] border border-sacred/10 bg-sacred/[0.03] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-sacred/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8">
            <div className="space-y-4">
              <div className="h-px w-24 bg-sacred/20" />
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-sacred/35">
                Secure entry
              </p>
              <p className="font-serif text-xl leading-relaxed text-sacred/80">
                Google authentication is required. No guest access is allowed.
              </p>
            </div>

            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-sacred/20 bg-sacred px-5 py-3 font-mono text-xs uppercase tracking-[0.28em] text-void transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sacred/90"
            >
              Continue with Google
            </button>

            <p className="mt-4 text-center text-xs leading-relaxed text-sacred/38">
              We use Google only to verify identity and gate access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
