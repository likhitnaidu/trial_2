import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import './Skills.css';

const GROUPS = [
  {
    title: 'Frontend',
    sub: 'Building beautiful, responsive interfaces',
    skills: [
      { name: 'React', level: 60 },
      { name: 'TypeScript', level: 25 },
      { name: 'JavaScript', level: 65 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind', level: 85 },
    ],
  },
  {
    title: 'Tools & DevOps',
    sub: 'Shipping code efficiently',
    skills: [
      { name: 'Git', level: 65 },
      { name: 'GitHub', level: 63 },
      { name: 'Vercel', level: 65 },
      { name: 'Vite', level: 20 },
      { name: 'Figma', level: 75 },
      { name: 'Node.js', level: 10 },
    ],
  },
  {
    title: 'AI & Emerging',
    sub: 'Exploring the future of development',
    skills: [
      { name: 'Prompt Engineering', level: 75 },
      { name: 'LLM Integration', level: 8 },
      { name: 'AI systems engineering', level: 10 },
    ],
  },
  {
    title: 'Learning',
    sub: 'Currently exploring',
    skills: [
      { name: 'Rust', level: 2 },
      { name: 'C/C++', level: 40 },
      { name: 'Python', level: 65 },
    ],
  },
];

const SOFT_TAGS = [
  'Problem Solver',
  'Quick Learner',
  'Team Player',
  'Detail Oriented',
  'Product Thinking',
];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-head">
        <span>{name}</span>
        <span className="mono skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <span className="section-label">02. Skills &amp; Stack</span>

        <div className="skills-grid">
          {GROUPS.map((g, gi) => (
            <motion.div
              className="skills-group"
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="skills-group-title">{g.title}</h3>
              <p className="skills-group-sub">{g.sub}</p>
              <div className="skills-group-bars">
                {g.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    inView={inView}
                    delay={0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-tags"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {SOFT_TAGS.map((t) => (
            <span className="skills-tag mono" key={t}>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
