"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExternalLink, ChevronDown } from "lucide-react";
import { githubUrl, linkedinUrl } from "@/app/config/socialLinks";

export default function Hero() {
  
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[100px] dark:bg-sky-600/10"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-fuchsia-400/10 blur-[100px] dark:bg-fuchsia-600/10"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/5 blur-[80px] dark:bg-orange-600/5"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-1.5 text-xs font-medium text-sky-700 backdrop-blur-sm dark:border-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
        >
          Full-Stack Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 text-6xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl md:text-8xl"
        >
          Sreevadhani{" "}
          <span className="bg-gradient-to-r from-sky-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
            G
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl"
        >
          Building scalable and efficient full-stack applications that solve
          real-world problems, meet client requirements, and deliver business
          value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <FaGithub className="h-5 w-5 transition-transform group-hover:scale-110" />
            GitHub
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:bg-sky-900/20"
          >
            <FaLinkedin className="h-5 w-5 text-[#0A66C2] transition-transform group-hover:scale-110" />
            LinkedIn
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-sky-200 bg-sky-50 px-7 py-3.5 text-sm font-semibold text-sky-700 transition-all hover:bg-sky-100 dark:border-sky-800 dark:bg-sky-900/20 dark:text-sky-300 dark:hover:bg-sky-900/30"
          >
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            View Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      
      <div className="relative z-10 mx-auto max-w-4xl pt-10 text-center">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-sky-500 dark:hover:text-sky-400"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
    </section>
  );
}
