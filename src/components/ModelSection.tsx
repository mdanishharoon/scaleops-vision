"use client";

import React from 'react';
import { motion } from 'motion/react';
import WaterfallChart from './WaterfallChart';

const ModelSection = () => {
    const wfData = [
        { name: 'Total investment', val: '$10,000', pct: 100, color: '#1a3a2a' },
        { name: 'Connects & Outreach (6 months)', val: '– $500', pct: 5, color: '#8b2020', neg: true },
        { name: 'Commission buffer', val: '– $1,500', pct: 15, color: '#8b2020', neg: true },
        { name: 'Operating reserve', val: '– $500', pct: 5, color: '#8b2020', neg: true },
        { name: 'Net deployable capital', val: '$7,500', pct: 75, color: '#b8860b' },
    ];

    return (
        <section id="model" className="py-24 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">02</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        How $10,000 becomes<br />a <em>working machine</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Capital is not just spent — it is strategically deployed. Every dollar has a specific purpose, a deployment timeline, and an expected return profile.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <WaterfallChart items={wfData} />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start mt-20">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            Roughly $2,500 is absorbed by operational costs in the first six months — platform fees, bidding credits, and a working reserve. This leaves $7,500 as net deployable capital — the runway that funds client acquisition before revenue becomes self-sustaining.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            Our model rewards efficiency: by targeting fewer, higher-value clients, we minimize platform overhead and maximize the lifetime value of every contract won.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            The breakeven point — the monthly revenue required to cover all costs and begin returning capital — sits between $3,500 and $5,000. Based on target client profiles, this is achievable with just 2-3 anchor clients.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose font-medium">
                            Once breakeven is sustained for 90 consecutive days, the model is considered validated. From that point, every additional client represents pure compounding growth.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModelSection;
