import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-foreground">Majeti Suhas</span>. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://github.com/suhas882" target="_blank" rel="noreferrer" className="transition-colors hover:text-neon-blue">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/majeti-suhas" target="_blank" rel="noreferrer" className="transition-colors hover:text-neon-purple">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:majetisuhas2021@gmail.com" className="transition-colors hover:text-neon-blue">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
