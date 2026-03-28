"use client";

import React from 'react';
import { motion } from 'motion/react';

const DonutChart = () => {
    const data = [
        { label: 'Returned to investor', val: '~$21K', pct: 21, color: '#1a3a2a' },
        { label: 'Operating profit retained', val: '~$63K', pct: 63, color: '#b8860b' },
        { label: 'Platform costs & fees', val: '~$16K', pct: 16, color: '#d8d3c5' },
    ];

    const strokeWidth = 18;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    let currentOffset = 0;

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="relative w-[200px] h-[200px]">
                <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90">
                    {data.map((item, i) => {
                        const strokeDasharray = `${(item.pct / 100) * circumference} ${circumference}`;
                        const strokeDashoffset = -currentOffset;
                        currentOffset += (item.pct / 100) * circumference;

                        return (
                            <motion.circle
                                key={i}
                                cx="100" cy="100" r={radius}
                                fill="none"
                                stroke={item.color}
                                strokeWidth={strokeWidth}
                                strokeLinecap="butt"
                                initial={{ strokeDasharray: `0 ${circumference}` }}
                                whileInView={{ strokeDasharray }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                style={{ strokeDashoffset }}
                            />
                        );
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <div className="font-serif text-2xl font-black leading-none">~$100K</div>
                    <div className="font-mono text-[9px] text-[var(--muted)] mt-1 uppercase tracking-tighter">18-month total</div>
                </div>
            </div>

            <div className="w-full space-y-3">
                {data.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-[var(--rule)] last:border-b-0">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                        <div className="flex-1 text-[13px] text-[var(--ink)]">{item.label}</div>
                        <div className="font-mono text-[12px] text-[var(--muted)]">{item.val}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonutChart;
