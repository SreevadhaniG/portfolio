"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, Layers, GitPullRequest } from "lucide-react";

const projects = [
  {
    title: "Printing Press Management",
    tech: ["React", "Node.js", "Flask", "Firebase", "Docker", "Vercel"],
    description:
      "Developed a full-stack web application to manage printing press operations including orders, inventory, and billing.",
    points: [
      "Admin — Integrated job scheduling for employees",
      "Built RESTful backend services using Flask and Node.js for efficient data handling and business logic processing",
      "Designed responsive React frontend with real-time dashboards for tracking orders and production status",
      "Integrated Firebase for authentication and data",
    ],
    icon: Layers,
  },
  {
    title: "Jira-to-PR Automation System",
    tech: [
      "TypeScript",
      "Node.js",
      "GitHub API",
      "Jira API",
      "OpenAI API",
      "ESLint",
    ],
    description:
      "Built an AI-powered automation system that transforms Jira tickets into code changes and automatically generates pull requests.",
    points: [
      "Designed an orchestration workflow for repository analysis, branch creation, code generation, Git operations, and PR creation",
      "Implemented automated validation using ESLint and repository-wide checks to ensure generated code quality before PR submission",
      "Integrated Jira, GitHub, and AI services to streamline the software development workflow and reduce manual effort",
    ],
    icon: GitPullRequest,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-32 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Projects
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-500" />
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:hover:shadow-slate-900/50">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/20">
                  <project.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mb-6 flex-1 space-y-2">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}