import { useEffect, useRef, useState, useCallback } from 'react';

const SHELL_LINES = [
  '#!/usr/bin/env whoami',
  '\u00A0',
  '<span class="prompt">visitor@abhiram:~$</span> whoami',
  '<span class="out">abhiram</span>',
  '<span class="prompt">visitor@abhiram:~$</span> cat about.txt',
];

const BIO_TEXT =
  'Fourth-year engineering student at Sree Narayana Gurukulam College of Engineering, Kerala. I build backend systems, work through cryptographic protocols from first principles, and care about accessibility and the FOSS ecosystem. Campus Lead at TinkerHub, Creative Lead at IEDC, and Joint Web Lead at MuLearn.';

interface UsageItem {
  label: string;
  pct: number;
  note: string;
}

const USAGE_DATA: UsageItem[] = [
  { label: 'rust', pct: 88, note: 'primary stack — Trinetra' },
  { label: 'cryptography', pct: 82, note: 'first-principles study' },
  { label: 'accessibility', pct: 75, note: 'applied in Axis' },
  { label: 'python', pct: 63, note: 'data & ML tooling' },
  { label: 'typescript/js', pct: 52, note: 'SDK & web work' },
];

interface HeroProps {
  bootDone: boolean;
}

const Hero = ({ bootDone }: HeroProps) => {
  const srcRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const usageRef = useRef<HTMLDivElement>(null);
  const [typingDone, setTypingDone] = useState(false);

  // Typewriter for the code block lines
  const runTypewriter = useCallback((instant: boolean) => {
    const srcEl = srcRef.current;
    const bioEl = bioRef.current;
    if (!srcEl || !bioEl) return;

    if (instant) {
      srcEl.innerHTML = SHELL_LINES.join('<br>');
      bioEl.textContent = BIO_TEXT;
      setTypingDone(true);
      return;
    }

    srcEl.innerHTML = '';
    let i = 0;

    function nextLine() {
      if (!srcEl) return;
      if (i >= SHELL_LINES.length) {
        typeAbout();
        return;
      }
      const div = document.createElement('div');
      div.innerHTML = SHELL_LINES[i];
      srcEl.appendChild(div);
      i++;
      setTimeout(nextLine, 260);
    }
    nextLine();

    function typeAbout() {
      if (!bioEl) return;
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      let j = 0;
      const timer = setInterval(() => {
        bioEl.textContent = BIO_TEXT.slice(0, j);
        bioEl.appendChild(cursor);
        j++;
        if (j > BIO_TEXT.length) {
          clearInterval(timer);
          setTypingDone(true);
        }
      }, 12);
    }
  }, []);

  // Trigger typewriter when boot is done
  useEffect(() => {
    if (!bootDone) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyBooted = sessionStorage.getItem('booted');

    // If reduced motion or already booted on this page load (boot was instant), show content immediately
    if (reduceMotion || (alreadyBooted && !document.getElementById('boot-overlay'))) {
      runTypewriter(true);
    } else {
      runTypewriter(false);
    }
  }, [bootDone, runTypewriter]);

  // Usage meter reveal on scroll
  useEffect(() => {
    const usageEl = usageRef.current;
    if (!usageEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const rows = entry.target.querySelectorAll('.usage-row');
            rows.forEach((row, idx) => {
              setTimeout(() => row.classList.add('filled'), idx * 110);
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(usageEl);
    return () => observer.disconnect();
  }, []);

  // Live clock + uptime
  const [time, setTime] = useState('--:--:--');
  const [uptime, setUptime] = useState('0s');
  const startedAt = useRef(Date.now());

  useEffect(() => {
    function pad(n: number) {
      return n < 10 ? '0' + n : '' + n;
    }
    function tick() {
      const d = new Date();
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
      const s = Math.floor((Date.now() - startedAt.current) / 1000);
      const m = Math.floor(s / 60);
      setUptime((m > 0 ? m + 'm ' : '') + (s % 60) + 's');
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="whoami" className="file" data-section>
      <div className="filehead">
        <span>whoami.sh</span>
        <span>5 lines</span>
      </div>

      <div className="hero-grid">
        {/* Left: code block + bio + usage meter */}
        <div className="hero-main">
          <div className="code-block">
            <div className="gutter">
              1<br />2<br />3<br />4<br />5
            </div>
            <div className="src" ref={srcRef}></div>
          </div>

          <div className="bio">
            <p ref={bioRef}></p>

            <div className="usage" ref={usageRef} aria-label="areas of focus">
              {USAGE_DATA.map((item) => (
                <div
                  key={item.label}
                  className="usage-row"
                  style={{ '--pct': `${item.pct}%` } as React.CSSProperties}
                >
                  <span>{item.label}</span>
                  <div className="ul-bar">
                    <i></i>
                  </div>
                  <span className="ul-note">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: session widget panel */}
        <aside className="widget-panel" aria-label="session info">
          <div className="row">
            <span>local time</span>
            <span className="val">{time}</span>
          </div>
          <div className="row">
            <span>session uptime</span>
            <span className="val">{uptime}</span>
          </div>
          <div className="row">
            <span>status</span>
            <span className="val">
              <span className="status-dot"></span>open to collab
            </span>
          </div>
          <div className="row stack">
            <span>x3dh handshake, simplified</span>
            <svg viewBox="0 0 220 70" className="handshake" aria-hidden="true">
              <line x1="20" y1="35" x2="200" y2="35" className="hs-line" />
              <circle cx="20" cy="35" r="9" className="hs-node" />
              <circle cx="200" cy="35" r="9" className="hs-node" />
              <text x="20" y="55" className="hs-label" textAnchor="middle">
                A
              </text>
              <text x="200" y="55" className="hs-label" textAnchor="middle">
                B
              </text>
              <circle className="hs-dot" cx="20" cy="35" r="3" />
            </svg>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
