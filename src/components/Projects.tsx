import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      id: 1,
      title: "Satellight Tracker",
      description: "A Rust-based terminal UI application that provides real-time satellite trajectory tracking, allowing efficient analysis of satellite positions.",
      tags: ["Rust", "Terminal", "REACT", "API", "TYPESCRIPT", "PYTHON"],
      image: "https://source.unsplash.com/1600x900/?satellite,space",
      github: "https://github.com/ABHIRAM-CREATOR06/Satellight-Tracker"
    },
    {
      id: 2,
      title: "MOVIE-APPLICATION",
      description: "A GUI-based application that suggests movies by genre, lets users search for films, and retrieves cast and crew details with theme toggling and full-screen support.",
      tags: ["Python", "Tkinter", "WEB SCRAPPING", "GUI"],
      image: "https://source.unsplash.com/1600x900/?movie,film",
      github: "https://github.com/ABHIRAM-CREATOR06/MOVIE-APPLICATION"
    },
    {
      id: 3,
      title: "Number Conversion Calculator",
      description: "A Rust project that performs number conversions with decimal points using a custom module and the rust_decimal crate, along with various unit conversion features.",
      tags: ["Rust", "Calculator", "Conversion", "CLI"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/ABHIRAM-CREATOR06/Number-Conversion-Calctor"
    },
    {
      id: 4,
      title: "MINI AI PROJECTS",
      description: "A showcase of my AI learning journey featuring a Python Chatbox, a Superhero Predictor using logistic regression, and a Sentiment Analyzer built with Tkinter and TextBlob.",
      tags: ["Python", "AI", "SCIKIT-LEARN", "Machine Learning", "GUI"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/ABHIRAM-CREATOR06/Ai_joruney"
    },
    {
      id: 5,
      title: "SPACE QUESTIONAIRE",
      description: "A space-themed landing page featuring sections like Home, About, History, Current Missions, Future Missions, Questionnaire, and Contact, all built with HTML and CSS.",
      tags: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
      image: "https://source.unsplash.com/1600x900/?space,design",
      github: "https://github.com/ABHIRAM-CREATOR06/Frontenend-challenge"
    }
  ];

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTab));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
          Portfolio
        </span>
        <h2 className="heading-lg mb-4">My Latest Projects</h2>
        <p className="paragraph max-w-2xl mx-auto text-muted-foreground">
          Here are some of the projects I've worked on recently, showcasing my skills in Rust, Python, HTML, CSS, and more.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          All
        </button>
        {uniqueTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTab(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="glass rounded-xl overflow-hidden group"
          >
            {/* Image section removed due to malfunction */}
            <div className="p-6">
              <h3 className="heading-sm mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

