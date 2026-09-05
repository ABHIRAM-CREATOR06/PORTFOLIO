import { useEffect, useRef, useState } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: '', delay: 500, type: 'cursor' as const },
  { text: 'mounting /home/abhiram ', suffix: '[ok]', delay: 850, type: 'status' as const },
  { text: 'loading modules: backend, cryptography, accessibility ', suffix: '[ok]', delay: 1150, type: 'status' as const },
  { text: '', delay: 1500, type: 'bar' as const },
  { text: '$ exec whoami.sh', delay: 2500, type: 'cmd' as const },
];

const ASCII_LOGO = `   ▄▄
  ██████
 ██    ██
██      ██
██████████
██      ██`;

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [visible, setVisible] = useState(true);
  const [shownLines, setShownLines] = useState<Set<number>>(new Set());
  const [barProgress, setBarProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyBooted = sessionStorage.getItem('booted');

    if (reduceMotion || alreadyBooted) {
      setVisible(false);
      onComplete();
      return;
    }

    sessionStorage.setItem('booted', '1');

    // Show ASCII logo immediately
    setShownLines(new Set([- 1])); // -1 = ASCII

    // Show each boot line at its delay
    BOOT_LINES.forEach((line, idx) => {
      setTimeout(() => {
        setShownLines((prev) => new Set([...prev, idx]));
      }, line.delay);
    });

    // Progress bar animation at 1520ms
    setTimeout(() => {
      let filled = 0;
      const total = 20;
      const timer = setInterval(() => {
        filled++;
        setBarProgress(filled);
        if (filled >= total) clearInterval(timer);
      }, 42);
    }, 1520);

    // Finish boot at 3000ms
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add('hidden');
      }
      setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 500);
    }, 3000);
  }, [onComplete]);

  if (!visible) return null;

  const barTotal = 20;
  const pct = Math.round((barProgress / barTotal) * 100);
  const barStr = '▓'.repeat(barProgress) + '.'.repeat(barTotal - barProgress);

  return (
    <div id="boot-overlay" ref={containerRef} aria-hidden="true">
      <pre className={`boot-line boot-ascii ${shownLines.has(-1) ? 'show' : ''}`}>
        {ASCII_LOGO}
      </pre>

      {/* "booting session" + cursor */}
      <div className={`boot-line ${shownLines.has(0) ? 'show' : ''}`}>
        booting session<span className="cursor-block"></span>
      </div>

      {/* mounting + loading */}
      <div className={`boot-line ${shownLines.has(1) ? 'show' : ''}`}>
        {BOOT_LINES[1].text}<span className="boot-ok">{BOOT_LINES[1].suffix}</span>
      </div>
      <div className={`boot-line ${shownLines.has(2) ? 'show' : ''}`}>
        {BOOT_LINES[2].text}<span className="boot-ok">{BOOT_LINES[2].suffix}</span>
      </div>

      {/* progress bar */}
      <div className={`boot-line ${shownLines.has(3) ? 'show' : ''}`}>
        syncing session state <span className="mono">[{barStr}] {pct}%</span>
      </div>

      {/* exec command */}
      <div className={`boot-line ${shownLines.has(4) ? 'show' : ''}`}>
        $ exec whoami.sh
      </div>
    </div>
  );
};

export default BootSequence;
