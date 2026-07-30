"use client";

import { Reveal } from "./ui";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section id="waitlist" className="border-t border-ink-600/70">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Build trusted applications from day one.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
            Join the HumanodeID waitlist and be among the first developers
            exploring the next generation of human verification
            infrastructure.
          </p>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-ink-600 bg-ink-800/60 p-6">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
