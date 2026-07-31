"use client";

import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  ArrowUp,
  Cpu,
  Terminal,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

type LinkItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
  download?: boolean;
};

const FooterLink = memo(function FooterLink({
  label,
  href,
  icon: Icon,
  external,
  download,
}: LinkItem) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className="group inline-flex items-center gap-2 rounded border border-slate-800 bg-slate-900/50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-tight text-slate-300 transition-all hover:border-blue-900 hover:bg-slate-800 hover:text-white"
    >
      <Icon className="h-3.5 w-3.5 text-slate-400 transition-all group-hover:scale-110 group-hover:text-blue-500" />

      <span>{label}</span>

      {external && (
        <ArrowUpRight className="h-3 w-3 opacity-30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </a>
  );
});

export default function Footer() {
  const year = new Date().getFullYear();

  const links: LinkItem[] = [
    {
      label: "Email",
      href: "mailto:maulida.cy@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maulidacahyakurnia",
      icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/maulidacy",
      icon: Github,
      external: true,
    },
    {
      label: "Download CV",
      href: "/cv_maulidacahyakurnia.pdf",
      icon: FileText,
      download: true,
    },
  ];

  return (
    <footer className="mt-20 w-full border-t border-slate-800 bg-[#0a0f1a]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative"
        >
          <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-slate-700" />
                <div className="h-2 w-2 rounded-full bg-slate-700" />
                <div className="h-2 w-2 rounded-full bg-slate-700" />
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                system_footer.sh
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded border border-blue-900/30 bg-blue-900/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500">
              <Cpu className="h-3 w-3" />
              Portfolio_Online
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-3xl">
                Building Practical and Useful{" "}
                <span className="text-blue-700">
                  Digital Solutions
                </span>
              </h2>

              <p className="mt-4 max-w-md text-[13px] font-medium leading-relaxed text-slate-400">
                A portfolio featuring projects in web development, data
                processing, database integration, and machine learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-[340px] md:justify-end">
              {links.map((link) => (
                <FooterLink
                  key={link.label}
                  {...link}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-slate-800/50 pt-8 font-mono text-[10px] text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <span className="font-bold text-blue-700">
                © {year}
              </span>

              <span className="font-bold uppercase tracking-tight text-slate-300">
                Maulida Cahya Kurnia
              </span>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

                <span className="uppercase tracking-tighter">
                  System_Online
                </span>
              </div>

              <a
                href="#home"
                aria-label="Back to top"
                className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Terminal className="h-3.5 w-3.5" />

                <span className="uppercase tracking-tighter">
                  Back_to_top
                </span>

                <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}