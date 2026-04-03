import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = ["Data Scientist", "ML Expert"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="h-12 flex items-center">
            <p className="text-sm font-mono text-subtle tracking-wider uppercase">
              I'm{" "}
              <span
                key={currentRoleIndex}
                className={`text-primary font-bold transition-all duration-300 ${
                  isAnimating ? "animate-text-slide" : "animate-text-exit"
                }`}
              >
                {roles[currentRoleIndex]}
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
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/mahmudulmashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mahmudulmashrafe" target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mmashrafe223115@bscse.uiu.ac.bd" className="text-subtle hover:text-primary transition-colors">
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
