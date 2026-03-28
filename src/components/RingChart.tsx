"use client";

import React from 'react';
import { motion } from 'motion/react';

interface RingChartProps {
    pct: number;
    color: string;
    label: string;
    sub: string;
    display: string;
}

const RingChart: React.FC<RingChartProps> = ({ pct, color, label, sub, display }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex items-center gap-6">
            <div className="relative w-[72px] h-[72px] flex-shrink-0">
                <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
                    <circle
                        cx="36" cy="36" r={radius}
                        fill="none"
                        stroke="#e8e4da"
                        strokeWidth="5"
                    />
                    <motion.circle
                        cx="36" cy="36" r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: `0 ${circumference}` }}
                        whileInView={{ strokeDasharray: `${circumference * pct} ${circumference}` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[10px] font-medium text-center leading-none" style={{ color }}>
                        {display}
                    </span>
                </div>
            </div>
            <div>
                <div className="font-serif font-bold text-base text-[var(--ink)] leading-tight mb-1">{label}</div>
                <div className="text-[12px] text-[var(--muted)] leading-tight">{sub}</div>
            </div>
        </div>
    );
};

export default RingChart;
