"use client";

import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-end relative overflow-hidden bg-[var(--ink)]">
            {/* Texture Layer */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px), 
                               repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px)`
                }}
            />

            <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 pb-20 pt-40 text-[#faf8f3]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="font-mono text-[10px] text-[var(--gold-light)]/85 tracking-[0.25em] uppercase mb-10 flex items-center gap-4">
                        <span className="w-8 h-px bg-[var(--gold-light)]/60" />
                        Private Investment Memorandum · 2025
                    </div>

                    <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight mb-10">
                        One account.<br />
                        One strategy.<br />
                        <em className="italic text-[var(--gold-light)] not-italic serif-italic">One outcome.</em>
                    </h1>

                    <p className="text-lg md:text-xl font-light text-[#faf8f3]/60 max-w-[560px] leading-relaxed mb-16">
                        A structured, 18-month plan to build a top-rated presence — and convert it into a self-sustaining agency. Starting capital: $10,000. No equity. No ambiguity.
                    </p>

                    <div className="flex flex-wrap items-center gap-y-8 gap-x-12 pt-8 border-t border-white/10">
                        {[
                            { label: 'Investment', val: '$10,000' },
                            { label: 'Horizon', val: '18 months' },
                            { label: 'Structure', val: 'Revenue share' },
                            { label: 'Target at scale', val: '$10K+ / month' },
                        ].map((item, idx) => (
                            <React.Fragment key={item.label}>
                                <div>
                                    <div className="text-[11px] text-[#faf8f3]/40 tracking-widest uppercase mb-1">{item.label}</div>
                                    <div className="font-mono text-sm text-[#faf8f3]/70">{item.val}</div>
                                </div>
                                {idx < 3 && <div className="hidden sm:block w-px h-7 bg-white/10" />}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
