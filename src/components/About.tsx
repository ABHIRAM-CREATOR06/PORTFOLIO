import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  User,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "High School Diploma in Computer Science",
      institution: "Central Board of Secondary Education",
      period: "2020 - 2023",
      description:
        "Focused on school  with a strong emphasis on computer science.",
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Kerala Technological University (KTU)",
      period: "2023 - Present",
      description:
        "Focusing on Computer Science Engineering with importance to Devolopment and Research. Expected to graduate in 2027.",
    },
  ]);

  const [activeTab, setActiveTab] = useState("personal");
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  // LinkedIn-style: Group positions by company
  const experienceByCompany = [
    {
      company: "Tinkerhub SNGCE",
      location: "Kerala, India",
      logo: "/upload/tinkerhub-logo.png",
      useImage: true,
      positions: [
        {
          id: 1,
          position: "Campus Lead",
          period: "2025 - Present",
          description: "Actively involved in promoting Tinkerhub's initiatives and organizing events to foster a culture of innovation and creativity among students.",
          skills: ["Leadership", "Event Management", "Community Building"]
        },
        {
          id: 2,
          position: "Volunteer",
          period: "2023 - 2024",
          description: "Supported Tinkerhub activities and events, assisting in community outreach and promoting maker culture among students.",
          skills: ["Volunteering", "Community Engagement", "Event Support"]
        }
      ]
    },
    {
      company: "IEDC",
      location: "Kerala, India",
      logo: "/upload/iedc-logo.svg",
      useImage: true,
      positions: [
        {
          id: 3,
          position: "Joint Creative Lead",
          period: "2024 - Present",
          description: "Led a team of designers and developers to create innovative solutions for real-world problems and promote entrepreneurship in the college.",
          skills: ["Team Leadership", "Project Management", "Entrepreneurship"]
        },
        {
          id: 4,
          position: "Volunteer",
          period: "2023 - 2024",
          description: "Contributed to IEDC events and initiatives, supporting entrepreneurship activities and student innovation programs.",
          skills: ["Volunteering", "Event Planning", "Student Engagement"]
        }
      ]
    },
    {
      company: "MuLearn SNGCE",
      location: "Kerala, India",
      logo: "/upload/mulearn-logo.svg",
      useImage: true,
      positions: [
        {
          id: 5,
          position: "Web Team Member",
          period: "2024 - 2025",
          description: "Contributed to the designing to enhance online visibility through visually compelling assets.",
          skills: ["Web Design", "Graphic Design", "Digital Marketing"]
        }
      ]
    },
    {
      company: "BSNL",
      location: "Kerala, India",
      logo: "/upload/bsnl-logo.svg",
      useImage: true,
      positions: [
        {
          id: 6,
          position: "Software Engineering Intern",
          period: "Summer 2024",
          description: "Worked on the development of a web-based application for managing customer data and improving user experience.",
          skills: ["Web Development", "Data Management", "UI/UX"]
        }
      ]
    },
    {
      company: "Freelancing Platforms",
      location: "Remote",
      logo: "F",
      logoColor: "bg-blue-500",
      positions: [
        {
          id: 7,
          position: "Open Source Contributor",
          period: "2019 - Present",
          description: "Contributed to various open-source projects, including bug fixes, feature enhancements, and documentation improvements.",
          skills: ["Open Source", "Git", "Documentation"]
        }
      ]
    }
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 20,
              }
        }
        transition={{
          duration: 0.5,
        }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
          About Me
        </span>
        <h2 className="heading-lg mb-4">Who I Am</h2>
        <p className="paragraph max-w-2xl mx-auto text-muted-foreground">
          Get to know more about my background, education, experience, and
          interests in the field of computer science.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: -20,
                }
          }
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="lg:col-span-4"
        >
          <div className="glass rounded-xl overflow-hidden h-full">
            <div className="relative pb-[100%] overflow-hidden">
              <img
                alt="Abhiram P"
                className="absolute inset-0 w-full h-full object-cover"
                src="/upload/profile-photo.png"
              />
            </div>
            <div className="p-6">
              <h3 className="heading-sm mb-4">Abhiram P</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-primary" />
                  <span>20 years old</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" />
                  <span>B.Tech Computer Science Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-primary" />
                  <span>Aspiring Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  <a
                    href="/abhiram-resume.pdf"
                    className="text-primary hover:text-primary/80 transition-colors"
                    download="Abhiram_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: 20,
                }
          }
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="lg:col-span-8"
        >
          <div className="glass rounded-xl p-6 mb-6">
            <h3 className="heading-sm mb-4">My Story</h3>
            <div className="space-y-4 paragraph">
              <p>
                I'm Abhiram Praneeth, a passionate computer science student with
                a deep interest in System Programming, web development, and
                distributed systems. My journey in tech began when I was 12
                years old, tinkering with HTML and CSS to build simple websites.
              </p>
              <p>
                As I progressed through my education, I became fascinated with
                the potential to solve complex problems. This led me to pursue a
                degree in computer science, where I've had the opportunity to
                work on cutting-edge projects and collaborate with brilliant
                minds.
              </p>
              <p>
                Beyond coding, I enjoy participating in hackathons, contributing
                to open-source projects, and mentoring junior developers. I
                believe in the power of technology to create positive change,
                and I'm committed to using my skills to build solutions that
                make a difference.
              </p>
              <p>
                When I'm not coding or studying, you can find me hiking in
                nature, playing chess, or exploring the latest advancements in
                technology. I'm always eager to learn new things and take on
                challenging projects that push my skills to the next level.
              </p>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="personal">
                  <User size={16} className="mr-2" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                  <GraduationCap size={16} className="mr-2" />
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-0">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase size={20} className="text-primary" />
                    <h3 className="text-xl font-semibold">Experience</h3>
                  </div>
                  
                  {/* LinkedIn-style: Company header with multiple positions */}
                  <div className="space-y-6">
                    {experienceByCompany.map((company, companyIndex) => (
                      <motion.div
                        key={company.company}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.4 + companyIndex * 0.1 }}
                        className="bg-card rounded-lg border border-border/50 overflow-hidden"
                      >
                        {/* Company Header - LinkedIn style */}
                        <div className="p-4 border-b border-border">
                          <div className="flex gap-4">
                            {/* Company Logo */}
                            <div className="flex-shrink-0">
                              {company.useImage ? (
                                <img 
                                  src={company.logo} 
                                  alt={`${company.company} logo`}
                                  className="w-14 h-14 rounded-lg object-cover shadow-sm"
                                />
                              ) : (
                                <div className={`w-14 h-14 rounded-lg ${company.logoColor || 'bg-muted'} flex items-center justify-center shadow-sm text-white`}>
                                  <span className="text-sm font-bold">{company.logo}</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-grow">
                              <h4 className="font-semibold text-lg">{company.company}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <MapPin size={14} />
                                <span>{company.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Positions under this company - LinkedIn Timeline Style */}
                        <div className="p-4 pl-5 relative">
                          {/* Vertical timeline line - consistent positioning */}
                          {company.positions.length > 1 && (
                            <div className="absolute left-[9px] top-8 bottom-8 w-0.5 bg-border" />
                          )}
                          
                          {company.positions.map((pos, posIndex) => (
                            <div key={pos.id} className={`relative ${posIndex > 0 ? "pt-6" : ""}`}>
                              {/* Timeline dot */}
                              <div className="absolute left-[-18px] top-1 flex flex-col items-center">
                                <div className={`w-2.5 h-2.5 rounded-full ring-2 ring-background ${posIndex === 0 ? 'bg-primary' : 'bg-muted-foreground/50'}`} />
                                {posIndex < company.positions.length - 1 && (
                                  <div className="w-0.5 flex-grow bg-border absolute top-2" />
                                )}
                              </div>
                              
                              <div className="flex justify-between items-start gap-2">
                                <div>
                                  <h5 className="font-medium text-base">{pos.position}</h5>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <Calendar size={14} />
                                    <span>{pos.period}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Expandable: Description + Skills */}
                              <div className="mt-3">
                                <button
                                  onClick={() => setExpandedCompany(expandedCompany === `${company.company}-${pos.id}` ? null : `${company.company}-${pos.id}`)}
                                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                                >
                                  {expandedCompany === `${company.company}-${pos.id}` ? 'Show less' : 'Show more'}
                                </button>
                              </div>
                              
                              {/* Expanded: Description + Skills */}
                              {expandedCompany === `${company.company}-${pos.id}` && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-3 pt-3 border-t border-border"
                                >
                                  {/* Description */}
                                  <p className="text-sm text-muted-foreground mb-3">{pos.description}</p>
                                  
                                  {/* Skills */}
                                  {pos.skills && (
                                    <>
                                      <p className="text-xs font-medium text-muted-foreground mb-2">Skills</p>
                                      <div className="flex flex-wrap gap-2">
                                        {pos.skills.map((skill, i) => (
                                          <span 
                                            key={i}
                                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                                          >
                                            {skill}
                                          </span>
                                        ))}
                                      </div>
                                    </>
                                  )}
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={20} className="text-primary" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="relative pl-6 border-l-2 border-primary/30"
                      >
                        <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                        <h4 className="font-semibold">{item.degree}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.institution} | {item.period}
                        </p>
                        <p className="text-sm mt-1">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
