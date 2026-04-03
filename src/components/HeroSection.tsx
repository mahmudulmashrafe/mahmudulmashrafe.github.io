import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = ["Data Scientist", "ML Expert"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [exitCharIndex, setExitCharIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const currentRole = roles[currentRoleIndex];
  const totalChars = currentRole.length;

  useEffect(() => {
    if (!isExiting) {
      // Typing phase
      if (currentCharIndex < totalChars) {
        const timer = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Wait before exiting
        const timer = setTimeout(() => {
          setIsExiting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      // Deleting phase
      if (exitCharIndex < totalChars) {
        const timer = setTimeout(() => {
          setExitCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timer);
      } else {
        // Switch to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setCurrentCharIndex(0);
        setExitCharIndex(0);
        setIsExiting(false);
      }
    }
  }, [currentCharIndex, exitCharIndex, totalChars, isExiting]);

  const displayText = isExiting
    ? currentRole.slice(0, totalChars - exitCharIndex)
    : currentRole.slice(0, currentCharIndex);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="h-12 flex items-center">
            <p className="text-sm font-mono text-subtle tracking-wider uppercase">
              I'm{" "}
              <span
                className={`text-primary font-bold transition-all duration-300`}
              >
                {displayText}
              </span>
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
            Hi, I'm <span className="text-primary">Mahmudul Mashrafe</span>
          </h1>
          <p className="text-lg text-subtle leading-relaxed max-w-md">
            I transform raw data into meaningful insights and practical solutions using advanced statistical techniques and cutting-edge machine learning algorithms.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-heading text-sm font-medium hover:bg-secondary transition-colors"
            >
              View Work
            </a>
          </div>
          <div className="flex gap-4 pt-2 flex-wrap">
            <a href="https://github.com/mahmudulmashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mahmudulmashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.kaggle.com/mahmudulmashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="Kaggle">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-4.868 0-8.914 3.818-8.914 8.686s4.046 8.686 8.914 8.686 8.914-3.818 8.914-8.686-4.046-8.686-8.914-8.686zm4.339 9.341h-2.922v8.791h2.922v-8.791zm-5.922-3.738c-.922 0-1.664.742-1.664 1.663s.742 1.664 1.664 1.664 1.664-.742 1.664-1.664-.742-1.663-1.664-1.663zm0 8.879v-6.216c0-1.056.862-1.918 1.918-1.918s1.918.862 1.918 1.918v6.216h2.922v-6.635c0-2.662-2.169-4.831-4.831-4.831-1.331 0-2.528.545-3.379 1.415-1.056-1.331-2.663-2.186-4.483-2.186-3.298 0-5.993 2.695-5.993 5.993v5.244h2.922v-8.791h2.922v8.791h2.922v-3.395c0-.922.742-1.664 1.663-1.664s1.664.742 1.664 1.664v3.395h2.922z"/></svg>
            </a>
            <a href="https://x.com/iammashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="X (Twitter)">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.07-6.62-5.848 6.62H2.18l7.732-8.835L1.254 2.25h6.554l4.597 6.084 5.309-6.084zM17.15 18.74h1.828L5.566 3.88H3.62L17.15 18.74z"/></svg>
            </a>
            <a href="https://www.researchgate.net/profile/Mahmudul-Mashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="ResearchGate">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 22.5H4.5V21h15v1.5zm0-3H4.5v-1.5h15v1.5zm-6-3c2.485 0 4.5-2.015 4.5-4.5S15.985 7.5 13.5 7.5 9 9.515 9 12s2.015 4.5 4.5 4.5zm0-1.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </a>
            <a href="mailto:mmashrafe223115@bscse.uiu.ac.bd" className="text-subtle hover:text-primary transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img
            src="/MM.jpg"
            alt="Mahmudul Mashrafe"
            className="w-96 h-96 object-cover rounded-2xl shadow-2xl animate-float"
          />
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-subtle animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
