import { useScrollspy } from '@/hooks/use-scrollspy';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'whoami', label: 'whoami.sh' },
  { id: 'projects', label: 'projects/' },
  { id: 'skills', label: 'skills.md' },
  { id: 'community', label: 'community.log' },
  { id: 'contact', label: 'contact.sh' },
];

const Navbar = () => {
  const activeId = useScrollspy();

  return (
    <>
      {/* Desktop sidebar — hidden below 881px via CSS */}
      <aside className="sidebar">
        <div className="prompt-id">
          <b>abhiram</b>@dev
          <br />
          ~$
        </div>

        <nav className="filetree" aria-label="Sections">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(activeId === item.id && 'active')}
                >
                  <span className="chev">▾</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-status">
          branch: main
          <br />
          encoding: UTF-8
          <br />
          stack: react + vite
        </div>
      </aside>

      {/* Mobile tabbar — hidden above 880px via CSS */}
      <nav className="tabbar" aria-label="Sections">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(activeId === item.id && 'active')}
          >
            <span className="dot"></span>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
