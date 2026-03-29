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
                        This is a partner track,<br />not a <em>freelance course</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Most accounting professionals never control the client relationship. They support someone else's portfolio, deliver work behind the scenes, and bill hourly.
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
                            Inside large accounting firms, partners operate differently. They originate relationships, grow portfolios, and expand contract value. Delivery happens through structured internal teams.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            This program follows the same model. You operate as the relationship owner. Our team supports proposal writing, positioning, bidding strategy, and delivery execution behind you.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose font-medium">
                            Veridion Finance builds that advantage: you build relationship ownership and portfolio association, while we handle the operational weight of delivery.
                        </p>

                        <div className="pt-8 border-t border-[var(--rule)]">
                            <div className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-widest mb-6">Partner Identity</div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Not Freelancers', sub: 'Relationship Owners' },
                                    { label: 'Not Trainees', sub: 'Experienced Operators' },
                                    { label: 'Not Employees', sub: 'Scaled Partners' },
                                    { label: 'Build Leverage', sub: 'Recurring Contracts' },
                                ].map(item => (
                                    <div key={item.label}>
                                        <div className="text-[14px] font-bold text-[var(--ink)]">{item.label}</div>
                                        <div className="text-[11px] text-[var(--muted)] uppercase tracking-wider">{item.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
