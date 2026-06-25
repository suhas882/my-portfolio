import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, ShoppingCart, Bot, Icon, Activity } from "lucide-react";

type Project = {
  icon: typeof ShoppingCart;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    icon: ShoppingCart,
    title: "Automobile Spare Parts Management",
    description:
      "Full-stack e-commerce platform with shopping cart, checkout, and modern UI. Built for speed and reliability.",
    tags: ["React", "Tailwind", "JavaScript", "MySQL", "HTML/CSS"],
    github: "https://github.com/suhas882/AUTOMOBILE-SPARE-PART-SYSTEM",
  },
  {
    icon: Bot,
    title: "Medical Chatbot — NLP & Deep Learning",
    description:
      "AI-powered healthcare chatbot offering symptom guidance and intelligent responses using NLP and deep learning.",
    tags: ["Python", "NLP", "Deep Learning", "TensorFlow"],
    github: "https://github.com/suhas882/HEALTHBUDDY",
  },
  {
    icon: Activity,
    title: "Pneumonia Detection Using CNN",
    description:
      "AI-powered pneumonia detection system using Convolutional Neural Networks (CNN) to analyze chest X-ray images for early disease diagnosis and improved prediction accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/suhas882",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A glimpse into systems I've built — full-stack platforms and AI-driven experiences."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-strong glow-border group relative flex flex-col overflow-hidden rounded-2xl p-8 transition-shadow hover:shadow-glow-strong"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-20 left-1/2 h-40 w-[120%] -translate-x-1/2 bg-gradient-primary opacity-20 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-5 w-5 text-background" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1} / 0{projects.length}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-neon-blue"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
