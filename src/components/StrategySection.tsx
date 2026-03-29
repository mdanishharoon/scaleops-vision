"use client";

import React from 'react';
import { motion } from 'motion/react';

const StrategySection = () => {
    const points = [
        { num: '01', tag: 'Proposals', title: 'The first two lines win the contract.', body: "Every proposal leads with the client's exact pain point — not a generic introduction. Response rates for this approach average three to five times the platform norm. The scripts are already written. They get deployed and refined with every submission." },
        { num: '02', tag: 'Selection', title: "We don't bid on everything. We bid on the right things.", body: "The target is high-budget, low-competition postings in finance, SaaS, and e-commerce — verticals with the highest lifetime value. We pass on low-margin gigs entirely, even when volume seems tempting in the early months." },
        { num: '03', tag: 'Retention', title: 'Every project is a retainer in disguise.', body: 'One-off contracts are onboarding tools. Success leads to a structured monthly retainer offer. One retained client at $4K per month is worth more than four one-off $1K projects — and it compounds reputation every month.' },
        { num: '04', tag: 'Scale', title: 'At $100K, we leave the platform behind.', body: 'The $100K milestone unlocks elite status and direct credibility with enterprise buyers. The endgame is a direct-contract agency operating with zero platform overhead. The platform is the launchpad — not the destination.' },
    ];

    return (
        <section id="strategy" className="py-24 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">05</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        Four principles that<br />separate us from <em>the field</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Success rewards consistency, credibility, and communication. Most participants optimize for none of these. We engineer for all three from day one.
                    </p>
                </motion.div>

                <div className="space-y-0">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            className="grid md:grid-cols-[100px_1fr] gap-12 py-12 md:py-16 border-t border-[var(--rule)] last:border-b"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                        >
                            <div className="font-serif text-5xl md:text-6xl font-black text-[var(--paper)] leading-none select-none">
                                {point.num}
                            </div>
                            <div className="max-w-[620px]">
                                <div className="font-mono text-[9px] text-[var(--gold)] tracking-[0.2em] uppercase mb-2">{point.tag}</div>
                                <div className="font-serif font-bold text-xl md:text-2xl text-[var(--ink)] mb-3 leading-tight">{point.title}</div>
                                <div className="text-[15px] text-[var(--muted)] leading-loose">{point.body}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
