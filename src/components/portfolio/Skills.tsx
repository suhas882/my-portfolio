import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Globe, Database, Wrench, Brain } from "lucide-react";

const groups = [
  { icon: Code, title: "Languages", items: ["Python", "Java", "C++"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { icon: Database, title: "Database", items: ["MySQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "XAMPP"] },
  {
    icon: Brain,
    title: "Domains",
    items: ["Artificial Intelligence", "Machine Learning", "Full Stack", "Deep Learning"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools of the craft"
      subtitle="From low-level systems to modern AI frameworks — a curated stack for building intelligent products."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-strong glow-border group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            <div className="relative">
              <div className="glass mb-4 inline-grid h-10 w-10 place-items-center rounded-lg">
                <g.icon className="h-5 w-5 text-neon-blue" />
              </div>
              <h3 className="mb-4 font-display text-lg font-semibold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-neon-blue/40 hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
