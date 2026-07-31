"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { PrimaryButton } from "./ui";
import { supabase } from "@/lib/supabase";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;

    setLoading(true);
    setError("");

    const { error: insertError } = await supabase.from("waitlist_signups").insert({
      email,
      company: company || null,
      product: product || null,
    });

    setLoading(false);

    if (insertError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 text-center">
        <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
          <Check size={20} />
        </div>
        <p className="font-medium text-slate-100">You&apos;re on the list.</p>
        <p className="mt-1 text-sm text-slate-400">
          We&apos;ll email {email} as soon as early access opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Mail
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-ink-600 bg-ink-950/60 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-blue-500"
          />
        </div>
        <PrimaryButton type="submit" className="whitespace-nowrap">
          {loading ? "Joining..." : "Join Waitlist"} {!loading && <ArrowRight size={16} />}
        </PrimaryButton>
      </div>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}

      {!compact && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowExtra((s) => !s)}
            className="font-mono text-xs text-slate-500 transition-colors hover:text-slate-300"
          >
            {showExtra ? "Hide" : "+ Add company / product details"}
          </button>
          {showExtra && (
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Company name (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="rounded-xl border border-ink-600 bg-ink-950/60 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Product name (optional)"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="rounded-xl border border-ink-600 bg-ink-950/60 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-blue-500"
              />
            </div>
          )}
        </div>
      )}
      <p className="mt-3 font-mono text-[11px] text-slate-600">
        No spam. One email when access opens.
      </p>
    </form>
  );
}
