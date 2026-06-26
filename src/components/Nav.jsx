import { useEffect, useState } from 'react';
import './Nav.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo mono">
          LN<span className="nav-logo-dot">.</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} className="nav-link mono">
              <span className="nav-link-num">0{i + 1}.</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-cta mono"
          href="https://drive.google.com/file/d/1aaGJYZrbCwJUAp_ienJk1tYDU9Dr1MOn/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="nav-mobile-link mono"
            onClick={() => setOpen(false)}
          >
            <span className="nav-link-num">0{i + 1}.</span>
            {l.label}
          </a>
        ))}
        <a
          className="nav-mobile-link mono is-cta"
          href="https://drive.google.com/file/d/1aaGJYZrbCwJUAp_ienJk1tYDU9Dr1MOn/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↓
        </a>
      </div>
    </header>
  );
}
