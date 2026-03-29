"use client";

import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, Users, Globe, Clock } from 'lucide-react';

const BusinessLabSection = () => {
    return (
        <section id="validation" className="py-24 md:py-32 bg-[var(--ink)] text-[#faf8f3]">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold-light)]/75 tracking-widest uppercase mb-3 block">05</span>
                    <div className="w-10 h-0.5 bg-[var(--gold-light)]/40 mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.05] tracking-tight mb-4 text-[#faf8f3]">
                        Validated through our<br /><em className="italic text-[var(--gold-light)] not-italic serif-italic">Business Lab</em>.
                    </h2>
                    <p className="text-base md:text-lg text-[#faf8f3]/50 max-w-[580px] leading-relaxed">
                        Before opening this pathway publicly, we ran a controlled 12-month internal rollout with eight accounting professionals.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[15px] text-[#faf8f3]/70 leading-loose">
                            Objective: determine whether centralized proposal support, internal credibility projects, and delivery infrastructure could accelerate contract acquisition timelines from years to months.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { label: 'Participants', val: '8 Operators', icon: Users },
                                { label: 'Validation', val: '12 Months', icon: Clock },
                                { label: 'Market Reach', val: '4 Regions', icon: Globe },
                                { label: 'Threshold', val: '£10K+ / mo', icon: BadgeCheck },
                            ].map(item => (
                                <div key={item.label} className="border border-white/10 p-5 bg-white/5">
                                    <item.icon size={18} className="text-[var(--gold-light)] mb-3" />
                                    <div className="font-mono text-[9px] text-[#faf8f3]/40 uppercase tracking-wider">{item.label}</div>
                                    <div className="text-[15px] font-medium text-[#faf8f3]/90 mt-1">{item.val}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="p-8 border border-white/10 bg-white/5 relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-serif text-2xl font-bold mb-6 italic text-[var(--gold-light)]">The validation story</h3>
                        <div className="space-y-6 text-[14px] text-[#faf8f3]/60 leading-relaxed">
                            <p>
                                Participants entered with limited platform history and no structured acquisition systems. By deploying our centralized proposal frameworks and building credibility signals through internal projects, we demonstrated repeatability.
                            </p>
                            <p>
                                Several participants crossed the £10K/month threshold during testing. This formed the foundation for the partner-track rollout now available publicly.
                            </p>
                            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-[var(--gold-light)]/20 flex items-center justify-center text-[var(--gold-light)] font-serif text-xl italic">V</div>
                                <div>
                                    <div className="text-[12px] font-bold text-[#faf8f3]/90">Business Lab Report</div>
                                    <div className="text-[10px] text-[#faf8f3]/40 uppercase tracking-widest font-mono">Confidential PDF · Q1 2025</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BusinessLabSection;
