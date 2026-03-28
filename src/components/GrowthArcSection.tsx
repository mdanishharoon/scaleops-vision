"use client";

import React from 'react';
import { motion } from 'motion/react';
import TimelineItem from './TimelineItem';
import GrowthChart from './GrowthChart';

const GrowthArcSection = () => {
    const steps = [
        { phase: 'Months 1 – 3', title: 'Foundation & First Wins', body: 'Profile built, proposal scripts live, bidding active. First 2–3 smaller contracts closed — not for the revenue, but for the reviews. Top status established early.', pill: '$2K – $4K total billed' },
        { phase: 'Months 4 – 6', title: 'First Retainer Locked', body: 'Elite status achieved. First ongoing monthly retainer secured — ideally $3,000–$5,000 per month. Revenue begins covering operating costs. Investment drawdown slows.', pill: '$3K – $5K / month' },
        { phase: 'Months 7 – 12', title: 'Revenue Compounding', body: 'Three to four active retainer clients. Referrals begin. Platform commissions drop as billing history grows. Investment fully recouped by end of this phase.', pill: '$8K – $12K / month' },
        { phase: 'Months 12 – 18', title: 'The Agency Pivot', body: '$100K total billed unlocks ultimate platform status. Direct outreach to companies begins. Platform dependency drops. Contracts become the primary revenue vehicle.', pill: '$100K milestone' },
    ];

    return (
        <section id="projections" className="py-24 md:py-32">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">03</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        From first contract<br />to <em>agency status</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        The model does not rely on a single breakout month. It is built on deliberate compounding — each retainer locked in makes the next one easier to secure.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_320px] gap-20 items-start">
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
