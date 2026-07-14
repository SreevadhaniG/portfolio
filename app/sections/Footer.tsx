"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Heart, MapPin } from "lucide-react";
import { githubUrl, linkedinUrl } from "@/app/config/socialLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-950 sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Let&apos;s Connect
            </h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Open to opportunities and collaborations
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-900"
            >
              <FaGithub className="h-6 w-6 transition-transform group-hover:scale-110" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0A66C2] transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-lg hover:shadow-[#0A66C2]/20 dark:border-slate-800 dark:bg-slate-900"
            >
              <FaLinkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Tamil Nadu, India
            </span>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
              Crafted with <Heart className="h-3 w-3 fill-red-400 text-red-400" /> by Sreevadhani G
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
