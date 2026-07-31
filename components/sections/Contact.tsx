"use client";

import React, { memo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  Terminal,
  Code2,
  ChevronRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

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
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

type SocialCardProps = {
  href: string;
  icon: React.ElementType;
  label: string;
};

const SocialCard = memo(function SocialCard({
  href,
  icon: Icon,
  label,
}: SocialCardProps) {
  return (
    <motion.a
      variants={itemVariants}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${label}`}
      className="group flex items-center justify-between rounded-md border border-slate-800 bg-[#0a0f1a] px-5 py-4 transition-all hover:border-slate-600 md:col-span-3"
    >
      <div className="flex items-center gap-4">
        <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-500" />

        <span className="text-sm font-bold uppercase tracking-tighter text-white">
          {label}
        </span>
      </div>

      <ArrowUpRight className="h-4 w-4 text-slate-700 transition-colors group-hover:text-white" />
    </motion.a>
  );
});

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-transparent py-12"
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
            [ Contact_Channel ]
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl"
          >
            Let&apos;s <span className="text-blue-900">Connect</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-4 md:grid-cols-6"
        >
          <motion.a
            variants={itemVariants}
            href="mailto:maulida.cy@gmail.com"
            aria-label="Send an email to Maulida Cahya Kurnia"
            className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-blue-900 bg-[#0d1321] p-6 shadow-2xl transition-all hover:border-blue-700 md:col-span-4"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-blue-800 bg-blue-900/30 text-blue-400">
                <Mail className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />

                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  Available
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Open to Opportunities
              </h3>

              <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-400">
                I am open to internship, entry-level, project, and collaboration
                opportunities related to web development, data processing,
                information systems, and machine learning.
              </p>

              <div className="flex items-center gap-3 rounded border border-slate-800 bg-slate-900/50 px-4 py-2 transition-colors group-hover:border-blue-900">
                <Terminal className="h-4 w-4 text-blue-500" />

                <span className="flex-1 font-mono text-xs text-slate-300">
                  Send Email
                </span>

                <ChevronRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="/cv_maulidacahyakurnia.pdf"
            download="Maulida_Cahya_Kurnia_CV.pdf"
            aria-label="Download Maulida Cahya Kurnia CV"
            className="group flex flex-col items-center justify-center rounded-md border border-slate-800 bg-[#0a0f1a] p-6 text-center shadow-xl transition-all hover:border-slate-600 md:col-span-2"
          >
            <div className="mb-4 rounded-full bg-slate-800/50 p-4 text-blue-500 transition-transform group-hover:scale-110">
              <FileText className="h-8 w-8" />
            </div>

            <span className="text-sm font-bold uppercase tracking-tight text-white">
              Download CV
            </span>

            <span className="mt-2 font-mono text-[10px] text-slate-500">
              PDF DOCUMENT
            </span>
          </motion.a>

          <SocialCard
            href="https://www.linkedin.com/in/maulidacahyakurnia"
            icon={Linkedin}
            label="LinkedIn"
          />

          <SocialCard
            href="https://github.com/maulidacy"
            icon={Github}
            label="GitHub"
          />
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
          className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-4 font-mono text-[9px] text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3 w-3 text-blue-900" />

            <span>
              contact_channel.load() --status:ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />

            <span>Grobogan, Indonesia · GMT+7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}