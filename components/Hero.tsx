"use client";

import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton, Reveal } from "./ui";
import { VerificationMesh } from "./VerificationMesh";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:pt-28">
        <Reveal>
          <Eyebrow>Verification infrastructure</Eyebrow>
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            Verify every user is human.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            HumanodeID helps developers build more trusted applications by
            making human verification simple to integrate.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton onClick={scrollToWaitlist}>
              Join Waitlist <ArrowRight size={16} />
            </PrimaryButton>
            <SecondaryButton>Documentation (Coming Soon)</SecondaryButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto h-[300px] w-full max-w-md">
          <VerificationMesh />
        </Reveal>
      </div>
    </section>
  );
}
