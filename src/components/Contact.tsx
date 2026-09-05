import { useState, FormEvent } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('All fields are required.');
      return;
    }

    // Open mailto link
    const subject = encodeURIComponent(`hello from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:hello@abhiram.dev?subject=${subject}&body=${body}`;

    toast.success('Mail client opened — send when ready.');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="file" data-section>
      <div className="filehead">
        <span>contact.sh</span>
        <span>mail -s "hello"</span>
      </div>

      <form className="mailform" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="f-name">--from-name</label>
          <input
            id="f-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="f-email">--from-email</label>
          <input
            id="f-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="f-msg">--body</label>
          <textarea
            id="f-msg"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">send()</button>
      </form>

      <div className="resume-link">
        <span>$ curl -O resume.pdf</span>
        <br />
        <a href="/abhiram-resume.pdf" target="_blank" rel="noopener">
          download abhiram-resume.pdf →
        </a>
      </div>
    </section>
  );
};

export default Contact;
