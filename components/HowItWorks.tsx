"use client";

import { Reveal, SectionHeading } from "./ui";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-ink-600/70">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Process" title="Simple from start to finish." center />
        </Reveal>
        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-ink-600 sm:block" />
          <div className="flex flex-col gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-ink-950 font-mono text-blue-400">
                    {s.n}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-slate-100">{s.title}</h3>
                    <p className="mt-1 max-w-md text-sm text-slate-400">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
