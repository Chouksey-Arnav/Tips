'use client';

import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/',         label: 'Sanctum'    },
  { href: '/lore',     label: 'Chronicles' },
  { href: '/beings',   label: 'Beings'     },
  { href: '/pantheon', label: 'Pantheon'   },
  { href: '/temple',   label: 'Temple'     },
];

const TICKER_PHRASES = [
  'Born of Blips and Zips',
  'Twin of the Demon Flips',
  'Slayer from Within',
  'Creator of All Gods',
  'God of the Incarnate',
  'He Who Swam Through Bones',
  'He Who Punched the Weak Spot',
  'He Who Went Back to Sleep',
  'The First Incarnation',
  'The Sacred Threefold',
  'The Great Laziness',
];

function Ticker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[22px] overflow-hidden"
      style={{ background: 'rgba(4,3,10,0.98)', borderBottom: '1px solid rgba(201,162,39,0.12)' }}>
      <div className="flex items-center h-full" style={{ animation: 'tickerScroll 45s linear infinite' }}>
        {[...TICKER_PHRASES, ...TICKER_PHRASES].map((phrase, i) => (
          <span key={i} className="shrink-0 flex items-center gap-4 px-6"
            style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(201,162,39,0.4)' }}>
            {phrase}
            <span style={{ color: 'rgba(201,162,39,0.2)', fontSize: '0.5rem' }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

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
    <nav className={`fixed top-[22px] left-0 right-0 z-40 transition-all duration-500 ${
      scrolled || open
        ? 'backdrop-blur-md border-b shadow-lg'
        : 'bg-transparent'
    }`}
      style={{
        background: scrolled || open ? 'rgba(4,3,10,0.97)' : 'transparent',
        borderColor: 'rgba(201,162,39,0.15)',
      }}>

      {/* Gold top-line under ticker */}
      <div className="h-[1px] w-full"
        style={{ background: scrolled ? 'linear-gradient(90deg,transparent,rgba(201,162,39,0.5) 20%,rgba(240,201,64,0.8) 50%,rgba(201,162,39,0.5) 80%,transparent)' : 'transparent', transition: 'all 0.5s' }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-cinzel text-xl font-bold tracking-[0.35em] text-bright-gold glow-gold transition-all duration-500 group-hover:tracking-[0.5em]">
            T I P S
          </span>
          <span className="hidden sm:block h-4 w-[1px]" style={{ background: 'rgba(201,162,39,0.35)' }} />
          <span className="hidden sm:block font-heading text-[0.55rem] tracking-[0.3em] uppercase text-divine-gold/40 group-hover:text-divine-gold/70 transition-colors duration-300">
            God of the Incarnate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className={`relative px-5 py-2 font-heading text-[0.68rem] tracking-[0.22em] uppercase transition-all duration-350 group ${
                pathname === l.href ? 'text-bright-gold' : 'text-bone/55 hover:text-parchment'
              }`}>
              {l.label}
              <span className={`absolute bottom-0 left-5 right-5 h-px transition-all duration-400 origin-center ${
                pathname === l.href
                  ? 'scale-x-100 opacity-100'
                  : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
              }`} style={{ background: 'linear-gradient(to right, transparent, #c9a227, transparent)' }} />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          <span className={`block w-6 h-px transition-all duration-400 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: '#c9a227' }} />
          <span className={`block w-6 h-px transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} style={{ background: '#c9a227' }} />
          <span className={`block w-6 h-px transition-all duration-400 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: '#c9a227' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-8 pt-3 flex flex-col gap-1"
          style={{ borderTop: '1px solid rgba(201,162,39,0.08)', background: 'rgba(4,3,10,0.98)' }}>
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className={`py-4 font-heading text-[0.68rem] tracking-[0.28em] uppercase flex items-center justify-between transition-colors duration-300 ${
                pathname === l.href ? 'text-bright-gold' : 'text-bone/50 hover:text-parchment'
              }`}
              style={{ borderBottom: '1px solid rgba(201,162,39,0.07)' }}>
              {l.label}
              {pathname === l.href && <span className="text-divine-gold/60" style={{ fontSize: '0.6rem' }}>✦</span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative z-10" style={{ background: 'rgba(4,3,10,0.98)', borderTop: '1px solid rgba(201,162,39,0.1)' }}>
      <div className="gold-line-h" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">

        {/* Center emblem */}
        <div className="text-center mb-14">
          <div className="inline-block relative mb-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animate-spin-slow opacity-20" aria-hidden="true">
              <circle cx="40" cy="40" r="38" stroke="#c9a227" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="28" stroke="#c9a227" strokeWidth="0.5" />
              {Array.from({length:8}).map((_,i) => {
                const a = (i * 45 * Math.PI) / 180;
                return <line key={i} x1={40+28*Math.cos(a)} y1={40+28*Math.sin(a)} x2={40+38*Math.cos(a)} y2={40+38*Math.sin(a)} stroke="#c9a227" strokeWidth="0.5" />;
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-divine-gold text-2xl" style={{ textShadow: '0 0 20px rgba(201,162,39,0.8)' }}>✦</span>
            </div>
          </div>

          <p className="font-cinzel text-5xl font-bold tracking-[0.45em] text-bright-gold glow-gold mb-3">T I P S</p>
          <p className="font-fell italic text-bone/40 text-base tracking-wider mb-1">
            God of the Incarnate · Slayer of the Demon Flips · Creator of All That Is Divine
          </p>
          <p className="incantation text-[0.6rem] mt-3">Sacred Texts of the First Realm · Volume I</p>
        </div>

        <div className="ornament-divider mb-10">
          <span className="font-heading text-divine-gold/30 text-sm">✦</span>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className="font-heading text-[0.62rem] tracking-[0.3em] uppercase text-bone/35 hover:text-divine-gold transition-colors duration-400">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Sacred quote */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="px-8 py-8" style={{ border: '1px solid rgba(201,162,39,0.08)', background: 'rgba(201,162,39,0.02)' }}>
            <p className="font-fell italic text-bone/38 text-lg leading-relaxed">
              &ldquo;He swam through the bones and sludge of a thousand consumed souls. He found the spot. He punched it with full divine force. Then he walked out of the explosion without a single wound, looked at the ruins of the demon&rsquo;s hut, and went back to sleep.&rdquo;
            </p>
            <p className="incantation text-[0.58rem] mt-5 text-divine-gold/30">— The Sacred Chronicles, Volume I, Chapter IV</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center">
          <p className="incantation text-[0.55rem] text-bone/15">
            The Third Child watches · The Chronicles are not yet complete · Volume II is sealed
          </p>
        </div>
      </div>

      <div className="gold-line-h opacity-20" />
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>TIPS — God of the Incarnate</title>
        <meta name="description" content="Born of Blips and Zips. Twin of the demon Flips. Creator of all gods. He who defeated darkness from within. He who then went back to sleep." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen overflow-x-hidden" style={{ background: '#04030a' }}>
        <Ticker />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
