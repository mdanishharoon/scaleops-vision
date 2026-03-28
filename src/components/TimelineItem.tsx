"use client";

import React from 'react';
import { motion } from 'motion/react';

interface TimelineItemProps {
    phase: string;
    title: string;
    body: string;
    pill: string;
    isFirst?: boolean;
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ phase, title, body, pill, isFirst, isLast }) => {
    return (
        <div className="relative grid grid-cols-[44px_1fr] gap-6 mb-12 last:mb-0">
            <div className="flex flex-col items-center pt-1.5">
                <motion.div
                    className={`w-[9px] h-[9px] rounded-full border-2 border-[var(--gold)] z-10 ${isFirst ? 'bg-[var(--gold)]' : 'bg-[var(--paper2)]'}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                />
                {!isLast && (
                    <div className="absolute top-[28px] bottom-[-20px] w-px bg-[var(--rule)]" />
                )}
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <div className="font-mono text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase mb-1">{phase}</div>
                <div className="font-serif font-bold text-lg text-[var(--ink)] mb-1.5">{title}</div>
                <div className="text-[14px] text-[var(--muted)] leading-relaxed mb-3">{body}</div>
                <div className="inline-flex items-center px-3 py-1 bg-[var(--accent)] text-[#faf8f3] font-mono text-[10px] tracking-wider uppercase">
                    {pill}
                </div>
            </motion.div>
        </div>
    );
};

export default TimelineItem;
