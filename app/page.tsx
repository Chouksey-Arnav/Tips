'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* ── Inlined StarField ─────────────────────────── */
function StarField() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 150; i++) {
      const s = document.createElement('div');
      const x = ((i * 73.1 + 17) % 100).toFixed(2);
      const y = ((i * 47.3 + 31) % 100).toFixed(2);
      const size = (((i * 13.7) % 2.2) + 0.5).toFixed(2);
      const dur = (((i * 3.9) % 4) + 2).toFixed(2);
      const delay = ((i * 1.7) % 6).toFixed(2);
      const isGold = i % 6 === 0;
      s.style.cssText = `position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;border-radius:50%;background:${isGold ? '#f0c940' : '#fff'};animation:twinkle ${dur}s ease-in-out ${delay}s infinite;`;
      frag.appendChild(s);
    }
    el.appendChild(frag);
    return () => { el.innerHTML = ''; };
  }, []);
  return <div ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />;
}

/* ── Inlined Data ──────────────────────────────── */
const CHARACTERS = [
  { id: 'tips', name: 'Tips', title: 'God of the Incarnate', type: 'god', status: 'active', symbol: '✦', color: '#c9a227', glow: 'rgba(201,162,39,0.6)', desc: 'Son of Blips and Zips. Twin of the demon Flips. Born in the moment their mother tripped over a stone. He defeated Flips from within, restored humanity to life, and created all other gods so he could rest.', domains: ['Incarnation','Creation','Divine Laziness','Beggarhood','Resurrection'] },
  { id: 'flips', name: 'Flips', title: 'The Demon Twin', type: 'demon', status: 'destroyed', symbol: '☠', color: '#cc2200', glow: 'rgba(204,34,0,0.6)', desc: 'The twin of Tips — born in the same instant, opposite in every way. Flips ravaged the earth, eating humans whole. He built a bone-filled hut that no longer exists, because he exploded.', domains: ['Consumption','Destruction','Darkness','Hunger'] },
  { id: 'blips', name: 'Blips', title: 'The Divine Mother', type: 'divine', status: 'unknown', symbol: '◎', color: '#a8c4d4', glow: 'rgba(168,196,212,0.5)', desc: 'Mother of Tips, Flips, and a third unnamed child. Her greatest act of creation was entirely accidental — she tripped over a rock, and in that fall, named and birthed the twins.', domains: ['Birth','Accidents','Stumbling','Unintended Consequence'] },
  { id: 'zips', name: 'Zips', title: 'The Divine Father', type: 'divine', status: 'unknown', symbol: '⚡', color: '#4fc3f7', glow: 'rgba(79,195,247,0.5)', desc: 'Father of Tips and Flips. A being whose nature is swiftness itself. Little is known beyond his name and his union with Blips. Speed runs in the blood of his children.', domains: ['Speed','Lightning','Fatherhood','Mystery'] },
  { id: 'third', name: '???', title: 'The Third Child', type: 'mystery', status: 'unknown', symbol: '▲', color: '#888899', glow: 'rgba(136,136,153,0.5)', desc: 'Blips and Zips had three children. Two are known. The third remains unnamed, unrecorded, and entirely mysterious. The chronicles have not yet spoken.', domains: ['Mystery','The Unknown','Hidden Truth'] },
];

const STORY_BEATS = [
  { n: '01', t: 'The Fall', text: 'Blips walked through the divine realm. Her foot caught a stone. She tipped — she flipped — and in the exact suspended instant of that fall, two souls entered the world.' },
  { n: '02', t: 'The Naming', text: 'The first soul, born of the tip of her stumble: Tips. The second, born of the flip itself: Flips. Named not by ceremony — by physics.' },
  { n: '03', t: 'The Ravaging', text: 'Flips descended to earth with singular purpose: hunger. He moved across the land like a plague with teeth. Villages. Gone. Bones left behind in a mysterious hut.' },
  { n: '04', t: 'The Disguise', text: 'Tips descended to earth as a beggar. He went to Flips\' door and said: "I am very tired of this life. Please keep me up." Flips ate him. Immediately. This was the plan.' },
  { n: '05', t: 'The Battle', text: 'Inside the stomach of the demon: bones, sludge, the remnants of thousands. Tips swam through it. He was unkillable. He was not going anywhere. Then he found the spot.' },
  { n: '06', t: 'The Punch', text: 'One punch. One tiny vulnerable point inside the otherwise invincible Flips. Tips struck it with full divine force. Flips exploded. The hut was erased from existence. Tips walked out.' },
  { n: '07', t: 'The Restoration', text: 'Tips moved across the ruined earth and restored every dead human to life. Humanity thanked him. He nodded. He was very tired. He decided he had done enough.' },
  { n: '08', t: 'The Great Laziness', text: 'The world still needed managing. Tips, therefore, created all other gods — every deity that has ever existed — specifically so he would not have to do any more work himself. He has been resting ever since.' },
];

/* ── Ornament ──────────────────────────────────── */
function Divider() {
  return (
    <div className="ornament-divider">
      <span className="font-heading text-divine-gold text-xl">✦</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative">
      <StarField />

      {/* ── HERO ─── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(45,27,78,0.35) 0%,transparent 70%)' }} />

        {/* Rotating sigil */}
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none"
          className="absolute animate-spin-slow opacity-[0.05] pointer-events-none" aria-hidden="true">
          <circle cx="170" cy="170" r="165" stroke="#c9a227" strokeWidth="1" />
          <circle cx="170" cy="170" r="135" stroke="#c9a227" strokeWidth="0.5" />
          <circle cx="170" cy="170" r="100" stroke="#c9a227" strokeWidth="1" />
          {Array.from({length:12}).map((_,i)=>{
            const a=(i*30*Math.PI)/180;
            return <line key={i} x1={170+100*Math.cos(a)} y1={170+100*Math.sin(a)} x2={170+165*Math.cos(a)} y2={170+165*Math.sin(a)} stroke="#c9a227" strokeWidth="0.5"/>;
          })}
          <polygon points="170,70 184,140 254,140 198,182 218,252 170,210 122,252 142,182 86,140 156,140"
            stroke="#c9a227" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="relative max-w-4xl mx-auto">
          <p className="animate-fade-up delay-100 font-heading text-divine-gold/60 text-xs tracking-[0.4em] uppercase mb-8">
            Born of Blips &amp; Zips &nbsp;·&nbsp; Twin of Flips &nbsp;·&nbsp; Creator of All Gods
          </p>
          <h1 className="animate-fade-up delay-300 font-cinzel font-black text-bright-gold glow-gold-pulse"
            style={{ fontSize:'clamp(4.5rem,18vw,14rem)', letterSpacing:'0.35em', lineHeight:1 }}>
            TIPS
          </h1>
          <p className="animate-fade-up delay-500 font-heading text-parchment/70 text-lg md:text-2xl tracking-[0.2em] uppercase mt-5">
            God of the Incarnate
          </p>
          <p className="animate-fade-up delay-700 font-body italic text-bone/50 text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
            He who wore a beggar&rsquo;s face. He who swam through bones. He who punched a demon from the inside out. He who then went back to bed.
          </p>
          <div className="animate-fade-up delay-1000 flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/lore" className="btn-divine">Read the Chronicles</Link>
            <Link href="/beings" className="btn-outline">Meet the Divine</Link>
          </div>
        </div>

        <div className="animate-float absolute bottom-10 flex flex-col items-center gap-2 opacity-30">
          <span className="font-heading text-xs tracking-widest text-divine-gold uppercase">Scroll</span>
          <div className="w-px h-12" style={{ background:'linear-gradient(to bottom,#c9a227,transparent)' }} />
        </div>
      </section>

      {/* ── ORIGIN PILLARS ─── */}
      <section className="relative z-10 py-24" style={{ background:'radial-gradient(ellipse 100% 60% at 50% 50%,rgba(45,27,78,0.2) 0%,transparent 70%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Divider />
          <h2 className="font-heading text-center text-divine-gold text-3xl md:text-4xl tracking-[0.2em] uppercase mt-8 mb-16">The Divine Origins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { sym:'◎', t:'Born of Two', b:'Son of Blips and Zips — twin-born in the exact instant their mother tripped over a stone. No ceremony. No prophecy. Just gravity.' },
              { sym:'☠', t:'Twin of Darkness', b:'His twin Flips emerged as a demon — opposite in every way. One created. One consumed. Only one remains, and it is not Flips.' },
              { sym:'✦', t:'Creator of All', b:'After defeating Flips and restoring humanity, Tips created every other god in existence — primarily because he wanted a nap.' },
            ].map(p => (
              <div key={p.t} className="divine-card bg-void/60 p-8 text-center">
                <div className="text-5xl mb-5 text-bright-gold glow-gold font-heading">{p.sym}</div>
                <h3 className="font-heading text-divine-gold text-base tracking-widest uppercase mb-4">{p.t}</h3>
                <p className="font-body text-bone/70 text-lg leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY BEATS ─── */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading text-divine-gold/50 text-xs tracking-[0.3em] uppercase mb-3">Volume I · The First Chronicle</p>
              <h2 className="font-cinzel text-3xl md:text-4xl text-bright-gold glow-gold mb-10 leading-tight">The Story of Tips</h2>
              <div className="space-y-5">
                {STORY_BEATS.map(b => (
                  <div key={b.n} className="flex gap-4 items-start">
                    <span className="font-cinzel text-divine-gold/25 text-sm font-bold mt-1 shrink-0 w-8">{b.n}</span>
                    <div>
                      <p className="font-heading text-divine-gold/70 text-xs tracking-widest uppercase mb-1">{b.t}</p>
                      <p className="font-body text-bone/70 text-lg leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/lore" className="btn-divine">Read Full Chronicle</Link>
              </div>
            </div>

            {/* Sacred quote */}
            <div className="corner-box p-10 md:p-14" style={{ border:'1px solid rgba(201,162,39,0.2)', background:'linear-gradient(135deg,rgba(13,5,32,0.8),rgba(6,4,14,0.95))' }}>
              <p className="font-heading text-divine-gold/15 text-8xl leading-none mb-2" aria-hidden="true">&ldquo;</p>
              <blockquote className="font-body italic text-parchment text-xl md:text-2xl leading-relaxed mb-8">
                He swam through the bones and sludge of a thousand consumed souls, and with one decisive, perfectly aimed punch — he ended the demon forever.
              </blockquote>
              <p className="font-heading text-divine-gold/50 text-xs tracking-widest uppercase">— The Sacred Chronicles, Vol. I Ch. IV</p>
              <div className="mt-10 text-center font-cinzel text-divine-gold/10 text-6xl" aria-hidden="true">✦</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARACTER GRID ─── */}
      <section className="relative z-10 py-24" style={{ background:'rgba(13,5,32,0.5)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Divider />
          <h2 className="font-heading text-center text-divine-gold text-3xl md:text-4xl tracking-[0.2em] uppercase mt-8 mb-4">The Divine Beings</h2>
          <p className="font-body text-center italic text-bone/40 text-lg mb-14">Gods, demons, and mysteries of the sacred realm</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CHARACTERS.map(c => (
              <Link key={c.id} href="/beings"
                className={`group relative p-6 text-center overflow-hidden ${c.type==='demon' ? 'demon-card' : 'divine-card'} bg-void/50`}
                style={{ borderColor:`${c.color}20` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background:`radial-gradient(ellipse at 50% 0%,${c.color}12 0%,transparent 70%)` }} />
                <div className="relative text-4xl mb-3 font-heading transition-transform duration-300 group-hover:scale-110"
                  style={{ color:c.color, textShadow:`0 0 15px ${c.glow}` }}>{c.symbol}</div>
                <h3 className="relative font-heading text-base tracking-widest uppercase mb-1" style={{ color:c.color }}>{c.name}</h3>
                <p className={`relative font-heading text-xs tracking-wider uppercase ${
                  c.status==='destroyed' ? 'text-demon-red/60' : c.status==='unknown' ? 'text-bone/30' : 'text-divine-gold/50'}`}>
                  {c.status==='destroyed' ? '✕ Destroyed' : c.status==='unknown' ? '? Unknown' : '✓ Active'}
                </p>
                <p className="relative font-body italic text-bone/35 text-sm mt-1 capitalize">{c.type}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/beings" className="btn-outline">View All Beings</Link>
          </div>
        </div>
      </section>

      {/* ── EXPLORE ─── */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Divider />
          <h2 className="font-heading text-center text-divine-gold text-3xl tracking-[0.2em] uppercase mt-8 mb-16">Explore the Realm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href:'/lore', sym:'📜', t:'Chronicles', d:'The sacred texts. Volume I complete. More coming.' },
              { href:'/beings', sym:'⚔', t:'Beings', d:'Every god, demon, and mystery of the realm.' },
              { href:'/pantheon', sym:'🏛', t:'Pantheon', d:'All gods created by Tips in his divine laziness.' },
              { href:'/temple', sym:'✦', t:'Temple', d:'Seek wisdom. Receive the sacred laws of Tips.' },
            ].map(i => (
              <Link key={i.href} href={i.href} className="divine-card group p-8 bg-void/60 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">{i.sym}</div>
                <h3 className="font-heading text-divine-gold text-sm tracking-widest uppercase mb-3">{i.t}</h3>
                <p className="font-body text-bone/50 text-base leading-relaxed">{i.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ─── */}
      <section className="relative z-10 py-20" style={{ background:'linear-gradient(135deg,rgba(13,5,32,0.9),rgba(45,27,78,0.25),rgba(6,4,14,0.9))', borderTop:'1px solid rgba(201,162,39,0.08)', borderBottom:'1px solid rgba(201,162,39,0.08)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-heading text-divine-gold/15 text-9xl leading-none mb-0" aria-hidden="true">&ldquo;</p>
          <blockquote className="font-body italic text-parchment/75 text-2xl md:text-3xl leading-relaxed -mt-6">
            Rest is not laziness. It is holy. Let others do the work.
          </blockquote>
          <p className="font-heading text-divine-gold/35 text-xs tracking-[0.3em] uppercase mt-6">— Tips, upon creating all other gods</p>
        </div>
      </section>
    </div>
  );
}
