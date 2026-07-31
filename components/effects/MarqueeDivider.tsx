"use client";

import { cn } from "@/lib/utils";

type Props = {
  topText?: string;
  bottomText?: string;
  className?: string;
};

export default function MarqueeDivider({
  topText = "WEB DEVELOPMENT • DATA PROCESSING • DATABASE INTEGRATION • MACHINE LEARNING • ",
  bottomText = "PROJECTS • SYSTEM DESIGN • TESTING • DOCUMENTATION • DEPLOYMENT • ",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2",
        className
      )}
    >
      {/* TOP STRIP */}
      <div className="relative overflow-hidden border-y border-white/10 bg-[#020617]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,91,255,0.18),transparent_55%)] opacity-70" />

        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className="py-4 pr-10 text-[22px] font-black tracking-[0.08em] text-[#2E5BFF] md:py-5 md:text-[32px]"
              style={{
                textShadow: "0 0 18px rgba(46,91,255,0.25)",
              }}
            >
              {topText}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] opacity-25 [background-size:18px_18px]" />
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative overflow-hidden border-b border-black/15 bg-[#2E5BFF]">
        <div className="flex animate-marquee-reverse whitespace-nowrap will-change-transform">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className="py-3 pr-10 text-[16px] font-extrabold tracking-[0.12em] text-[#020617] md:py-4 md:text-[20px]"
            >
              {bottomText}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 animate-sheen bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-30 [background-size:260px_100%]" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0b1220] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0b1220] to-transparent" />
    </div>
  );
}