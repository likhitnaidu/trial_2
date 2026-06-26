import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, MapPin } from 'lucide-react';
import useInView from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <span className="section-label">05. What's Next?</span>

        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="contact-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          I'm currently looking for new opportunities. Whether you have a
          question, want to collaborate, or just want to say hi — my inbox
          is always open.
        </motion.p>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <label className="mono">
              Name
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label className="mono">
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label className="mono">
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, role, or just say hi."
              />
            </label>
            <button type="submit" className="btn btn-primary contact-submit">
              {sent ? 'Message sent ✓' : 'Send Message'}
            </button>
          </motion.form>

          <motion.div
            className="contact-side"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-block">
              <h4 className="mono">Direct Contact</h4>
              <a href="mailto:m.likhitwork@gmail.com" className="contact-row">
                <Mail size={16} />
                m.likhitwork@gmail.com
              </a>
              <div className="contact-row">
                <MapPin size={16} />
                India 🇮🇳
              </div>
            </div>

            <div className="contact-block">
              <h4 className="mono">Connect</h4>
              <a
                href="https://github.com/likhitnaidu"
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <Github size={16} />
                <span>GitHub <small>@likhitnaidu</small></span>
              </a>
              <a
                href="https://linkedin.com/in/m-likhit-naidu-906083217/"
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <Linkedin size={16} />
                <span>LinkedIn <small>Likhit Naidu</small></span>
              </a>
              <a
                href="https://leetcode.com/u/Likhit_naidu/"
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <Code2 size={16} />
                <span>LeetCode <small>Likhit naidu</small></span>
              </a>
            </div>

            <div className="contact-available mono">
              <span className="timeline-status-dot" />
              Currently available for hire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
