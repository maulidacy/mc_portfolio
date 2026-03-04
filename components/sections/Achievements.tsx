"use client";

import React, { useRef, useMemo, memo } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Trophy,
  BadgeCheck,
  Star,
  Calendar,
  Award,
  ArrowUpRight,
  Sparkles,
  Code2,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Pill = memo(function Pill({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded border border-slate-700/50 bg-slate-800/40 px-2.5 py-1 text-[10px] font-mono font-medium uppercase tracking-tight text-slate-300 transition hover:bg-slate-800 hover:border-blue-900/60">
      <Icon className="h-3 w-3 text-blue-700" />
      {label}
    </span>
  );
});

const BentoCard = memo(function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0a0f1a] p-6 shadow-2xl transition-all hover:border-slate-600 ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </motion.div>
  );
});

export default function Achievements() {

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.15, once: true });

  const highlights = useMemo(() => [
    {
      title: "Top 20 Final Project Winner",
      subtitle: "Hacktiv8 x IBM SkillsBuild - Student Developer Initiative",
      icon: Trophy,
      pills: [
        { label: "Top 20", icon: Award },
        { label: "IBM SkillsBuild", icon: Sparkles },
      ],
    },
    {
      title: "Final Project Score: 89.42/100",
      subtitle: "Code Generation & Optimization (Issued: Dec 2025)",
      icon: Star,
      pills: [
        { label: "Score Highlight", icon: Star },
        { label: "Transcript", icon: Award },
      ],
    },
  ], []);

  const certs = useMemo(() => [
    {
      title: "IBM Machine Learning Specialization",
      subtext:
        "Exploratory Data Analysis, supervised & unsupervised learning, deep learning, and capstone.",
      date: "Oct 2025",
      icon: BadgeCheck,
    },
    {
      title: "Hacktiv8 x IBM SkillsBuild (Student Developer Initiative)",
      subtext: "Code Generation & Optimization Program.",
      date: "Dec 2025",
      icon: BadgeCheck,
    },
  ], []);

  return (
    <section id="achievements" className="bg-transparent py-16 scroll-mt-24">

      <div className="mx-auto max-w-6xl px-6" ref={ref}>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 border-l-2 border-blue-900 pl-6"
        >

          <motion.div
            variants={itemVariants}
            className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800"
          >

            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-900 mb-2">
              <Code2 className="h-4 w-4" />
              [ System.Achievements ]
            </div>

          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl uppercase"
          >
            Highlights & <span className="text-blue-900">Certs</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-2 max-w-2xl text-sm font-medium text-slate-600"
          >
            Selected outcomes, verified scores, and professional training milestones.
          </motion.p>

        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-4 md:grid-cols-12"
        >

          <div className="grid gap-4 md:col-span-7">

            {highlights.map((h) => (
              <BentoCard key={h.title}>
                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-800/50 text-blue-700 shadow-inner">
                    <h.icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">

                    <h3 className="mb-2 text-lg font-bold tracking-tight leading-none text-white">
                      {h.title}
                    </h3>

                    <p className="mb-4 text-sm text-slate-500">
                      {h.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {h.pills.map((p) => (
                        <Pill key={p.label} icon={p.icon} label={p.label} />
                      ))}
                    </div>

                  </div>
                </div>
              </BentoCard>
            ))}

          </div>

          <BentoCard className="md:col-span-5">

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-blue-700" />
                <h3 className="text-md font-bold text-white uppercase tracking-tight">
                  Credentials
                </h3>
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-blue-700" />

            </div>

            <div className="space-y-4">

              {certs.map((c) => (
                <div
                  key={c.title}
                  className="group/item relative rounded-lg border border-slate-800/50 bg-slate-900/30 p-4 transition-all hover:bg-slate-800/50"
                >

                  <div className="flex items-start gap-3">

                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-950 transition-colors group-hover/item:bg-blue-700" />

                    <div className="min-w-0 flex-1">

                      <h4 className="text-sm font-bold text-slate-200">
                        {c.title}
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {c.subtext}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-slate-600" />
                        <span className="text-[10px] font-mono text-slate-600">
                          {c.date}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </BentoCard>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-start gap-3 border-t border-slate-800 pt-6 font-mono text-[11px] text-slate-600"
        >

          <span className="font-bold text-blue-950">➜</span>

          <span className="text-slate-400 uppercase tracking-widest">
            achievements.verified_successfully
          </span>

          <span className="h-4 w-1 animate-pulse bg-blue-700" />

        </motion.div>

      </div>

    </section>
  );
}