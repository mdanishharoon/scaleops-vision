"use client";

import React from 'react';
import { motion } from 'motion/react';

interface WaterfallItem {
    name: string;
    val: string;
    pct: number;
    color: string;
    neg?: boolean;
}

interface WaterfallChartProps {
    items: WaterfallItem[];
}

const WaterfallChart: React.FC<WaterfallChartProps> = ({ items }) => {
    return (
        <div className="w-full space-y-4">
            {items.map((item, idx) => (
                <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className={`text-[12px] md:text-sm tracking-tight ${item.neg ? 'text-[var(--muted)]' : 'text-[var(--ink)]'}`}>
                            {item.name}
                        </span>
                        <span className="font-mono text-[11px] md:text-[13px]" style={{ color: item.neg ? 'var(--red)' : item.pct === 75 ? 'var(--gold)' : 'var(--ink)' }}>
                            {item.val}
                        </span>
                    </div>
                    <div className="h-[9px] bg-[var(--paper)] rounded-[2px] overflow-hidden border border-[var(--rule)]">
                        <motion.div
                            className="h-full rounded-[2px]"
                            style={{ background: item.color, opacity: item.neg ? 0.45 : 1 }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>
                </div>
            ))}
            <div className="text-[12px] text-[var(--muted)] pt-8 border-t border-[var(--rule)] leading-relaxed italic">
                * Platform commissions typically drop from 20% to 10% after initial billing thresholds. Our strategy targets high-value contracts to accelerate this transition, improving margins from month 4 onwards.
            </div>
        </div>
    );
};

export default WaterfallChart;
