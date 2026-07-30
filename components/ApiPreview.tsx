"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const code = `const result = await humanode.verify(userId)

if (result.verified) {
  allowAccess()
}`;

function CodeBlock() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-600 bg-ink-800/80">
      <div className="flex items-center justify-between border-b border-ink-600 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        </div>
        <span className="font-mono text-xs text-slate-500">verify.ts</span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="text-slate-500 transition-colors hover:text-slate-200"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-slate-500">const</span>{" "}
          <span className="text-blue-300">result</span>{" "}
          <span className="text-slate-500">=</span>{" "}
          <span className="text-slate-500">await</span>{" "}
          <span className="text-slate-200">humanode</span>
          <span className="text-slate-500">.</span>
          <span className="text-blue-300">verify</span>
          <span className="text-slate-200">(userId)</span>
          {"\n\n"}
          <span className="text-slate-500">if</span>{" "}
          <span className="text-slate-200">(</span>
          <span className="text-blue-300">result</span>
          <span className="text-slate-500">.</span>
          <span className="text-slate-200">verified</span>
          <span className="text-slate-200">{") {"}</span>
          {"\n  "}
          <span className="text-slate-200">allowAccess()</span>
          {"\n"}
          <span className="text-slate-200">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}

export function ApiPreview() {
  return (
    <section className="border-t border-ink-600/70">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="API preview"
            title="A verification result your app can act on."
            center
          />
          <CodeBlock />
          <p className="mt-4 text-center text-xs text-slate-500">
            Illustrative example. API currently under active development.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
