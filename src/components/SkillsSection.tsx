import { Brain, Layout, Server, Settings, Monitor } from "lucide-react";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPytorch,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiPostman,
  SiJupyter,
  SiHtml5,
  SiCss,
  SiApple,
  SiWindows,
  SiLinux,
  SiAndroid,
} from "react-icons/si";
import { Database } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: Database },
    ],
  },
  {
    icon: Server,
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    icon: Layout,
    title: "Frameworks & Libraries",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    icon: Settings,
    title: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Jupyter Notebook", icon: SiJupyter },
    ],
  },
  {
    icon: Monitor,
    title: "Other Skills",
    items: [
      { name: "Data Scraping", icon: Monitor },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Data Visualization", icon: Monitor },
    ],
  },
  {
    icon: Settings,
    title: "Operating Systems",
    items: [
      { name: "Mac OS", icon: SiApple },
      { name: "Windows", icon: SiWindows },
      { name: "Linux", icon: SiLinux },
      { name: "Android", icon: SiAndroid },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-heading mb-2">Tech Stack</h2>
      <div className="w-12 h-1 bg-primary rounded mb-8" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
          >
            <skill.icon className="text-primary mb-3" size={24} />
            <h3 className="font-semibold text-heading mb-3">{skill.title}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-subtle hover:text-primary transition-colors"
                    title={item.name}
                  >
                    <IconComponent size={14} />
                    <span className="text-xs font-mono">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
