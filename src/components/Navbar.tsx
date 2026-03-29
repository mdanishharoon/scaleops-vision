"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Market', href: '#opportunity' },
    { name: 'The Model', href: '#model' },
    { name: 'Growth', href: '#projections' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Returns', href: '#returns' },
];

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-3 left-3 right-3 md:left-6 md:right-6 z-50 flex justify-between items-center px-4 py-2.5 md:px-6 md:py-3 rounded-full border backdrop-blur-md transition-all duration-500 ${
                    scrolled 
                        ? "bg-[#faf8f3]/95 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-[var(--rule)]" 
                        : "bg-[#faf8f3]/80 shadow-none border-[var(--rule)]/30"
                }`}
            >
                <Link href="/" className="font-serif italic text-sm md:text-base text-[var(--ink)] tracking-tight">
                    Veridion
                </Link>

                <div className="hidden lg:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] text-[var(--ink)]/60 hover:text-[var(--ink)] tracking-[0.12em] uppercase transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <span className="hidden md:block font-mono text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase">
                        Confidential · 2025
                    </span>
                    <button 
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden p-1.5 rounded-full hover:bg-[var(--rule)]/30 transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={18} className="text-[var(--ink)]" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: mobileOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed inset-0 z-[60] bg-[var(--ink)]/60 backdrop-blur-sm lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: mobileOpen ? "0%" : "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 bottom-0 w-[280px] z-[70] bg-[var(--paper)] shadow-2xl lg:hidden"
            >
                <div className="flex justify-end p-4">
                    <button 
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-full hover:bg-[var(--rule)]/30 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={20} className="text-[var(--ink)]" />
                    </button>
                </div>
                <nav className="px-6 py-4">
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 text-[15px] text-[var(--ink)] font-medium tracking-tight border-b border-[var(--rule)]/50 hover:text-[var(--gold)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-[var(--rule)]">
                        <div className="font-mono text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase mb-2">
                            Confidential · 2025
                        </div>
                        <p className="text-[12px] text-[var(--muted)] leading-relaxed">
                            Veridion Finance Partner Track
                        </p>
                    </div>
                </nav>
            </motion.div>
        </>
    );
};

export default Navbar;
