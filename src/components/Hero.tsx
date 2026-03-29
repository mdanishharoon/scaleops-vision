"use client";

import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-end relative overflow-hidden bg-[#0c0a06]">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.15)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,58,42,0.2)_0%,transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.4) 49px, rgba(255,255,255,0.4) 50px), 
                                   repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.4) 49px, rgba(255,255,255,0.4) 50px)`
                    }}
                />
            </div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(212,160,23,0.3)" strokeWidth="0.5" strokeDasharray="4 6" />
                    <circle cx="100" cy="100" r="120" fill="none" stroke="rgba(212,160,23,0.15)" strokeWidth="0.3" strokeDasharray="2 8" />
                    <circle cx="100" cy="100" r="160" fill="none" stroke="rgba(212,160,23,0.08)" strokeWidth="0.2" strokeDasharray="1 12" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 pb-20 pt-40 text-[#faf8f3]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-mono text-[10px] text-[var(--gold-light)] tracking-[0.3em] uppercase mb-12 flex items-center gap-5"
                    >
                        <span className="w-12 h-px bg-gradient-to-r from-[var(--gold-light)]/0 to-[var(--gold-light)]/60" />
                        Veridion Finance Partner Track · 2025
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-[clamp(2.75rem,6.5vw,5.25rem)] font-black leading-[1.02] tracking-tight mb-10"
                    >
                        Build <span className="text-[var(--gold-light)]">£100K</span> in contract value within 9 months — without doing delivery yourself.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="text-lg md:text-xl font-light text-[#faf8f3]/70 max-w-[620px] leading-relaxed mb-16"
                    >
                        Structured partner track for finance professionals. UK, US, Australia, Middle East.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-y-8 gap-x-12 pt-10 border-t border-white/[0.08]"
                    >
                        {[
                            { label: 'Commitment', val: '£2,000' },
                            { label: 'Time Required', val: '1–4 hours / day' },
                            { label: 'Structure', val: 'Partner Track' },
                            { label: 'Target Portfolio', val: '£100K / 9 months' },
                        ].map((item, idx) => (
                            <React.Fragment key={item.label}>
                                <div className="group">
                                    <div className="text-[10px] text-[#faf8f3]/35 tracking-[0.2em] uppercase mb-2 transition-colors duration-300 group-hover:text-[#faf8f3]/50">{item.label}</div>
                                    <div className="font-mono text-base text-[#faf8f3]/80 font-medium">{item.val}</div>
                                </div>
                                {idx < 3 && <div className="hidden sm:block w-px h-8 bg-white/[0.06]" />}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
