import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Github,
  GitBranch,
  Code2,
  Activity as ActivityIcon,
  FolderGit2,
  ExternalLink,
} from "lucide-react";

// Pseudo GitHub contribution grid — 7 rows x 24 cols
const COLS = 24;
const ROWS = 7;
function genGrid() {
  const cells: number[] = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    const r = Math.random();
    cells.push(r > 0.85 ? 4 : r > 0.7 ? 3 : r > 0.5 ? 2 : r > 0.3 ? 1 : 0);
  }
  return cells;
}

const levels = [
  "bg-white/[0.04]",
  "bg-neon-blue/20",
  "bg-neon-blue/40",
  "bg-neon-purple/60",
  "bg-neon-purple",
];

const stats = [
  {
    icon: FolderGit2,
    label: "Total Projects",
    value: "5+",
    color: "from-neon-blue/30 to-neon-blue/5",
  },
  {
    icon: Github,
    label: "GitHub Repos",
    value: "5+",
    color: "from-neon-purple/30 to-neon-purple/5",
  },
  {
    icon: Code2,
    label: "Technologies",
    value: "15+",
    color: "from-neon-blue/30 to-neon-purple/10",
  },
  {
    icon: GitBranch,
    label: "Contributions",
    value: "50+",
    color: "from-neon-purple/30 to-neon-blue/10",
  },
];

export function Activity() {
  const cells = genGrid();
  return (
    <Section
      id="activity"
      eyebrow="GitHub Activity"
      title="Always building"
      subtitle="A visual snapshot of contribution & learning momentum."
    >
      {/* Stats grid */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-strong glow-border group relative overflow-hidden rounded-2xl p-5 transition-shadow hover:shadow-glow"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-4 w-4 text-background" />
              </div>
              <div className="font-display text-3xl font-bold text-gradient-neon">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong glow-border relative overflow-hidden rounded-2xl p-6 sm:p-8"
      >
        {/* animated gradient backdrop */}
        <div className="pointer-events-none absolute -inset-px opacity-40">
          <div className="absolute -top-20 left-10 h-60 w-60 rounded-full bg-neon-blue/20 blur-3xl animate-blob" />
          <div
            className="absolute -bottom-20 right-10 h-60 w-60 rounded-full bg-neon-purple/20 blur-3xl animate-blob"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl glass">
                <ActivityIcon className="h-4 w-4 text-neon-blue" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Contribution graph</div>
                <div className="text-xs text-muted-foreground">Past 24 weeks</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              Less
              {levels.map((c, i) => (
                <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />
              ))}
              More
            </div>
          </div>

          <div className="overflow-x-auto">
            <div
              className="grid gap-1.5"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                gridAutoRows: "1fr",
                minWidth: 600,
              }}
            >
              {Array.from({ length: COLS * ROWS }).map((_, idx) => {
                const col = idx % COLS;
                const row = Math.floor(idx / COLS);
                const cellIdx = col * ROWS + row;
                const level = cells[cellIdx] ?? 0;
                return (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: col * 0.015 + row * 0.01 }}
                    whileHover={{ scale: 1.4 }}
                    className={`aspect-square rounded-sm ${levels[level]} cursor-pointer`}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
            <div className="text-sm text-muted-foreground">
              Want to see what I'm working on right now?
            </div>
            <a
              href="https://github.com/suhas882"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-medium text-background shadow-glow transition-all hover:scale-105 hover:shadow-glow-strong"
            >
              <Github className="h-4 w-4" />
              Visit GitHub Profile
              <ExternalLink className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
