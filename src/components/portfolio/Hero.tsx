import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "AI & Full Stack Developer",
  "Building Intelligent Web Experiences",
  "ML Engineer in the Making",
  "React • Python • Deep Learning",
];

function useTyping(words: string[], typing = 70, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    if (!del && text === current) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(
      () => {
        setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      del ? typing / 2 : typing,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, typing, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-32 pb-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-blue" />
          Available for internships & collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Majeti Suhas</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-mono text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          <span className="text-foreground">{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-[2px] -mb-1 animate-pulse bg-neon-blue" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          CSE (AI & ML) student crafting intelligent systems, full-stack apps, and AI-powered
          solutions that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-background shadow-glow transition-all hover:scale-105 hover:shadow-glow-strong"
          >
            View Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="./Majeti_Suhas_Resume.pdf"
            download="Majeti_Suhas_Resume.pdf"
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/5"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-4 text-muted-foreground"
        >
          <a
            href="https://github.com/suhas882"
            target="_blank"
            rel="noreferrer"
            className="glass grid h-11 w-11 place-items-center rounded-xl transition-colors hover:text-neon-blue"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/majeti-suhas"
            target="_blank"
            rel="noreferrer"
            className="glass grid h-11 w-11 place-items-center rounded-xl transition-colors hover:text-neon-purple"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:majetisuhas2021@gmail.com"
            className="glass grid h-11 w-11 place-items-center rounded-xl transition-colors hover:text-neon-blue"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
