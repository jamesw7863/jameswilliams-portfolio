"use client";

import Image from "next/image";
import IconLinks from "./IconLinks";
import ComputerIcon from "./ComputerIcon";

export default function Hero() {
  return (
    <section className="container pb-12 relative z-[1]">
      <div className="panel px-6 py-8 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[1.1fr_.9fr]">
          {/* Left */}
          <div className="flex min-h-[360px] flex-col">
            <div>
              <h1 className="font-dmserif h0 leading-none">James Williams</h1>
              <p className="mt-3 text-xl font-semibold text-[rgb(var(--accent))]">Software Engineer</p>
              <p className="mt-3 text-lg text-muted max-w-prose">
                Building clean, scalable solutions through design and code.
              </p>
            </div>

            {/* Big computer icon centered in left column */}
            <ComputerIcon />

            {/* Icons at the bottom-left of card */}
            <div className="mt-auto pt-6">
              <IconLinks
                github="https://github.com/jamesw7863"
                linkedin="https://www.linkedin.com/in/james-williamsiv/"
                resume="/James_Williams_Resume.pdf"
              />
            </div>
          </div>

          {/* Right: photo – object-top keeps a little space above hair, suit visible */}
          <div className="relative overflow-hidden rounded-2xl"
               style={{ background: "rgb(var(--bg1))", boxShadow: "0 18px 40px rgba(40,60,100,0.12)" }}>
            <Image
              src="/james.png"
              alt="James Williams"
              width={900}
              height={1200}
              className="h-[440px] w-full object-cover object-top md:h-[460px]"
              priority
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
