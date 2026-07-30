"use client";

import { Card, Reveal, SectionHeading } from "./ui";
import { problems } from "@/lib/data";

export function Problem() {
  return (
    <section className="border-t border-ink-600/70">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="The problem" title="The internet has a trust problem." center />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card icon={p.icon} title={p.title}>
                {p.desc}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
