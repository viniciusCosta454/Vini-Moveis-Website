import { useEffect, useState } from 'react';
import { ClipboardList, Grid2X2, Home, MessageCircle, Star } from 'lucide-react';

const appNavItems = [
  { label: 'Início', href: '#inicio', sectionId: 'inicio', icon: Home },
  { label: 'Ambientes', href: '#ambientes', sectionId: 'ambientes', icon: Grid2X2 },
  { label: 'Processo', href: '#processo', sectionId: 'processo', icon: ClipboardList },
  { label: 'Reviews', href: '#depoimentos', sectionId: 'depoimentos', icon: Star },
  { label: 'Contato', href: '#contato', sectionId: 'contato', icon: MessageCircle },
];

export default function MobileAppNav() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = appNavItems
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-42% 0px -42% 0px',
        threshold: [0.08, 0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-[2rem] border border-white/24 bg-vini-ink/52 p-2 text-vini-ivory shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:hidden [bottom:calc(env(safe-area-inset-bottom)+0.75rem)]"
      aria-label="Menu do aplicativo"
    >
      <div className="grid grid-cols-5 gap-1">
        {appNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`group flex min-h-[4.25rem] flex-col items-center justify-center gap-1 rounded-[1.5rem] border px-1 text-center transition-all duration-300 active:scale-95 ${
                isActive
                  ? 'border-white/28 bg-white/18 text-vini-ivory shadow-inner shadow-white/10'
                  : 'border-transparent text-vini-ivory/68 hover:bg-white/10 hover:text-vini-ivory'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                aria-hidden="true"
                className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'text-vini-bronze' : 'group-hover:-translate-y-0.5'}`}
                strokeWidth={1.8}
              />
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.08em]">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
