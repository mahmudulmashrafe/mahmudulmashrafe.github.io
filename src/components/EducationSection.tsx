const education = [
  {
    institution: "United International University",
    degree: "Bachelor of Science in Computer Science & Engineering",
    major: "Data Science",
    grade: "CGPA: 3.95/4.00",
    period: "2022 – Present",
    details: "Credit Completed: 121/137",
    logo: "/uiu.png",
    url: "https://www.uiu.ac.bd/",
  },
  {
    institution: "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Govt. College",
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    grade: "GPA: 5.00/5.00",
    period: "2019 – 2021",
    details: null,
    logo: "/jjbbsmrgc.png",
    url: "https://www.ugc.edu.bd/",
  },
  {
    institution: "Nawab Habibullah Model",
    institutionLine2: "School & College",
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    grade: "GPA: 5.00/5.00",
    period: "2017 – 2019",
    details: null,
    logo: "/nhmsc.png",
    url: "https://nhmsc.edu.bd/",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-heading mb-2">Education</h2>
      <div className="w-12 h-1 bg-primary rounded mb-8" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="shrink-0 w-16 h-16 rounded-lg bg-secondary overflow-hidden flex items-center justify-center mb-4">
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-1 mb-2">
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-heading hover:text-primary transition-colors"
                  >
                    {edu.institution}
                    {edu.institutionLine2 && (
                      <>
                        <br />
                        {edu.institutionLine2}
                      </>
                    )}
                  </a>
                ) : (
                  <h3 className="font-semibold text-heading">
                    {edu.institution}
                    {edu.institutionLine2 && (
                      <>
                        <br />
                        {edu.institutionLine2}
                      </>
                    )}
                  </h3>
                )}
                <span className="text-xs font-mono text-primary">{edu.period}</span>
              </div>
              <p className="text-sm text-subtle">{edu.degree}</p>
              {edu.major && (
                <p className="text-sm text-subtle">Major: {edu.major}</p>
              )}
              {edu.grade && (
                <p className="text-sm font-medium text-primary mt-1">{edu.grade}</p>
              )}
              {edu.details && (
                <p className="text-xs text-subtle mt-1">{edu.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
