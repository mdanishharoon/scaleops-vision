"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-4 left-4 right-4 md:left-6 md:right-6 z-50 flex justify-between items-center px-5 py-3 md:px-6 md:py-3 rounded-full border backdrop-blur-md transition-all duration-500 ${
                scrolled 
                    ? "bg-[#faf8f3]/90 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-[var(--rule)]" 
                    : "bg-[#faf8f3]/70 shadow-none border-[var(--rule)]/30"
            }`}
        >
            <Link href="/" className="font-serif italic text-base text-[var(--ink)] tracking-tight">
                Veridion Finance
            </Link>

            <div className="hidden md:flex gap-8">
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
                        className="text-[10px] text-[var(--ink)]/60 hover:text-[var(--ink)] tracking-[0.12em] uppercase transition-colors duration-200"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <span className="font-mono text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase">
                Confidential · 2025
            </span>
        </motion.nav>
    );
};

export default Navbar;
