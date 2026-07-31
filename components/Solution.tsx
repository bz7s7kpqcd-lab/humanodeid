"use client";

import { Card, Reveal, SectionHeading } from "./ui";
import { solutions } from "@/lib/data";

export function Solution() {
  return (
    <section className="border-t border-ink-600/70 bg-ink-800/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="The solution" title="One integration. Better trust." center />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card icon={s.icon} title={s.title}>
                {s.desc}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
