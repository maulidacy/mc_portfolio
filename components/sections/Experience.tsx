"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  MapPin,
  Trophy,
  Code2,
} from "lucide-react";

type Exp = {
  role: string;
  org: string;
  type: "training" | "achievement" | "education";
  location?: string;
  period: string;
  highlights: string[];
  stack?: string[];
};

export default function Experience() {
  const items: Exp[] = useMemo(
    () => [
      {
        role: "AI Engineer Track – Independent Study Program",
        org: "Coding Camp 2026 powered by DBS Foundation",
        type: "training",
        location: "Remote",
        period: "Feb 2026 - Jul 2026",
        highlights: [
          "Completed a structured independent study program covering applied Machine Learning, Deep Learning, NLP, and AI engineering.",
          "Worked on Python-based projects involving data preprocessing, model development, evaluation, and application integration.",
          "Contributed to Talang.in by developing an automated transaction input feature, testing the application, and preparing documentation.",
          "Collaborated with a team in developing and presenting the final capstone project.",
        ],
        stack: [
          "Python",
          "TensorFlow",
          "Scikit-Learn",
          "Pandas",
          "FastAPI",
        ],
      },
      {
        role: "Top 20 Final Project Winner",
        org: "Student Developer Initiative – Hacktiv8 x IBM SkillsBuild",
        type: "achievement",
        location: "Indonesia",
        period: "Dec 2025",
        highlights: [
          "Developed SoLearn, a web-based task management application with create, update, delete, and persistent data features.",
          "Built the application using HTML, CSS, JavaScript, and LocalStorage.",
          "Achieved a final project score of 89.42 and was selected as a Top 20 Final Project Winner.",
        ],
        stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      },
      {
        role: "Informatics Engineering Student",
        org: "Universitas Dian Nuswantoro",
        type: "education",
        location: "Semarang, Indonesia",
        period: "Sep 2023 - Present",
        highlights: [
          "Studying software development, databases, data processing, and Machine Learning.",
          "Developing academic and team projects involving web applications, system design, database integration, testing, and documentation.",
          "Maintaining a GPA of 3.65 out of 4.00.",
        ],
        stack: [
          "Web Development",
          "Data Processing",
          "Database",
          "Machine Learning",
        ],
      },
    ],
    []
  );

  const ref = useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const renderIcon = (type: Exp["type"]) => {
    if (type === "training") {
      return <BookOpen className="h-4 w-4" />;
    }

    if (type === "achievement") {
      return <Trophy className="h-4 w-4" />;
    }

    return <GraduationCap className="h-4 w-4" />;
  };

  const getTypeLabel = (type: Exp["type"]) => {
    if (type === "training") return "training_block";
    if (type === "achievement") return "achievement_block";
    return "education_block";
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-transparent py-16"
    >
      <div className="pointer-events-none absolute -top-24 left-0 h-96 w-96 rounded-full bg-blue-600/6 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          className="mb-12 border-l-2 border-blue-900 pl-6"
        >
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800">
            <Code2 className="h-4 w-4" />
            [ Journey_Log ]
          </div>

          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-4xl">
            Experience &amp;{" "}
            <span className="text-blue-900">Education</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            A summary of my education, training, and achievements in software
            development, data processing, and Machine Learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative space-y-4"
        >
          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-slate-900/15" />

          {items.map((item) => (
            <motion.div
              key={`${item.role}-${item.period}`}
              variants={itemVariants}
              className="relative flex gap-6 pl-1.5"
            >
              <div className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-blue-500/25 bg-blue-600/10 text-blue-900 shadow-[0_10px_28px_rgba(37,99,235,0.28)] backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-blue-500/20 opacity-80 blur-[10px]" />

                <div className="relative">{renderIcon(item.type)}</div>
              </div>

              <div className="group relative flex-1 overflow-hidden rounded-xl border border-slate-800/80 bg-[#050812]/92 shadow-[0_18px_55px_rgba(0,0,0,0.40)] backdrop-blur-md transition-all hover:border-blue-900/40">
                <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0B1220]/70 px-4 py-2">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-500/55" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/55" />
                      <div className="h-2 w-2 rounded-full bg-green-500/55" />
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-300/80">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-mono text-[9px] font-bold uppercase tracking-tighter text-blue-300/70">
                    {getTypeLabel(item.type)}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-50 transition-colors group-hover:text-blue-200">
                        {item.role}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300/70">
                        <span className="font-bold text-slate-100">
                          {item.org}
                        </span>

                        {item.location && (
                          <>
                            <span className="text-slate-500">|</span>

                            <span className="flex items-center gap-1 text-[10px] text-slate-300/70">
                              <MapPin className="h-3 w-3" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.stack?.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-700/70 bg-slate-900/50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-tighter text-slate-200/75 transition-colors group-hover:border-blue-900/50"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-3 text-[12px] font-medium leading-relaxed text-slate-200/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80" />
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.22)_50%)] bg-[length:100%_6px] opacity-[0.10]" />
              </div>
            </motion.div>
          ))}
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
          className="mt-10 flex items-center gap-2 border-t border-slate-900/10 pt-6 font-mono text-[10px] text-slate-600"
        >
          <span className="font-bold text-blue-900">
            maulidacy@portfolio:
          </span>

          <span className="uppercase tracking-widest italic">
            journey_log.load() --status:active
          </span>

          <span className="h-3.5 w-1.5 animate-pulse bg-blue-900" />
        </motion.div>
      </div>
    </section>
  );
}