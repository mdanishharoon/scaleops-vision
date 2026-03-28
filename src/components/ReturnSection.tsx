"use client";

import React from 'react';
import { motion } from 'motion/react';
import DonutChart from './DonutChart';

const ReturnSection = () => {
    return (
        <section id="returns" className="py-24 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">06</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        Simple, auditable,<br /><em>accountant-friendly</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        A revenue share arrangement. No equity dilution. No complex cap tables. Monthly transparency, automated billing, and a clear exit point.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_320px] gap-20 items-center mt-12">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            The investor receives 25% of net monthly revenue — revenue after platform fees — for the first twelve months of operation. This drops to 15% from months 13 through 18.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose">
                            Capital return is triggered once the account reaches $50,000 in total billings. At that point, the original $10,000 is returned in full before the revenue share continues.
                        </p>
                        <p className="text-[15px] text-[#3a3830] leading-loose font-medium">
                            At our target projections, the investor's share generates $2,000–$2,500 per month by month 9. Capital is fully returned within the first year. The projected 18-month total return sits between $18,000 and $24,000.
                        </p>
                        <p className="text-[13px] text-[var(--muted)] pt-4 border-t border-[var(--rule)]">
                            All terms are open to discussion. These figures represent a conservative baseline model for ScaleOps.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <DonutChart />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReturnSection;
