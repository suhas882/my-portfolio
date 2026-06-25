import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
};

const RESUME_DATA = {
  name: "Majeti Suhas",
  email: "majetisuhas2021@gmail.com",
  phone: "+91-8919490692",
  github: "https://github.com/suhas882",
  linkedin: "https://www.linkedin.com/in/majeti-suhas",
  summary:
    "AI & Machine Learning undergraduate with hands-on experience in Python, Machine Learning, Deep Learning, Full Stack Development, and AI-powered applications. Passionate about leveraging AI and automation to solve real-world business problems through intelligent software solutions.",
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "SRM Institute of Science and Technology, Chennai",
      duration: "2023 – 2027",
      score: "CGPA: 7.97",
    },
    {
      degree: "Intermediate (12th Grade)",
      duration: "Completed Mar 2023",
      score: "Percentage: 78%",
    },
    {
      degree: "SSC (10th Grade)",
      duration: "Completed Aug 2021",
      score: "Percentage: 90%",
    },
  ],
  skills: {
    programming: ["Python", "Java", "C++"],
    ai_ml: ["TensorFlow", "Keras", "OpenCV", "NumPy", "CNN", "Machine Learning"],
    web: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    database: ["MySQL"],
    tools: ["Git", "GitHub", "VS Code"],
    core: [
      "Problem Solving",
      "Data Analysis",
      "Process Optimization",
      "Software Development",
      "Team Collaboration",
    ],
  },
  projects: [
    {
      title: "Automobile Spare Parts Management System",
      tech: "React, HTML, CSS, JavaScript, Tailwind CSS, MySQL",
      details:
        "Designed and developed a full-stack e-commerce application with a shopping cart, checkout, authentication, and inventory management.",
      github: "https://github.com/suhas882/AUTOMOBILE-SPARE-PART-SYSTEM",
    },
    {
      title: "Pneumonia Detection Using CNN",
      tech: "Python, TensorFlow, Keras, OpenCV, NumPy",
      details:
        "Developing a CNN-based system to analyze chest X-ray images for early disease diagnosis, applying preprocessing, augmentation, and hyperparameter optimization.",
      github: "https://github.com/suhas882",
    },
    {
      title: "Medical Chatbot — NLP & Deep Learning",
      tech: "Python, NLP, Deep Learning, TensorFlow",
      details: "AI-powered healthcare chatbot offering symptom guidance and intelligent responses.",
      github: "https://github.com/suhas882/HEALTHBUDDY",
    },
  ],
  certifications: [
    "NVIDIA LLM Evaluation and Customization",
    "Cisco Python Essentials 1",
    "Introduction to Machine Learning",
    "Crash Course on Python (Google / Coursera)",
  ],
  languages: ["English (Fluent)", "Telugu (Native)", "Hindi (Intermediate)"],
};

const QUICK_REPLIES = [
  { text: "Summarize Portfolio", query: "summary" },
  { text: "View Projects", query: "projects" },
  { text: "Show Skills", query: "skills" },
  { text: "Contact Details", query: "contact" },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add welcome message on load
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: `Hi there! 👋 I am Suhas's AI assistant. Ask me anything about Suhas's education, projects, skills, or certifications!`,
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMessage: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const query = input.toLowerCase();

    // 1. Summary Queries
    if (
      query.includes("summary") ||
      query.includes("who is") ||
      query.includes("about") ||
      query.includes("portfolio") ||
      query.includes("intro") ||
      query.includes("resume")
    ) {
      return `Here is a summary of Suhas's profile:\n\n**Professional Summary**: ${RESUME_DATA.summary}\n\n🎓 **Education**: Studying B.Tech in CSE (AI & ML) at SRM Chennai (2023-2027) with a CGPA of **7.97**.\n\n🛠️ **Key Skills**: Python, Java, React, TensorFlow, Keras, and MySQL.\n\nType "projects" or "skills" to learn more!`;
    }

    // 2. Project Queries
    if (query.includes("project") || query.includes("work") || query.includes("built")) {
      let response = `Suhas has built several impressive AI and full-stack projects:\n\n`;
      RESUME_DATA.projects.forEach((p, idx) => {
        response += `🛠️ **${idx + 1}. ${p.title}**\n* **Tech Stack**: ${p.tech}\n* **Details**: ${p.details}\n\n`;
      });
      return response;
    }

    // 3. Skill Queries
    if (
      query.includes("skill") ||
      query.includes("technologies") ||
      query.includes("languages") ||
      query.includes("stack") ||
      query.includes("code") ||
      query.includes("python") ||
      query.includes("java")
    ) {
      return `Suhas's skill set covers multiple domains:\n\n💻 **Programming**: ${RESUME_DATA.skills.programming.join(", ")}\n🤖 **AI & ML**: ${RESUME_DATA.skills.ai_ml.join(", ")}\n🌐 **Web Development**: ${RESUME_DATA.skills.web.join(", ")}\n📂 **Database & Tools**: ${RESUME_DATA.skills.database.join(", ")}, ${RESUME_DATA.skills.tools.join(", ")}\n🧠 **Core Competencies**: ${RESUME_DATA.skills.core.join(", ")}`;
    }

    // 4. Education Queries
    if (
      query.includes("education") ||
      query.includes("srm") ||
      query.includes("college") ||
      query.includes("university") ||
      query.includes("cgpa") ||
      query.includes("grades") ||
      query.includes("school")
    ) {
      let response = `Here are Suhas's educational qualifications:\n\n`;
      RESUME_DATA.education.forEach((edu) => {
        response += `🎓 **${edu.degree}**\n* ${edu.institution || "School"}\n* ${edu.duration} | **${edu.score}**\n\n`;
      });
      return response;
    }

    // 5. Certification Queries
    if (
      query.includes("cert") ||
      query.includes("courses") ||
      query.includes("credential") ||
      query.includes("award") ||
      query.includes("nvidia") ||
      query.includes("cisco")
    ) {
      return `Suhas has completed the following verified certifications:\n\n${RESUME_DATA.certifications.map((c) => `🏅 ${c}`).join("\n")}`;
    }

    // 6. Contact / Socials
    if (
      query.includes("contact") ||
      query.includes("email") ||
      query.includes("phone") ||
      query.includes("hire") ||
      query.includes("social") ||
      query.includes("github") ||
      query.includes("linkedin")
    ) {
      return `Feel free to connect with Suhas:\n\n📧 **Email**: [majetisuhas2021@gmail.com](mailto:${RESUME_DATA.email})\n📞 **Phone**: ${RESUME_DATA.phone}\n🔗 **LinkedIn**: [LinkedIn Profile](${RESUME_DATA.linkedin})\n💻 **GitHub**: [GitHub Profile](${RESUME_DATA.github})`;
    }

    // 7. Fallback / Matches keywords
    return `I can help you learn more about Suhas! Try asking:\n* "What are your projects?"\n* "Which programming languages do you know?"\n* "What certifications do you have?"\n* "How can I contact you?"`;
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-14 w-14 place-items-center rounded-full bg-gradient-primary shadow-glow text-background transition-transform hover:shadow-glow-strong"
          aria-label="Chat with AI Assistant"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-background" />
          ) : (
            <MessageSquare className="h-6 w-6 text-background" />
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-strong glow-border fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] flex-col overflow-hidden rounded-2xl shadow-glow-strong"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-neon-blue/10">
                  <Bot className="h-4 w-4 text-neon-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
                    Suhas's AI Assistant{" "}
                    <Sparkles className="h-3.5 w-3.5 text-neon-purple animate-pulse" />
                  </div>
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-md text-[10px] ${
                      msg.sender === "bot"
                        ? "bg-neon-blue/10 text-neon-blue"
                        : "bg-neon-purple/10 text-neon-purple"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <Bot className="h-3.5 w-3.5" />
                    ) : (
                      <User className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 whitespace-pre-line leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-white/[0.04] text-muted-foreground border border-white/5"
                        : "bg-gradient-primary text-background shadow-glow font-medium"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-md bg-neon-blue/10 text-neon-blue">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3">
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-neon-blue"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-neon-blue"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-neon-blue"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.text}
                    onClick={() => handleSendMessage(reply.text)}
                    className="glass rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-neon-blue/40 hover:text-foreground"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2 border-t border-white/10 bg-white/[0.01] p-3"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Suhas..."
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-neon-blue/50 focus:bg-white/[0.04]"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-background shadow-glow transition-transform hover:scale-105"
                aria-label="Send message"
              >
                <Send className="h-4 w-4 text-background" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
