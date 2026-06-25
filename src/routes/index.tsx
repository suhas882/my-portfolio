import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Activity } from "@/components/portfolio/Activity";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Majeti Suhas — AI & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Majeti Suhas — CSE (AI & ML) student building intelligent, scalable web experiences.",
      },
      { property: "og:title", content: "Majeti Suhas — AI & Full Stack Developer" },
      { property: "og:description", content: "Building intelligent and scalable web experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <CursorGlow />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Activity />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
