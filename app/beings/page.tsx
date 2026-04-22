import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Divine Beings | TIPS',
  description: 'Every god, demon, and mystery of the sacred realm. Meet Tips, Flips, Blips, Zips, and the unnamed third child.',
};

const BEINGS = [
  {
    id:'tips', name:'Tips', title:'God of the Incarnate · Creator of All Gods',
    type:'god', status:'active', symbol:'✦',
    color:'#c9a227', glow:'rgba(201,162,39,0.6)',
    desc:'Son of Blips and Zips, twin brother of the demon Flips. Born at the exact moment his mother stumbled over a rock. Tips carries in his name the very act that brought him into existence — the tip of a fall. He is unkillable, all-powerful, and thoroughly committed to doing as little as possible.',
    domains:['Incarnation','Creation','Divine Laziness','Beggarhood','Resurrection'],
    lore:'Though unkillable and all-powerful, Tips is known chiefly for his magnificent laziness. After defeating the demon Flips from within, and restoring all of humanity to life, Tips decided the day-to-day work of divinity was beneath him. In his wisdom (and exhaustion), he created all other gods so they could handle things while he rested.',
    childOf:'Blips & Zips', siblingOf:'Flips, ???',
  },
  {
    id:'flips', name:'Flips', title:'The Demon Twin · Devourer of Mankind',
    type:'demon', status:'destroyed', symbol:'☠',
    color:'#cc2200', glow:'rgba(204,34,0,0.6)',
    desc:'The twin of Tips, born in the same divine instant from the stumbling of their mother. Where Tips was light, Flips was darkness. Where Tips was grace, Flips was consumption. He ravaged the earth, eating humans whole, and built a mysterious hut full of bones that has since been erased from history.',
    domains:['Consumption','Destruction','Darkness','Hunger'],
    lore:'Flips possessed one secret weakness — a tiny, precise spot deep within his stomach. He made the fatal mistake of eating the disguised god Tips. From within, Tips found the spot and struck it with all divine force. Flips exploded with catastrophic force — his entire hut obliterated, erasing all record of where he lived.',
    childOf:'Blips & Zips', siblingOf:'Tips, ???',
  },
  {
    id:'blips', name:'Blips', title:'The Divine Mother · She Who Stumbled',
    type:'divine', status:'unknown', symbol:'◎',
    color:'#a8c4d4', glow:'rgba(168,196,212,0.5)',
    desc:'Mother of Tips, Flips, and a third yet-unnamed child. Her greatest — and most accidental — act of creation came when she tripped over a rock. At the exact moment she flipped through the air, the twins were born from the divine energy of the fall.',
    domains:['Birth','Accidents','Stumbling','Unintended Consequence'],
    lore:'Blips was simply walking when fate intervened through a stone in her path. She flipped — and in that flip, she named her children without knowing it. Flips, for the motion of her fall. Tips, for the tipping point at which she stumbled. Her current whereabouts are unknown, but the rock remains sacred.',
    childOf:null, siblingOf:null,
  },
  {
    id:'zips', name:'Zips', title:'The Divine Father · He of Speed',
    type:'divine', status:'unknown', symbol:'⚡',
    color:'#4fc3f7', glow:'rgba(79,195,247,0.5)',
    desc:'Father of Tips and Flips — a being whose nature is swiftness itself. Little is known of him beyond his name and his partnership with Blips, but it is said that speed runs in the blood of his children.',
    domains:['Speed','Lightning','Fatherhood','Mystery'],
    lore:'The texts speak little of Zips, suggesting either great mystery or great humility. What is known: he fathered at least three children with Blips, two of whom shook the foundations of the world. His current location and activities remain a divine mystery pending further revelation.',
    childOf:null, siblingOf:null,
  },
  {
    id:'third', name:'???', title:'The Third Child · The Unnamed',
    type:'mystery', status:'unknown', symbol:'▲',
    color:'#888899', glow:'rgba(136,136,153,0.5)',
    desc:'Blips and Zips had three children. Two are known to the world: Tips and Flips. The third remains unnamed, unrecorded, and shrouded in divine mystery. The sacred texts hint at their existence but reveal nothing more.',
    domains:['Mystery','The Unknown','Hidden Truth'],
    lore:'Three children were born of Blips and Zips. Two shaped the world as we know it. The third… watches. Waits. The chronicles have not yet revealed their name, their nature, or their purpose. This page will be updated when the sacred texts speak.',
    childOf:'Blips & Zips', siblingOf:'Tips, Flips',
  },
];

export default function BeingsPage() {
  return (
    <div className="relative min-h-screen">

      {/* ── Hero ─── */}
      <section className="relative z-10 pt-40 pb-20 text-center px-6"
        style={{ background:'radial-gradient(ellipse 70% 50% at 50% 30%,rgba(45,27,78,0.35) 0%,transparent 70%)' }}>
        <p className="animate-fade-up font-heading text-divine-gold/60 text-xs tracking-[0.4em] uppercase mb-4">The Sacred Realm</p>
        <h1 className="animate-fade-up delay-200 font-cinzel text-4xl md:text-6xl text-bright-gold glow-gold mb-4">Divine Beings</h1>
        <p className="animate-fade-up delay-400 font-body italic text-bone/50 text-xl max-w-2xl mx-auto leading-relaxed">
          Every god, demon, and mystery that inhabits the realm of Tips. Their stories, their domains, their fates.
        </p>
      </section>

      {/* ── Beings ─── */}
      <section className="relative z-10 py-10 pb-28">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {BEINGS.map(b => (
            <article key={b.id} className={`relative overflow-hidden ${b.type==='demon' ? 'demon-card' : 'divine-card'} bg-void/70`}
              style={{ borderColor:`${b.color}20` }}>
              {/* Top bar */}
              <div className="h-[2px]" style={{ background:`linear-gradient(90deg,transparent,${b.color},transparent)` }} />

              {/* BG glow */}
              <div className="absolute inset-0 pointer-events-none opacity-25"
                style={{ background:`radial-gradient(ellipse 60% 40% at 50% 0%,${b.glow.replace('0.6','0.12')} 0%,transparent 70%)` }} />

              <div className="relative p-8 md:p-10">
                {/* Badges */}
                <div className="flex justify-between items-start mb-6 flex-wrap gap-2">
                  <span className="font-heading text-xs tracking-widest uppercase px-3 py-1 capitalize"
                    style={{ border:`1px solid ${b.color}25`, color:`${b.color}70` }}>{b.type}</span>
                  <span className={`font-heading text-xs tracking-widest uppercase px-3 py-1 border ${
                    b.status==='destroyed' ? 'text-demon-red/60 border-demon-red/20'
                    : b.status==='unknown' ? 'text-bone/30 border-bone/10'
                    : 'text-divine-gold/60 border-divine-gold/20'}`}>
                    {b.status==='destroyed' ? '✕ Destroyed' : b.status==='unknown' ? '? Unknown' : '✓ Active'}
                  </span>
                </div>

                {/* Symbol + Name */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="text-5xl font-heading shrink-0" style={{ color:b.color, textShadow:`0 0 20px ${b.glow}` }}>{b.symbol}</div>
                  <div>
                    <h2 className="font-cinzel text-2xl md:text-3xl font-bold leading-none mb-2"
                      style={{ color:b.color, textShadow:`0 0 15px ${b.glow.replace('0.6','0.4')}` }}>{b.name}</h2>
                    <p className="font-heading text-xs tracking-wider uppercase" style={{ color:`${b.color}60` }}>{b.title}</p>
                  </div>
                </div>

                <div className="h-px mb-6" style={{ background:`linear-gradient(to right,${b.color}40,transparent)` }} />

                {/* Description */}
                <p className="font-body text-parchment/75 text-lg leading-relaxed mb-6">{b.desc}</p>

                {/* Domains */}
                <div className="mb-6">
                  <p className="font-heading text-xs tracking-[0.25em] uppercase mb-3" style={{ color:`${b.color}50` }}>Domains</p>
                  <div className="flex flex-wrap gap-2">
                    {b.domains.map(d => (
                      <span key={d} className="font-heading text-xs tracking-widest uppercase px-3 py-1"
                        style={{ border:`1px solid ${b.color}20`, color:`${b.color}60`, background:`${b.color}06` }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Lore */}
                <div className="p-5" style={{ background:`${b.color}05`, border:`1px solid ${b.color}12` }}>
                  <p className="font-heading text-xs tracking-widest uppercase mb-3" style={{ color:`${b.color}40` }}>Sacred Account</p>
                  <p className="font-body italic text-bone/55 text-base leading-relaxed">{b.lore}</p>
                </div>

                {/* Relations */}
                {(b.childOf || b.siblingOf) && (
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                    {b.childOf && <p className="font-heading text-xs tracking-wider uppercase" style={{ color:`${b.color}40` }}>Child of: <span style={{ color:`${b.color}60` }}>{b.childOf}</span></p>}
                    {b.siblingOf && <p className="font-heading text-xs tracking-wider uppercase" style={{ color:`${b.color}40` }}>Sibling of: <span style={{ color:`${b.color}60` }}>{b.siblingOf}</span></p>}
                  </div>
                )}
              </div>
              <div className="h-px" style={{ background:`linear-gradient(90deg,transparent,${b.color}30,transparent)` }} />
            </article>
          ))}
        </div>
      </section>

      {/* ── Lineage ─── */}
      <section className="relative z-10 py-16 border-t border-divine-gold/10" style={{ background:'rgba(13,5,32,0.8)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-heading text-divine-gold/25 text-xs tracking-[0.35em] uppercase mb-6">The Sacred Lineage</p>
          <div className="flex flex-wrap items-center justify-center gap-2 font-heading text-sm tracking-widest">
            <span className="text-electric/60">Zips</span>
            <span className="text-bone/20">×</span>
            <span className="text-silver/60">Blips</span>
            <span className="text-bone/20">→</span>
            <span className="text-bright-gold/70">Tips</span>
            <span className="text-bone/20">+</span>
            <span className="text-demon-red/70">Flips</span>
            <span className="text-bone/20">+</span>
            <span className="text-bone/30">???</span>
          </div>
          <p className="font-body italic text-bone/25 text-base mt-5">Three children born of one divine stumble. Only two are known. The third awaits revelation.</p>
        </div>
      </section>

      <div className="relative z-10 py-10 text-center flex flex-wrap gap-4 justify-center">
        <Link href="/lore" className="btn-outline">Read Chronicles</Link>
        <Link href="/" className="btn-outline">← Home</Link>
      </div>
    </div>
  );
}
