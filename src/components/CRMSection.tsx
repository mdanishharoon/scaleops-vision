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
        <section id="crm" className="py-24 md:py-32">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">04</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        Commercial infrastructure<br />built for <em>acquisition velocity</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted)] max-w-[580px] leading-relaxed">
                        Participants operate inside a proprietary CRM environment designed specifically for contract acquisition workflows.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start mt-12">
                    <motion.div
                        className="grid sm:grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {modules.map((module) => (
                            <div key={module} className="flex items-center gap-3 border border-[var(--rule)] p-5 bg-white/50">
                                <Database size={16} className="text-[var(--gold)]" />
                                <span className="text-[14px] text-[var(--ink)] font-medium">{module}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="rounded-[32px] border border-[var(--rule)] bg-[var(--paper2)] p-6 shadow-sm"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-8">
                            <div>
                                <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-2">Deal Velocity</div>
                                <div className="text-4xl font-serif font-bold text-[var(--ink)]">21 Days</div>
                                <p className="text-[13px] text-[var(--muted)] mt-2 italic">Average time from first bid to live conversation.</p>
                            </div>

                            <div className="pt-6 border-t border-[var(--rule)]">
                                <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-4">Pipeline Metrics</div>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Qualified Leads', val: 18 },
                                        { label: 'Proposals Sent', val: 11 },
                                        { label: 'Meetings Booked', val: 7 },
                                    ].map(stat => (
                                        <div key={stat.label}>
                                            <div className="flex justify-between text-[12px] mb-1">
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
