"use client";

import React from 'react';
import { motion } from 'motion/react';
import WaterfallChart from './WaterfallChart';

const ModelSection = () => {
    const wfData = [
        { name: 'Onboarding Fee', val: '£2,000', pct: 100, color: '#1a3a2a' },
        { name: 'Profile Prep', val: 'Included', pct: 20, color: '#b8860b' },
        { name: 'CRM Access', val: 'Included', pct: 20, color: '#b8860b' },
        { name: 'Sales Support', val: 'Included', pct: 30, color: '#b8860b' },
        { name: 'Delivery Infrastructure', val: 'Included', pct: 30, color: '#b8860b' },
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
                        What you build in<br />a <em>9-month horizon</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        The partner track is built on a clear timeline of asset creation. You don't just "freelance" — you build a portfolio of recurring contract value.
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
                        <h3 className="font-serif text-xl font-bold">Month 1–3: Positioning</h3>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            Platform authority and credibility positioning. Internal ecosystem projects establish your initial billing signals and client feedback, allowing faster access to external SME contracts.
                        </p>
                        <h3 className="font-serif text-xl font-bold">Month 3–6: Expansion</h3>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            Multi-platform acquisition expansion. We activate additional channels (Freelancer.com, Guru, PeoplePerHour) to increase deal flow and reduce platform dependency.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="font-serif text-xl font-bold">Month 6–9: Growth</h3>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            Direct SME contract portfolio growth. Outbound infrastructure supports access to high-ticket mandates across the UK, US, Australia, and Middle East.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose font-medium">
                            Target outcome: Up to £100,000 in contracts associated with you. Participant success is contractually supported through structured milestone-gated support.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModelSection;
