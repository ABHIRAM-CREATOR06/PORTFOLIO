import { useEffect, useRef } from 'react';

interface LogEntry {
  hash: string;
  message: string;
  highlight: string;
}

const LOG_ENTRIES: LogEntry[] = [
  {
    hash: 'a1c9f02',
    highlight: 'Advisory Committe Member Tinkerhub',
    message: ', TinkerHub — currently mentor for Adi Shankara & CUSAT chapters',
  },
  {
    hash: 'a1c9f02',
    highlight: 'Former Campus Lead',
    message: ', TinkerHub - peer-learning & FOSS community work on campus',
  },
  {
    hash: '7e21b4d',
    highlight: 'Creative Lead',
    message: ', IEDC — creative direction for the campus innovation & entrepreneurship cell',
  },
  {
    hash: '3f88a11',
    highlight: ' Former Joint Web Lead',
    message: ', MuLearn — web presence for the peer-learning community',
  },
  {
    hash: 'c04d7e6',
    highlight: 'Axis',
    message: 'Presented  at MangaluruFOSS',
  },
  {
    hash: '9b3aa20',
    highlight: 'FOSS United',
    message: 'Spoke at  events; attended IndiaFOSS',
  },
];

const CommunityLog = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const entries = container.querySelectorAll<HTMLElement>('[data-log]');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      entries.forEach((el) => el.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const allEntries = Array.from(entries);
            const idx = allEntries.indexOf(el);
            setTimeout(() => el.classList.add('show'), idx * 90);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="community" className="file" data-section>
      <div className="filehead">
        <span>community.log</span>
        <span>git log --oneline</span>
      </div>

      <div ref={containerRef}>
        {LOG_ENTRIES.map((entry) => {
          // Handle the two entries where the highlight is embedded mid-sentence
          let msgContent: React.ReactNode;

          if (entry.hash === 'c04d7e6') {
            msgContent = (
              <span className="msg">
                Presented <b>{entry.highlight}</b> at MangaluruFOSS
              </span>
            );
          } else if (entry.hash === '9b3aa20') {
            msgContent = (
              <span className="msg">
                Spoke at <b>{entry.highlight}</b> events; attended IndiaFOSS
              </span>
            );
          } else {
            msgContent = (
              <span className="msg">
                <b>{entry.highlight}</b>{entry.message}
              </span>
            );
          }

          return (
            <div key={entry.hash} className="log-entry" data-log>
              <span className="hash">{entry.hash}</span>
              {msgContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommunityLog;
