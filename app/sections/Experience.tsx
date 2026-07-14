"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Briefcase,
  Code2,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";

const techGroups = [
  {
    icon: Code2,
    title: "Frontend & Frameworks",
    items: ["Next.js", "Astro", "TypeScript", "Medusa", "Prisma ORM"],
    color: "sky",
  },
  {
    icon: Cloud,
    title: "Backend",
    items: ["REST API"],
    color: "fuchsia",
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "MongoDB"],
    color: "orange",
  },
  {
    icon: Wrench,
    title: "Deployment & Tools",
    items: [
      "Docker",
      "Vercel",
      "Azure VM",
      "Git/GitHub",
      "Postman",
      "VS Code",
      "DBeaver",
      "Datadog",
    ],
    color: "emerald",
  },
];

const colorMap: Record<
  string,
  {
    bg: string;
    text: string;
    border: string;
    darkBg: string;
    darkText: string;
  }
> = {
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
    darkBg: "dark:bg-sky-900/20",
    darkText: "dark:text-sky-300",
  },
  fuchsia: {
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-700",
    border: "border-fuchsia-200",
    darkBg: "dark:bg-fuchsia-900/20",
    darkText: "dark:text-fuchsia-300",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    darkBg: "dark:bg-orange-900/20",
    darkText: "dark:text-orange-300",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    darkBg: "dark:bg-emerald-900/20",
    darkText: "dark:text-emerald-300",
  },
};

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden py-32"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/20" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-fuchsia-400/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-sky-400/5 blur-[100px]" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-500">
            Work Experience
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Industrial Internship
          </h2>
        </motion.div>

        <div ref={contentRef} className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/50">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-2xl" />

              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30">
                  <Briefcase className="h-7 w-7" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Incresco
                </h3>
                <p className="mt-1 text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400">
                  Software Development Engineer — Intern
                </p>

                <div className="mt-6 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-fuchsia-500" />
                    Bangalore
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-fuchsia-500" />
                    02 June 2025 — 20 Feb 2026
                  </span>
                </div>

                <div className="mt-6 rounded-xl bg-fuchsia-50 p-4 dark:bg-fuchsia-900/10">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Led end-to-end development of full-stack marketing and
                    e-commerce platform as a team of one, handling direct client
                    communications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {techGroups.map((group, index) => {
                const colors = colorMap[group.color];
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.bg} ${colors.darkBg}`}
                      >
                        <group.icon
                          className={`h-5 w-5 ${colors.text} ${colors.darkText}`}
                        />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                        {group.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-lg border ${colors.border} ${colors.bg} ${colors.darkBg} px-3 py-1.5 text-xs font-medium ${colors.text} ${colors.darkText}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-900/30"
            >
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Client Communication",
                  "Project Management",
                  "AI Tools (Copilot/Codex)",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-medium text-sky-700 dark:border-sky-800 dark:bg-sky-900/20 dark:text-sky-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}