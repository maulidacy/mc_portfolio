"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Code2, Command } from "lucide-react";

import useActiveSection from "@/components/nav/useActiveSection";
import ScrollLink from "@/components/nav/ScrollLink";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {

  const ids = useMemo(() => LINKS.map((l) => l.id), []);

  const activeId = useActiveSection(ids);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const [indicator, setIndicator] = useState({ x: 0, w: 0, show: false });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const heroHeightRef = useRef(0);

  useEffect(() => {

    const hero = document.getElementById("home");

    heroHeightRef.current = hero?.offsetHeight || 0;

    const handleScroll = () => {

      const scrollY = window.scrollY || 0;

      const heroHeight = heroHeightRef.current;

      setShowNav(scrollY > heroHeight * 0.5);

      setIsScrolled(scrollY > 20);

    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", () => {
      const hero = document.getElementById("home");
      heroHeightRef.current = hero?.offsetHeight || 0;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  useEffect(() => {
    if (!showNav) {
      queueMicrotask(() => {
        setIsMobileMenuOpen(false);
      });
    }
  }, [showNav]);

  useEffect(() => {

    const el = itemRefs.current[activeId];

    if (!wrapRef.current || !el) return;

    const update = () => {

      const wr = wrapRef.current!.getBoundingClientRect();
      const er = el.getBoundingClientRect();

      setIndicator({
        x: er.left - wr.left,
        w: er.width,
        show: true,
      });

    };

    requestAnimationFrame(update);

  }, [activeId]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? "pt-2" : "pt-6"
            }`}
        >

          <div className="mx-auto max-w-5xl px-4">

            <div
              className={`relative overflow-hidden border transition-all duration-500 shadow-2xl ${isScrolled
                ? "rounded-xl border-slate-800 bg-[#0a0f1a]/90 backdrop-blur-xl"
                : "rounded-md border-transparent bg-transparent"
                }`}
            >

              {isScrolled && (
                <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1321]/50 px-4 py-1.5 md:hidden">
                  <div className="flex gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500/40" />
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/40" />
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500/40" />
                  </div>

                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">
                    nav_v1.0.sh
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between px-5 py-3">

                <ScrollLink
                  href="#home"
                  className="group flex items-center gap-2 font-mono text-sm font-bold text-white transition-all hover:text-blue-500"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded border border-blue-900 bg-[#0d1321] shadow-lg transition-transform group-hover:rotate-12">
                    <Code2 className="h-4 w-4" />
                  </div>

                  <span className="hidden sm:inline uppercase tracking-tighter">
                    maulida
                  </span>
                </ScrollLink>

                <nav
                  ref={wrapRef}
                  className="relative hidden items-center gap-1 md:flex"
                >
                  {LINKS.map((l) => (
                    <ScrollLink
                      key={l.id}
                      href={`#${l.id}`}
                      className={`relative z-10 px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-tight transition-colors duration-300 ${activeId === l.id
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-300"
                        }`}
                    >
                      <span
                        ref={(node) => {
                          itemRefs.current[l.id] = node;
                        }}
                      >
                        {l.label}
                      </span>
                    </ScrollLink>
                  ))}

                  <motion.span
                    className="absolute bottom-1 h-7 rounded border border-blue-900/50 bg-blue-900/10"
                    style={{
                      width: `${indicator.w + 16}px`,
                      transform: `translateX(${indicator.x - 8}px)`,
                      opacity: indicator.show ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  />
                </nav>

                <div className="flex items-center gap-3">

                  <a
                    href="/cv_maulidacahyakurnia.pdf"
                    download="Maulida_Cahya_Kurnia_CV.pdf"
                    className="hidden items-center gap-2 rounded border border-slate-700 bg-slate-800/40 px-3 py-1.5 font-mono text-[10px] font-bold text-slate-300 transition-all hover:border-blue-900 hover:bg-blue-900/20 hover:text-white md:flex"
                  >
                    <Command size={12} />
                    DOWNLOAD CV
                  </a>

                  <button
                    onClick={() => setIsMobileMenuOpen((v) => !v)}
                    className="flex h-9 w-9 items-center justify-center rounded border border-slate-800 bg-[#0d1321] text-white md:hidden"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </button>

                </div>
              </div>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-800 bg-[#0a0f1a] md:hidden"
                  >
                    <div className="flex flex-col gap-1 p-4 font-mono">

                      {LINKS.map((l) => (
                        <ScrollLink
                          key={l.id}
                          href={`#${l.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between rounded px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all ${activeId === l.id
                            ? "bg-blue-900/30 text-blue-400 border-l-2 border-blue-500"
                            : "text-slate-500 hover:bg-slate-800/50 hover:text-white"
                            }`}
                        >
                          {l.label}

                          {activeId === l.id && (
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                          )}
                        </ScrollLink>
                      ))}

                      <a
                        href="/cv.pdf"
                        className="mt-4 flex items-center justify-center gap-2 rounded border border-blue-900 bg-blue-900/10 py-3 text-xs font-black text-blue-400 uppercase tracking-tighter transition-all active:scale-95"
                      >
                        <Download size={14} /> get_cv.sh
                      </a>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}