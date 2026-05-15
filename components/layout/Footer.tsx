"use client";

import { memo, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  Cpu,
  Terminal
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

type LinkItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

const FooterLink = memo(function FooterLink({
  label,
  href,
  icon: Icon,
  external
}: LinkItem) {

  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 rounded border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-tight text-slate-300 transition-all hover:border-blue-900 hover:bg-slate-800 hover:text-white"
    >
      <Icon className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:scale-110 group-hover:text-blue-500" />

      <span>{label}</span>

      {external && (
        <ArrowUpRight className="h-3 w-3 opacity-30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
});

export default function Footer() {

  const year = 2026;

  const links: LinkItem[] = useMemo(() => [
    { label: "Email", href: "mailto:maulida.cy.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/maulidacahyakurnia", icon: Linkedin, external: true },
    { label: "GitHub", href: "https://github.com/maulidacy", icon: Github, external: true },
    { label: "CV.pdf", href: "/cv_maulidacahyakurnia.pdf", icon: FileText }
  ], []);

  return (
    <footer className="w-full bg-[#0a0f1a] border-t border-slate-800 mt-20">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >

          <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">

            <div className="flex items-center gap-4">

              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-slate-700" />
                <div className="h-2 w-2 rounded-full bg-slate-700" />
                <div className="h-2 w-2 rounded-full bg-slate-700" />
              </div>

              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                system_footer.sh
              </div>

            </div>

            <div className="inline-flex items-center gap-2 rounded border border-blue-900/30 bg-blue-900/10 px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-blue-500">
              <Cpu className="h-3 w-3" />
              Deployed_v1.0
            </div>

          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            <div className="max-w-xl">

              <h2 className="text-2xl font-black tracking-tighter text-white uppercase sm:text-3xl">
                Building Simple, Useful <span className="text-blue-900">Digital Solutions</span>
              </h2>

              <p className="mt-4 text-[13px] leading-relaxed text-slate-400 font-medium max-w-md">
                A portfolio of projects focused on web development, data processing, machine learning basics, and practical UI design.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 md:justify-end md:max-w-[300px]">
              {links.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col gap-6 md:flex-row md:items-center md:justify-between font-mono text-[10px] text-slate-500">

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <span className="text-blue-900 font-bold">© {year}</span>
              <span className="text-slate-300 uppercase font-bold tracking-tight">
                Maulida Cahya Kurnia
              </span>
            </div>

            <div className="flex items-center gap-8">

              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="uppercase tracking-tighter">
                  System_Online
                </span>
              </div>

              <a
                href="#home"
                className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Terminal className="h-3.5 w-3.5" />

                <span className="uppercase tracking-tighter">
                  Back_to_top
                </span>

                <ArrowUpRight className="h-3.5 w-3.5 rotate-[-45deg] transition-transform group-hover:-translate-y-1" />
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}