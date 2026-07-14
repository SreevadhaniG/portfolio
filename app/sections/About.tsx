"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, School } from "lucide-react";

const education = [
  {
    school: "Kongu Engineering College",
    degree: "M.Sc — Software Systems",
    location: "Perundurai, Tamil Nadu",
    year: "2022 — 2027",
    icon: GraduationCap,
  },
  {
    school: "Green Park International School",
    degree: "Higher Secondary Certificate (H.Sc)",
    location: "Tamil Nadu",
    year: "2022",
    detail: null,
    icon: School,
  },
  {
    school: "Green Park International School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    location: "Tamil Nadu",
    year: "2020",
    icon: School,
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex w-full items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col gap-6 md:gap-0`}
    >
      {/* Content card */}
      <div
        className={`w-full md:w-[calc(50%-40px)] ${
          isLeft ? "md:pr-0" : "md:pl-0"
        }`}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-slate-900/40">
          <div
            className={`absolute top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-fuchsia-400 ${
              isLeft ? "left-0" : "right-0"
            }`}
          />

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-900/20">
              <item.icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.school}
              </h3>
              <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                {item.degree}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {item.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center">
        <div className="h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-lg dark:border-slate-950" />
        <div className="absolute h-8 w-8 animate-ping rounded-full bg-sky-400/30" />
      </div>

      {/* Empty space for other side */}
      <div className="hidden md:block md:w-[calc(50%-40px)]" />
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-500">
            Background
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Education
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">
            A journey of continuous learning from school to specialized software
            systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-sky-200 via-sky-400 to-fuchsia-400 dark:from-sky-800 dark:via-sky-600 md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <TimelineCard
                key={item.school + item.year}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}