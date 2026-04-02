import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-secondary">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-heading mb-2">Get in Touch</h2>
      <div className="w-12 h-1 bg-primary rounded mb-8 mx-auto" />
      <p className="text-subtle max-w-md mx-auto mb-10">
        I'm always open to discussing new opportunities, interesting projects, or collaborations in data science and machine learning.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { icon: Mail, label: "mmashrafe223115@bscse.uiu.ac.bd", href: "mailto:mmashrafe223115@bscse.uiu.ac.bd" },
          { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mahmudulmashrafe" },
          { icon: Github, label: "GitHub", href: "https://github.com/mahmudulmashrafe" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-subtle hover:text-primary hover:border-primary transition-colors text-sm"
          >
            <item.icon size={16} />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
