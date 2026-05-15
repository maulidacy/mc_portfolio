"use client";

import React, { useRef, memo } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  Terminal,
  Command,
  Code2,
  ChevronRight
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
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SocialCard = memo(function SocialCard({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <motion.a
      variants={itemVariants}
      href={href}
      target="_blank"
      className="group md:col-span-3 flex items-center justify-between rounded-md border border-slate-800 bg-[#0a0f1a] px-5 py-4 transition-all hover:border-slate-600"
    >
      <div className="flex items-center gap-4">
        <Icon className="h-5 w-5 text-slate-400 group-hover:text-blue-500" />
        <span className="text-sm font-bold text-white uppercase tracking-tighter">
          {label}
        </span>
      </div>

      <ArrowUpRight className="h-4 w-4 text-slate-700 group-hover:text-white" />
    </motion.a>
  );
});

export default function Contact() {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="contact" className="py-12 bg-transparent scroll-mt-24">

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
              [ Connect ]
            </div>

          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl font-black tracking-tighter text-slate-900 sm:text-3xl uppercase"
          >
            Execution <span className="text-blue-900">& Contact</span>
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
            className="group relative md:col-span-4 flex flex-col justify-between overflow-hidden rounded-md border border-blue-900 bg-[#0d1321] p-6 transition-all hover:border-blue-700 shadow-2xl"
          >

            <div className="flex items-center justify-between mb-8">

              <div className="flex h-12 w-12 items-center justify-center rounded border border-blue-800 bg-blue-900/30 text-blue-400">
                <Mail className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Active_Response
                </span>
              </div>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white mb-2">
                Hire for Internship
              </h3>

              <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                Available for roles related to Machine Learning or AI Engineering.
                Let&apos;s discuss how I can contribute to your team.
              </p>

              <div className="flex items-center gap-3 rounded border border-slate-800 bg-slate-900/50 px-4 py-2 transition-colors group-hover:border-blue-900">
                <Terminal className="h-4 w-4 text-blue-900" />

                <span className="flex-1 font-mono text-xs text-slate-300">
                  send_mail --to:maulidacy
                </span>

                <ChevronRight className="h-4 w-4 text-slate-500" />
              </div>

            </div>

          </motion.a>

          <motion.a
            variants={itemVariants}
            href="/cv_maulidacahyakurnia.pdf"
            download="Maulida_Cahya_Kurnia_CV.pdf"
            className="group md:col-span-2 flex flex-col items-center justify-center rounded-md border border-slate-800 bg-[#0a0f1a] p-6 text-center transition-all hover:border-slate-600 shadow-xl"
          >

            <div className="mb-4 rounded-full bg-slate-800/50 p-4 text-blue-500 transition-transform group-hover:scale-110">
              <FileText className="h-8 w-8" />
            </div>

            <span className="text-sm font-bold text-white uppercase tracking-tight">
              Curriculum Vitae
            </span>

            <span className="text-[10px] font-mono text-slate-500 mt-2">
              DOWNLOAD.PDF
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 border-t border-slate-200 pt-4 flex items-center justify-between font-mono text-[9px] text-slate-500"
        >

          <div className="flex items-center gap-2">
            <Command className="h-3 w-3" />
            <span>Process: handshake_protocol.sh completed</span>
          </div>

          <div className="flex items-center gap-4">

            <span className="hidden sm:inline">
              Grobogan, ID (GMT+7)
            </span>

            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-900" />
              <span>Port: 443</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}