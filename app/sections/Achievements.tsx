"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "SIH'23 Winner",
    description:
      'Winner for problem statement "Detection of Malware Trojan in software used in power sector"',
    highlight: true,
    color: "amber",
  },
  {
    icon: Award,
    title: "Internal Hackathon Winner",
    description: 'Winner for problem statement "Hostel Management"',
    highlight: false,
    color: "sky",
  },
  {
    icon: Star,
    title: "Academic Excellence Award",
    description: 'Three times "Academic Excellence Award" winner',
    highlight: false,
    color: "fuchsia",
  },
];

function TiltCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const colorMap: Record<
    string,
    {
      bg: string;
      border: string;
      iconBg: string;
      iconColor: string;
      darkBg: string;
      darkBorder: string;
    }
  > = {
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      darkBg: "dark:bg-amber-900/10",
      darkBorder: "dark:border-amber-800",
    },
    sky: {
      bg: "bg-sky-50",
      border: "border-sky-200",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
      darkBg: "dark:bg-sky-900/10",
      darkBorder: "dark:border-sky-800",
    },
    fuchsia: {
      bg: "bg-fuchsia-50",
      border: "border-fuchsia-200",
      iconBg: "bg-fuchsia-100",
      iconColor: "text-fuchsia-600",
      darkBg: "dark:bg-fuchsia-900/10",
      darkBorder: "dark:border-fuchsia-800",
    },
  };

  const colors = colorMap[achievement.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border ${colors.border} ${colors.bg} ${colors.darkBg} ${colors.darkBorder} p-8 transition-shadow hover:shadow-2xl dark:hover:shadow-slate-900/50`}
        style={{ transform: "translateZ(50px)" }}
      >
        {achievement.highlight && (
          <div className="absolute right-0 top-0">
            <div className="flex h-16 w-16 items-center justify-center">
              <div className="absolute h-24 w-24 rotate-45 bg-amber-400/20" />
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                Top
              </span>
            </div>
          </div>
        )}

        <div
          className={`mb-6 inline-flex rounded-2xl ${colors.iconBg} p-4 dark:bg-opacity-20`}
        >
          <achievement.icon className={`h-8 w-8 ${colors.iconColor}`} />
        </div>

        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
          {achievement.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {achievement.description}
        </p>

        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-6 py-32 sm:px-8 lg:px-16"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 -z-10 bg-white dark:bg-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Recognition
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">
            Milestones that mark the journey of growth and excellence.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <TiltCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}