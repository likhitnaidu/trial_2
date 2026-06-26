import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const NAME_WORDS = 'Likhit Naidu.'.split(' ');

export default function Hero({ frameImage }) {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = -rect.top;
      setOffset(progress * 0.35);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * -10 });
  };
  const resetCard = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="top" className="hero" ref={sectionRef}>
      <div
        className="hero-bg"
        style={{
          backgroundImage: frameImage ? `url(${frameImage})` : undefined,
          transform: `translate3d(0, ${offset}px, 0) scale(1)`,
        }}
      />
      <div className="hero-bg-tint" />
      <div className="hero-grain" />

      <div className="container">
        <div className="hero-inner">
        <motion.p
          className="hero-eyebrow mono"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {'> Hello, my name is'}
          <motion.span
            className="hero-cursor"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          />
        </motion.p>

        <h1 className="hero-title" aria-label="Likhit Naidu.">
          {NAME_WORDS.map((word, wi) => {
            const prevLen = NAME_WORDS.slice(0, wi).join(' ').length + (wi > 0 ? 1 : 0);
            return (
              <span className="hero-title-word" key={wi}>
                {word.split('').map((char, ci) => (
                  <motion.span
                    key={ci}
                    className="hero-title-letter"
                    initial={{ opacity: 0, x: -30, rotateX: -40 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + (prevLen + ci) * 0.035,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wi < NAME_WORDS.length - 1 ? '\u00A0' : ''}
              </span>
            );
          })}
        </h1>

        <motion.div
          className="hero-comments mono"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>// I build products.</p>
          <p>// I ship fast.</p>
          <p>// I design with code.</p>
        </motion.div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Computer Science Engineering student focused on software
          development and applied AI. I build projects in Python and
          JavaScript while actively developing strong foundations in data
          structures, algorithms, and system design through practical work.
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1aaGJYZrbCwJUAp_ienJk1tYDU9Dr1MOn/view"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
