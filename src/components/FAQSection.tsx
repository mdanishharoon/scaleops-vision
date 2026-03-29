"use client";

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        { q: "Do I need an existing Upwork account?", a: "No. New profiles are supported. We assist with positioning and authority creation from day one." },
        { q: "Do I need to perform delivery work?", a: "No. Delivery is handled 100% by our internal operations team. You focus strictly on relationship ownership." },
        { q: "Is £10K/month guaranteed?", a: "It is contractually supported when the required bidding, meeting, and CRM steps are followed consistently." },
        { q: "Do I keep client relationships?", a: "Yes. While operating inside the ecosystem, you remain the primary relationship owner for your portfolio." },
        { q: "How long before direct clients?", a: "Typically within 6–9 months once your platform authority is established." },
        { q: "What services are included?", a: "Bookkeeping, tax, management accounts, financial modeling, outsourced CFO, corporate finance, and compliance." },
    ];

    return (
        <section id="faq" className="py-24 md:py-32">
            <div className="section-wrap">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase mb-3 block">07</span>
                    <div className="w-10 h-0.5 bg-[var(--gold)] mb-7" />
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight mb-4">
                        Objection handling and<br /><em>practicalities</em>.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="border-b border-[var(--rule)] pb-8"
                        >
                            <h3 className="font-serif text-lg font-bold mb-3 flex items-start gap-3">
                                <HelpCircle size={18} className="text-[var(--gold)] mt-1 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-[14px] text-[var(--muted)] leading-loose pl-8">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
