"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BookOpen, Globe, Mic2, HandHeart } from "lucide-react";

const activities = [
  {
    icon: BookOpen,
    title: "Workshop Attendee",
    description:
      'Attended Workshop on "Sailing with Docker: A Node.js Voyage" organized by STEP',
    color: "primary",
  },
  {
    icon: Users,
    title: "Coordinator",
    description:
      "Women Innovation and Entrepreneurship Forum of IEF (2025)",
    color: "accent",
  },
];

const colorMap: Record<string, { gradient: string; iconBg: string; text: string }> = {
  primary: {
    gradient: "from-primary-500/10 to-primary-600/5",
    iconBg: "bg-primary-100 dark:bg-primary-900/30",
    text: "text-primary-600 dark:text-primary-400",
  },
  accent: {
    gradient: "from-accent-500/10 to-accent-600/5",
    iconBg: "bg-accent-100 dark:bg-accent-900/30",
    text: "text-accent-600 dark:text-accent-400",
  },
};

export default function Extracurricular() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="extracurricular"
      className="relative overflow-hidden px-6 py-32 sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/30 to-white dark:from-slate-950 dark:via-slate-900/20 dark:to-slate-950" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sage-500">
            Beyond Code
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Extra Curricular Activities
          </h2>
        </motion.div>

        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {activities.map((activity, index) => {
            const colors = colorMap[activity.color];
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                
                <div className="relative flex items-start gap-5">
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${colors.iconBg}`}>
                    <activity.icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {activity.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages section - horizontal bar style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="flex items-center gap-3 border-b border-slate-100 px-8 py-5 dark:border-slate-800">
            <Globe className="h-5 w-5 text-sage-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Languages
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2">
            <div className="flex items-center gap-4 px-8 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/20">
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400">EN</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">English</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Fluent (Read, Write, Speak)</p>
                {/* Progress bar */}
                <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full rounded-full bg-primary-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-t border-slate-100 px-8 py-6 sm:border-t-0 sm:border-l dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 dark:bg-accent-900/20">
                <span className="text-sm font-bold text-accent-600 dark:text-accent-400">TA</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Tamil</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Native (Read, Write, Speak)</p>
                <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full rounded-full bg-accent-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}