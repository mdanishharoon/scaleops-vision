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
        <section className="py-16 md:py-32 bg-[var(--paper2)]">
            <div className="section-wrap">
                <motion.div
                    className="mb-10 md:mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight mb-4">
                        A model designed for <em className="italic text-[var(--gold)] not-italic serif-italic">leverage</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] mx-auto leading-relaxed">
                        Comparing traditional career paths against the Secure Ledger Financials partner track structure.
                    </p>
                </motion.div>

                {/* Mobile: Card Layout */}
                <div className="md:hidden space-y-4">
                    {rows.map((row, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-lg p-4 shadow-sm border border-[var(--rule)]"
                        >
                            <div className="font-serif text-[14px] font-bold text-[var(--ink)] mb-3">{row.label}</div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div>
                                    <div className="text-[9px] text-[var(--muted)] uppercase tracking-wider mb-1">Employment</div>
                                    <div className="text-[11px] text-[var(--muted)]">{row.emp}</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-[var(--muted)] uppercase tracking-wider mb-1">Freelance</div>
                                    <div className="text-[11px] text-[var(--muted)]">{row.free}</div>
                                </div>
                                <div className="bg-[var(--gold-light)]/10 -mx-4 px-4 rounded">
                                    <div className="text-[9px] text-[var(--gold)] uppercase tracking-wider mb-1">Partner</div>
                                    <div className="text-[11px] font-bold text-[var(--ink)]">{row.pt}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: Table Layout */}
                <motion.div
                    className="hidden md:block overflow-x-auto"
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
