import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Globe, HeartHandshake, Code2 } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Certifications", value: "5" },
  { label: "Technologies", value: "12+" },
  { label: "CGPA", value: "7.97" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering intelligence"
      subtitle="A passionate CSE (AI & ML) student at SRM Institute of Science and Technology, building intelligent systems and full-stack applications."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong glow-border rounded-2xl p-8 lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground font-medium">Majeti Suhas</span>, a Computer
            Science Engineering student specializing in{" "}
            <span className="text-neon-blue">Artificial Intelligence</span> and{" "}
            <span className="text-neon-purple">Machine Learning</span>. I love building intelligent
            systems, full-stack applications, and AI-powered solutions.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My interests span machine learning, deep learning, modern web development, and using
            technology to solve real-world problems with clean, scalable design.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-gradient-neon">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong glow-border rounded-2xl p-8 lg:col-span-2"
        >
          <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold">
            <GraduationCap className="h-5 w-5 text-neon-blue" /> Education
          </h3>

          <div className="relative pl-6">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />
            <div className="relative">
              <span className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
              <div className="font-medium">B.Tech — CSE (AI & ML)</div>
              <div className="text-sm text-muted-foreground">
                SRM Institute of Science and Technology
              </div>
              <div className="mt-1 font-mono text-xs text-neon-blue">2023 – 2027 · CGPA 7.97</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-3">
              <Code2 className="mb-2 h-4 w-4 text-neon-blue" />
              <div className="text-xs text-muted-foreground">Focus</div>
              <div className="text-sm font-medium">AI · ML · Full Stack</div>
            </div>
            <div className="glass rounded-xl p-3">
              <Globe className="mb-2 h-4 w-4 text-neon-purple" />
              <div className="text-xs text-muted-foreground">Languages</div>
              <div className="text-sm font-medium">EN · TE · HI</div>
            </div>
            <div className="glass col-span-2 rounded-xl p-3">
              <HeartHandshake className="mb-2 h-4 w-4 text-neon-blue" />
              <div className="text-xs text-muted-foreground">Volunteering</div>
              <div className="text-sm font-medium">
                Adarsa High School, Inkollu — Community Connect
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
