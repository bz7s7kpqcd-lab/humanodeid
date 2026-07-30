"use client";

import { Card, Reveal, SectionHeading } from "./ui";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section id="features" className="border-t border-ink-600/70 bg-ink-800/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Platform" title="Built for developers." center />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <Card icon={f.icon} title={f.title}>
                {f.desc}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
