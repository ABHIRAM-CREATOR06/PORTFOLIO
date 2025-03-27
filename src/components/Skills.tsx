import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Rust', level: 85, category: 'Languages' },
    { name: 'Python', level: 90, category: 'Languages' },
    { name: 'C', level: 80, category: 'Languages' },
    { name: 'Java', level: 75, category: 'Languages' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'TailwindCSS', level: 90, category: 'Frontend' },
    
    // Backend
    { name: 'Firebase', level: 85, category: 'Backend' },
    { name: 'Deno', level: 80, category: 'Backend' },
    
    // Data
    { name: 'SQL', level: 85, category: 'Data' },
    { name: 'SQLite', level: 80, category: 'Data' },
    { name: 'MongoDB', level: 75, category: 'Data' },
    
    // DevOps & Tools
    { name: 'Git', level: 90, category: 'DevOps & Tools' },
    { name: 'Azure', level: 80, category: 'DevOps & Tools' },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="section-container bg-secondary/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
          Skills
        </span>
        <h2 className="heading-lg mb-4">Technical Proficiency</h2>
        <p className="paragraph max-w-2xl mx-auto text-muted-foreground">
          I've developed expertise in various programming languages, frameworks, and tools throughout my academic and personal projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="heading-sm mb-6 text-center">{category}</h3>
            <div className="space-y-5">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * categoryIndex + 0.05 * skillIndex }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.1 * categoryIndex + 0.05 * skillIndex + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 glass p-6 rounded-xl"
      >
        <h3 className="heading-sm mb-6 text-center">Additional Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Problem Solving', 'Algorithms', 'Data Structures', 'System Design', 'UI/UX Design', 'Agile Development', 'Team Leadership', 'Research', 'Technical Writing'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
