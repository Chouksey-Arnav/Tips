import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Divine Beings | TIPS',
  description: 'Every god, demon, and mystery of the sacred realm — their domains, their sacred accounts, their fates. Meet Tips, Flips, Blips, Zips, and the unnamed third child.',
};

const BEINGS = [
  {
    id: 'tips',
    name: 'Tips',
    title: 'God of the Incarnate · Creator of All Gods · Supreme Resting Authority',
    type: 'god',
    status: 'active',
    symbol: '✦',
    color: '#c9a227',
    glow: 'rgba(201,162,39,0.65)',
    shortDesc: 'Son of Blips and Zips. Twin brother of the demon Flips. Born in the exact moment of his mother\'s stumble over a stone in the First Realm. Unkillable. All-powerful. Thoroughly and permanently committed to rest.',
    fullDesc: [
      'From the very manner of his birth, Tips has never required ceremony. He arrived in the world without prophecy, without heralding, without the elaborate cosmic announcement that lesser events receive. He was simply there — produced by physics, named by motion, unkillable from his first breath — and from the beginning he seemed aware that being all-powerful carried an implicit suggestion that he use that power constantly, which he found both presumptuous and exhausting.',
      'The chronicles of every major mortal civilization contain, somewhere in their margins or depths, a figure who is not quite described and not quite named: a god who acted once, with total effectiveness, and was never seen again. Scholars of the Sacred Chronicles believe these fragments refer to Tips in one of his post-Incarnation manifestations — present just long enough to correct a catastrophe, then gone before the gratitude could become obligation. This is consistent with everything the texts record about his character.',
      'He is not absent from care. He is not indifferent to the suffering of the mortal world. When Flips ravaged the earth for an age, Tips eventually rose from his rest and ended it — completely, decisively, at considerable personal discomfort — and then restored every single person who had been consumed to life. This is not the behavior of a being who does not care. It is the behavior of a being who cares enormously, acts when action is truly necessary, and has decided that the ongoing administration of the cosmos falls well outside the category of truly necessary.',
      'He created all other gods so they could handle the ongoing administration. He considers this the most elegant thing he has ever done. He is currently resting. He may be reached through the Temple of Tips, though response times are not guaranteed.',
    ],
    domains: ['Incarnation', 'Creation', 'Divine Laziness', 'Beggarhood', 'Resurrection', 'Delegation', 'The Sacred Punch'],
    lore: 'The First Incarnation remains the defining act of divine history: Tips descended to the mortal world as a beggar, knocked on the door of the demon Flips, spoke twelve carefully chosen words, was eaten immediately, swam through the interior of an appetite made flesh, found the one vulnerability in an otherwise invincible god, and punched it with sufficient force to end the demon entirely. He then walked out of the explosion, restored all of humanity to life, received their gratitude, and retired permanently. Every god that exists was created in the aftermath, specifically so he could stop.',
    childOf: 'Blips & Zips',
    siblingOf: 'Flips, ??? (unnamed)',
  },
  {
    id: 'flips',
    name: 'Flips',
    title: 'The Demon Twin · Devourer of Mankind · He Who Was Ended from Within',
    type: 'demon',
    status: 'destroyed',
    symbol: '☠',
    color: '#cc2200',
    glow: 'rgba(204,34,0,0.65)',
    shortDesc: 'The twin of Tips, born in the same divine instant from the same accidental stumble. Where Tips was light, Flips was darkness. Where Tips embodied creation and rest, Flips embodied consumption and hunger. He ate the world. He was stopped. He cannot be stopped again because he no longer exists.',
    fullDesc: [
      'The demon Flips arrived in the mortal world already hungry. Not as all living things are hungry — with appetites that can be satisfied and will eventually be satisfied — but hungry in the structural sense of emptiness that has been given a shape and a name and the ability to move toward food. He consumed with a thoroughness that no natural force had previously achieved: not just flesh, not just life, but the accumulated products of life — language, architecture, music, the specific texture of how light fell in particular places in particular seasons. He ate civilizations and left bones.',
      'The bones are the detail that most survived the age of Flips, because the bones were too hard to consume and too numerous to ignore. He sorted them compulsively, carried them with him, built from them a structure that the chronicles call his hut with a restraint that borders on understatement. It was more than a hut. It was a monument to appetite — a building made of what appetite cannot destroy, housing the strange collected objects of civilizations that had otherwise been eaten into nothing. It stood in a location that cannot be identified because the explosion erased the location.',
      'He had one weakness. Every divine being born in the manner of Flips — born of the Sacred Threefold, released through the power of the fall in the First Realm — possesses a single point of vulnerability buried deep within an otherwise invincible form. Flips knew this. He also knew his twin Tips possessed the same vulnerability. He believed, for most of his existence, that this knowledge was held between equals. He did not account for the possibility that Tips would disguise himself as a beggar and simply ask to be eaten.',
      'Flips is destroyed. Utterly and completely. There is no part of him that can be consulted, recovered, or remembered in any form that he would recognize as himself. The bones he sorted so carefully are now anonymous mineral matter distributed across the mortal world. The hut is gone. The location is gone. He exists only in the chronicles, which is a form of existence he would not have chosen.',
    ],
    domains: ['Consumption', 'Darkness', 'Hunger', 'Destruction', 'The Hut of Bones', 'The Age of Ravaging'],
    lore: 'Flips made one tactical error. He possessed a secret — the location of his own Sacred Vulnerability — and he believed it was safe because he also knew where his twin Tips\' vulnerability was located. What he did not anticipate was that Tips would enter his body before any exchange of that knowledge could occur. By the time Flips was aware that he had swallowed a god, Tips had already found the spot. The chronicles record the interval between swallowing and explosion as brief.',
    childOf: 'Blips & Zips',
    siblingOf: 'Tips, ??? (unnamed)',
  },
  {
    id: 'blips',
    name: 'Blips',
    title: 'The Divine Mother · She Who Stumbled · She of the Sacred Stone',
    type: 'divine',
    status: 'unknown',
    symbol: '◎',
    color: '#a8c4d4',
    glow: 'rgba(168,196,212,0.55)',
    shortDesc: 'Mother of Tips, Flips, and a third yet-unnamed child. Her greatest — and most accidental — act of creation came when her foot caught the edge of an ordinary stone. In the suspended instant of her fall through the First Realm, two of the three souls she carried were released into the world, named not by her but by the physics of her stumble.',
    fullDesc: [
      'Blips is described in the oldest fragments as a being of profound composure and considerable inattention — composed in the sense that her presence in the First Realm was one of genuine calm, inattentive in the sense that she was not watching her feet. This combination, encountered at the wrong moment, produced the most consequential accident in the history of the known cosmos. Scholars have spent considerable time debating whether it was truly an accident, or whether the stone, the path, and the stumble were arranged by some deeper force. The chronicles take no position on this question and suggest, gently, that it may not matter.',
      'What is clear is that she carried the Sacred Threefold with full awareness and considerable care. Three souls, three distinct natures, three divine beings gestating simultaneously in a being whose own nature is associated with birth — specifically with unintended birth, accidental creation, the kind of consequence that arrives without announcement and names itself by the circumstances of its arrival. She was, in this sense, the perfect vessel for what she carried.',
      'Her whereabouts after the birth are unknown. The chronicles note this without apparent distress, as though her absence is either expected or appropriate — as though she completed her part in the sacred sequence and departed from the narrative with the same absence of ceremony with which she entered it. She has not been seen in the First Realm or the mortal world by any witness whose account has been preserved.',
      'The rock remains. The chronicles are unanimous on this point. The stone over which she stumbled, the stone that produced two names and began the chain of events that resulted in the First Incarnation and the creation of all divine beings, still exists in the First Realm. It is considered the most sacred object in the cosmos. It looks exactly like an ordinary rock. This is considered appropriate.',
    ],
    domains: ['Birth', 'Accidental Creation', 'Stumbling', 'Unintended Consequence', 'The Sacred Stone', 'The First Realm'],
    lore: 'The rock that tripped Blips is the most sacred object in the known cosmos. No divine tradition denies this. It is a stone, undistinguished in every physical attribute, located in a realm that mortals cannot access and that divine beings rarely visit. It is not worshipped in any organized sense — Tips finds organized worship of inanimate objects somewhat excessive, and he created all the religions. But it is acknowledged, universally and without exception, as the point from which all things that matter can be traced.',
    childOf: null,
    siblingOf: null,
  },
  {
    id: 'zips',
    name: 'Zips',
    title: 'The Divine Father · He of Speed · He of Swift and Uncertain Nature',
    type: 'divine',
    status: 'unknown',
    symbol: '⚡',
    color: '#4fc3f7',
    glow: 'rgba(79,195,247,0.55)',
    shortDesc: 'Father of Tips, Flips, and the unnamed third child. A being whose nature is swiftness itself — not the swiftness of mortal things, not the speed of wind or water, but the essential speed of something that exists primarily in the act of moving. Little is known of him beyond his name, his nature, and the fact that speed runs in the blood of both his divine and demonic children.',
    fullDesc: [
      'The texts say almost nothing about Zips, and what they say, they say quickly. This may be intentional. A being whose nature is speed might reasonably leave behind a record that reflects that nature: brief, pointed, already somewhere else before the account is finished. The chronicles record his name, his union with Blips, and the children that union produced. They record that his nature is swiftness. They record that he is the father. Beyond this, the first volume is silent.',
      'What scholars can infer from the children is suggestive. Tips, despite his famous laziness, acted with complete decisiveness when he finally chose to act — the entire plan of the First Incarnation was conceived, executed, and concluded with the economy of a being who knows how to move directly toward a target. Flips, despite his patient accumulation of bones, consumed the world with terrifying speed — whole villages in a night, whole civilizations across a season. Both twins inherited something from their father, and what they inherited was the capacity to move, when they chose to move, with the total efficiency of a being that understands speed as a first principle.',
      'His whereabouts are unknown. The chronicles note this with the same equanimity they apply to Blips\' absence — as though the divine parents of the sacred twins are expected to be elsewhere, unreachable, existing in some domain that the First Volume does not cover. Whether he knows what became of his children — all three of them, including the unnamed third — is a question the texts decline to answer.',
      'The supplementary texts, which are contested and which the canonical chronicles treat with cautious respect, suggest that Zips is not merely absent but specifically, deliberately absent: that speed, when it is a nature rather than an action, eventually carries its possessor beyond the range of any fixed point of reference. He may be moving. He may have always been moving. He may not be findable by any means that does not also possess his nature.',
    ],
    domains: ['Speed', 'Lightning', 'Fatherhood', 'Swiftness', 'Divine Mystery', 'Motion as First Principle'],
    lore: 'The scholars of the Sacred Chronicles have noted, with the careful neutrality that characterizes their better work, that a god of speed who fathered both the most effective divine strategist in history and the most efficient destroyer in history may have bequeathed something more specific than swiftness to his children. The capacity to move directly toward a goal, without hesitation, without detour — this is a form of speed that has nothing to do with physical velocity and everything to do with divine nature. Tips had it. Flips had it. The unnamed third may have it also.',
    childOf: null,
    siblingOf: null,
  },
  {
    id: 'third',
    name: '???',
    title: 'The Third Child · The Unnamed · The One the Chronicles Have Not Yet Reached',
    type: 'mystery',
    status: 'unknown',
    symbol: '▲',
    color: '#888899',
    glow: 'rgba(136,136,153,0.55)',
    shortDesc: 'Blips and Zips had three children. The Sacred Threefold carried by Blips released two into the world at the moment of the stumble — Tips and Flips — and retained one. That one has not yet been born. Or has been born in secret. Or has existed all along under a name the chronicles have not yet learned to use.',
    fullDesc: [
      'The third child is the most unsettling subject in the Sacred Chronicles, and the chronicles are not a text that shies from unsettling subjects. What makes the third child unsettling is not what is known about them — nothing is known about them — but the specific quality of what is not known. It is not the absence of information. It is the shape of that absence. The texts describe the Sacred Threefold. They describe the fall of Blips. They describe two souls released in the instant of the stumble. They are entirely, immovably, deliberately silent about the third.',
      'This silence reads, to the careful scholar, as intentional. The earliest scribes of the chronicles were not careless people — they were meticulous, comprehensive, obsessed with completeness. They documented the rock. They documented the specific idiom of the mortal era in which Tips said "please keep me up." They documented the quality of the silence around the hut before the door opened. They did not forget the third child. They recorded the third child\'s existence and then wrote nothing more. This is a decision. What informed it, no surviving account explains.',
      'What can be inferred, strictly from the architecture of the sacred texts, is this: the third child exists or has existed. They were carried in the Sacred Threefold alongside Tips and Flips. They were not released in the moment of the stumble — whether they were held back by choice, by the nature of their own sacred timing, or by some mechanism in the fall that the texts do not illuminate. They have a relationship to the twins that has not yet been described. And they are watching.',
      'This last phrase — "the third watches" — appears in three separate supplementary texts, in three different archaic scripts, none of which share a verifiable common origin. The scribes of the chronicles note this convergence without comment. Tips, when asked about the third child, has been reliably unavailable for comment since the beginning of recorded divine history. The third child has not introduced themselves.',
    ],
    domains: ['Mystery', 'The Unknown', 'Hidden Truth', 'The Unrevealed', 'Sacred Silence', 'The Third'],
    lore: 'The most provocative fragment in the supplementary texts reads, in its entirety: "Two walked out of the fall. One remained within. Not waiting to be born. Waiting for the right moment to become known." The scribes of the canonical chronicles include this fragment in their appendix and then, immediately below it, write a single line of their own: "We have no further information. This page will be updated." The page has not been updated. The chronicles are very old. The third child has not introduced themselves.',
    childOf: 'Blips & Zips',
    siblingOf: 'Tips, Flips',
  },
];

export default function BeingsPage() {
  return (
    <div className="relative min-h-screen">

      {/* ── Hero ── */}
      <section className="relative z-10 pt-44 pb-24 text-center px-6 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 75% 55% at 50% 30%, rgba(23,11,48,0.45) 0%, transparent 70%)' }}>
        <p className="animate-fade-up incantation text-[0.62rem] mb-5">The Sacred Realm</p>
        <h1 className="animate-fade-up delay-200 font-cinzel text-4xl md:text-6xl text-bright-gold glow-gold mb-5 leading-tight">
          Divine Beings
        </h1>
        <p className="animate-fade-up delay-400 font-fell italic text-bone/50 text-xl max-w-2xl mx-auto leading-relaxed">
          Every god, demon, and mystery that inhabits the realm of Tips. Their origins, their domains, their sacred accounts, and — where it applies — their current status and last known location.
        </p>
      </section>

      {/* ── Beings ── */}
      <section className="relative z-10 py-10 pb-28">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          {BEINGS.map(b => (
            <article key={b.id}
              className={`relative overflow-hidden ${b.type === 'demon' ? 'demon-card' : 'divine-card'} bg-void/75`}
              style={{ borderColor: `${b.color}18` }}>

              {/* Top bar */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${b.color}, transparent)` }} />

              {/* BG glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 65% 45% at 50% 0%, ${b.glow.replace('0.65','0.08')} 0%, transparent 65%)` }} />

              <div className="relative p-9 md:p-12">

                {/* Top badges */}
                <div className="flex justify-between items-start mb-7 flex-wrap gap-3">
                  <span className="font-heading text-[0.62rem] tracking-[0.25em] uppercase px-3 py-1.5 capitalize"
                    style={{ border: `1px solid ${b.color}20`, color: `${b.color}65` }}>{b.type}</span>
                  <span className={`font-heading text-[0.62rem] tracking-[0.25em] uppercase px-3 py-1.5 border ${
                    b.status === 'destroyed' ? 'text-demon-red/60 border-demon-red/20'
                    : b.status === 'unknown'  ? 'text-bone/28 border-bone/10'
                    : 'text-divine-gold/60 border-divine-gold/20'}`}>
                    {b.status === 'destroyed' ? '✕ Destroyed'
                    : b.status === 'unknown'  ? '? Whereabouts Unknown'
                    : '✓ Active — Resting'}
                  </span>
                </div>

                {/* Symbol + Name */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-5xl font-heading shrink-0 animate-breathe"
                    style={{ color: b.color, textShadow: `0 0 25px ${b.glow}` }}>{b.symbol}</div>
                  <div>
                    <h2 className="font-cinzel text-2xl md:text-4xl font-bold leading-none mb-2"
                      style={{ color: b.color, textShadow: `0 0 20px ${b.glow.replace('0.65','0.45')}` }}>{b.name}</h2>
                    <p className="font-heading text-[0.62rem] tracking-[0.2em] uppercase leading-loose"
                      style={{ color: `${b.color}55` }}>{b.title}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-8" style={{ background: `linear-gradient(to right, ${b.color}40, transparent)` }} />

                {/* Short description */}
                <p className="font-fell italic text-parchment/78 text-lg leading-relaxed mb-8">{b.shortDesc}</p>

                {/* Extended descriptions */}
                <div className="mb-8 space-y-4">
                  {b.fullDesc.map((para, i) => (
                    <p key={i} className="font-body text-bone/60 text-base leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* Domains */}
                <div className="mb-8">
                  <p className="incantation text-[0.58rem] mb-4" style={{ color: `${b.color}45` }}>Divine Domains</p>
                  <div className="flex flex-wrap gap-2">
                    {b.domains.map(d => (
                      <span key={d} className="font-heading text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5"
                        style={{ border: `1px solid ${b.color}18`, color: `${b.color}58`, background: `${b.color}05` }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Sacred Account */}
                <div className="p-7 mb-6" style={{ background: `${b.color}04`, border: `1px solid ${b.color}10` }}>
                  <p className="incantation text-[0.56rem] mb-4" style={{ color: `${b.color}38` }}>Sacred Account</p>
                  <p className="font-fell italic text-bone/52 text-base leading-relaxed">{b.lore}</p>
                </div>

                {/* Relations */}
                {(b.childOf || b.siblingOf) && (
                  <div className="flex flex-wrap gap-x-10 gap-y-3 pt-5"
                    style={{ borderTop: `1px solid ${b.color}10` }}>
                    {b.childOf && (
                      <p className="font-heading text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: `${b.color}38` }}>
                        Child of: <span style={{ color: `${b.color}60` }}>{b.childOf}</span>
                      </p>
                    )}
                    {b.siblingOf && (
                      <p className="font-heading text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: `${b.color}38` }}>
                        Sibling of: <span style={{ color: `${b.color}60` }}>{b.siblingOf}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${b.color}25, transparent)` }} />
            </article>
          ))}
        </div>
      </section>

      {/* ── Lineage ── */}
      <section className="relative z-10 py-20 border-t border-divine-gold/8"
        style={{ background: 'rgba(4,3,10,0.9)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="incantation text-[0.58rem] text-divine-gold/25 mb-8">The Sacred Lineage</p>
          <div className="flex flex-wrap items-center justify-center gap-3 font-heading text-sm tracking-[0.2em] mb-8">
            <span className="text-electric/65">Zips</span>
            <span className="text-bone/20 text-xs">✕</span>
            <span style={{ color: '#a8c4d4', opacity: 0.7 }}>Blips</span>
            <span className="text-bone/20">→</span>
            <span className="text-bright-gold/75">Tips</span>
            <span className="text-bone/20">+</span>
            <span className="text-demon-red/70">Flips</span>
            <span className="text-bone/20">+</span>
            <span className="text-bone/30">???</span>
          </div>
          <div className="h-px max-w-xs mx-auto mb-6" style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.2), transparent)' }} />
          <p className="font-fell italic text-bone/25 text-base leading-relaxed max-w-md mx-auto">
            Three children born of one divine stumble over one ordinary stone. Two are known and documented. The third is watching.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="relative z-10 py-12 text-center flex flex-wrap gap-5 justify-center">
        <Link href="/lore" className="btn-divine">Read the Sacred Chronicles</Link>
        <Link href="/" className="btn-outline">← Return Home</Link>
      </div>
    </div>
  );
}
