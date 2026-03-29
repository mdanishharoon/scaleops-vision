"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Database, BriefcaseBusiness, ChartColumnBig } from 'lucide-react';

const CRMSection = () => {
    const modules = [
        "Lead Pipeline Dashboard",
        "Proposal Conversion Tracker",
        "Marketplace Bid Monitor",
        "Meeting Preparation System",
        "Relationship Ownership Panel",
        "Delivery Coordination View",
    ];

    return (
        <section id="crm" className="py-16 md:py-32">
            <div className="section-wrap">
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">04</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-6 md:mb-7" />
                    <h2 className="font-serif text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight mb-4">
                        Commercial infrastructure<br />built for <em>acquisition velocity</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Participants operate inside a proprietary CRM environment designed specifically for contract acquisition workflows.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-16 items-start mt-8 md:mt-12">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {modules.map((module) => (
                            <div key={module} className="flex items-center gap-3 border border-[var(--rule)] p-4 bg-white/50">
                                <Database size={14} className="text-[var(--gold)]" />
                                <span className="text-[13px] md:text-[14px] text-[var(--ink)] font-medium">{module}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="rounded-[24px] md:rounded-[32px] border border-[var(--rule)] bg-[var(--paper2)] p-5 md:p-6 shadow-sm"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-2">Deal Velocity</div>
                                <div className="text-3xl md:text-4xl font-serif font-bold text-[var(--ink)]">21 Days</div>
                                <p className="text-[12px] md:text-[13px] text-[var(--muted)] mt-2 italic">Average time from first bid to live conversation.</p>
                            </div>

                            <div className="pt-4 md:pt-6 border-t border-[var(--rule)]">
                                <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-3 md:mb-4">Pipeline Metrics</div>
                                <div className="space-y-3 md:space-y-4">
                                    {[
                                        { label: 'Qualified Leads', val: 18 },
                                        { label: 'Proposals Sent', val: 11 },
                                        { label: 'Meetings Booked', val: 7 },
                                    ].map(stat => (
                                        <div key={stat.label}>
                                            <div className="flex justify-between text-[11px] md:text-[12px] mb-1">
                                                <span>{stat.label}</span>
                                                <span className="font-mono">{stat.val}</span>
                                            </div>
                                            <div className="h-1 bg-[var(--rule)] rounded-full overflow-hidden">
                                                <div className="h-full bg-[var(--accent)]" style={{ width: `${(stat.val / 20) * 100}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CRMSection;
