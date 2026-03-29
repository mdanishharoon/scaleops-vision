"use client";

import React from 'react';
import { motion } from 'motion/react';

const ModelSection = () => {
    const milestones = [
        { month: 'Month 1-3', target: '£10K', desc: 'Authority building & initial contracts', active: true },
        { month: 'Month 4-6', target: '£35K', desc: 'Multi-platform expansion', active: true },
        { month: 'Month 7-9', target: '£100K', desc: 'Direct SME portfolio growth', active: true },
    ];

    return (
        <section id="model" className="py-16 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">02</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-6 md:mb-7" />
                    <h2 className="font-serif text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight mb-4">
                        What you build in<br />a <em>9-month horizon</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        The partner track is built on a clear timeline of asset creation. You don't just "freelance" — you build a portfolio of recurring contract value.
                    </p>
                </motion.div>

                {/* Contract Value Growth Timeline */}
                <motion.div
                    className="mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-4 md:space-y-0">
                        {/* Mobile: Vertical timeline */}
                        <div className="md:hidden space-y-4">
                            {milestones.map((m, idx) => (
                                <div key={idx} className="bg-white border border-[var(--rule)] p-5 rounded-lg">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--gold)] text-white text-[10px] font-bold flex items-center justify-center">{idx + 1}</div>
                                        <div className="font-mono text-[9px] text-[var(--gold)] tracking-widest uppercase">{m.month}</div>
                                    </div>
                                    <div className="font-serif text-2xl font-black text-[var(--ink)] mb-1">{m.target}</div>
                                    <div className="text-[12px] text-[var(--muted)]">{m.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Horizontal cards */}
                        <div className="hidden md:grid md:grid-cols-3 gap-6">
                            {milestones.map((m, idx) => (
                                <div key={idx} className="bg-white border border-[var(--rule)] p-6 rounded-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-[var(--gold)] text-white text-xs font-bold flex items-center justify-center">{idx + 1}</div>
                                        <div className="font-mono text-[9px] text-[var(--gold)] tracking-widest uppercase">{m.month}</div>
                                    </div>
                                    <div className="font-serif text-4xl font-black text-[var(--ink)] mb-2">{m.target}</div>
                                    <div className="text-[13px] text-[var(--muted)]">{m.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mt-12 md:mt-20">
                    <motion.div
                        className="space-y-5 md:space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-serif text-lg md:text-xl font-bold">Month 1–3: Positioning</h3>
                        <p className="text-[14px] md:text-[15px] text-[#3a3830] leading-relaxed">
                            Platform authority and credibility positioning. Internal ecosystem projects establish your initial billing signals and client feedback, allowing faster access to external SME contracts.
                        </p>
                        <h3 className="font-serif text-lg md:text-xl font-bold mt-4">Month 3–6: Expansion</h3>
                        <p className="text-[14px] md:text-[15px] text-[#3a3830] leading-relaxed">
                            Multi-platform acquisition expansion. We activate additional channels (Freelancer.com, Guru, PeoplePerHour) to increase deal flow and reduce platform dependency.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-5 md:space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="font-serif text-lg md:text-xl font-bold">Month 6–9: Growth</h3>
                        <p className="text-[14px] md:text-[15px] text-[#3a3830] leading-relaxed">
                            Direct SME contract portfolio growth. Outbound infrastructure supports access to high-ticket mandates across the UK, US, Australia, and Middle East.
                        </p>
                        <p className="text-[14px] md:text-[15px] text-[#3a3830] leading-relaxed font-medium">
                            Target outcome: Up to £100,000 in contracts associated with you. Participant success is contractually supported through structured milestone-gated support.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModelSection;
