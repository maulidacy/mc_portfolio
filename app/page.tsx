"use client";

import { useState } from "react";
import IntroScreen from "@/components/intro/IntroScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Page() {
  const [ready, setReady] = useState(false);
  if (!ready) return <IntroScreen onDone={() => setReady(true)} />;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* FULL BLEED SECTIONS */}
      <Hero />
      <Experience />

      {/* CENTERED SECTIONS */}
      <div className="centered-shell mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="space-y-0">
          <Projects />
          <Skills />
          <Achievements />
          <About />
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}