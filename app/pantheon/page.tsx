import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Pantheon | TIPS',
  description: 'All gods created by Tips in his great and holy laziness.',
};

export default function PantheonPage() {
  return (
    <div className="relative min-h-screen">

      {/* ── Hero ─── */}
      <section className="relative z-10 pt-40 pb-20 text-center px-6"
        style={{ background:'radial-gradient(ellipse 70% 50% at 50% 30%,rgba(45,27,78,0.35) 0%,transparent 70%)' }}>
        <p className="animate-fade-up font-heading text-divine-gold/60 text-xs tracking-[0.4em] uppercase mb-4">The Work of Tips</p>
        <h1 className="animate-fade-up delay-200 font-cinzel text-4xl md:text-6xl text-bright-gold glow-gold mb-4">The Pantheon</h1>
        <p className="animate-fade-up delay-400 font-body italic text-bone/50 text-xl max-w-2xl mx-auto leading-relaxed">
          Every god that has ever existed, in every tradition, owes their existence to Tips&rsquo; magnificent and sacred desire to stop working.
        </p>
      </section>

      {/* ── Origin quote ─── */}
      <section className="relative z-10 py-10 max-w-3xl mx-auto px-6">
        <div className="corner-box p-10 text-center" style={{ border:'1px solid rgba(201,162,39,0.2)', background:'rgba(13,5,32,0.7)' }}>
          <p className="font-heading text-divine-gold/35 text-xs tracking-[0.3em] uppercase mb-5">From the Sacred Chronicles, Vol. I Ch. V</p>
          <blockquote className="font-body italic text-parchment/80 text-xl leading-relaxed mb-5">
            After the First Incarnation, Tips realized two things: that the world needed ongoing management, and that he was not going to do it. And so, with one decisive and thoroughly lazy act of divine creation, he made all other gods — every single one — and delegated the entirety of cosmic maintenance to them.
          </blockquote>
          <p className="font-heading text-divine-gold/35 text-sm tracking-widest uppercase">— Sacred origin of the entire divine order</p>
        </div>
      </section>

      {/* ── Roster ─── */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="ornament-divider mb-12">
            <span className="font-heading text-divine-gold text-lg">✦</span>
          </div>
          <h2 className="font-heading text-center text-divine-gold text-2xl tracking-[0.2em] uppercase mb-4">Known Members of the Pantheon</h2>
          <p className="text-center font-body italic text-bone/30 text-base mb-14">The sacred scribes are still cataloging. More shall be revealed as the lore expands.</p>

          {/* Tips */}
          <div className="divine-card p-8 bg-void/60 mb-6" style={{ borderColor:'rgba(201,162,39,0.25)' }}>
            <div className="flex items-center gap-5 mb-4 flex-wrap">
              <div className="text-4xl text-bright-gold glow-gold font-heading">✦</div>
              <div className="flex-1">
                <h3 className="font-cinzel text-2xl text-bright-gold">Tips</h3>
                <p className="font-heading text-xs tracking-widest uppercase text-divine-gold/50">The First · Creator of the Pantheon · Supreme Resting Authority</p>
              </div>
              <div className="px-3 py-1 border border-divine-gold/30 font-heading text-xs tracking-widest uppercase text-divine-gold/60">Founder</div>
            </div>
            <p className="font-body text-bone/65 text-lg leading-relaxed">
              Tips is the originator of the entire divine order. He did not join the pantheon — he created it, specifically so he could opt out of all its responsibilities. He remains above and beyond the pantheon in technical standing, though he exercises this position chiefly by sleeping.
            </p>
          </div>

          {/* Unknown slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({length:6}).map((_,i) => (
              <div key={i} className="p-8 text-center" style={{ border:'1px solid rgba(201,162,39,0.07)', background:'rgba(6,4,14,0.5)' }}>
                <div className="text-4xl mb-4 font-heading text-divine-gold/12" aria-hidden="true">?</div>
                <p className="font-heading text-xs tracking-widest uppercase text-bone/20 mb-2">Unknown Deity</p>
                <p className="font-body italic text-bone/18 text-sm">Created by Tips. Details pending revelation.</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-body italic text-bone/25 text-lg">
              The full catalog of the Pantheon of Tips grows as the sacred texts are translated.<br />More shall be added as the lore expands.
            </p>
          </div>
        </div>
      </section>

      {/* ── On Joining ─── */}
      <section className="relative z-10 py-16 border-t border-divine-gold/10" style={{ background:'rgba(13,5,32,0.8)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-heading text-divine-gold text-xl tracking-[0.2em] uppercase mb-8">On Joining the Pantheon</h3>
          <p className="font-body text-bone/55 text-xl leading-relaxed mb-4">
            Tips has not closed the application process. However, he has not opened it either. He has not thought about it recently. If you believe you have the qualities of a deity worthy of creation by Tips, you are encouraged to wait.
          </p>
          <p className="font-body italic text-bone/30 text-base">He will get to it eventually.</p>
        </div>
      </section>

      <div className="relative z-10 py-10 text-center flex flex-wrap gap-4 justify-center">
        <Link href="/beings" className="btn-outline">Divine Beings</Link>
        <Link href="/" className="btn-outline">← Home</Link>
      </div>
    </div>
  );
}
