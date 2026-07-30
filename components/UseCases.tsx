"use client";

import { Card, Reveal, SectionHeading } from "./ui";
import { useCases } from "@/lib/data";

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-ink-600/70 bg-ink-800/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Use cases"
            title="Built for every platform that values trust."
            center
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={(i % 3) * 0.05}>
              <Card icon={u.icon} title={u.title}>
                {u.desc}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
