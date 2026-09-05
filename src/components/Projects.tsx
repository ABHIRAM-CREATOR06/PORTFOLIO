import { useState, useEffect, useRef } from 'react';

interface Project {
  id: string;
  perm: string;
  name: string;
  desc: string;
  detail: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'p-axis',
    perm: 'drwxr-xr-x',
    name: 'axis/',
    desc: 'Accessibility auditing tool, WCAG 2.2 / RPwD Act compliant',
    detail:
      'An accessibility auditing tool built to check software against WCAG 2.2 and India\'s Rights of Persons with Disabilities Act. Shipped as SDKs across three ecosystems — .NET, npm, and Rust — so it can drop into whatever stack a team is already running. Presented at MangaluruFOSS.',
    tags: ['.NET', 'npm', 'Rust', 'WCAG 2.2'],
    link: '#contact',
    linkLabel: 'ask about this project →',
  },
  {
    id: 'p-halonyx',
    perm: 'drwxr-xr-x',
    name: 'halonyx/',
    desc: 'Signal Protocol messenger, built to learn cryptography from first principles',
    detail:
      'A messenger implementing the Signal Protocol end to end: X3DH key exchange, the Double Ratchet, safety numbers for MITM detection, and peer-to-peer file transfer over WebTorrent. Explicitly not for production — the point was understanding the protocol, not shipping a product. Runs on a self-hostable, zero-knowledge Federated Relay Architecture: relays forward encrypted blobs and never see plaintext. Backed by a formal STRIDE threat model tracking eighteen findings. AGPL-3.0.',
    tags: ['X3DH', 'Double Ratchet', 'WebTorrent', 'STRIDE'],
    link: 'https://github.com/ABHIRAM-CREATOR06/Halonyx',
    linkLabel: 'github.com/ABHIRAM-CREATOR06/Halonyx',
  },
  {
    id: 'p-trinetra',
    perm: 'drwxr-xr-x',
    name: 'trinetra/',
    desc: 'Multi-layer telecom fraud intelligence platform — work in progress',
    detail:
      'त्रिनेत्र — a multi-layer telecom fraud intelligence and risk-detection platform, named for the third eye that sees hidden patterns. Rust, Axum, and SQLx over SQLite form the core; Python with pandas and NetworkX are planned for the data and graph-intelligence layers, with a React dashboard further out. Phase 1 — the core data model, generator, and rule engine — is delivered; the rest is roadmap.',
    tags: ['Rust', 'Axum', 'SQLite', 'NetworkX (planned)'],
    link: 'https://github.com/ABHIRAM-CREATOR06/Trinetra',
    linkLabel: 'github.com/ABHIRAM-CREATOR06/Trinetra',
  },
  {
    id: 'p-bankpulse',
    perm: '-rw-r--r--',
    name: 'bankpulse.py',
    desc: 'Loan approval predictor with an explainability layer — internship project',
    detail:
      'Built during an internship at ICT Academy of Kerala: a Flask and scikit-learn loan-approval prediction system with a Mistral AI explainability layer sitting behind an /assistant route, so a rejected or approved decision comes with a plain-language reason attached.',
    tags: ['Flask', 'scikit-learn', 'Mistral AI'],
    link: '#contact',
    linkLabel: 'ask about this project →',
  },
];

const Projects = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const tableRef = useRef<HTMLTableSectionElement>(null);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Staggered reveal on first intersection
  useEffect(() => {
    const rows = tableRef.current?.querySelectorAll('.proj-row');
    if (!rows || rows.length === 0) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      rows.forEach((row) => ((row as HTMLElement).style.opacity = '1'));
      return;
    }

    // Start rows transparent
    rows.forEach((row) => {
      (row as HTMLElement).style.opacity = '0';
      (row as HTMLElement).style.transition = 'opacity 0.4s ease';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const allRows = Array.from(rows);
            const idx = allRows.indexOf(entry.target as HTMLElement);
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = '1';
            }, idx * 90);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="file" data-section>
      <div className="filehead">
        <span>projects/</span>
        <span>ls -la</span>
      </div>

      <table className="ls">
        <caption>total {PROJECTS.length} — click a row to read more</caption>
        <thead>
          <tr>
            <th>permissions</th>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody ref={tableRef}>
          {PROJECTS.map((proj) => {
            const isOpen = openIds.has(proj.id);
            return (
              <Fragment key={proj.id}>
                <tr
                  className="proj-row"
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(proj.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(proj.id);
                    }
                  }}
                >
                  <td className="perm">{proj.perm}</td>
                  <td className="name">{proj.name}</td>
                  <td>{proj.desc}</td>
                </tr>
                <tr>
                  <td className="proj-detail" colSpan={3}>
                    <div className={`proj-detail-inner ${isOpen ? 'open' : ''}`}>
                      <div className="pad">
                        <p>{proj.detail}</p>
                        <div className="tag-row">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {proj.link && (
                          <div className="proj-links">
                            <a
                              href={proj.link}
                              target={proj.link.startsWith('http') ? '_blank' : undefined}
                              rel={proj.link.startsWith('http') ? 'noopener' : undefined}
                            >
                              {proj.linkLabel}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

import { Fragment } from 'react';

export default Projects;
