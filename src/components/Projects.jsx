import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import useInView from '../hooks/useInView';
import { RecylytixArt, MapNavigatorArt, ManabiArt, QrioArt } from './ProjectArt';
import './Projects.css';

const PROJECTS = [
  {
    name: 'Recylytix',
    art: RecylytixArt,
    featured: true,
    desc: 'AI-driven recycling insights platform that helps communities track and improve their recycling habits using machine learning.',
    tags: ['React', 'Open Street Maps', 'Node.js'],
    link: 'recylytix.vercel.app',
    repo: 'https://github.com/likhitnaidu/recylytix',
  },
  {
    name: 'Live Map Navigator',
    art: MapNavigatorArt,
    featured: true,
    desc: 'Real-time navigation frontend with interactive maps, route optimization, and live traffic updates.',
    tags: ['React', 'WebSocket', 'Open Street Maps'],
    link: '#',
    repo: '#',
  },
  {
    name: 'Lost and Found Portal',
    art: ManabiArt,
    featured: false,
    desc: 'A centralized digital platform where users can report lost or found items. It replaces inefficient manual logs with a searchable online database, allowing people to securely document, track, and reclaim misplaced belongings through admin verification.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/likhitnaidu/lost_and_found_portal',
    repo: 'https://github.com/likhitnaidu/lost_and_found_portal',
  },
  {
    name: 'Gesture Based IDE',
    art: QrioArt,
    featured: false,
    desc: 'Ideal for accessibility, pairing sessions, or keeping hands on hardware while coding.',
    tags: ['Python', 'FastAPI', 'TensorFlow'],
    link: 'gesture-based-ide-lac.vercel.app',
    repo: 'https://github.com/likhitnaidu/Gesture-Based-IDE',
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <span className="section-label">03. Featured Projects</span>
        <p className="projects-intro mono">
          // four shipped
        </p>

        <div className="projects-list">
          {PROJECTS.map((p, i) => {
            const Art = p.art;
            return (
              <motion.div
                className="project-card"
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="project-art-wrap">
                  <Art />
                </div>

                <div className="project-card-body">
                  <div className="project-card-top">
                    <span className="project-eyebrow mono">
                      {p.featured ? 'Featured Project' : 'Side Project'}
                    </span>
                    <div className="project-card-links">
                      <a
                        href={p.repo}
                        className="project-icon-link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} source code`}
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href={p.link}
                        className="project-link mono"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Details <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags mono">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
