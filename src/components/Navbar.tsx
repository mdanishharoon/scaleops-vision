"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 md:px-12 glass">
            <Link href="/" className="font-serif italic text-base md:text-lg text-[var(--ink)] tracking-tight">
                ScaleOps
            </Link>

            <div className="hidden md:flex gap-10">
                {[
                    { name: 'Market', href: '#opportunity' },
                    { name: 'The Model', href: '#model' },
                    { name: 'Growth', href: '#projections' },
                    { name: 'Strategy', href: '#strategy' },
                    { name: 'Returns', href: '#returns' },
                ].map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-[10px] text-[var(--muted)] hover:text-[var(--ink)] tracking-[0.12em] uppercase transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <span className="font-mono text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase">
                Confidential · 2025
            </span>
        </nav>
    );
};

export default Navbar;
