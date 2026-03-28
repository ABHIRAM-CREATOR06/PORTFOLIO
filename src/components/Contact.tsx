import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  
  return <section id="contact" className="section-container bg-secondary/30" ref={ref}>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.5
    }} className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
          Contact
        </span>
        <h2 className="heading-lg mb-4">Get In Touch</h2>
        <p className="paragraph max-w-2xl mx-auto text-muted-foreground">
          Feel free to reach out to me. I'm always open to discussing new projects, opportunities, or partnerships.
        </p>
      </motion.div>

      <div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <div className="glass rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Ernakulam, Kerala, India</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:abhirampraneeth2005@gmail.com" className="text-primary hover:text-primary/80 transition-colors">abhirampraneeth2005@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/abhiram-p-3a1b49290/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/ABHIRAM-CREATOR06" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default Contact;
