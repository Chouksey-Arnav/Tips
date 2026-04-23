'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* ── StarField ─────────────────────────────────────────────────────── */
function StarField() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 200; i++) {
      const s = document.createElement('div');
      const x = ((i * 73.1 + 17) % 100).toFixed(3);
      const y = ((i * 47.3 + 31) % 100).toFixed(3);
      const size = (((i * 13.7) % 2.8) + 0.4).toFixed(2);
      const dur  = (((i * 3.9)  % 5) + 2).toFixed(2);
      const delay = ((i * 1.7) % 8).toFixed(2);
      const isGold   = i % 7 === 0;
      const isSilver = i % 13 === 0;
      const color = isGold ? '#f0c940' : isSilver ? '#a8c4d4' : '#ffffff';
      s.style.cssText = `position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;border-radius:50%;background:${color};animation:twinkle ${dur}s ease-in-out ${delay}s infinite;`;
      frag.appendChild(s);
    }
    el.appendChild(frag);
    return () => { el.innerHTML = ''; };
  }, []);
  return <div ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />;
}

/* ── Ember Particles ────────────────────────────────────────────────── */
function Embers() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <style>{`
        .ember {
          position: absolute;
          bottom: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: radial-gradient(circle, #f0c940, #c9a227);
          animation: ember var(--dur) ease-out var(--delay) infinite;
          box-shadow: 0 0 4px 1px rgba(201,162,39,0.6);
          --dx: 0px;
        }
        @keyframes ember {
          0%   { opacity: 0;   transform: translateY(0)    translateX(0)    scale(1); }
          12%  { opacity: 1; }
          80%  { opacity: 0.5; }
          100% { opacity: 0;   transform: translateY(-120px) translateX(var(--dx)) scale(0.15); }
        }
      `}</style>
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="ember" style={{
          left: `${((i * 7.3 + 11) % 90) + 5}%`,
          '--dur': `${((i * 1.3) % 3) + 3}s`,
          '--delay': `${((i * 0.7) % 5)}s`,
          '--dx': `${((i % 2 === 0 ? 1 : -1) * ((i * 4.1) % 30))}px`,
        } as React.CSSProperties} />
      ))}
    </div>
  );
}

/* ── Sacred Sigil SVG ───────────────────────────────────────────────── */
function SacredSigil() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      {/* Outermost ring */}
      <svg width="520" height="520" viewBox="0 0 520 520" fill="none"
        className="absolute animate-spin-slow opacity-[0.04]">
        <circle cx="260" cy="260" r="255" stroke="#c9a227" strokeWidth="0.8" />
        <circle cx="260" cy="260" r="240" stroke="#c9a227" strokeWidth="0.4" strokeDasharray="4 8" />
        {Array.from({length:24}).map((_,i) => {
          const a = (i * 15 * Math.PI) / 180;
          return <line key={i} x1={260+240*Math.cos(a)} y1={260+240*Math.sin(a)} x2={260+255*Math.cos(a)} y2={260+255*Math.sin(a)} stroke="#c9a227" strokeWidth="0.6"/>;
        })}
      </svg>

      {/* Middle ring - reverse */}
      <svg width="360" height="360" viewBox="0 0 360 360" fill="none"
        className="absolute animate-spin-reverse opacity-[0.06]">
        <circle cx="180" cy="180" r="175" stroke="#c9a227" strokeWidth="0.6" />
        <circle cx="180" cy="180" r="150" stroke="#c9a227" strokeWidth="0.4" strokeDasharray="2 6" />
        {Array.from({length:12}).map((_,i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <g key={i}>
              <line x1={180+150*Math.cos(a)} y1={180+150*Math.sin(a)} x2={180+175*Math.cos(a)} y2={180+175*Math.sin(a)} stroke="#c9a227" strokeWidth="0.8"/>
              <circle cx={180+162*Math.cos(a)} cy={180+162*Math.sin(a)} r="2" fill="#c9a227" opacity="0.5"/>
            </g>
          );
        })}
        <polygon points="180,60 198,140 278,140 214,188 238,268 180,220 122,268 146,188 82,140 162,140"
          stroke="#c9a227" strokeWidth="0.6" fill="none" />
      </svg>

      {/* Inner ring - slow */}
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none"
        className="absolute animate-spin-slow opacity-[0.08]" style={{ animationDuration: '80s' }}>
        <circle cx="100" cy="100" r="95" stroke="#f0c940" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" stroke="#c9a227" strokeWidth="0.5" strokeDasharray="3 5" />
        {Array.from({length:8}).map((_,i) => {
          const a = (i * 45 * Math.PI) / 180;
          return <line key={i} x1={100+70*Math.cos(a)} y1={100+70*Math.sin(a)} x2={100+95*Math.cos(a)} y2={100+95*Math.sin(a)} stroke="#c9a227" strokeWidth="0.5"/>;
        })}
        <circle cx="100" cy="100" r="4" stroke="#f0c940" strokeWidth="0.8" fill="none"/>
      </svg>
    </div>
  );
}

/* ── Ornament ───────────────────────────────────────────────────────── */
function Divider({ sym = '✦' }: { sym?: string }) {
  return (
    <div className="ornament-divider">
      <span className="font-heading text-divine-gold text-lg" style={{ textShadow: '0 0 15px rgba(201,162,39,0.6)' }}>{sym}</span>
    </div>
  );
}

/* ── Data ───────────────────────────────────────────────────────────── */
const PILLARS = [
  {
    sym: '◎',
    t: 'Born of Accident',
    b: 'His mother tripped on a stone. In the suspended instant of her fall through the divine realm, two souls entered the world — named not by ceremony, but by physics. Tips, from the tip of the stumble. Flips, from the flip of her body.',
  },
  {
    sym: '☠',
    t: 'Twin to Darkness',
    b: 'His twin Flips was his opposite in every conceivable way: where Tips embodied restful light, Flips embodied consuming darkness. For an age, Flips walked the earth and ate it. It fell to Tips, and Tips alone, to stop him.',
  },
  {
    sym: '✦',
    t: 'Creator of All Gods',
    b: 'After the First Incarnation — after the battle within and the resurrection of all humanity — Tips made a sacred and entirely lazy decision: he would create all other gods, delegate the entirety of divine responsibility to them, and rest.',
  },
];

const STORY_BEATS = [
  { n: '01', t: 'The Stumble of Blips',    text: 'Blips walked through the First Realm. Her foot caught on a stone — an ordinary stone, unremarkable in all ways. She tipped. She flipped. And in that exact suspended instant, two souls were released into the world, named by the motion of their own birth.' },
  { n: '02', t: 'The Naming',              text: 'Tips, born of the tip of the fall. Flips, born of the flip of the body. No prophet named them. No ceremony ordained them. They arrived in the world already different — one reaching toward light, one staring into the dark below.' },
  { n: '03', t: 'The Age of Consumption',  text: 'Flips descended to the mortal world with singular and relentless purpose: hunger. He moved across the land like a disease with teeth. Villages fell silent. Forests emptied. The earth became his feeding ground and its people became his meals. He built a hut of bones and lived inside his appetite.' },
  { n: '04', t: 'The Beggar\'s Disguise', text: 'Tips arrived at the door of the bone hut wearing the form of a wretched beggar — starved, defeated, utterly pitiable. He knocked. Flips answered. And Tips, in the most carefully constructed sentence in divine history, said: "I am very tired of this life. Please keep me up." Flips ate him. This was the plan.' },
  { n: '05', t: 'The Battle Within',       text: 'Inside the stomach of the demon lay a world of darkness — bones and sludge, the accumulated remains of thousands of consumed souls. Tips swam through it. He was unkillable. He had time. Both twins shared one hidden vulnerability: a single precise point within their invincible forms. Tips searched. Then he found it.' },
  { n: '06', t: 'The Final Punch',         text: 'One decisive blow. Full divine force against the weak spot hidden in the gut of the demon. Flips did not die slowly — he detonated. The explosion erased the bone hut, obliterated its location from all record, and sent Tips walking out of the fire without a single wound.' },
  { n: '07', t: 'The Resurrection',        text: 'Tips moved across the shattered earth and restored every dead human to life. Every one. Thousands of years of consumption, reversed in a single act. Humanity rose, gasping, and looked up at the god who had saved them. Tips received their gratitude. He nodded. He was already very tired.' },
  { n: '08', t: 'The Great Laziness',      text: 'The cosmos still needed tending. Things would inevitably go wrong again. Someone had to be responsible for the ongoing work of divinity. Tips, therefore, created all other gods — every deity that has ever existed across every tradition — specifically so he could stop. He has been resting ever since. He does not regret this.' },
];

const CHARACTERS = [
  { id: 'tips',  name: 'Tips',  title: 'God of the Incarnate',  type: 'god',     status: 'active',    symbol: '✦', color: '#c9a227', glow: 'rgba(201,162,39,0.7)', desc: 'Born of the tip of a stumble. Unkillable. All-powerful. Thoroughly committed to rest.' },
  { id: 'flips', name: 'Flips', title: 'The Demon Twin',        type: 'demon',   status: 'destroyed', symbol: '☠', color: '#cc2200', glow: 'rgba(204,34,0,0.7)',   desc: 'Consumed the world. Built a hut of bones. Was punched apart from the inside.' },
  { id: 'blips', name: 'Blips', title: 'The Divine Mother',     type: 'divine',  status: 'unknown',   symbol: '◎', color: '#a8c4d4', glow: 'rgba(168,196,212,0.6)', desc: 'She who stumbled. She who named two gods by accident. She whose rock remains sacred.' },
  { id: 'zips',  name: 'Zips',  title: 'The Divine Father',     type: 'divine',  status: 'unknown',   symbol: '⚡', color: '#4fc3f7', glow: 'rgba(79,195,247,0.6)',  desc: 'Speed itself made divine. Father of creation and destruction in equal measure.' },
  { id: 'third', name: '???',   title: 'The Third Child',       type: 'mystery', status: 'unknown',   symbol: '▲', color: '#888899', glow: 'rgba(136,136,153,0.5)', desc: 'Blips and Zips had three children. Two are known. The third has never been named.' },
];

const EXPLORE = [
  { href: '/lore',     sym: '📜', t: 'The Chronicles', d: 'Five chapters of sacred text. The complete story of the First Incarnation, written in the style of the ancients.' },
  { href: '/beings',   sym: '⚔',  t: 'Divine Beings',  d: 'Every god, demon, and mystery of the realm — their domains, their fates, their sacred accounts.' },
  { href: '/pantheon', sym: '🏛',  t: 'The Pantheon',   d: 'All gods created in the Great Laziness. Their names and natures are still being cataloged.' },
  { href: '/temple',   sym: '✦',  t: 'The Temple',     d: 'Seek wisdom. Receive the sacred laws. Make your offerings. Tips may or may not be listening.' },
];

/* ── Home Page ──────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="relative">
      <StarField />

      {/* ════════════════════════════════════
          HERO
          ════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* Deep background glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(23,11,48,0.55) 0%, rgba(4,3,10,0) 70%)' }} />

        {/* Sacred geometry */}
        <SacredSigil />

        {/* Ember particles */}
        <Embers />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto">

          {/* Proclamation tag */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-4 mb-10">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.6))' }} />
            <p className="incantation text-[0.62rem]">The Sacred Realm of Tips</p>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(201,162,39,0.6))' }} />
          </div>

          {/* Hero Name */}
          <h1
            className="animate-fade-up delay-300 font-cinzel font-black glow-gold-pulse shimmer-text"
            style={{ fontSize: 'clamp(5rem,20vw,15rem)', letterSpacing: '0.38em', lineHeight: 0.9 }}>
            TIPS
          </h1>

          {/* Title */}
          <p className="animate-fade-up delay-500 font-heading text-parchment/65 text-lg md:text-2xl tracking-[0.25em] uppercase mt-6">
            God of the Incarnate
          </p>

          {/* Tagline */}
          <p className="animate-fade-up delay-700 font-fell italic text-bone/50 text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed">
            He wore a beggar&rsquo;s face and knocked on the door of a demon.<br />
            He swam through darkness and punched it to pieces from within.<br />
            He restored the world, nodded, and went back to sleep.
          </p>

          {/* Sub-proclamation */}
          <p className="animate-fade-up delay-800 incantation text-[0.6rem] mt-5">
            Son of Blips & Zips &nbsp;·&nbsp; Twin of Flips &nbsp;·&nbsp; Creator of All That Is Divine
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-1000 flex flex-col sm:flex-row gap-5 justify-center mt-12">
            <Link href="/lore" className="btn-divine">Read the Sacred Chronicles</Link>
            <Link href="/beings" className="btn-outline">Meet the Divine Beings</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-float absolute bottom-10 flex flex-col items-center gap-3 opacity-35">
          <span className="incantation text-[0.58rem]">Descend</span>
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, #c9a227, transparent)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════
          PILLARS
          ════════════════════════════════════ */}
      <section className="relative z-10 py-28"
        style={{ background: 'radial-gradient(ellipse 120% 60% at 50% 50%, rgba(23,11,48,0.22) 0%, transparent 70%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Divider />
          <div className="text-center mt-10 mb-4">
            <p className="incantation text-[0.6rem] mb-3">First Principles</p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-bright-gold glow-gold tracking-[0.15em]">The Divine Origins</h2>
          </div>
          <p className="font-fell italic text-center text-bone/40 text-lg max-w-xl mx-auto mb-16 leading-relaxed">
            Three truths that shaped the known cosmos, all arising from one accidental stumble.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map(p => (
              <div key={p.t} className="divine-card bg-void/70 p-9 text-center group">
                <div className="text-5xl mb-6 font-heading text-bright-gold transition-all duration-500 group-hover:scale-110"
                  style={{ textShadow: '0 0 20px rgba(201,162,39,0.7)' }}>{p.sym}</div>
                <h3 className="font-heading text-divine-gold text-sm tracking-[0.2em] uppercase mb-5">{p.t}</h3>
                <div className="h-px mb-5" style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.3), transparent)' }} />
                <p className="font-fell italic text-bone/65 text-lg leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          STORY BEATS + QUOTE
          ════════════════════════════════════ */}
      <section className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Story beats */}
            <div className="lg:col-span-3">
              <p className="incantation text-[0.6rem] mb-3">Volume I · The First Chronicle</p>
              <h2 className="font-cinzel text-3xl md:text-4xl text-bright-gold glow-gold mb-12 leading-tight">The Story of Tips</h2>

              <div className="space-y-8">
                {STORY_BEATS.map((b, i) => (
                  <div key={b.n} className="flex gap-5 items-start group">
                    <div className="shrink-0 w-10 text-right pt-1">
                      <span className="font-cinzel text-sm font-bold"
                        style={{ color: 'rgba(201,162,39,0.2)' }}>{b.n}</span>
                    </div>
                    <div className="flex-1 pb-8" style={{ borderBottom: i < STORY_BEATS.length - 1 ? '1px solid rgba(201,162,39,0.06)' : 'none' }}>
                      <p className="font-heading text-[0.65rem] tracking-[0.28em] uppercase text-divine-gold/60 mb-2">{b.t}</p>
                      <p className="font-fell italic text-bone/68 text-lg leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/lore" className="btn-divine">Read the Full Chronicle</Link>
              </div>
            </div>

            {/* Sacred quote */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="corner-box p-10 md:p-12 text-center"
                style={{
                  border: '1px solid rgba(201,162,39,0.18)',
                  background: 'linear-gradient(160deg, rgba(23,11,48,0.6) 0%, rgba(4,3,10,0.95) 100%)',
                  boxShadow: '0 0 60px rgba(201,162,39,0.05), inset 0 0 40px rgba(201,162,39,0.03)',
                }}>
                <span className="font-cinzel text-6xl" style={{ color: 'rgba(201,162,39,0.1)', lineHeight: 1 }}>&ldquo;</span>
                <blockquote className="font-fell italic text-parchment/85 text-xl md:text-2xl leading-relaxed mt-2 mb-8">
                  He swam through the bones and sludge of a thousand consumed souls, and with one decisive, perfectly aimed blow — he ended the demon forever.
                </blockquote>
                <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.3), transparent)' }} />
                <p className="incantation text-[0.6rem] text-divine-gold/45">— The Sacred Chronicles · Vol. I · Ch. IV</p>

                <div className="mt-10 relative">
                  <div className="text-6xl font-heading text-center animate-breathe"
                    style={{ color: 'rgba(201,162,39,0.08)', textShadow: '0 0 30px rgba(201,162,39,0.3)' }}>✦</div>
                </div>
              </div>

              {/* Additional sacred text below quote */}
              <div className="mt-6 p-6 text-center" style={{ border: '1px solid rgba(201,162,39,0.07)', background: 'rgba(4,3,10,0.5)' }}>
                <p className="incantation text-[0.55rem] mb-3 text-divine-gold/25">The Three Facts</p>
                <div className="space-y-2">
                  {['He is unkillable', 'He created all gods', 'He is currently asleep'].map(f => (
                    <p key={f} className="font-heading text-[0.6rem] tracking-[0.2em] uppercase text-bone/30">{f}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CHARACTER GRID
          ════════════════════════════════════ */}
      <section className="relative z-10 py-28"
        style={{ background: 'linear-gradient(180deg, rgba(4,3,10,0) 0%, rgba(13,8,32,0.5) 50%, rgba(4,3,10,0) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Divider />
          <div className="text-center mt-10 mb-4">
            <p className="incantation text-[0.6rem] mb-3">Gods, Demons & Mysteries</p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-bright-gold glow-gold tracking-[0.12em]">The Divine Beings</h2>
          </div>
          <p className="font-fell italic text-center text-bone/40 text-lg max-w-lg mx-auto mb-16">
            Those who shaped the cosmos, and one who has not yet been named.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CHARACTERS.map(c => (
              <Link key={c.id} href="/beings"
                className={`group relative p-7 text-center overflow-hidden ${c.type === 'demon' ? 'demon-card' : 'divine-card'} bg-void/60`}
                style={{ borderColor: `${c.color}18` }}>
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${c.color}10 0%, transparent 80%)` }} />

                {/* Symbol */}
                <div className="relative text-4xl mb-4 font-heading transition-all duration-400 group-hover:scale-115"
                  style={{ color: c.color, textShadow: `0 0 20px ${c.glow}` }}>{c.symbol}</div>

                {/* Name */}
                <h3 className="relative font-heading text-sm tracking-[0.2em] uppercase mb-1"
                  style={{ color: c.color }}>{c.name}</h3>

                {/* Title */}
                <p className="relative font-fell italic text-[0.8rem] mb-2" style={{ color: `${c.color}70` }}>{c.title}</p>

                {/* Status */}
                <p className={`relative incantation text-[0.55rem] ${
                  c.status === 'destroyed' ? 'text-demon-red/55'
                  : c.status === 'unknown' ? 'text-bone/25'
                  : 'text-divine-gold/50'}`}>
                  {c.status === 'destroyed' ? '✕ Destroyed'
                  : c.status === 'unknown' ? '? Unknown'
                  : '✓ Active'}
                </p>

                {/* Hover description */}
                <div className="relative mt-3 opacity-0 group-hover:opacity-100 transition-all duration-400 max-h-0 group-hover:max-h-24 overflow-hidden">
                  <div className="h-px mb-3" style={{ background: `linear-gradient(to right, transparent, ${c.color}30, transparent)` }} />
                  <p className="font-fell italic text-bone/45 text-[0.8rem] leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/beings" className="btn-outline">View All Divine Beings</Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          EXPLORE GRID
          ════════════════════════════════════ */}
      <section className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Divider />
          <div className="text-center mt-10 mb-4">
            <p className="incantation text-[0.6rem] mb-3">The Sacred Realm</p>
            <h2 className="font-cinzel text-3xl text-bright-gold glow-gold tracking-[0.12em]">Explore</h2>
          </div>
          <p className="font-fell italic text-center text-bone/38 text-lg mb-16">Four paths into the world of Tips.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPLORE.map(item => (
              <Link key={item.href} href={item.href} className="divine-card group p-9 bg-void/65 text-center">
                <div className="text-4xl mb-5 transition-all duration-400 group-hover:scale-110 group-hover:-translate-y-1">{item.sym}</div>
                <h3 className="font-heading text-divine-gold text-[0.7rem] tracking-[0.22em] uppercase mb-4">{item.t}</h3>
                <div className="h-px mb-4" style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.25), transparent)' }} />
                <p className="font-fell italic text-bone/50 text-base leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CLOSING QUOTE BANNER
          ════════════════════════════════════ */}
      <section className="relative z-10 py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, rgba(23,11,48,0.3) 0%, rgba(4,3,10,0.9) 50%, rgba(23,11,48,0.2) 100%)',
          borderTop: '1px solid rgba(201,162,39,0.07)',
          borderBottom: '1px solid rgba(201,162,39,0.07)',
        }}>
        {/* Faint ring decoration */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(201,162,39,0.04)', boxShadow: '0 0 80px rgba(201,162,39,0.04)' }} />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <span className="font-cinzel text-[7rem] leading-none" style={{ color: 'rgba(201,162,39,0.07)' }}>&ldquo;</span>
          <blockquote className="font-fell italic text-parchment/72 text-2xl md:text-3xl leading-relaxed -mt-10">
            Rest is not laziness. It is the most sacred thing a god can do. Let the others manage the cosmos. I have already saved it once.
          </blockquote>
          <p className="incantation text-[0.62rem] text-divine-gold/35 mt-8">
            — Tips, upon creating all other gods and retiring forever
          </p>
        </div>
      </section>
    </div>
  );
}
