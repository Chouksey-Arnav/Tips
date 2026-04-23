'use client';

import { useState } from 'react';
import Link from 'next/link';

const WISDOM = [
  { w: 'The best way to defeat an enemy is from the inside. Literally, if possible. The metaphor is also valid.', s: '— Tips, on the First Incarnation' },
  { w: 'If you are very tired of this life, eat something. Or be eaten, if the circumstances present themselves. Results vary enormously.', s: '— Tips, on his beggar\'s disguise' },
  { w: 'Rest is not laziness. It is the sacred acknowledgment that you have done enough. There is a difference. The difference is everything.', s: '— Tips, upon creating all other gods' },
  { w: 'Always check your enemy\'s interior for structural weaknesses before allowing them to consume you. This is not a metaphor.', s: '— Tips, post-First Incarnation strategic analysis' },
  { w: 'When you have defeated the demon and restored all of humanity to life, it is not just acceptable to take a long nap — it is the correct response.', s: '— Tips, on appropriate post-victory behavior' },
  { w: 'A hut full of bones is a sign. The sign says: do not enter. If you must enter, do not do so in your own form.', s: '— Tips, on the home of Flips' },
  { w: 'If your twin is ravaging the earth, you will eventually need to deal with it. The word eventually is doing significant work in that sentence. Let it.', s: '— Tips, on patience as divine strategy' },
  { w: 'Creation is the easiest thing. Maintenance is the tedious part. Create beings whose purpose is maintenance and then withdraw. This is what I did. I recommend it.', s: '— Tips, on founding the divine pantheon' },
  { w: 'Being unkillable is a privilege. Using it well means choosing when to use it, and using it completely when you do. Use it lazily in the gaps between.', s: '— Tips, on the ethics of invincibility' },
  { w: 'The name you were given reflects the moment of your arrival. The name you make reflects every moment after. I was named by a stumble. I am comfortable with this.', s: '— Tips, on identity and origin' },
  { w: 'Even the largest explosion leaves nothing behind if the thing that exploded was powerful enough. Begin with enough power. Let the explosion handle the rest.', s: '— Tips, on the end of Flips' },
  { w: 'A beggar asks for something small, in a small voice, with small expectations. This is indistinguishable from a god who wants to be eaten. Consider this carefully.', s: '— Tips, on the art of disguise' },
  { w: 'Every fall creates a name. Every stumble births something new. Watch your step — or don\'t, and see what happens. My mother didn\'t. Look how that turned out.', s: '— Tips, on the sacred stumble of Blips' },
  { w: 'The third sibling is never the one you expect. Especially when you do not know what to expect. Especially when the sibling has not yet introduced themselves.', s: '— Tips, cryptically and without elaboration' },
  { w: 'Darkness from within is more complete than darkness from without. This is true of demons and it is true of doubt and it is true of most things worth overcoming.', s: '— Tips, on the interior of Flips' },
  { w: 'When you restore a civilization to life after centuries of consumption, some of them will want to build you a temple immediately. Let them. It is easier than explaining.', s: '— Tips, on the origin of sacred architecture' },
  { w: 'Delegating is not abandonment. It is trust, applied at the scale of the entire cosmos. I made gods for every domain because I trusted the work would get done. It does.', s: '— Tips, on the Pantheon' },
  { w: 'If you find yourself inside a stomach, do not despair. Assess. Locate the weakness. Punch it. Walk out. This process scales to most adversities.', s: '— Tips, general counsel' },
  { w: 'Unkillable is not a personality. It is a circumstance. The personality you develop around that circumstance is entirely your own responsibility. I developed mine. I am satisfied.', s: '— Tips, on divine identity' },
  { w: 'Speed is inherited. So is darkness. So is light. What you do with what you inherit — that is the only question worth asking, and the only one worth answering slowly.', s: '— Tips, on the legacy of Zips' },
  { w: 'The sacred scribes keep asking me for Volume II. I have nothing against Volume II. I simply have not yet found the occasion. Occasions arise. I am patient. Also asleep.', s: '— Tips, on the unreleased Second Volume' },
  { w: 'My mother tripped on a rock and I exist. My twin ate the world and I stopped him. These events are connected. Everything is connected. Rest anyway.', s: '— Tips, on divine interconnectedness' },
];

const LAWS = [
  {
    n: 1,
    law: 'Thou shalt always tip generously at tables and at doorways and in all transactions where a tip is possible. Tips is watching. He finds cheapness wearisome. He will not intervene but he will be disappointed.',
    origin: 'Derived from the begging incarnation and the economy of names',
  },
  {
    n: 2,
    law: 'Thou shalt not enter a structure full of bones without very good reason, and thou shalt not build a structure full of bones under any reason.',
    origin: 'Derived from the dwelling of Flips and its obliteration',
  },
  {
    n: 3,
    law: 'Thou shalt honor the stumble of others, for every fall may be the unintended act of creation that produces the next age. Watch where you step, but do not look down upon those who do not.',
    origin: 'Derived from the sacred stumble of Blips in the First Realm',
  },
  {
    n: 4,
    law: 'Thou shalt not boast of your great works in the hearing of those who benefited from them. The greatest acts are done in disguise and acknowledged in private. This is the model.',
    origin: 'Derived from the beggar\'s disguise and the First Incarnation',
  },
  {
    n: 5,
    law: 'Thou shalt rest without guilt. Thou shalt nap without shame. Thou shalt decline invitations to ongoing obligations that do not require your personal involvement. This is holy.',
    origin: 'Derived from the Great Laziness and the creation of the Pantheon',
  },
  {
    n: 6,
    law: 'If you find yourself inside the adversity — not facing it, but within it — do not attempt to leave by the way you entered. Look for the weak point. There is always a weak point.',
    origin: 'Derived from the Battle Within and the finding of the Sacred Spot',
  },
  {
    n: 7,
    law: 'Thou shalt not assume twins are equivalent. One may be a god. One may be a demon. The circumstances of a shared birth do not determine the nature of what is born. Ask, and observe, before assuming.',
    origin: 'Derived from the nature of Tips and Flips as opposites',
  },
  {
    n: 8,
    law: 'When you have the power to restore what has been broken, use it. Use it completely, for everyone affected, without condition or judgment. Then rest.',
    origin: 'Derived from the restoration of all humanity after the defeat of Flips',
  },
  {
    n: 9,
    law: 'The stone that trips you is not your enemy. It is the occasion. What you do in the falling is who you are. What you name from the falling is what endures.',
    origin: 'Derived from the sacred stone and the naming of Tips and Flips',
  },
  {
    n: 10,
    law: 'Honor the Third Child. Do not claim to know who they are. Do not claim certainty about when they will be known. They are watching. This is sufficient to warrant respect.',
    origin: 'Derived from the existence and silence of the unnamed Third Child of Blips and Zips',
  },
];

const OFFERINGS = [
  { item: 'Left-behind tip money', note: 'His personal and deeply resonant preferred offering. He is named for a stumble. He is named for a tip. He appreciates the symmetry immensely.' },
  { item: 'A genuinely undisturbed period of rest', note: 'Not offered to him — taken by you, in his name and in his spirit. He will consider this received.' },
  { item: 'An act of complete and consequential delegation', note: 'Identify something you have been doing yourself that someone else could do. Give it to them entirely. Do not check on it. This is prayer.' },
  { item: 'Silence, maintained for longer than is comfortable', note: 'Tips prefers quiet. In the Temple, silence is its own kind of sacred speech. Hold it past the point where you want to fill it.' },
  { item: 'A stone, placed carefully in an open path', note: 'In specific honor of the rock that tripped Blips and named the twins. The rock did not choose its role. It was simply present at the right moment.' },
  { item: 'Alms given to a beggar without conditions', note: 'He walked the mortal world in a beggar\'s form. He was given nothing. The ones who come after him in that form deserve better.' },
  { item: 'The conscious and deliberate choice to stop working', note: 'Not rest that you collapse into — rest that you choose. Before you are forced to. This is what Tips would call the advanced practice.' },
  { item: 'A meal eaten slowly and with full attention', note: 'In ironic and affectionate contrast to the demon Flips, who consumed without attention or satisfaction. Eating well is a form of sacred defiance.' },
  { item: 'Naming something accurately', note: 'Tips was named by the physics of his birth. Accurate naming is a form of divine tribute — calling things what they are, resisting the impulse to make them more or less than that.' },
];

export default function TemplePage() {
  const [idx, setIdx] = useState<number | null>(null);
  const [revealing, setRevealing] = useState(false);
  const [rippleVisible, setRippleVisible] = useState(false);

  const seek = () => {
    if (revealing) return;
    setRevealing(true);
    setRippleVisible(true);
    setTimeout(() => setRippleVisible(false), 800);
    setTimeout(() => {
      let n: number;
      do { n = Math.floor(Math.random() * WISDOM.length); } while (n === idx && WISDOM.length > 1);
      setIdx(n);
      setRevealing(false);
    }, 900);
  };

  const tip = idx !== null ? WISDOM[idx] : null;

  return (
    <div className="relative min-h-screen">

      {/* ── Hero ── */}
      <section className="relative z-10 pt-44 pb-24 text-center px-6 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 75% 55% at 50% 30%, rgba(23,11,48,0.5) 0%, transparent 70%)' }}>
        <p className="animate-fade-up incantation text-[0.62rem] mb-5">Sacred Space · Open to All · Tips May or May Not Be Present</p>
        <h1 className="animate-fade-up delay-200 font-cinzel text-4xl md:text-6xl text-bright-gold glow-gold mb-5 leading-tight">
          The Temple of Tips
        </h1>
        <p className="animate-fade-up delay-400 font-fell italic text-bone/50 text-xl max-w-2xl mx-auto leading-relaxed">
          Come. Rest. Seek wisdom from the God of the Incarnate. He may not answer immediately — he is likely asleep — but his words, preserved in the sacred chronicles, endure. The oracle speaks in his name. It is the closest available approximation.
        </p>
      </section>

      {/* ── Oracle ── */}
      <section className="relative z-10 py-10 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="ornament-divider mb-12">
            <span className="font-heading text-divine-gold text-lg" style={{ textShadow: '0 0 15px rgba(201,162,39,0.6)' }}>✦</span>
          </div>

          <h2 className="font-heading text-center text-divine-gold text-xl tracking-[0.25em] uppercase mb-3">Seek Divine Guidance</h2>
          <p className="font-fell italic text-center text-bone/38 text-lg mb-12">
            Press the sacred sigil. Receive the recorded wisdom of Tips. He said all of this at some point. The oracle knows which part you need.
          </p>

          {/* Oracle button */}
          <div className="text-center mb-10">
            <button onClick={seek} disabled={revealing}
              className="relative group inline-flex flex-col items-center gap-4 cursor-pointer"
              aria-label="Seek divine guidance">

              {/* Ripple ring */}
              {rippleVisible && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-14 w-24 h-24 rounded-full pointer-events-none"
                  style={{ border: '1px solid rgba(201,162,39,0.6)', animation: 'ripple 0.9s ease-out forwards' }} />
              )}

              {/* Sigil circle */}
              <div className="relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-600"
                style={{
                  background: revealing
                    ? 'radial-gradient(circle, rgba(240,201,64,0.3) 0%, rgba(201,162,39,0.15) 50%, transparent 75%)'
                    : 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 60%, transparent 80%)',
                  border: revealing
                    ? '1px solid rgba(201,162,39,0.7)'
                    : '1px solid rgba(201,162,39,0.35)',
                  boxShadow: revealing
                    ? '0 0 60px rgba(240,201,64,0.4), 0 0 20px rgba(201,162,39,0.3), inset 0 0 30px rgba(201,162,39,0.1)'
                    : '0 0 20px rgba(201,162,39,0.12)',
                  transform: revealing ? 'scale(0.93)' : undefined,
                }}>

                {/* Outer rotating ring */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30" viewBox="0 0 112 112" fill="none">
                  <circle cx="56" cy="56" r="54" stroke="#c9a227" strokeWidth="0.5" strokeDasharray="4 8" />
                </svg>

                <span className="font-heading text-5xl transition-all duration-400"
                  style={{
                    color: revealing ? '#f0c940' : '#c9a227',
                    textShadow: revealing ? '0 0 25px rgba(240,201,64,1), 0 0 60px rgba(201,162,39,0.6)' : '0 0 12px rgba(201,162,39,0.5)',
                  }}>
                  ✦
                </span>
              </div>

              <span className="incantation text-[0.6rem] text-divine-gold/45 group-hover:text-divine-gold/75 transition-colors duration-400">
                {revealing ? 'Consulting the Divine...' : tip ? 'Seek Again' : 'Seek Wisdom'}
              </span>
            </button>
          </div>

          {/* Wisdom result */}
          <div className={`transition-all duration-600 ${revealing ? 'opacity-0 translate-y-5' : tip ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
            {tip && !revealing && (
              <div className="corner-box p-9 md:p-14 text-center"
                style={{
                  border: '1px solid rgba(201,162,39,0.28)',
                  background: 'linear-gradient(160deg, rgba(23,11,48,0.4) 0%, rgba(4,3,10,0.96) 100%)',
                  boxShadow: '0 0 50px rgba(201,162,39,0.07), inset 0 0 30px rgba(201,162,39,0.03)',
                }}>
                <span className="font-cinzel text-6xl leading-none" style={{ color: 'rgba(201,162,39,0.12)' }}>&ldquo;</span>
                <p className="font-fell italic text-parchment/88 text-xl md:text-2xl leading-relaxed mt-2 mb-8">
                  &ldquo;{tip.w}&rdquo;
                </p>
                <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.3), transparent)' }} />
                <p className="incantation text-[0.6rem] text-divine-gold/42">{tip.s}</p>
              </div>
            )}
          </div>

          {/* Empty state */}
          {!tip && !revealing && (
            <div className="p-10 text-center"
              style={{ border: '1px dashed rgba(201,162,39,0.15)' }}>
              <div className="font-heading text-divine-gold/12 text-5xl mb-4">✦</div>
              <p className="font-fell italic text-bone/35 text-lg">The altar awaits. Press the sacred sigil to receive the recorded wisdom of Tips.</p>
              <p className="font-fell italic text-bone/20 text-sm mt-2">He is almost certainly asleep, but the oracle has his words.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Sacred Laws ── */}
      <section className="relative z-10 py-24 border-t border-divine-gold/8"
        style={{ background: 'linear-gradient(180deg, rgba(13,8,32,0.3) 0%, rgba(4,3,10,0.7) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="incantation text-[0.6rem] text-center text-divine-gold/35 mb-4">The Divine Commandments</p>
          <h2 className="font-cinzel text-center text-bright-gold glow-gold text-2xl md:text-3xl mb-4 tracking-[0.12em]">The Sacred Laws of Tips</h2>
          <p className="font-fell italic text-center text-bone/35 text-lg max-w-xl mx-auto mb-14 leading-relaxed">
            Ten laws derived from the actions and recorded words of Tips. They are not arbitrary. Each one emerged from something that happened, something that was survived, or something that was decided.
          </p>

          <div className="space-y-4">
            {LAWS.map(l => (
              <div key={l.n} className="divine-card p-7 bg-void/55 flex gap-6 items-start">
                <div className="font-cinzel text-4xl font-bold shrink-0 mt-0.5 leading-none"
                  style={{ color: 'rgba(201,162,39,0.18)', minWidth: '2.5rem' }}>{l.n}</div>
                <div>
                  <p className="font-fell italic text-parchment/78 text-lg leading-relaxed mb-2">{l.law}</p>
                  <p className="incantation text-[0.55rem] text-divine-gold/25">{l.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offerings ── */}
      <section className="relative z-10 py-24 border-t border-divine-gold/8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="incantation text-[0.6rem] text-center text-divine-gold/35 mb-4">What Pleases the God</p>
          <h2 className="font-cinzel text-center text-bright-gold glow-gold text-2xl md:text-3xl mb-4 tracking-[0.12em]">Offerings Accepted by Tips</h2>
          <p className="font-fell italic text-center text-bone/35 text-lg max-w-lg mx-auto mb-14 leading-relaxed">
            He is specific, as gods tend to be. He is also not watching all the time. Do them for yourself as much as for him.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OFFERINGS.map((o, i) => (
              <div key={i} className="divine-card p-7 bg-void/55">
                <p className="font-heading text-divine-gold text-[0.68rem] tracking-[0.2em] uppercase mb-4">{o.item}</p>
                <div className="h-px mb-4" style={{ background: 'linear-gradient(to right, rgba(201,162,39,0.25), transparent)' }} />
                <p className="font-fell italic text-bone/52 text-base leading-relaxed">{o.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Blessing ── */}
      <section className="relative z-10 py-20 border-t border-divine-gold/8"
        style={{ background: 'linear-gradient(135deg, rgba(23,11,48,0.2), rgba(4,3,10,0.95))' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="font-heading text-6xl text-divine-gold/12 mb-6 animate-breathe">✦</div>
          <p className="font-fell italic text-bone/38 text-xl leading-relaxed mb-6">
            May you rest deeply, and without justification. May you delegate boldly, and without regret. May you, when you encounter the darkness from within, find the precise spot and strike it with everything you have.
          </p>
          <p className="font-fell italic text-bone/20 text-base leading-relaxed mb-6">
            And when it is over, may you walk out of the fire and go back to sleep.
          </p>
          <p className="incantation text-[0.58rem] text-divine-gold/22">— The Blessing of Tips · Given Once · Assumed to Apply Continuously</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="relative z-10 py-12 text-center flex flex-wrap gap-5 justify-center">
        <Link href="/lore" className="btn-divine">Read the Chronicles</Link>
        <Link href="/beings" className="btn-outline">Divine Beings</Link>
        <Link href="/" className="btn-outline">← Return Home</Link>
      </div>
    </div>
  );
}
