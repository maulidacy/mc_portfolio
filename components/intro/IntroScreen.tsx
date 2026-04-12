"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ArrowRight, SkipForward, Terminal } from "lucide-react";

import TypingTerminal from "@/components/intro/TypingTerminal";
import BentoHighlights from "@/components/intro/BentoHighlights";

export default function IntroScreen({ onDone }: { onDone: () => void }) {

  const lines = useMemo(() => [
    " Initialize maulida-portfolio.sh",
    " Hello, I'm Maulida Cahya Kurnia",
    " Applied Machine Learning Engineer • AI Intern",
    " Building intelligent systems through code, data, and machine learning.",
  ], []);

  const totalChars = useMemo(
    () => lines.reduce((acc, s) => acc + s.length + 1, 0),
    [lines]
  );

  const [count, setCount] = useState(0);
  const [showBento, setShowBento] = useState(false);
  const [readyToNext, setReadyToNext] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const rafRef = useRef<number | null>(null);
  const lastTime = useRef(0);
  const doneRef = useRef(false);

  const TYPE_SPEED = 18;

  useEffect(() => {
    const animate = (time: number) => {

      if (!lastTime.current) lastTime.current = time;

      const delta = time - lastTime.current;

      if (delta > TYPE_SPEED) {
        lastTime.current = time;

        setCount((prev) => {
          if (prev >= totalChars) {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            return prev;
          }
          return prev + 1;
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

  }, [totalChars]);

  useEffect(() => {
    if (count >= totalChars && !showBento) {
      const t = setTimeout(() => setShowBento(true), 150);
      return () => clearTimeout(t);
    }
  }, [count, totalChars, showBento]);

  useEffect(() => {
    if (!showBento) return;
    const t = setTimeout(() => setReadyToNext(true), 500);
    return () => clearTimeout(t);
  }, [showBento]);

  const handleExit = (isSkip = false) => {

    if (doneRef.current) return;
    doneRef.current = true;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setLeaving(true);

    setTimeout(onDone, isSkip ? 180 : 350);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 1 }}
        animate={
          leaving
            ? { opacity: 0, filter: "blur(8px)" }
            : { opacity: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen overflow-hidden bg-transparent text-slate-200 z-10"
      >

        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[120px] bg-blue-900/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-8">

          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase sm:text-4xl">
              Maulida
            </h2>
          </m.div>

          <div className="w-full max-w-[720px] space-y-5">

            <m.div
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#070B14] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >

              <div className="flex items-center justify-between border-b border-slate-800 bg-[#0B1220] px-4 py-2">

                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500/60" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <div className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>

                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  <Terminal className="h-3 w-3" />
                  portfolio_init.sh
                </div>

              </div>

              <div className="relative p-6">

                <div className="font-mono text-sm leading-relaxed text-blue-100">
                  <TypingTerminal lines={lines} typedCount={count} />
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[length:100%_5px]" />

              </div>
            </m.div>

            <div className="min-h-[180px]">
              <BentoHighlights show={showBento} />
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">

              <button
                onClick={() => handleExit(true)}
                aria-label="Skip"
                className="group flex items-center justify-center h-12 w-12 rounded-xl bg-[#0B1220] border border-slate-700 text-slate-200 shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition-all hover:border-blue-500/60 hover:text-white hover:-translate-y-0.5 active:scale-95"
              >
                <SkipForward className="h-5 w-5 transition-transform group-hover:scale-110" />
              </button>

              <AnimatePresence>
                {readyToNext && (
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <button
                      onClick={() => handleExit(false)}
                      aria-label="Proceed"
                      className="group flex items-center justify-center h-12 w-12 rounded-xl bg-blue-800 border border-blue-700 text-white shadow-[0_18px_55px_rgba(37,99,235,0.35)] transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
                    >
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </m.div>
                )}
              </AnimatePresence>

            </div>

            <m.p
              animate={{ opacity: readyToNext ? 0.65 : 0 }}
              className="text-right font-mono text-[9px] tracking-[0.35em] text-slate-700 uppercase"
            >
              Handshake_Protocol: Success
            </m.p>

          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}