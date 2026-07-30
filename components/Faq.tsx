"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { faqs, type Faq } from "@/lib/data";

function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink-600 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-medium text-slate-100">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-500 transition-transform duration-300 ${
            open ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-slate-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-ink-600/70">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions." center />
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
