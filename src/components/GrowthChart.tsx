"use client";

import React from 'react';
import { motion } from 'motion/react';

const GrowthChart = () => {
    const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'];
    const revenues = [0, 500, 1500, 2500, 3500, 4500, 6000, 7500, 9000, 9500, 10000, 10500];
    const maxRev = 12000;
    const chartHeight = 140;

    return (
        <div className="w-full">
            <div className="font-mono text-[9px] text-[var(--muted)] tracking-[0.15em] uppercase mb-7">
                Projected monthly revenue · conservative
            </div>
            <div className="flex items-end gap-1.5 h-[140px] border-b border-[var(--rule)] pb-px">
                {revenues.map((r, i) => {
                    const height = (r / maxRev) * chartHeight;
                    return (
                        <div key={i} className="flex-1 flex flex-col items-center group relative">
                            <motion.div
                                className={`w-full rounded-t-[2px] cursor-default transition-colors ${i === 11 ? 'bg-[var(--gold)]' : 'bg-[var(--accent)]'}`}
                                initial={{ height: 0 }}
                                whileInView={{ height }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {r > 0 && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[8.5px] text-[var(--ink)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        ${r >= 1000 ? `${r / 1000}K` : r}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-1.5 mt-1.5">
                {months.map(m => (
                    <div key={m} className="flex-1 text-center font-mono text-[9px] text-[var(--muted)]">
                        {m}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrowthChart;
