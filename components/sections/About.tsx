"use client";

import React, { useRef, useMemo, memo } from "react";
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
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type Fact = {
  label: string;
  value: string;
  icon: React.ElementType;
};

const SkillChip = memo(function SkillChip({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-2 rounded border border-slate-700/50 bg-slate-900/50 px-2.5 py-1 transition-all hover:border-blue-900 hover:bg-slate-800">
      <Icon className="h-3 w-3 text-slate-400" />
      <span className="text-[10px] font-mono font-medium text-slate-300 uppercase tracking-tight">
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
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            {label}
          </div>

          <div className="text-xs font-bold text-white tracking-tight leading-tight mt-0.5">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
});

export default function About() {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const facts: Fact[] = useMemo(() => [
    { label: "Location", value: "Grobogan, Indonesia", icon: MapPin },
    { label: "Focus", value: "Machine Learning & Applied AI", icon: Brain },
    { label: "Core Stack", value: "Python, Pandas, NumPy, SQL", icon: Layers },
    { label: "Goal", value: "ML/AI Internship", icon: Target },
  ], []);

  const focusChips = useMemo(() => [
    { label: "Machine Learning", icon: Brain },
    { label: "Data Processing", icon: GraduationCap },
    { label: "Model Evaluation", icon: Brain },
    { label: "Web-Based ML Apps", icon: Code2 },
  ], []);

  const learning = useMemo(() => [
    { label: "Feature Engineering", icon: Brain },
    { label: "Model Evaluation", icon: GraduationCap },
    { label: "Supabase & SQL", icon: Layers },
    { label: "AI Deployment", icon: Code2 },
  ], []);

  return (
    <section id="about" className="py-8 bg-transparent scroll-mt-24">

      <div className="mx-auto max-w-5xl px-6" ref={ref}>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-8 border-l-2 border-blue-900 pl-5"
        >

          <motion.div
            variants={itemVariants}
            className="text-[9px] font-mono text-blue-800 uppercase tracking-[0.2em] mb-1 font-bold"
          >

            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 mb-2">
              <Code2 className="h-4 w-4" />
              [ System.Identity ]
            </div>

          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl font-black tracking-tighter text-slate-900 sm:text-3xl uppercase"
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

          <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4">

            <div className="relative h-full overflow-hidden rounded-md border border-slate-800 bg-[#0a0f1a] shadow-xl">

              <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1321] px-3 py-2">

                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500/40" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                  <div className="h-2 w-2 rounded-full bg-green-500/40" />
                </div>

                <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                  portrait.png
                </div>

              </div>

              <div className="p-3">

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded border border-slate-800 bg-slate-900/20">

                  <Image
                    src="https://res.cloudinary.com/dxdb3dj8f/image/upload/v1771850157/Desain_tanpa_judul_1_bqcnj4.png"
                    alt="Maulida Cahya Portrait"
                    fill
                    priority={false}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 35vw, 90vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />

                </div>

              </div>

            </div>

          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">

            <div className="space-y-4">

              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                I am a Computer Science student at Dian Nuswantoro University with a strong interest in Machine Learning, data processing, and AI-based application development.
              </p>

              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                I enjoy building simple data-driven applications, from data preprocessing, model training, and evaluation to presenting results through user-friendly web interfaces.
              </p>

              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                Currently, I am strengthening my skills in Machine Learning, model evaluation, SQL, and AI-assisted development while preparing for Machine Learning or AI internship opportunities.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {focusChips.map((c) => (
                  <SkillChip key={c.label} label={c.label} icon={c.icon} />
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {facts.map((f) => (
                  <FactCard key={f.label} {...f} />
                ))}
              </div>

              <div className="rounded-md border border-slate-800 bg-[#0a0f1a] p-4 shadow-lg">

                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-500 mb-3">
                  <Terminal className="h-3.5 w-3.5" />
                  Currently_Learning
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {learning.map((c) => (
                    <SkillChip key={c.label} label={c.label} icon={c.icon} />
                  ))}
                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 border-t border-slate-200 pt-4 flex items-center justify-start gap-2 font-mono text-[9px] text-slate-500"
        >

          <span className="text-blue-900 font-bold">
            maulidacy@root:
          </span>

          <span>about_me.init() --success</span>

          <span className="h-3 w-1.5 animate-pulse bg-blue-900" />

        </motion.div>

      </div>
    </section>
  );
}