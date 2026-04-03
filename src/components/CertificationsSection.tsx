import { useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
   {
    title: "Data Engineering with Python & Machine Learning",
    issuer: "Center for Development of IT Professionals (CDIP), UIU",
    period: "Issued Mar 2025",
    credentialId: null,
    credential: null,
    skills: ["Data Engineering", "Programming"],
    logo: "/cdip.png",
  },
    {
    title: "Red Hat System Administration II (RH134 - RHA) - Ver. 9.3",
    issuer: "Red Hat",
    period: "Issued May 2025",
    credentialId: null,
    credential: "https://www.credly.com/badges/29e68628-dee9-4bbb-ac9c-6269be8926b1/public_url",
    skills: [],
    logo: "/redhat.png",
  },
  {
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    issuer: "Red Hat",
    period: "Issued May 2025",
    credentialId: null,
    credential: "https://www.credly.com/badges/e0dc097e-f224-4490-b365-95f21199ad48/public_url",
    skills: [],
    logo: "/redhat.png",
  },
    {
    title: "Python Basics for Data Science",
    issuer: "edX",
    period: "Issued Oct 2019",
    credentialId: null,
    credential: null,
    skills: ["Programming", "Python (Programming Language)"],
    logo: "/edx.png",
  },
  {
    title: "Python Basics",
    issuer: "edX",
    period: "Issued Dec 2019",
    credentialId: null,
    credential: null,
    skills: ["Programming", "Python (Programming Language)"],
    logo: "/edx.png",
  },
    {
    title: "Smart CV",
    issuer: "Grameenphone Ltd",
    period: "Issued Mar 2026",
    credentialId: "GP25928",
    credential: "https://www.grameenphone.academy/cert/b81f4a219281",
    skills: ["Resume Writing", "Curriculum Vitae (CV)"],
    logo: "/gp.png",
  },
    {
    title: "LinkedIn 101",
    issuer: "Grameenphone Ltd",
    period: "Issued Mar 2026",
    credentialId: "GP25928",
    credential: "https://www.grameenphone.academy/cert/446acdf75a2f",
    skills: ["LinkedIn Learning"],
    logo: "/gp.png",
  },
    {
    title: "Art of Communication",
    issuer: "Grameenphone Ltd",
    period: "Issued Mar 2026",
    credentialId: "GP25928",
    credential: "https://www.grameenphone.academy/cert/5c2827e93706",
    skills: ["Corporate Communications", "Communication"],
    logo: "/gp.png",
  },
  {
    title: "Sharpen Your Interview Skills",
    issuer: "Grameenphone Ltd",
    period: "Issued Mar 2026",
    credentialId: "GP25928",
    credential: "https://www.grameenphone.academy/cert/fb1ea3070562",
    skills: ["Interview Preparation"],
    logo: "/gp.png",
  },
  {
    title: "Corporate Presentation Skills",
    issuer: "Grameenphone Ltd",
    period: "Issued Mar 2026",
    credentialId: "GP25928",
    credential: "https://www.grameenphone.academy/cert/451909161d11",
    skills: ["Presentation Skills"],
    logo: "/gp.png",
  },
  {
    title: "Corporate Grooming",
    issuer: "MuktoPaath",
    period: "Issued Mar 2020",
    credentialId: null,
    credential: null,
    skills: [],
    logo: "/muktopath.png",
  },
  {
    title: "How to make a single website for freelancers and agencies",
    issuer: "Udemy",
    period: "Issued Feb 2020",
    credentialId: null,
    credential: null,
    skills: [],
    logo: "/udemy.png",
  },
  {
    title: "Digital Security Essentials",
    issuer: "MuktoPaath",
    period: "Issued Feb 2020",
    credentialId: null,
    credential: null,
    skills: [],
    logo: "/muktopath.png",
  },
  {
    title: "Public Speaking Fundamentals",
    issuer: "MuktoPaath",
    period: "Issued Mar 2020",
    credentialId: null,
    credential: null,
    skills: ["Public Speaking", "Debate"],
    logo: "/muktopath.png",
  },
];

const INITIAL_SHOW = 4;

const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, INITIAL_SHOW);

  return (
    <section id="certifications" className="py-24 bg-secondary animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-heading mb-2">Certifications</h2>
        <div className="w-12 h-1 bg-primary rounded mb-8" />
        <div className="grid sm:grid-cols-2 gap-4">
          {visible.map((cert, i) => (
            <div
              key={i}
              className="bg-card p-5 rounded-xl border border-border hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary overflow-hidden flex items-center justify-center mt-0.5">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-heading text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-subtle mt-0.5">{cert.issuer}</p>
                <p className="text-xs font-mono text-primary">{cert.period}</p>
                {cert.credentialId && (
                  <p className="text-xs text-subtle mt-0.5">
                    Credential ID {cert.credentialId}
                  </p>
                )}
                {cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {cert.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                  >
                    <ExternalLink size={12} />
                    Show Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {certifications.length > INITIAL_SHOW && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-heading text-sm font-medium hover:bg-secondary hover:border-primary transition-colors"
            >
              {showAll ? "Show Less" : `View More (${certifications.length - INITIAL_SHOW} more)`}
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
