"use client";

import { useMemo, useRef, useState, memo, cloneElement } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  imageUrl: string;
  href: string;
};

const IMG_SITEMU =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1772634213/5_mkr5ld.png";

const IMG_TRAVELEASE =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1772634207/1_pnicar.png";

const IMG_FIACAHYA =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1772634213/2_e2akoa.png";

const IMG_KOS =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1772634211/6_h0yhk2.png";

const IMG_TEMP =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1772634209/3_iag5j7.png";

const IMG_TODO =
  "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1772634210/4_ykvv5b.png";

export default function Projects() {

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [direction, setDirection] = useState<1 | -1>(1);

  const [mobileIndex, setMobileIndex] = useState(0);

  const [page, setPage] = useState(1);

  const PAGE_SIZE = 4;

 const projects: Project[] = useMemo(
  () => [

    {
      id: 1,
      title: "SITEMU - Lost & Found Platform",
      desc: "A web platform for reporting and discovering lost items within the university environment. Designed to help students reconnect with their belongings through a centralized reporting system.",
      tags: ["Next.js", "Tailwind", "Database"],
      imageUrl: IMG_SITEMU,
      href: "https://sitemudinus.vercel.app/"
    },

    {
      id: 2,
      title: "TravelEase - Smart Travel Budget Planner",
      desc: "A Machine Learning-powered travel budgeting tool that helps users estimate travel costs and plan efficient trips based on personalized preferences.",
      tags: ["Python", "Streamlit", "Machine Learning"],
      imageUrl: IMG_TRAVELEASE,
      href: "https://travelease.streamlit.app/"
    },

    {
      id: 3,
      title: "Fiacahya Snack - E-Commerce with AI Chatbot",
      desc: "An e-commerce website for a local snack business featuring an integrated AI chatbot that assists users in exploring products and receiving recommendations.",
      tags: ["Next.js", "OpenAI API", "Chatbot"],
      imageUrl: IMG_FIACAHYA,
      href: "https://fiacahya-snack.vercel.app/"
    },

    {
      id: 4,
      title: "Kos Maintenance Management System",
      desc: "A web-based system designed to manage boarding house maintenance requests and track facility repairs efficiently.",
      tags: ["Next.js", "CRUD", "Web App"],
      imageUrl: IMG_KOS,
      href: "https://kos-maintenance.vercel.app/"
    },

    {
      id: 5,
      title: "Temperature Converter Web App",
      desc: "A responsive web application that converts temperature values across different units with a simple and intuitive interface.",
      tags: ["HTML", "JavaScript", "Frontend"],
      imageUrl: IMG_TEMP,
      href: "https://konversisuhu-42a8bc.netlify.app/"
    },

    {
      id: 6,
      title: "To-Do List Task Manager",
      desc: "A lightweight task management web app that helps users organize daily activities and track productivity.",
      tags: ["JavaScript", "Frontend"],
      imageUrl: IMG_TODO,
      href: "https://glowing-sfogliatella-9b0715.netlify.app/"
    }

  ],
  []
);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const currentDesktopItems = useMemo(
    () => projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page, projects]
  );

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * 50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -50, opacity: 0 }),
  };

  const desktopGoTo = (nextPage: number) => {

    const clamped = Math.min(Math.max(nextPage, 1), totalPages);

    if (clamped === page) return;

    setDirection(clamped > page ? 1 : -1);

    setSelectedId(null);

    setPage(clamped);
  };

  const mobileGoTo = (next: number) => {

    const clamped = Math.min(Math.max(next, 0), projects.length - 1);

    if (clamped === mobileIndex) return;

    setDirection(clamped > mobileIndex ? 1 : -1);

    setSelectedId(null);

    setMobileIndex(clamped);
  };

  return (
    <section id="projects" className="py-20 bg-transparent relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12 border-l-2 border-blue-900 pl-6"
        >
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 mb-2">
            <Code2 className="h-4 w-4" /> [ Selected_Works ]
          </div>

          <h2 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">
            Featured <span className="text-blue-900">Projects</span>
          </h2>

        </motion.div>

        {/* DESKTOP */}
        <div className="hidden md:block">

          <div className="mb-8 flex items-center justify-between">

            <div className="h-1 w-48 rounded-full bg-slate-200 overflow-hidden">
              <motion.div
                animate={{ width: `${(page / totalPages) * 100}%` }}
                className="h-full bg-blue-900"
              />
            </div>

            <div className="flex gap-3">

              <NavButton
                onClick={() => desktopGoTo(page - 1)}
                disabled={page === 1}
                icon={<ChevronLeft />}
              />

              <NavButton
                onClick={() => desktopGoTo(page + 1)}
                disabled={page === totalPages}
                icon={<ChevronRight />}
              />

            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction}>

            <motion.div
              key={`page-${page}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-4 gap-4"
            >

              {currentDesktopItems.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  isSelected={selectedId === p.id}
                  onClick={() =>
                    setSelectedId(selectedId === p.id ? null : p.id)
                  }
                />
              ))}

            </motion.div>

          </AnimatePresence>

        </div>

        {/* MOBILE */}
        <div className="md:hidden">

          <AnimatePresence mode="wait" custom={direction}>

            <motion.div
              key={`mob-${mobileIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >

              <ProjectCard
                project={projects[mobileIndex]}
                isSelected={selectedId === projects[mobileIndex].id}
                onClick={() =>
                  setSelectedId(
                    selectedId === projects[mobileIndex].id
                      ? null
                      : projects[mobileIndex].id
                  )
                }
              />

            </motion.div>

          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-4">

            <NavButton
              onClick={() => mobileGoTo(mobileIndex - 1)}
              disabled={mobileIndex === 0}
              icon={<ChevronLeft />}
            />

            <NavButton
              onClick={() => mobileGoTo(mobileIndex + 1)}
              disabled={mobileIndex === projects.length - 1}
              icon={<ChevronRight />}
            />

          </div>

        </div>

        <AnimatePresence>

          {selectedId && (

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12"
            >

              {projects
                .filter((p) => p.id === selectedId)
                .map((p) => (

                  <div
                    key={p.id}
                    className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0a0f1a] shadow-2xl"
                  >

                    <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1321] px-4 py-3">

                      <div className="flex items-center gap-4">

                        <div className="flex gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-red-500/40" />
                          <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                          <div className="h-2 w-2 rounded-full bg-green-500/40" />
                        </div>

                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          project_details.sh
                        </span>

                      </div>

                      <button
                        onClick={() => setSelectedId(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        <X className="h-5 w-5" />
                      </button>

                    </div>

                    <div className="grid md:grid-cols-2">

                      <div className="p-8 text-white">

                        <div className="flex flex-wrap gap-2 mb-4">

                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono px-2 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-500/20"
                            >
                              {tag}
                            </span>
                          ))}

                        </div>

                        <h3 className="text-2xl font-black mb-4 uppercase">
                          {p.title}
                        </h3>

                        <p className="text-slate-400 text-sm mb-8 italic">
                          &ldquo;{p.desc}&rdquo;
                        </p>

                        <a
                          href={p.href}
                          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded font-mono text-xs font-bold hover:bg-blue-800"
                        >
                          &gt; LIVE_DEMO <ExternalLink className="h-3 w-3" />
                        </a>

                      </div>

                      <div className="relative aspect-video bg-slate-900">

                        <Image
                          src={p.imageUrl}
                          alt="preview"
                          fill
                          className="object-cover"
                        />

                      </div>

                    </div>

                  </div>

                ))}

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}

const ProjectCard = memo(function ProjectCard({
  project,
  isSelected,
  onClick,
}: {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}) {

  return (
    <motion.div
      onClick={onClick}
      className={`group relative aspect-[3/4] md:aspect-[4/5] cursor-pointer overflow-hidden rounded-xl border transition-all duration-500 ${isSelected
        ? "border-blue-900 ring-2 ring-blue-900/20"
        : "border-slate-200 hover:border-blue-900/50"
        }`}
    >

      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">

        <div className="text-[8px] font-mono text-blue-400 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
          [ view_details ]
        </div>

        <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-tighter">
          {project.title}
        </h3>

        <ChevronDown
          className={`mt-2 h-4 w-4 text-blue-400 transition-transform ${isSelected ? "rotate-180" : ""
            }`}
        />

      </div>

    </motion.div>
  );
});

const NavButton = memo(function NavButton({
  onClick,
  disabled,
  icon,
}: {
  onClick: () => void;
  disabled: boolean;
  icon: React.ReactElement;
}) {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="p-2 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-md shadow-sm transition-all hover:bg-blue-900 hover:text-white disabled:opacity-30"
    >
      {cloneElement(icon as React.ReactElement<{ className?: string }>, {
        className: "h-5 w-5",
      })}
    </button>
  );
});