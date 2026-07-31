"use client";

import { memo } from "react";
import Card from "@/components/ui/Card";
import { Award, BookOpen, Rocket } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import type { ElementType } from "react";

const items = [
  {
    title: "Top 20 Final Project",
    subtitle: "Hacktiv8 × IBM SkillsBuild",
    Icon: Award,
    accent: "from-amber-100 to-orange-100 text-amber-700 ring-amber-200/60",
  },
  {
    title: "IBM Machine Learning",
    subtitle: "Coursera • Completed 2025",
    Icon: BookOpen,
    accent: "from-blue-100 to-indigo-100 text-blue-700 ring-blue-200/60",
  },
  {
    title: "Web & Data Projects",
    subtitle: "React • Next.js • Python • Supabase",
    Icon: Rocket,
    accent: "from-emerald-100 to-teal-100 text-emerald-700 ring-emerald-200/60",
  },
];

const containerVariants = {
  hide: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hide: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const HighlightCard = memo(function HighlightCard({
  title,
  subtitle,
  Icon,
  accent,
}: {
  title: string;
  subtitle: string;
  Icon: ElementType;
  accent: string;
}) {
  return (
    <m.div variants={itemVariants}>
      <Card
        className="
        group relative
        p-5
        rounded-2xl
        border border-slate-200/70
        bg-white/75 backdrop-blur
        shadow-[0_6px_18px_rgba(15,23,42,0.05)]
        transition-all duration-300
        transform-gpu will-change-transform
        hover:-translate-y-1
        hover:bg-white/90
        hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]
      "
      >
        <div
          className="
          pointer-events-none absolute inset-0 rounded-xl
          ring-1 ring-transparent
          group-hover:ring-slate-900/5
          transition
        "
        />

        <div className="flex items-start gap-3">
          <div
            className={[
              "flex h-11 w-11 items-center justify-center rounded-xl",
              "bg-gradient-to-br shadow-sm ring-1",
              accent,
              "transition-transform duration-300",
              "transform-gpu will-change-transform",
              "group-hover:scale-[1.03]",
            ].join(" ")}
          >
            <Icon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900">
              {title}
            </div>
            <div className="mt-1 truncate text-xs text-slate-600">
              {subtitle}
            </div>
          </div>
        </div>
      </Card>
    </m.div>
  );
});

export default function BentoHighlights({ show }: { show: boolean }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={false}
        animate={show ? "show" : "hide"}
        variants={containerVariants}
        className="mx-auto mt-5 grid w-full max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {items.map((item) => (
          <HighlightCard key={item.title} {...item} />
        ))}
      </m.div>
    </LazyMotion>
  );
}