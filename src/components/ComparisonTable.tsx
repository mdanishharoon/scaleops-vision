"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight } from 'lucide-react';

const ComparisonTable = () => {
    const rows = [
        { label: 'Revenue Upside', emp: 'Fixed / Capped', free: 'Variable', pt: 'High / Scalable' },
        { label: 'Delivery Load', emp: 'Full Time', free: '100% Owner', pt: '0% (Team-led)' },
        { label: 'Portfolio Ownership', emp: 'None', free: 'Partial', pt: 'Full Contract Control' },
        { label: 'Acquisition Support', emp: 'In-house', free: 'Solicited', pt: 'CRM-Guided / Global' },
        { label: 'Platform Status', emp: 'N/A', free: 'Slow Build', pt: 'Accelerated Elite' },
    ];

    return (
        <section className="py-24 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        A model designed for <em className="italic text-[var(--gold)] not-italic serif-italic">leverage</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] mx-auto leading-relaxed">
                        Comparing traditional career paths against the Veridion Finance partner track structure.
                    </p>
                </motion.div>

                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <table className="w-full border-collapse border border-[var(--rule)] bg-white shadow-sm">
                        <thead>
                            <tr className="bg-[var(--ink)] text-[#faf8f3]">
                                <th className="p-6 text-left font-mono text-[10px] uppercase tracking-widest border border-white/10">Dimension</th>
                                <th className="p-6 text-center font-mono text-[10px] uppercase tracking-widest border border-white/10 opacity-60 font-light">Employment</th>
                                <th className="p-6 text-center font-mono text-[10px] uppercase tracking-widest border border-white/10 opacity-60 font-light">Freelancing</th>
                                <th className="p-6 text-center font-mono text-[10px] uppercase tracking-widest border border-white/10 text-[var(--gold-light)]">Partner Track</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx} className="group">
                                    <td className="p-6 text-left font-serif text-[15px] font-bold border border-[var(--rule)] text-[var(--ink)]">{row.label}</td>
                                    <td className="p-6 text-center font-mono text-[12px] text-[var(--muted)] border border-[var(--rule)] bg-[var(--paper)]/30">{row.emp}</td>
                                    <td className="p-6 text-center font-mono text-[12px] text-[var(--muted)] border border-[var(--rule)]bg-[var(--paper)]/30">{row.free}</td>
                                    <td className="p-6 text-center font-mono text-[12px] text-[var(--ink)] font-bold border border-[var(--rule)] bg-[var(--gold-light)]/5">{row.pt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonTable;
