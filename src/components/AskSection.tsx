"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const AskSection = () => {
    return (
        <section id="ask" className="py-32 md:py-48 bg-[var(--ink)] text-[#faf8f3]">
            <div className="max-w-[680px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="font-mono text-[10px] text-[var(--gold-light)]/75 tracking-[0.22em] uppercase mb-10 flex items-center justify-center gap-4">
                        <span className="w-7 h-px bg-[var(--gold-light)]/40" />
                        Next intake open
                        <span className="w-7 h-px bg-[var(--gold-light)]/40" />
                    </div>

                    <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tighter mb-10">
                        Apply for the<br />Partner Track.<br /><em className="italic text-[var(--gold-light)] not-italic underline decoration-[var(--gold-light)]/20 underline-offset-8">Intake 04</em>
                    </h2>

                    <p className="text-base md:text-lg text-[#faf8f3]/50 max-w-[480px] mx-auto leading-relaxed mb-14">
                        We are recruiting operators, not observers. Participation requires a £4,000 commitment and 1–4 hours of daily relationship management.
                    </p>

                    <a
                        href="mailto:partners@secureledgerfinancials.com"
                        className="inline-flex items-center gap-3 border border-[var(--gold-light)]/55 text-[var(--gold-light)] font-mono text-[11px] tracking-[0.15em] uppercase py-4 px-10 hover:bg-[var(--gold)] hover:text-[var(--ink)] hover:border-[var(--gold)] transition-all duration-300"
                    >
                        Start Application <ArrowRight size={14} />
                    </a>

                    <p className="font-mono text-[9px] text-[#faf8f3]/20 tracking-wider mt-12">
                        Applications reviewed before onboarding · Minimum commitment £4,000 · Confidential rollout
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AskSection;
