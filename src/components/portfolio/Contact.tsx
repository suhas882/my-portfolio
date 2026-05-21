import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      setSending(true);
      const form = e.currentTarget;
      const data = new FormData(form);
      const payload = {
        name: (data.get("name") as string) || "",
        email: (data.get("email") as string) || "",
        subject: (data.get("subject") as string) || "",
        message: (data.get("message") as string) || "",
      };

      try {
        const MAKE_URL = "https://hook.eu1.make.com/apj94a47ab83mitcud3vem86tqp6506i";
        const res = await fetch(MAKE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          mode: "cors",
        });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        form.reset();
        toast.success(`Thanks ${payload.name || "there"}! Form submitted successfully.`);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        toast.error("Couldn't send message — please try again later.");
      } finally {
        setSending(false);
      }
    })();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      subtitle="Open to internships, collaborations and interesting problems."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong glow-border rounded-2xl p-8 lg:col-span-2"
        >
          <h3 className="font-display text-2xl font-semibold">Reach out</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Prefer email? Drop a message — I usually reply within a day.
          </p>

          <div className="mt-6 space-y-3">
            <a href="mailto:majetisuhas2021@gmail.com" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:text-neon-blue">
              <Mail className="h-5 w-5" />
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">majetisuhas2021@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/suhas882" target="_blank" rel="noreferrer"
               className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:text-neon-blue">
              <Github className="h-5 w-5" />
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm font-medium">github.com/suhas882</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/majeti-suhas" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:text-neon-purple">
              <Linkedin className="h-5 w-5" />
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium">linkedin.com/in/majeti-suhas</div>
              </div>
            </a>
            <div className="glass flex items-center gap-3 rounded-xl p-4">
              <MapPin className="h-5 w-5" />
              <div>
                <div className="text-xs text-muted-foreground">Based in</div>
                <div className="text-sm font-medium">India</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong glow-border rounded-2xl p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
              <input required name="name" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-neon-blue/60" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" name="email" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-neon-blue/60" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">Subject</label>
            <input name="subject" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-neon-blue/60" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea required name="message" rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-neon-blue/60" placeholder="Tell me about your project or idea..." />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-background shadow-glow transition-all hover:scale-[1.02] hover:shadow-glow-strong disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
