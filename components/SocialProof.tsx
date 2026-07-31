"use client";

import { Reveal } from "./ui";
import { companies } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="border-t border-ink-600/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-slate-500">
            Built for modern internet applications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((c) => (
              <span key={c} className="font-mono text-sm tracking-wider text-slate-600">
                {c}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
            Designed for AI products, marketplaces, fintech, gaming,
            communities, social platforms, hiring platforms, and developer
            tools.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
