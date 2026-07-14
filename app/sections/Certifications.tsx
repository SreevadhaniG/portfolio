"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Shield, Award } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-32 sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-primary-950/20 dark:via-slate-950 dark:to-accent-950/10" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary-400/5 blur-[100px]" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
            Credentials
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-primary-200 bg-white p-10 shadow-xl shadow-primary-100/50 transition-all hover:shadow-2xl dark:border-primary-800 dark:bg-slate-900/80 dark:shadow-primary-900/20">
            {/* Decorative corner */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary-400/10 blur-2xl transition-all group-hover:bg-primary-400/20" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent-400/10 blur-2xl transition-all group-hover:bg-accent-400/20" />

            <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30"
              >
                <BadgeCheck className="h-10 w-10 text-white" />
              </motion.div>

              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                  <Shield className="h-3 w-3" />
                  Oracle Certified
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Java SE 17 Developer Professional
                </h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Oracle Corporation
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
                  <Award className="h-4 w-4" />
                  <span>Industry-recognized professional certification</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}