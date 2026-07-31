"use client";

import React, { useMemo, useRef, memo } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Trophy,
  BadgeCheck,
  Calendar,
  Award,
  BookOpenCheck,
  Code2,
  CheckCircle2,
} from "lucide-react";

type PillItem = {
  label: string;
  icon: React.ElementType;
};

type HighlightItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  pills: PillItem[];
};

type CertificateItem = {
  title: string;
  subtext: string;
  date: string;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
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
    <span className="inline-flex items-center gap-2 rounded border border-slate-700/50 bg-slate-800/40 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-tight text-slate-300 transition hover:border-blue-900/60 hover:bg-slate-800">
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
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {children}
    </motion.div>
  );
});

export default function Achievements() {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    amount: 0.15,
    once: true,
  });

  const highlights: HighlightItem[] = useMemo(
    () => [
      {
        title: "Top 20 Final Project Winner",
        subtitle:
          "Selected as a Top 20 Final Project Winner in the Student Developer Initiative by Hacktiv8 x IBM SkillsBuild, with a final score of 89.42.",
        icon: Trophy,
        pills: [
          {
            label: "Top 20 Winner",
            icon: Award,
          },
          {
            label: "Score 89.42",
            icon: CheckCircle2,
          },
        ],
      },
      {
        title: "Coding Camp 2026",
        subtitle:
          "Completed the AI Engineer Track independent study program powered by DBS Foundation, covering applied Machine Learning, Deep Learning, NLP, and team-based project development.",
        icon: BookOpenCheck,
        pills: [
          {
            label: "AI Engineer Track",
            icon: BadgeCheck,
          },
          {
            label: "Completed Jul 2026",
            icon: Calendar,
          },
        ],
      },
    ],
    []
  );

  const certificates: CertificateItem[] = useMemo(
    () => [
      {
        title: "IBM Machine Learning Specialization",
        subtext:
          "Covered exploratory data analysis, supervised and unsupervised learning, deep learning, reinforcement learning, and an applied capstone project.",
        date: "Oct 2025",
      },
      {
        title: "Student Developer Initiative",
        subtext:
          "Hacktiv8 x IBM SkillsBuild – Code Generation and Optimization Program.",
        date: "Dec 2025",
      },
    ],
    []
  );

  return (
    <section
      id="achievements"
      className="scroll-mt-24 bg-transparent py-16"
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-6"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 border-l-2 border-blue-900 pl-6"
        >
          <motion.div
            variants={itemVariants}
            className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900"
          >
            <Code2 className="h-4 w-4" />
            [ Achievements_Log ]
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-4xl"
          >
            Achievements &amp;{" "}
            <span className="text-blue-900">
              Certifications
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-600"
          >
            Selected achievements, certifications, and training milestones
            from my academic and project journey.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-4 md:grid-cols-12"
        >
          <div className="grid gap-4 md:col-span-7">
            {highlights.map((highlight) => (
              <BentoCard key={highlight.title}>
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-800/50 text-blue-700 shadow-inner">
                    <highlight.icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-2 text-lg font-bold leading-tight tracking-tight text-white">
                      {highlight.title}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-slate-500">
                      {highlight.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {highlight.pills.map((pill) => (
                        <Pill
                          key={pill.label}
                          icon={pill.icon}
                          label={pill.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          <BentoCard className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-blue-700" />

              <h3 className="text-md font-bold uppercase tracking-tight text-white">
                Certifications &amp; Training
              </h3>
            </div>

            <div className="space-y-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.title}
                  className="group/item relative rounded-lg border border-slate-800/50 bg-slate-900/30 p-4 transition-all hover:bg-slate-800/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-950 transition-colors group-hover/item:bg-blue-700" />

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-200">
                        {certificate.title}
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {certificate.subtext}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-slate-600" />

                        <span className="font-mono text-[10px] text-slate-600">
                          {certificate.date}
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
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            delay: 0.8,
          }}
          className="mt-10 flex items-center gap-3 border-t border-slate-800 pt-6 font-mono text-[11px] text-slate-600"
        >
          <span className="font-bold text-blue-950">
            maulidacy@portfolio:
          </span>

          <span className="uppercase tracking-widest text-slate-400">
            achievements.load() --status:updated
          </span>

          <span className="h-4 w-1 animate-pulse bg-blue-700" />
        </motion.div>
      </div>
    </section>
  );
}