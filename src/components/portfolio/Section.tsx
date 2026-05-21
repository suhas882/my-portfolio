import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, subtitle, children,
}: { id: string; eyebrow: string; title: ReactNode; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="glass mx-auto mb-4 inline-flex rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-blue">
            {eyebrow}
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
