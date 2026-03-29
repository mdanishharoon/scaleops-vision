"use client";

import React from 'react';
import { motion } from 'motion/react';
import TimelineItem from './TimelineItem';
import GrowthChart from './GrowthChart';

const GrowthArcSection = () => {
    const steps = [
        { phase: 'Phase 1: Authority', title: 'Authority Creation (Month 1–3)', body: 'Profile positioning, service packaging, and proposal frameworks. Internal ecosystem projects establish elite credibility signals immediately.', pill: 'Target: £10K/mo CV' },
        { phase: 'Phase 2: Expansion', title: 'Multi-Platform Expansion (Month 3–6)', body: 'Activation of Freelancer.com, Guru, and PeoplePerHour. Objective: increase deal flow, reduce platform dependency, and expand visibility.', pill: 'Target: Diversification' },
        { phase: 'Phase 3: Direct', title: 'Direct SME Contracts (Month 6–9)', body: 'Outbound infrastructure activated for UK, US, AU, and ME markets. High-ticket retainers targeted through established authority.', pill: 'Target: £100K Portfolio' },
    ];

    return (
        <section id="projections" className="py-16 md:py-32">
            <div className="section-wrap">
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">03</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-6 md:mb-7" />
                    <h2 className="font-serif text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight mb-4">
                        From first contract<br />to <em>agency status</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        The model does not rely on a single breakout month. It is built on deliberate compounding — each retainer locked in makes the next one easier to secure.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-20 items-start">
                    <div className="space-y-0">
                        {steps.map((step, idx) => (
                            <TimelineItem
                                key={idx}
                                {...step}
                                isFirst={idx === 0}
                                isLast={idx === steps.length - 1}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="lg:pt-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <GrowthChart />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GrowthArcSection;
