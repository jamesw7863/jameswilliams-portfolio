"use client";

import Image from "next/image";
import IconLinks from "./IconLinks";
import ComputerIcon from "./ComputerIcon";

export default function Hero() {
  return (
    <section className="container py-10">
      <div className="hero-card px-6 py-8 md:px-10 md:py-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_.85fr]">
          {/* Left copy */}
          <div>
            <h1 className="h0">James Williams</h1>
            

            <p className="mt-3 text-lg text-muted max-w-prose">
              Building clean, scalable solutions through design and code.
            </p>

            {/* Computer icon – nudged slightly right to sit under the sentence */}
            <div className="mt-8 flex">
              <div className="ml-6 md:ml-10 inline-flex rounded-2xl border border-surface bg-white/70 px-6 py-5 shadow-[0_10px_24px_rgba(40,60,100,0.12)]">
                <ComputerIcon width={120} height={120} className="text-[rgb(var(--ink))]" />
              </div>
            </div>

            {/* Socials at the bottom of the card, left aligned */}
            <div className="mt-10">
              <IconLinks
                github="https://github.com/jamesw7863"
                linkedin="https://www.linkedin.com/in/james-williamsiv/"
                resume="/James_Williams_Resume.pdf"
              />
            </div>
          </div>

          {/* Right photo – head near top, suit visible */}
          <div className="relative">
            <div className="rounded-2xl border border-surface shadow-[0_20px_48px_rgba(40,60,100,0.18)] overflow-hidden">
              <Image
                src="/james.png"
                alt="James Williams headshot"
                width={1100}
                height={1400}
                className="w-full h-[520px] object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
