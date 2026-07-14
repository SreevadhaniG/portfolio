"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench, Cloud, FileCode, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "SQL", "Java"],
    color: "sky",
    size: "normal",
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["React", "Next.js", "Node.js", "Prisma ORM", "Medusa", "Astro"],
    color: "fuchsia",
    size: "large",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "FirebaseDB"],
    color: "orange",
    size: "normal",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Datadog"],
    color: "emerald",
    size: "normal",
  },
  {
    title: "Deployment",
    icon: Cloud,
    skills: ["Azure Cloud (Basic)", "Vercel", "Render"],
    color: "sky",
    size: "normal",
  },
  {
    title: "Professional Competencies",
    icon: FileCode,
    skills: ["Agile methodologies", "Technical documentation & research"],
    color: "fuchsia",
    size: "wide",
  },
];

const colorStyles: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
    glow: string;
    darkBg: string;
    darkBorder: string;
    darkText: string;
    darkIconBg: string;
  }
> = {
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-700",
    iconBg: "bg-sky-100",
    glow: "group-hover:shadow-sky-500/20",
    darkBg: "dark:bg-sky-900/10",
    darkBorder: "dark:border-sky-800",
    darkText: "dark:text-sky-300",
    darkIconBg: "dark:bg-sky-900/30",
  },
  fuchsia: {
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    text: "text-fuchsia-700",
    iconBg: "bg-fuchsia-100",
    glow: "group-hover:shadow-fuchsia-500/20",
    darkBg: "dark:bg-fuchsia-900/10",
    darkBorder: "dark:border-fuchsia-800",
    darkText: "dark:text-fuchsia-300",
    darkIconBg: "dark:bg-fuchsia-900/30",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    iconBg: "bg-orange-100",
    glow: "group-hover:shadow-orange-500/20",
    darkBg: "dark:bg-orange-900/10",
    darkBorder: "dark:border-orange-800",
    darkText: "dark:text-orange-300",
    darkIconBg: "dark:bg-orange-900/30",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    iconBg: "bg-emerald-100",
    glow: "group-hover:shadow-emerald-500/20",
    darkBg: "dark:bg-emerald-900/10",
    darkBorder: "dark:border-emerald-800",
    darkText: "dark:text-emerald-300",
    darkIconBg: "dark:bg-emerald-900/30",
  },
};

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const colors = colorStyles[category.color];

  const sizeClasses = {
    normal: "",
    large: "sm:col-span-2 sm:row-span-1",
    wide: "sm:col-span-2",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group relative overflow-hidden rounded-2xl border ${colors.border} ${colors.bg} ${colors.darkBg} ${colors.darkBorder} p-6 transition-all duration-300 hover:shadow-xl ${colors.glow} ${sizeClasses[category.size as keyof typeof sizeClasses]}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-white/0 dark:to-white/5" />

      <div className="relative">
        <div
          className={`mb-4 inline-flex rounded-xl ${colors.iconBg} ${colors.darkIconBg} p-3`}
        >
          <category.icon
            className={`h-5 w-5 ${colors.text} ${colors.darkText}`}
          />
        </div>
        <h3 className="mb-3 text-base font-bold text-slate-900 dark:text-white">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all group-hover:scale-105 dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-32 sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-sky-400/5 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            What I Know
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">
            A versatile toolkit spanning frontend, backend, databases, and
            DevOps.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}