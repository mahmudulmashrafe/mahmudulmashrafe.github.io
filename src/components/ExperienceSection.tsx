import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    role: "Undergraduate Teaching Assistant",
    company: "United International University",
    logo: "/uiu.png",
    period: "Nov 2024 – Present",
    url: "https://www.uiu.ac.bd/",
    points: [
      "Assisted faculty in teaching and coordinating lab sessions for 300+ students in CSE courses.",
      "Supported grading, course materials preparation, and dataset management.",
      "Guided students in debugging code and completing programming assignments.",
    ],
  },
  {
    role: "Programmer",
    company: "LunerAI",
    logo: "/lunerai.jpg",
    period: "Dec 2022 – Present",
    url: "https://www.linkedin.com/company/lunerai/posts/?feedView=all",
    points: [
      "Utilizing AI, Data Science, and Machine Learning to build solutions that make a positive impact on society.",
      "Developing applications focused on making everyday life easier and safer.",
    ],
  },
  {
    role: "Chief Executive Officer",
    company: "Organization for Human & Nature",
    logo: "/ohn.png",
    period: "Sep 2017 – Jun 2021",
    url: "https://www.facebook.com/ohn2017?locale=fy_NL",
    points: [
      "Founded and led the organization, setting its overall vision, mission, and strategic direction.",
      "Implemented fundraising strategies and financial management ensuring sustained growth and impact.",
    ],
  },
  {
    role: "Former Student Representative of NHMSC",
    company: "Bangladesh International Debating Society",
    logo: "/bids.png",
    period: "Feb 2018 – Mar 2019",
    url: "https://www.facebook.com/WeAreBIDS?locale=fy_NL",
    points: [
      "Represented NHMSC in national debating activities, promoting critical thinking and public speaking.",
      "Coordinated with BIDS members and student participants to support debate programs and events.",
    ],
  },
  {
    role: "Former Vice President",
    company: "Nawab Habibullah Model School & College Debate Club",
    logo: "/nhmsc.png",
    period: "Jan 2018 – Jan 2019",
    url: "https://nhmsc.edu.bd/",
    points: [
      "Led debate club activities and organized inter-school debating competitions.",
      "Promoted student engagement through debate initiatives and public speaking events.",
    ],
  },
];

const INITIAL_SHOW = 2;

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? experiences : experiences.slice(0, INITIAL_SHOW);

  return (
    <section id="experience" className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-heading mb-2">Experience</h2>
        <div className="w-12 h-1 bg-primary rounded mb-8" />
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />
          <div className="space-y-12">
            {visible.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-8 md:pl-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-2 left-0 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background md:left-auto ${
                    i % 2 === 0 ? "md:right-[-17px]" : "md:left-[-17px]"
                  }`}
                />
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary overflow-hidden flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heading leading-tight">{exp.role}</h3>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-subtle hover:text-primary transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-sm text-subtle">{exp.company}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs font-mono text-primary mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-subtle leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {experiences.length > INITIAL_SHOW && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-heading text-sm font-medium hover:bg-secondary hover:border-primary transition-colors"
            >
              {showAll ? "Show Less" : `View More (${experiences.length - INITIAL_SHOW} more)`}
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
