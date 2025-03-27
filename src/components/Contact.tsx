
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
          Have a question or want to work together? Feel free to reach out to me. I'm always open to discussing new projects, opportunities, or partnerships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: -20
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="lg:col-span-2">
          <div className="glass rounded-xl p-6 h-full">
            <h3 className="heading-sm mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Ernakulam,Kerala,India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:alex.chen@example.com" className="text-primary hover:text-primary/80 transition-colors">abhirampraneeth2005@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a href="#" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: 20
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="lg:col-span-3">
          <div className="glass rounded-xl p-6">
            <h3 className="heading-sm mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Subject of your message" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Write your message here..." />
              </div>
              
              <div>
                <button type="submit" disabled={isSubmitting} className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-primary-foreground transition-all ${isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'}`}>
                  {isSubmitting ? <>
                      <div className="animate-spin h-4 w-4 border-2 border-white/50 border-t-white rounded-full" />
                      <span>Sending...</span>
                    </> : <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>}
                </button>
                
                {submitSuccess && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.3
              }} className="mt-4 p-3 bg-green-50 text-green-700 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </motion.div>}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default Contact;
