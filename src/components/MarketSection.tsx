"use client";

import React from 'react';
import { motion } from 'motion/react';
import RingChart from './RingChart';

const MarketSection = () => {
    const ringData = [
        { pct: 0.87, color: '#1a3a2a', label: '$500B+ global market', sub: 'Freelance economy size, 2024', display: '$500B+' },
        { pct: 0.72, color: '#b8860b', label: '$68M processed daily', sub: 'Contracts on platforms per day', display: '$68M' },
        { pct: 0.55, color: '#8b2020', label: 'Top 1% at $100K billed', sub: 'Elite status unlocked', display: 'Top 1%' },
    ];

    return (
        <section id="opportunity" className="py-24 md:py-32">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">01</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        A $500 billion market<br />that rewards <em>execution</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Freelance platforms are not saturated — they are under-optimised. The market processes billions in contracts, and the overwhelming majority of participants are competing on price, not strategy.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            The global freelance economy crossed $500 billion in 2024, driven by a fundamental shift in how companies hire. Businesses of every size — from funded startups to publicly listed firms — now routinely source specialist talent through curated networks rather than building in-house teams.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            The opportunity is not in being the cheapest option in a crowded field. It is in being the most professional, the most responsive, and the most clearly scoped. That is an operational advantage — one that can be engineered from day one.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose font-medium">
                            ScaleOps builds that advantage: a credentialed, reviewed, elite presence, managed with discipline and a clear client acquisition playbook.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {ringData.map((data, i) => (
                            <RingChart key={i} {...data} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketSection;
