"use client";

import React from 'react';
import { motion } from 'motion/react';

const RiskSection = () => {
    const risks = [
        { num: '01', title: 'Slow early traction', body: "The first 60–90 days are the hardest. The account has no history. Conversion rates will be low initially.", resolve: "The £4,000 commitment supports the launch phase. The timeline can flex by 60 days with no impact on the long-term portfolio target." },
        { num: '02', title: 'Platform fee erosion', body: "Fees are higher on the first £10K billed per client. On smaller early contracts, this is a significant margin hit.", resolve: "The strategy deliberately targets high-value clients to cross the £10K threshold faster, reducing effective rates permanently." },
        { num: '03', title: 'Mid-stage client churn', body: "Losing a major retainer at month 7 or 8 would impact the trajectory, though not the overall plan.", resolve: "By month 6, the goal is 3-4 active retainers. Losing one reduces revenue by 25%, not 100%. The replacement pipeline is always running." },
        { num: '04', title: 'Platform policy shifts', body: "Networks can change terms or restrict bidding. This is a real risk and should not be minimized.", resolve: "Full compliance from day one. Relationships move progressively direct. By month 9, the majority of revenue exists independently of any single platform." },
    ];

    return (
        <section id="risk" className="py-24 md:py-32 bg-[var(--paper)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">07</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        We've stress-tested<br />the <em>uncomfortable</em> scenarios.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Every investment carries risk. Acknowledging them honestly is not weakness. It is the foundation of a credible plan.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {risks.map((risk, idx) => (
                        <motion.div
                            key={idx}
                            className="pt-8 border-t-[3px] border-[var(--red)]"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                        >
                            <div className="font-mono text-[9px] text-[var(--red)] tracking-widest uppercase mb-3 text-red-800">Risk {risk.num}</div>
                            <div className="font-serif font-bold text-lg text-[var(--ink)] mb-3">{risk.title}</div>
                            <div className="text-[14px] text-[var(--muted)] leading-relaxed mb-6">{risk.body}</div>

                            <div className="pt-5 border-t border-green-900/10">
                                <span className="font-mono text-[9px] text-[var(--green)] opacity-60 uppercase mb-1.5 block tracking-widest">Mitigation</span>
                                <div className="text-[14px] text-[var(--green)] leading-relaxed">{risk.resolve}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RiskSection;
