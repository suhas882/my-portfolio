import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { name: "Python Essentials 1", issuer: "Cisco" },
  { name: "LLM Evaluation and Customization", issuer: "NVIDIA" },
  { name: "Crash Course on Python", issuer: "Google / Coursera" },
  { name: "Beginning C++ Programming", issuer: "Udemy" },
  { name: "Introduction to Machine Learning", issuer: "Coursera" },
  { name: "Python", issuer: "MongoDB" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials"
      subtitle="Continuously learning — from foundational programming to advanced AI systems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -3 }}
            className="glass-strong glow-border flex items-start gap-4 rounded-2xl p-5 transition-shadow hover:shadow-glow"
          >
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <Award className="h-5 w-5 text-background" />
            </div>
            <div>
              <div className="font-medium leading-snug">{c.name}</div>
              <div className="mt-1 font-mono text-xs text-neon-blue">{c.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
