'use client';

import { useState } from 'react';
import Link from 'next/link';

const WISDOM = [
  { w:'The best way to defeat an enemy is from the inside. Literally.', s:'— Tips, First Incarnation' },
  { w:'If you are very tired of this life, eat something. Or be eaten. Results may vary.', s:'— Tips, on his beggar disguise' },
  { w:'Rest is not laziness. It is holy. Let others do the work.', s:'— Tips, upon creating all other gods' },
  { w:'Always check your enemy\'s stomach for structural weaknesses before allowing them to consume you.', s:'— Tips, divine strategist' },
  { w:'When you have defeated the demon and resurrected all of humanity, it is acceptable to take a very long nap.', s:'— Tips, post-first-incarnation' },
  { w:'A hut full of bones is a bad sign. Do not enter a hut full of bones.', s:'— Tips, on the home of Flips' },
  { w:'If your twin is ravaging the earth, eventually you will have to deal with it. The keyword is eventually.', s:'— Tips, on patience' },
  { w:'Creation is easy. It is the maintaining of creation that is tedious. Delegate freely.', s:'— Tips, on founding the divine pantheon' },
  { w:'Sometimes the most divine thing you can do is absolutely nothing for a very long time.', s:'— Tips, eternal rest doctrine' },
  { w:'Being unkillable is a privilege. Use it wisely. Use it lazily.', s:'— Tips, on immortality' },
  { w:'The name you are given reflects where you came from. The name you make reflects where you are going.', s:'— Tips, on identity' },
  { w:'Even an explosion leaves no trace if the thing that exploded was powerful enough. Start powerful.', s:'— Tips, on the end of Flips' },
  { w:'A beggar asks for something. A god asks for everything. The trick is that they look the same.', s:'— Tips, on his disguise' },
  { w:'Every fall creates a name. Every stumble births something new. Watch your step — or don\'t.', s:'— Tips, on his mother\'s rock' },
  { w:'The third sibling is never the one you expect.', s:'— Tips, cryptically' },
];

const LAWS = [
  { n:1, law:'Thou shalt always tip generously, for Tips is watching, and he finds cheapness extremely tiresome.', origin:'Derived from his begging incarnation' },
  { n:2, law:'Thou shalt not enter a hut full of bones without very good reason.', origin:'Derived from the dwelling of Flips' },
  { n:3, law:'Thou shalt respect the stumbling of others, for every fall may be the birth of something divine.', origin:'Derived from the stumble of Blips' },
  { n:4, law:'Thou shalt not boast of your work, for the greatest act may be done from within, invisibly.', origin:'Derived from the First Incarnation' },
  { n:5, law:'Thou shalt rest without guilt. Thou shalt nap without shame. Tips did it, and he made all the gods.', origin:'Derived from the Great Laziness' },
  { n:6, law:'If you find yourself inside a stomach, do not panic. Look for the weak spot.', origin:'Derived from the Battle Within' },
  { n:7, law:'Thou shalt never assume twins are the same. One may be a god. One may be a demon. Ask first.', origin:'Derived from the nature of Tips and Flips' },
];

const OFFERINGS = [
  { item:'Left-behind tip money', note:'His personal favorite. Very on-brand.' },
  { item:'A long and undisturbed nap', note:'He doesn\'t need you to offer this. He\'ll take it anyway.' },
  { item:'Bones arranged artfully', note:'He\'s seen enough bones. But the artistry is appreciated.' },
  { item:'Silence', note:'Extremely valued. Tips prefers quiet.' },
  { item:'A rock, placed gently in a path', note:'In honor of Blips\' sacred stumble.' },
  { item:'Any beggar\'s alms', note:'He incarnated as one. He remembers.' },
  { item:'The conscious choice not to work when you could', note:'He finds this deeply holy.' },
];

export default function TemplePage() {
  const [idx, setIdx] = useState<number | null>(null);
  const [revealing, setRevealing] = useState(false);

  const seek = () => {
    setRevealing(true);
    setTimeout(() => {
      let n: number;
      do { n = Math.floor(Math.random() * WISDOM.length); } while (n === idx && WISDOM.length > 1);
      setIdx(n);
      setRevealing(false);
    }, 800);
  };

  const tip = idx !== null ? WISDOM[idx] : null;

  return (
    <div className="relative min-h-screen">

      {/* ── Hero ─── */}
      <section className="relative z-10 pt-40 pb-20 text-center px-6"
        style={{ background:'radial-gradient(ellipse 70% 50% at 50% 30%,rgba(45,27,78,0.4) 0%,transparent 70%)' }}>
        <p className="animate-fade-up font-heading text-divine-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Sacred Space</p>
        <h1 className="animate-fade-up delay-200 font-cinzel text-4xl md:text-6xl text-bright-gold glow-gold mb-4">The Temple of Tips</h1>
        <p className="animate-fade-up delay-400 font-body italic text-bone/50 text-xl max-w-2xl mx-auto leading-relaxed">
          Come. Rest. Seek divine wisdom from the God himself. He may not answer immediately — he is likely napping — but his words, recorded in the sacred texts, endure.
        </p>
      </section>

      {/* ── Wisdom Oracle ─── */}
      <section className="relative z-10 py-10 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="ornament-divider mb-10">
            <span className="font-heading text-divine-gold text-lg">✦</span>
          </div>
          <h2 className="font-heading text-center text-divine-gold text-xl tracking-[0.25em] uppercase mb-3">Seek Divine Guidance</h2>
          <p className="font-body text-center italic text-bone/40 text-lg mb-10">Press the sacred sigil. Receive the wisdom of Tips.</p>

          {/* Altar button */}
          <div className="text-center mb-8">
            <button onClick={seek} disabled={revealing}
              className="relative group inline-flex flex-col items-center gap-3 cursor-pointer"
              aria-label="Seek divine guidance">
              <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500"
                style={{
                  background: revealing
                    ? 'radial-gradient(circle,rgba(240,201,64,0.4) 0%,rgba(201,162,39,0.2) 50%,transparent 70%)'
                    : 'radial-gradient(circle,rgba(201,162,39,0.15) 0%,rgba(201,162,39,0.05) 60%,transparent 80%)',
                  border:'1px solid rgba(201,162,39,0.4)',
                  boxShadow: revealing ? '0 0 50px rgba(240,201,64,0.5)' : '0 0 20px rgba(201,162,39,0.15)',
                  transform: revealing ? 'scale(0.95)' : undefined,
                }}>
                <span className="font-heading text-4xl transition-all duration-300"
                  style={{ color: revealing ? '#f0c940' : '#c9a227', textShadow: revealing ? '0 0 20px rgba(240,201,64,1)' : '0 0 10px rgba(201,162,39,0.4)' }}>
                  ✦
                </span>
              </div>
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-divine-gold/50 group-hover:text-divine-gold/80 transition-colors duration-300">
                {revealing ? 'Consulting the Divine...' : tip ? 'Seek Again' : 'Seek Wisdom'}
              </span>
            </button>
          </div>

          {/* Result */}
          <div className={`transition-all duration-500 ${revealing ? 'opacity-0 translate-y-4' : tip ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
            {tip && !revealing && (
              <div className="corner-box p-8 md:p-12 text-center"
                style={{ border:'1px solid rgba(201,162,39,0.3)', background:'linear-gradient(135deg,rgba(45,27,78,0.3),rgba(13,5,32,0.9))', boxShadow:'0 0 40px rgba(201,162,39,0.08)' }}>
                <p className="font-heading text-divine-gold/15 text-7xl leading-none mb-2" aria-hidden="true">&ldquo;</p>
                <p className="font-body italic text-parchment text-xl md:text-2xl leading-relaxed mb-6">&ldquo;{tip.w}&rdquo;</p>
                <p className="font-heading text-divine-gold/45 text-sm tracking-[0.25em] uppercase">{tip.s}</p>
              </div>
            )}
          </div>

          {!tip && !revealing && (
            <div className="p-8 text-center opacity-40" style={{ border:'1px dashed rgba(201,162,39,0.2)' }}>
              <p className="font-body italic text-bone/40 text-lg">The altar awaits. Press the sigil above to receive wisdom.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Sacred Laws ─── */}
      <section className="relative z-10 py-20 border-t border-divine-gold/10" style={{ background:'rgba(13,5,32,0.6)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-center text-divine-gold text-2xl tracking-[0.25em] uppercase mb-4">The Sacred Laws of Tips</h2>
          <p className="font-body text-center italic text-bone/35 text-lg mb-14">The divine commandments, derived from the chronicles.</p>
          <div className="space-y-4">
            {LAWS.map(l => (
              <div key={l.n} className="divine-card p-6 bg-void/50 flex gap-5 items-start">
                <div className="font-cinzel text-3xl font-bold shrink-0 mt-0.5" style={{ color:'rgba(201,162,39,0.2)', minWidth:'2rem' }}>{l.n}</div>
                <div>
                  <p className="font-body text-parchment/80 text-lg leading-relaxed mb-1">{l.law}</p>
                  <p className="font-heading text-xs tracking-widest uppercase text-divine-gold/28">{l.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offerings ─── */}
      <section className="relative z-10 py-20 border-t border-divine-gold/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-center text-divine-gold text-2xl tracking-[0.25em] uppercase mb-4">Offerings Accepted by Tips</h2>
          <p className="font-body text-center italic text-bone/35 text-lg mb-14">What pleases the God. He is specific.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OFFERINGS.map((o,i) => (
              <div key={i} className="divine-card p-6 bg-void/50">
                <p className="font-heading text-divine-gold text-sm tracking-wide mb-2">{o.item}</p>
                <p className="font-body italic text-bone/45 text-base leading-relaxed">{o.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blessing ─── */}
      <section className="relative z-10 py-16 border-t border-divine-gold/10" style={{ background:'linear-gradient(135deg,rgba(45,27,78,0.15),rgba(6,4,14,0.95))' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="font-heading text-5xl text-divine-gold/15 mb-5" aria-hidden="true">✦</div>
          <p className="font-body italic text-bone/35 text-xl leading-relaxed">
            May you rest deeply. May you delegate boldly. May you, when you encounter a demon from within, find the spot and punch it very hard.
          </p>
          <p className="font-heading text-divine-gold/25 text-xs tracking-[0.3em] uppercase mt-5">— The Blessing of Tips</p>
        </div>
      </section>

      <div className="relative z-10 py-10 text-center flex flex-wrap gap-4 justify-center">
        <Link href="/lore" className="btn-outline">Read Chronicles</Link>
        <Link href="/" className="btn-outline">← Home</Link>
      </div>
    </div>
  );
}
