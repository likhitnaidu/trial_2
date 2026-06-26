import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LINES = [
  '> Hello, my name is',
  'Likhit Naidu.',
  '// I build products.',
  '// I ship fast.',
  '// I design with code.',
];

const PLAYBACK_RATE = 1.5;

export default function LoadingScreen({ onComplete }) {
  const videoRef = useRef(null);
  const [lineIndex, setLineIndex] = useState(-1);
  const [exiting, setExiting] = useState(false);
  const [showStill, setShowStill] = useState(false);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const timers = LINES.map((_, i) =>
      setTimeout(() => setLineIndex(i), 200 + i * 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 96 ? p : p + (96 - p) * 0.16 + 0.6));
    }, 80);
    return () => clearInterval(id);
  }, []);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;

    setShowStill(true);
    setProgress(100);

    setTimeout(() => {
      setExiting(true);
      setTimeout(() => onComplete('/last-frame.png'), 750);
    }, 550);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    if (v.duration - v.currentTime < 0.12) {
      finish();
    }
  };

  useEffect(() => {
    const fallback = setTimeout(finish, 5200);
    const v = videoRef.current;
    if (v) {
      v.playbackRate = PLAYBACK_RATE;
      v.play().catch(() => { });
    }
    return () => clearTimeout(fallback);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        style={{ pointerEvents: exiting ? 'none' : 'auto' }}
      >
        <video
          ref={videoRef}
          className="loading-video"
          src="/loading.mp4"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={finish}
          style={{ opacity: showStill ? 0 : 1 }}
        />
        <img
          className="loading-still"
          src="/last-frame.png"
          alt=""
          style={{ opacity: showStill ? 1 : 0 }}
        />

        <div className="loading-overlay" />

        <div className="loading-text">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              className={`loading-line ${line.startsWith('//') ? 'is-comment' : 'is-main'
                }`}
              initial={{ opacity: 0, x: -70 }}
              animate={
                i <= lineIndex
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -70 }
              }
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <div className="loading-progress-wrap">
          <div className="loading-progress-track">
            <motion.div
              className="loading-progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: 'linear' }}
            />
          </div>
          <span className="loading-progress-num mono">
            {String(Math.floor(progress)).padStart(2, '0')}%
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
