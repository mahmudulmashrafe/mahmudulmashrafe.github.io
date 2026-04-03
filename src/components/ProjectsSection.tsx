import { ExternalLink, Github, ArrowRight } from "lucide-react";

const featuredProjects = [
    {
    title: "Data Pipeline with Airflow",
    description:
      "Web scraping and data pipeline development using Python, Docker, Apache Airflow, and MongoDB for automated data collection and processing.",
    tags: ["Python", "Docker", "Airflow", "MongoDB"],
    github: "https://github.com/mahmudulmashrafe/Web_Scraping_and_Data_Pipeline_Development_with_Python_Docker_Airflow_and_MongoDB",
    image: "https://opengraph.githubassets.com/1/mahmudulmashrafe/Web_Scraping_and_Data_Pipeline_Development_with_Python_Docker_Airflow_and_MongoDB",
  },
  {
    title: "Durjog Prohori",
    description:
      "A web-based disaster management platform using MERN stack with multi-role authentication, SOS alerts, real-time earthquake & weather monitoring, AI assistant (Gemini), and interactive maps.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Gemini AI"],
    github: "https://github.com/mahmudulmashrafe/Durjog_Prohori",
    image: "https://opengraph.githubassets.com/1/mahmudulmashrafe/Durjog_Prohori",
  },
  {
    title: "সম্ভার - The Farmers Market",
    description:
      "A DBMS-based agricultural supply chain platform connecting farmers directly with consumers, enabling secure transactions with database-driven product & order management.",
    tags: ["PHP", "MySQL", "DBMS", "Web"],
    github: "https://github.com/mahmudulmashrafe/Shombhar_The_Farmers_Market",
    image: "https://opengraph.githubassets.com/1/mahmudulmashrafe/Shombhar_The_Farmers_Market",
  },
    {
    title: "Cascading Cataract Detection",
    description:
      "A machine learning project for cascading cataract detection using image classification techniques with Jupyter Notebook-based analysis and model training.",
    tags: ["Python", "Jupyter Notebook", "ML", "Computer Vision"],
    github: "https://github.com/mahmudulmashrafe/CascadingCataractDetection",
    image: "https://opengraph.githubassets.com/1/mahmudulmashrafe/CascadingCataractDetection",
  },
];

const moreRepos = [
  {
    name: "Ignis - Mars Rover Prototype",
    language: "PHP / Python",
    github: "https://github.com/mahmudulmashrafe/Ignis_a_Mars_Rover_Prototype",
  },
  {
    name: "Gold Rate Tracking BD",
    language: "PHP",
    github: "https://github.com/mahmudulmashrafe/Gold_Rate_Tracking_BD",
  },
  {
    name: "Object Detection (YOLO + OpenCV)",
    language: "Python",
    github: "https://github.com/mahmudulmashrafe/Object_Detection_for_Static_Images_Using_Yolo_and_OpenCV",
  },
  {
    name: "House Price Prediction (Linear Regression)",
    language: "Jupyter Notebook",
    github: "https://github.com/mahmudulmashrafe/House_Price_Prediction_Using_Linear_Regression_Model",
  },
  {
    name: "Breast Cancer ML",
    language: "Python",
    github: "https://github.com/mahmudulmashrafe/Breast-Cancer-ML",
  },
  {
    name: "BRRI AWD (IoT)",
    language: "C++",
    github: "https://github.com/mahmudulmashrafe/BRRI_AWD",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-heading mb-2">Projects</h2>
      <div className="w-12 h-1 bg-primary rounded mb-8" />

      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary transition-all flex flex-col group cursor-pointer"
          >
            <div className="w-full h-48 overflow-hidden bg-secondary">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-subtle leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-subtle group-hover:text-primary transition-colors text-sm">
                <Github size={16} />
                View on GitHub
                <ExternalLink size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* More Repositories */}
      <h3 className="text-xl font-semibold text-heading mb-4">More Repositories</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {moreRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-4 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-3">
              <Github size={18} className="text-subtle group-hover:text-primary transition-colors mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-heading group-hover:text-primary transition-colors">
                  {repo.name}
                </h4>
                <p className="text-xs font-mono text-subtle mt-1">{repo.language}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View More on GitHub */}
      <div className="text-center">
        <a
          href="https://github.com/mahmudulmashrafe?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-heading text-sm font-medium hover:bg-secondary hover:border-primary transition-colors"
        >
          View All Repositories on GitHub
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
