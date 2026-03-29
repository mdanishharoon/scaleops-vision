import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[var(--paper2)] border-t border-[var(--rule)] py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] text-[var(--muted)] tracking-wider">
                Veridion Finance — Partner Track · 2025
            </span>
            <span className="text-[10px] text-[var(--muted)] tracking-wider">
                Confidential · All figures are projections
            </span>
        </footer>
    );
};

export default Footer;
