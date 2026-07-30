"use client";

import { useState } from "react";
import { Fingerprint, Menu, X } from "lucide-react";
import { PrimaryButton } from "./ui";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-600/80 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30">
            <Fingerprint size={18} />
          </span>
          <span className="font-display font-semibold tracking-tight text-slate-50">
            HumanodeID
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton onClick={scrollToWaitlist}>Join Waitlist</PrimaryButton>
        </div>

        <button
          className="text-slate-300 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-ink-600 bg-ink-950 px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300"
            >
              {l.label}
            </a>
          ))}
          <PrimaryButton
            onClick={() => {
              setOpen(false);
              scrollToWaitlist();
            }}
          >
            Join Waitlist
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}
