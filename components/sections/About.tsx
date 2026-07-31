"use client";

import React, { useMemo, useRef, memo } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Code2,
  MapPin,
  Target,
  Layers,
  Terminal,
  Database,
  Layout,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
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
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

type Fact = {
  label: string;
  value: string;
  icon: React.ElementType;
};

type ChipItem = {
  label: string;
  icon: React.ElementType;
};

const SkillChip = memo(function SkillChip({
  label,
  icon: Icon,
}: ChipItem) {
  return (
    <div className="flex items-center gap-2 rounded border border-slate-700/50 bg-slate-900/50 px-2.5 py-1 transition-all hover:border-blue-900 hover:bg-slate-800">
      <Icon className="h-3 w-3 text-slate-400" />

      <span className="font-mono text-[10px] font-medium uppercase tracking-tight text-slate-300">
        {label}
      </span>
    </div>
  );
});

const FactCard = memo(function FactCard({
  label,
  value,
  icon: Icon,
}: Fact) {
  return (
    <div className="group rounded-md border border-slate-800 bg-[#0a0f1a] p-3 shadow-lg transition-all hover:border-slate-600">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-800/50 text-blue-500">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            {label}
          </div>

          <div className="mt-0.5 text-xs font-bold leading-tight tracking-tight text-white">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
});

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  const facts: Fact[] = useMemo(
    () => [
      {
        label: "Location",
        value: "Grobogan, Indonesia",
        icon: MapPin,
      },
      {
        label: "Education",
        value: "Informatics Engineering",
        icon: GraduationCap,
      },
      {
        label: "Focus",
        value: "Web, Data & Machine Learning",
        icon: Layers,
      },
      {
        label: "Goal",
        value: "Technology Internship",
        icon: Target,
      },
    ],
    []
  );

  const focusChips: ChipItem[] = useMemo(
    () => [
      {
        label: "Web Development",
        icon: Layout,
      },
      {
        label: "Data Processing",
        icon: Database,
      },
      {
        label: "Database Integration",
        icon: Layers,
      },
      {
        label: "Machine Learning",
        icon: Brain,
      },
    ],
    []
  );

  const learning: ChipItem[] = useMemo(
    () => [
      {
        label: "React & Next.js",
        icon: Layout,
      },
      {
        label: "Data Analysis",
        icon: Database,
      },
      {
        label: "PostgreSQL",
        icon: Layers,
      },
      {
        label: "Machine Learning",
        icon: Brain,
      },
    ],
    []
  );

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-transparent py-8"
    >
      <div
        ref={ref}
        className="mx-auto max-w-5xl px-6"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-8 border-l-2 border-blue-900 pl-5"
        >
          <motion.div
            variants={itemVariants}
            className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800"
          >
            <Code2 className="h-4 w-4" />
            [ About_Profile ]
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl"
          >
            About <span className="text-blue-900">Me</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-12 md:items-stretch"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="relative h-full overflow-hidden rounded-md border border-slate-800 bg-[#0a0f1a] shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1321] px-3 py-2">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500/40" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                  <div className="h-2 w-2 rounded-full bg-green-500/40" />
                </div>

                <div className="font-mono text-[8px] uppercase tracking-widest text-slate-500">
                  portrait.png
                </div>
              </div>

              <div className="p-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded border border-slate-800 bg-slate-900/20">
                  <Image
                    src="https://res.cloudinary.com/dxdb3dj8f/image/upload/v1785534045/son_6_ao3uyp.png"
                    alt="Maulida Cahya Kurnia"
                    fill
                    priority={false}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 35vw, 90vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between md:col-span-7 lg:col-span-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium leading-relaxed text-slate-600">
                I am an Informatics Engineering student at Dian Nuswantoro
                University with experience in web application development,
                data processing, database integration, application testing,
                and system documentation through academic and team projects.
              </p>

              <p className="text-sm font-medium leading-relaxed text-slate-600">
                I have contributed to projects such as Talang.in, VMatch, and
                SITEMU, covering transaction management, service workflows,
                user dashboards, authentication, data storage, and application
                testing.
              </p>

              <p className="text-sm font-medium leading-relaxed text-slate-600">
                I am interested in applying and developing my technical skills
                through internship opportunities involving web development,
                data processing, information systems, or Machine Learning.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {focusChips.map((chip) => (
                  <SkillChip
                    key={chip.label}
                    label={chip.label}
                    icon={chip.icon}
                  />
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {facts.map((fact) => (
                  <FactCard
                    key={fact.label}
                    {...fact}
                  />
                ))}
              </div>

              <div className="rounded-md border border-slate-800 bg-[#0a0f1a] p-4 shadow-lg">
                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-blue-500">
                  <Terminal className="h-3.5 w-3.5" />
                  Currently_Developing
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {learning.map((chip) => (
                    <SkillChip
                      key={chip.label}
                      label={chip.label}
                      icon={chip.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-2 border-t border-slate-200 pt-4 font-mono text-[9px] text-slate-500"
        >
          <span className="font-bold text-blue-900">
            maulidacy@portfolio:
          </span>

          <span>
            about_profile.load() --status:available
          </span>

          <span className="h-3 w-1.5 animate-pulse bg-blue-900" />
        </motion.div>
      </div>
    </section>
  );
}