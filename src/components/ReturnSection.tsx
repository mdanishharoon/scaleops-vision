"use client";

import React from 'react';
import { motion } from 'motion/react';
import DonutChart from './DonutChart';

const ReturnSection = () => {
    const [val, setVal] = React.useState(12000);

    const getExactRate = (v: number) => {
        if (v < 5000) return 8;
        if (v >= 5000 && v < 10000) return 15;
        if (v >= 10000 && v < 15000) return 20;
        if (v >= 15000) return 25;
        return 8;
    };

    return (
        <section id="returns" className="py-16 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">08</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-6 md:mb-7" />
                    <h2 className="font-serif text-[1.5rem] md:text-[2rem] lg:text-[3.5rem] font-black leading-[1.1] tracking-tight mb-4">
                        Structured earnings and<br /><em>contractual milestones</em>.
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-start mt-8 md:mt-12">
                    <div className="space-y-8 md:space-y-12">
                        <motion.div
                            className="space-y-4 md:space-y-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { label: '8%', sub: 'Below £5K/mo' },
                                    { label: '15%', sub: '£5K–£10K/mo' },
                                    { label: '20%', sub: '£10K–£15K/mo' },
                                    { label: '25%', sub: 'Above £15K/mo' },
                                    { label: '30%', sub: 'After £15K+ sustained', span: true },
                                ].map((tier) => (
                                    <div key={tier.label} className={`p-3 md:p-4 border border-[var(--rule)] bg-white/40 ${tier.span ? 'col-span-2' : ''}`}>
                                        <div className="font-serif text-xl md:text-2xl font-bold text-[var(--gold)]">{tier.label}</div>
                                        <div className="font-mono text-[8px] md:text-[9px] text-[var(--muted)] uppercase tracking-wider">{tier.sub}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[12px] md:text-[13px] text-[var(--muted)] pt-3 md:pt-4 border-t border-[var(--rule)]">
                                All revenue shares are calculated from the associated contract portfolio handled by the centralized delivery team.
                            </p>
                        </motion.div>

                        <motion.div
                            className="p-5 md:p-8 border border-[var(--rule)] bg-[#fdfaf3]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6">Contractual Guarantee</h3>
                            <p className="text-[13px] md:text-[14px] text-[#3a3830] leading-relaxed mb-4 md:mb-6">
                                Participants who follow the structured process receive a contractual pathway toward reaching £10K/month contract value within 3–6 months.
                            </p>
                            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4">
                                {[
                                    "Follow bidding workflow",
                                    "Attend meetings",
                                    "Maintain consistency",
                                    "Engage with CRM",
                                    "Build relationships",
                                    "Review proposals"
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-2 text-[12px] md:text-[13px] text-[var(--muted)]">
                                        <div className="w-1 h-1 bg-[var(--gold)] rounded-full" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="rounded-[24px] md:rounded-[32px] border border-[var(--rule)] bg-white p-5 md:p-8 shadow-sm lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="mb-6 md:mb-10">
                            <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-2">Earnings Projection</div>
                            <h3 className="font-serif text-xl md:text-2xl font-bold">Commission Calculator</h3>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <div className="flex justify-between mb-3 md:mb-4">
                                    <span className="text-[11px] md:text-[12px] uppercase font-mono tracking-widest text-[var(--muted)]">Portfolio Value</span>
                                    <span className="font-serif text-xl md:text-2xl font-bold text-[var(--ink)]">£{val.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="30000"
                                    step="500"
                                    value={val}
                                    onChange={(e) => setVal(parseInt(e.target.value))}
                                    className="w-full h-1 bg-[var(--rule)] rounded-lg appearance-none cursor-pointer accent-[var(--gold)]"
                                />
                                <div className="flex justify-between mt-2 font-mono text-[8px] md:text-[9px] text-[var(--muted)] uppercase">
                                    <span>£0</span>
                                    <span>£15K</span>
                                    <span>£30K</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-[var(--rule)]">
                                <div>
                                    <div className="text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-[var(--muted)] mb-1">Tier</div>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--gold)]">{getExactRate(val)}%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-[var(--muted)] mb-1">Payout</div>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--ink)]">£{Math.round(val * getExactRate(val) / 100).toLocaleString()}</div>
                                </div>
                            </div>

                            <div className="p-4 md:p-5 bg-[var(--paper2)] border border-[var(--rule)]">
                                <p className="text-[11px] md:text-[12px] text-[var(--muted)] leading-relaxed italic">
                                    "£6,000 portfolio association triggers a 15% tier, resulting in £900/month in partner commission."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReturnSection;
