import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Github, Linkedin } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled ? "glass-strong shadow-card" : "glass"
        }`}>
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <span className="text-gradient">Majeti Suhas</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/suhas882"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-neon-blue"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/majeti-suhas"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-neon-purple"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="ml-1 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-background shadow-glow transition-transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden rounded-lg p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 rounded-2xl p-3 md:hidden"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-2 px-2">
                  <a
                    href="https://github.com/suhas882"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="glass grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:text-neon-blue"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/majeti-suhas"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="glass grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:text-neon-purple"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="ml-auto rounded-lg bg-gradient-primary px-4 py-2 text-center text-sm font-medium text-background"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
