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
      title: "AXIS SUITE",
      description: "A complete Accessibility Tools web application designed to enhance web accessibility for users with disabilities, featuring tools like WCAG checker, developer based Extension and Accessibility violation correcting toolbox",
      tags: ["Javascript", "Puppeteer Sharp", "C#", ".NET", "Rust"],
      image: "https://source.unsplash.com/1600x900/?portfolio,design",
      github: "https://github.com/ABHIRAM-CREATOR06/Acess1"
    },
    {
      id: 2,
      title: "MOVIE-APPLICATION",
      description: "A GUI-based application that suggests movies by genre, lets users search for films, and retrieves cast and crew details with theme toggling and full-screen support.",
      tags: ["Python", "Tkinter", "Web Scraping", "GUI"],
      image: "https://source.unsplash.com/1600x900/?movie,film",
      github: "https://github.com/ABHIRAM-CREATOR06/MOVIE-APPLICATION"
    },
    {
      id: 3,
      title: "Number Conversion Calculator",
      description: "A Rust project that performs number conversions with decimal points using a custom module and the rust_decimal crate, along with various unit conversion features.",
      tags: ["Rust", "CLI"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/ABHIRAM-CREATOR06/Number-Conversion-Calctor"
    },
    {
      id: 4,
      title: "Halonyx Secura",
      description: "End-to-end encrypted messaging built on the Signal Protocol. X3DH handles the key exchange, Double Ratchet handles every message after that. The server stores almost nothing useful, which was the point.",
      tags: ["Node.js", "WebSockets", "Cryptography", "X3DH", "Double Ratchet", "AES-256-GCM"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/ABHIRAM-CREATOR06/Halonyx"
    },
    {
      id: 5,
      title: "Iron Armour",
      description: "A Windows desktop password vault built with C# and WPF. AES-256-GCM encryption, BCrypt master password hashing, multi-user support, and optional MySQL sync across devices. Also pulls saved Wi-Fi passwords using Windows netsh and exports strength reports as PDF or CSV.",
      tags: ["C#", "WPF", "AES-256-GCM", "SQLite", "MySQL", "Rust"],
      image: "https://source.unsplash.com/1600x900/?space,design",
      github: "https://github.com/ABHIRAM-CREATOR06/IRON-ARMOUR"
    },
    {
      id: 6,
      title: "Satellight Tracker",
      description: "A Rust-based terminal UI application that provides real-time satellite trajectory tracking, allowing efficient analysis of satellite positions.",
      tags: ["Rust", "Terminal", "React", "API", "TypeScript", "Python"],
      image: "https://source.unsplash.com/1600x900/?satellite,space",
      github: "https://github.com/ABHIRAM-CREATOR06/Satellight-Tracker"
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
          Portfolio
        </span>
        <h2 className="heading-lg mb-4">My Latest Projects</h2>
        <p className="paragraph max-w-2xl mx-auto text-muted-foreground">
          Here are some of the projects I've worked on recently, showcasing my skills in Rust, Python, and more.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="glass rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="heading-sm mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1 bg-secondary rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-2 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
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
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
