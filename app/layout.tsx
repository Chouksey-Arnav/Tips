'use client';

import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/lore', label: 'Chronicles' },
  { href: '/beings', label: 'Beings' },
  { href: '/pantheon', label: 'Pantheon' },
  { href: '/temple', label: 'Temple' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Gold top line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]"
        style={{ background: 'linear-gradient(90deg,transparent,#c9a227 20%,#f0c940 50%,#c9a227 80%,transparent)' }} />

      <nav className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || open ? 'bg-void/95 backdrop-blur-md border-b border-divine-gold/20 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="font-cinzel text-xl font-bold tracking-[0.3em] text-bright-gold glow-gold hover:tracking-[0.35em] transition-all duration-300">
            T I P S
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map(l => (
              <Link key={l.href} href={l.href}
                className={`relative px-4 py-2 font-heading text-xs tracking-widest uppercase transition-all duration-300 group ${
                  pathname === l.href ? 'text-bright-gold' : 'text-bone/60 hover:text-parchment'
                }`}>
                {l.label}
                <span className={`absolute bottom-0 left-4 right-4 h-px bg-divine-gold transition-all duration-300 origin-left ${
                  pathname === l.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'
                }`} />
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <span className={`block w-6 h-px bg-divine-gold transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-divine-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-divine-gold transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-divine-gold/10">
            {NAV.map(l => (
              <Link key={l.href} href={l.href}
                className={`py-3 font-heading text-xs tracking-widest uppercase border-b border-divine-gold/10 transition-colors ${
                  pathname === l.href ? 'text-bright-gold' : 'text-bone/60 hover:text-parchment'
                }`}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-divine-gold/15 bg-void/80 backdrop-blur-sm">
      <div className="gold-line-h" />
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="font-cinzel text-4xl font-bold tracking-[0.4em] text-bright-gold glow-gold mb-2">T I P S</p>
        <p className="font-body text-bone/40 text-sm italic tracking-wider mb-10">
          God of the Incarnate · Slayer of Flips · Creator of All Gods
        </p>
        <div className="ornament-divider mb-8">
          <span className="font-heading text-divine-gold text-xl">✦</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className="font-heading text-xs tracking-[0.2em] uppercase text-bone/40 hover:text-divine-gold transition-colors duration-300">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="font-body italic text-bone/25 text-base max-w-md mx-auto">
          &ldquo;He swam through bones and sludge, and with one punch, ended the demon forever. Then he went back to sleep.&rdquo;
        </p>
        <p className="font-heading text-xs tracking-widest text-bone/15 uppercase mt-6">
          Sacred Texts of the Realm of Tips · Volume I
        </p>
      </div>
      <div className="gold-line-h opacity-30" />
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>TIPS — God of the Incarnate</title>
        <meta name="description" content="Born of Blips and Zips. Twin of the demon Flips. Creator of all gods. Slayer from within. Extremely lazy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen overflow-x-hidden" style={{ background: '#06040e' }}>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
