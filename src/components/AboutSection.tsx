const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary animate-fade-in">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-heading mb-2">About Me</h2>
      <div className="w-12 h-1 bg-primary rounded mb-8" />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-subtle leading-relaxed">
          <p>
            I am Mahmudul Mashrafe, a CSE undergraduate at United International University with a major in Data Science. With a strong background in data analysis, machine learning, and full-stack development, I thrive on transforming raw data into meaningful insights and practical solutions.
          </p>
          <p>
            My expertise lies in leveraging advanced statistical techniques and cutting-edge machine learning algorithms to extract valuable knowledge from complex datasets. I also have experience in full-stack web development and computer vision projects.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Experiences", value: "2y+" },
            { label: "Projects", value: "15+" },
            { label: "Tech Skills", value: "20+" },
            { label: "Certifications", value: "5+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-subtle mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
