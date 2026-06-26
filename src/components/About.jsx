import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import './About.css';

const TECH = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Python',
  'Llama3',
  'TailwindCSS',
];

const TAGS = [
  { label: 'Clean Code', sub: 'Obsessed' },
  { label: 'Ship Speed', sub: 'Fast AF' },
  { label: 'AI/LLM', sub: 'Learning' },
  { label: 'Available', sub: 'Remote' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <span className="section-label">01. About Me</span>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I'm not your typical developer. While others debate tabs vs
              spaces, I'm busy building products that actually solve
              problems. My journey started with curiosity, evolved through
              countless late nights of debugging, and led me to where I am
              now. A frontend engineer with a product mindset.
            </p>
            <p>
              Currently pursuing my CSE degree, I spend most of my time
              exploring the intersection of AI and web development. I
              believe the best interfaces are invisible. That's what I
              strive to build.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tech,
              reading about system design, or experimenting with LLMs to
              enhance my development workflow. I'm always looking for
              opportunities to work on products that matter.
            </p>

            <p className="about-tech-label mono">Technologies I work with:</p>
            <ul className="about-tech-list mono">
              {TECH.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="about-tech-bullet">▹</span>
                  {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="about-tags">
            {TAGS.map((t, i) => (
              <motion.div
                className="about-tag-card"
                key={t.label}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              >
                <div className="about-tag-label">{t.label}</div>
                <div className="about-tag-sub mono">{t.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
