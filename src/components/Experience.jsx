import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import useInView from '../hooks/useInView';
import './Experience.css';

const CHAPTERS = [
  {
    chapter: 'Chapter I',
    period: '2022 — 2024',
    title: 'Road to CSE Student',
    org: 'Narayana',
    glyph: '📐',
    opening:
      'Every story has a beginning, and mine started with a textbook full of equations.',
    desc: 'Pursuing Computer Science & Engineering. Building a strong foundation in Maths.',
  },
  {
    chapter: 'Chapter II',
    period: '2023 — Present',
    title: 'Web Development Track',
    org: 'Self-Learning',
    glyph: '⌨️',
    opening:
      'Then came the late nights — React tabs open till 2 AM, errors that taught more than any class.',
    desc: 'Mastered modern frontend development with React, TypeScript, and modern tooling. Built multiple production-ready applications.',
  },
  {
    chapter: 'Chapter III',
    period: '2024 — Present',
    title: 'AI & LLM Exploration',
    org: 'Research & Projects',
    glyph: '🧠',
    opening:
      'A new chapter opened when I started asking not just how to build, but how to build with AI.',
    desc: 'Diving into AI-assisted development, prompt engineering, and building tools that leverage large language models.',
  },
  {
    chapter: 'Chapter IV',
    period: '2025',
    title: 'UDAYA 1.0 — Hackathon',
    org: 'DSCE',
    glyph: '🏁',
    opening:
      'Theory met deadline pressure — and out of 36 sleepless hours, an educational platform was born.',
    desc: 'Built an educational platform under hackathon conditions, proving ideas can ship fast when it counts.',
  },
];

function Chapter({ item, index, inView }) {
  const isRight = index % 2 === 1;
  return (
    <motion.div
      className={`story-chapter ${isRight ? 'is-right' : 'is-left'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="story-node">
        <motion.span
          className="story-node-glyph"
          initial={{ scale: 0, rotate: -90 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {item.glyph}
        </motion.span>
      </div>

      <div className="story-card">
        <div className="story-card-head">
          <span className="story-chapter-label mono">{item.chapter}</span>
          <span className="story-period mono">{item.period}</span>
        </div>
        <p className="story-opening">{item.opening}</p>
        <h3 className="story-title">{item.title}</h3>
        <p className="story-org mono">{item.org}</p>
        <p className="story-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 80%', 'end 60%'],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <span className="section-label">04. Experience &amp; Journey</span>
        <p className="story-intro mono">// a story told in four chapters</p>

        <div className="story-track" ref={trackRef}>
          <svg className="story-spine" viewBox="0 0 4 100" preserveAspectRatio="none">
            <line
              x1="2" y1="0" x2="2" y2="100"
              stroke="var(--line)" strokeWidth="2"
            />
            <motion.line
              x1="2" y1="0" x2="2" y2="100"
              stroke="var(--accent)"
              strokeWidth="2"
              pathLength={pathLength}
              style={{
                pathLength,
              }}
            />
          </svg>

          {CHAPTERS.map((item, i) => (
            <Chapter item={item} index={i} key={item.title} inView={inView} />
          ))}
        </div>

        <motion.div
          className="story-epilogue"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="story-epilogue-glow" />
          <span className="timeline-status-dot" />
          <span>
            <em>To be continued —</em> currently open to new opportunities.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
