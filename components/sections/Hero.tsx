"use client";

import React, { useRef, useMemo, memo } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

import Button from "@/components/ui/Button";
import TypingText from "@/components/motion/TypingText";
import GlassTicker from "@/components/effects/GlassTicker";

import {
  Award,
  GraduationCap,
  Rocket,
  Cloud,
  Code2,
  Brain,
} from "lucide-react";

const PROFILE_IMG =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1785534045/son_6_ao3uyp.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const float5: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const float6: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const float45: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const IconBubble = memo(function IconBubble({
  icon: Icon,
  label,
  className = "",
}: {
  icon: React.ElementType;
  label: string;
  className?: string;
}) {
  return (
    <div
      aria-label={label}
      className={[
        "grid place-items-center rounded-2xl border border-slate-700/60",
        "bg-[#060A14]/92 backdrop-blur-md",
        "shadow-[0_16px_40px_rgba(0,0,0,0.45)]",
        "text-blue-400 transition-all",
        "hover:border-blue-500/60 hover:-translate-y-1",
        "hover:shadow-[0_18px_55px_rgba(37,99,235,0.22)]",
        "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14",
        className,
      ].join(" ")}
    >
      <Icon className="h-5 w-5 md:h-6 md:w-6 drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]" />
    </div>
  );
});

export default function Hero() {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const cards = useMemo(() => [
    {
      icon: Award,
      title: "TOP 20 FINAL PROJECT",
      sub: "Hacktiv8 × IBM SkillsBuild",
      color: "text-amber-600",
    },
    {
      icon: GraduationCap,
      title: "IBM MACHINE LEARNING",
      sub: "Coursera • Completed 2025",
      color: "text-blue-700",
    },
    {
      icon: Rocket,
      title: "WEB & DATA PROJECTS",
      sub: "React • Next.js • Python • Supabase",
      color: "text-emerald-600",
    },
  ], []);

  return (
    <section
      id="home"
      className="relative scroll-mt-24 pt-20 pb-0 overflow-hidden bg-transparent"
    >

      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[150px]" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto w-full max-w-6xl px-6 lg:px-10 z-10"
      >

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          <div className="lg:col-span-7 space-y-8">

            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-900/30 bg-white/55 backdrop-blur px-3 py-1 text-[10px] font-mono font-extrabold tracking-[0.2em] text-slate-900 uppercase shadow-sm">
                <Code2 className="h-4 w-4" />
                [ AVAILABLE_FOR_OPPORTUNITIES ]
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">

              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-black leading-[1.05] tracking-tighter text-slate-950">
                Hi, I’m <br />
                <span className="text-blue-900 drop-shadow-[0_10px_30px_rgba(37,99,235,0.12)]">
                  Maulida Cahya Kurnia
                </span>
              </h1>

              <div className="h-8">
                <div className="text-lg md:text-xl font-mono font-extrabold text-blue-800">
                  <TypingText
                    texts={[
                      "Informatics Engineering Student",
                      "Web Development",
                      "Data Processing",
                      "Machine Learning",
                    ]}
                  />
                </div>
              </div>

              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                I build{" "}
                <span className="text-slate-950 font-extrabold italic">
                  practical web applications
                </span>{" "}
                and data-driven solutions for real-world needs.
              </p>

            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                href="#projects"
                className="!rounded-md bg-blue-900 hover:bg-slate-950 px-8 py-4 text-white font-extrabold shadow-[0_18px_55px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1"
              >
                View Projects
              </Button>

              <Button
                href="#contact"
                variant="outline"
                className="!rounded-md border-slate-200 bg-white/60 backdrop-blur px-8 py-4 text-slate-950 font-extrabold hover:bg-white shadow-sm"
              >
                Contact Me
              </Button>

            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">

              {cards.map((it) => (
                <div
                  key={it.title}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 backdrop-blur p-3 shadow-sm transition-all hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] hover:-translate-y-0.5"
                >

                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    <it.icon className={`h-5 w-5 ${it.color}`} />
                  </div>

                  <div className="min-w-0">
                    <div className="truncate text-[11px] font-black text-slate-950 uppercase tracking-tight">
                      {it.title}
                    </div>
                    <div className="truncate text-[10px] font-semibold text-slate-600 uppercase font-mono">
                      {it.sub}
                    </div>
                  </div>

                </div>
              ))}

            </motion.div>

          </div>

          <motion.div variants={itemVariants} className="lg:col-span-5">

            <div className="relative mx-auto w-full max-w-[420px] group">

              <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-blue-600/10 blur-[36px]" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#070B14] shadow-[0_22px_70px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-blue-900/50">

                <div className="flex items-center justify-between border-b border-slate-800 bg-[#0B1220] px-4 py-2">

                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500/50" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                    <div className="h-2 w-2 rounded-full bg-green-500/50" />
                  </div>

                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    maulidacy_portrait.exe
                  </div>

                </div>

                <div className="relative aspect-[4/5] w-full bg-slate-900/10 p-4">

                  <Image
                    src={PROFILE_IMG}
                    alt="Maulida Cahya Kurnia"
                    fill
                    priority
                    quality={90}
                    className="object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 400px, (min-width: 640px) 360px, 320px"
                  />

                </div>

              </div>

              <motion.div className="absolute -left-5 top-[25%] z-20" {...float5}>
                <IconBubble icon={Code2} label="Build" />
              </motion.div>

              <motion.div className="absolute -right-5 top-[15%] z-20" {...float6}>
                <IconBubble icon={Cloud} label="Deploy" />
              </motion.div>

              <motion.div className="absolute right-5 -bottom-6 z-20" {...float45}>
                <IconBubble icon={Brain} label="Intelligence" />
              </motion.div>

            </div>

          </motion.div>

        </div>

      </motion.div>

      <GlassTicker className="mt-16 opacity-80" />

    </section>
  );
}