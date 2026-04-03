import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = ["Data Scientist", "ML Enthusiast"];
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
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor"><path d="M44.626,8.151c-1.491-1.841-3.704-2.901-6.134-2.901c-2.248,0-4.32,0.904-5.817,2.547l-0.059-0.066 c-1.409-1.527-3.426-2.405-5.669-2.405c-2.213,0-4.212,0.856-5.697,2.378c-0.146,0.144-0.288,0.289-0.427,0.438 c-0.092-1.259-1.067-2.331-2.314-2.331h-6.826c-1.313,0-2.379,1.067-2.379,2.379v23.211c0,1.313,1.067,2.379,2.379,2.379h6.826 c1.313,0,2.379-1.067,2.379-2.379V17.169c0-1.256,0.981-2.281,2.236-2.281c1.297,0,2.352,1.099,2.352,2.445v16.127 c0,1.313,1.067,2.379,2.379,2.379h6.826c1.313,0,2.379-1.067,2.379-2.379V18.334c0-1.256,0.981-2.281,2.236-2.281 c1.297,0,2.352,1.099,2.352,2.445v16.127c0,1.313,1.067,2.379,2.379,2.379h6.826c1.313,0,2.379-1.067,2.379-2.379V17.36 C48,12.769,47.118,10.067,44.626,8.151z"/></svg>
            </a>
            <a href="https://x.com/iammashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="X (Twitter)">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.07-6.62-5.848 6.62H2.18l7.732-8.835L1.254 2.25h6.554l4.597 6.084 5.309-6.084zM17.15 18.74h1.828L5.566 3.88H3.62L17.15 18.74z"/></svg>
            </a>
            <a href="https://www.researchgate.net/profile/Mahmudul-Mashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors" title="ResearchGate">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><path d="M26 30H6v-2h20v2zm0-4H6v-2h20v2zm-8-4c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0-2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
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
