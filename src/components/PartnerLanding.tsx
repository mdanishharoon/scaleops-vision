"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChartColumnBig,
  ChevronRight,
  Clock3,
  Database,
  Globe,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

const portfolioMilestones = [
  { month: "Month 1-3", title: "Platform authority and credibility positioning", value: "Foundation" },
  { month: "Month 3-6", title: "Multi-platform acquisition expansion", value: "Expansion" },
  { month: "Month 6-9", title: "Direct SME contract portfolio growth", value: "Scale" },
];

const commissionTiers = [
  { range: "Below 5K / month", rate: 8, note: "Early portfolio stage" },
  { range: "5K-10K / month", rate: 15, note: "Retainer base forming" },
  { range: "10K-15K / month", rate: 20, note: "Momentum stage" },
  { range: "15K+ / month", rate: 25, note: "Partner-level portfolio" },
  { range: "25K+ / month", rate: 30, note: "Unlocked after sustained expansion" },
];

const roles = [
  "Accountants",
  "Tax advisors",
  "Bookkeepers",
  "Financial analysts",
  "Management accountants",
  "Outsourced CFO consultants",
  "Finance transformation specialists",
];

const regions = [
  { name: "United Kingdom", currency: "GBP", note: "SME finance and tax mandates" },
  { name: "United States", currency: "USD", note: "Higher-ticket monthly retainers" },
  { name: "Australia", currency: "AUD", note: "Bookkeeping and virtual finance ops" },
  { name: "Middle East", currency: "AED", note: "Corporate setup and compliance demand" },
];

const faq = [
  { q: "Do I need an existing Upwork account?", a: "No. New profiles are supported and positioned from the start." },
  { q: "Do I need to perform delivery work?", a: "No. Delivery is handled by the operations team while you own the relationship." },
  { q: "Is 10K per month guaranteed?", a: "The guarantee is contractual when the required bidding, meeting, and CRM steps are followed consistently." },
  { q: "Do I keep client relationships?", a: "Yes. The model is built around relationship ownership inside the VeridionFinance ecosystem." },
  { q: "How long before direct clients?", a: "Typically within month 6 to month 9 once the first platform proof points are established." },
  { q: "What services are included?", a: "Bookkeeping, tax, management accounts, financial modeling, outsourced CFO services, corporate finance, and compliance support." },
];

const crmModules = [
  "Lead Pipeline Dashboard",
  "Proposal Conversion Tracker",
  "Marketplace Bid Monitor",
  "Meeting Preparation System",
  "Relationship Ownership Panel",
  "Delivery Coordination View",
];

function getCommissionRate(value: number) {
  if (value >= 25000) return 30;
  if (value >= 15000) return 25;
  if (value >= 10000) return 20;
  if (value >= 5000) return 15;
  return 8;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PartnerLanding() {
  const [portfolioValue, setPortfolioValue] = useState(12000);

  const intakeDate = useMemo(() => new Date("2026-05-14T09:00:00"), []);
  const now = new Date();
  const msRemaining = Math.max(0, intakeDate.getTime() - now.getTime());
  const daysRemaining = Math.ceil(msRemaining / (1000 * 60 * 60 * 24));
  const slotsRemaining = Math.max(2, Math.min(8, Math.ceil(daysRemaining / 8)));

  const commissionRate = getCommissionRate(portfolioValue);
  const monthlyCommission = (portfolioValue * commissionRate) / 100;

  return (
    <>
      <section id="overview" className="relative overflow-hidden border-b border-[var(--rule)] bg-[radial-gradient(circle_at_top_right,_rgba(184,134,11,0.16),_transparent_28%),linear-gradient(180deg,#faf8f3_0%,#f3efe5_100%)] pt-28 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(184,134,11,0.8),transparent)]" />
        <div className="section-wrap pb-18 md:pb-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--rule)] bg-white/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                VeridionFinance partner track
              </div>
              <h1 className="max-w-[10ch] font-serif text-[clamp(3rem,7vw,6.2rem)] font-black leading-[0.94] tracking-tight text-[var(--ink)]">
                Build 100K in accounting contract value within 9 months.
              </h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-[#433f33] md:text-xl">
                A graphics-led recruitment funnel for accountants, tax professionals, bookkeepers, and finance specialists who want partner-level relationship ownership without doing delivery themselves.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: "Minimum commitment", value: "2,000 GBP" },
                  { label: "Daily time", value: "1-4 hours" },
                  { label: "Target regions", value: "UK / US / AU / ME" },
                  { label: "Delivery model", value: "Ops team handled" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[22px] border border-[var(--rule)] bg-white/78 px-4 py-4 shadow-[0_10px_24px_rgba(17,16,9,0.06)]">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{item.label}</div>
                    <div className="mt-2 text-sm font-medium text-[var(--ink)]">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:-translate-y-0.5">
                  Start application <ArrowRight size={14} />
                </a>
                <a href="#earnings" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/12 bg-white/70 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink)]">
                  View earnings model <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="grid gap-5">
              <div className="rounded-[30px] border border-[var(--rule)] bg-[var(--ink)] p-6 text-white shadow-[0_26px_60px_rgba(17,16,9,0.16)]">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold-light)]/70">9-month portfolio arc</div>
                    <div className="mt-2 font-serif text-2xl font-bold">VeridionFinance growth path</div>
                  </div>
                  <ChartColumnBig className="text-[var(--gold-light)]" size={20} />
                </div>
                <svg viewBox="0 0 360 180" className="w-full overflow-visible">
                  <defs>
                    <linearGradient id="vfArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4a017" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#d4a017" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <path d="M20 146 L75 138 L130 120 L185 94 L240 66 L295 42 L340 24" fill="none" stroke="#d4a017" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 146 L75 138 L130 120 L185 94 L240 66 L295 42 L340 24 L340 160 L20 160 Z" fill="url(#vfArea)" />
                  {[20, 75, 130, 185, 240, 295, 340].map((x, index) => (
                    <g key={x}>
                      <circle cx={x} cy={[146, 138, 120, 94, 66, 42, 24][index]} r="5" fill="#faf8f3" />
                      <circle cx={x} cy={[146, 138, 120, 94, 66, 42, 24][index]} r="3" fill="#d4a017" />
                    </g>
                  ))}
                </svg>
                <div className="mt-4 grid grid-cols-4 gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/56">
                  <span>M1 setup</span>
                  <span>M3 traction</span>
                  <span>M6 expansion</span>
                  <span className="text-right">M9 100K target</span>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[26px] border border-[var(--rule)] bg-white/82 p-5 shadow-[0_12px_28px_rgba(17,16,9,0.06)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Regional access</div>
                    <Globe size={18} className="text-[var(--accent)]" />
                  </div>
                  <div className="space-y-4">
                    {[88, 82, 74, 69].map((score, index) => (
                      <div key={regions[index].name}>
                        <div className="mb-1 flex items-center justify-between text-[13px] text-[var(--ink)]">
                          <span>{regions[index].name}</span>
                          <span className="font-mono text-[11px] text-[var(--muted)]">{score}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[var(--paper2)]">
                          <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--gold))]" style={{ width: `${score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[26px] border border-[var(--rule)] bg-white/82 p-5 shadow-[0_12px_28px_rgba(17,16,9,0.06)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Pipeline snapshot</div>
                    <Database size={18} className="text-[var(--accent)]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["New bids", "42"],
                      ["Active meetings", "11"],
                      ["Proposal win rate", "19%"],
                      ["Tracked opportunities", "128"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[18px] bg-[var(--paper)] px-4 py-4">
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</div>
                        <div className="mt-2 text-2xl font-semibold text-[var(--ink)]">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="model" className="py-20 md:py-24">
        <div className="section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="section-kicker">This is a partner track, not a course</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.04] tracking-tight">
                Relationship ownership first. Delivery handled centrally.
              </h2>
              <p className="mt-5 text-[15px] leading-loose text-[#423d32]">
                Most accounting professionals support someone else&apos;s portfolio, bill hourly, and stay behind the scenes. VeridionFinance is structured more like a firm partner track: you originate relationships, grow contract value, and operate with a delivery team behind you.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Employment",
                  lines: ["Fixed salary", "No portfolio ownership", "Promotion dependent", "Limited upside"],
                },
                {
                  title: "Freelancing",
                  lines: ["Delivery responsibility", "Slow credibility growth", "Platform competition", "Income volatility"],
                },
                {
                  title: "Partner track model",
                  lines: ["Relationship ownership", "Centralized delivery support", "CRM-guided acquisition", "Direct SME pathway"],
                  featured: true,
                },
              ].map((card) => (
                <div key={card.title} className={`rounded-[24px] border p-5 ${card.featured ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--rule)] bg-white"}`}>
                  <div className={`font-serif text-2xl font-bold ${card.featured ? "text-white" : "text-[var(--ink)]"}`}>{card.title}</div>
                  <div className="mt-5 space-y-3">
                    {card.lines.map((line) => (
                      <div key={line} className={`flex items-start gap-3 text-sm ${card.featured ? "text-white/86" : "text-[#464136]"}`}>
                        <span className={`mt-1 h-1.5 w-1.5 rounded-full ${card.featured ? "bg-[var(--gold-light)]" : "bg-[var(--gold)]"}`} />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="rounded-[28px] border border-[var(--rule)] bg-[var(--paper2)] p-6 md:p-8">
              <div className="section-kicker">Partner identity positioning</div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  ["Not freelancers", "Not trainees", "Not employees"],
                  ["Relationship ownership", "Portfolio association", "Recurring contract leverage"],
                  ["Proposal support", "Bidding systems", "Delivery execution"],
                ].map((group, index) => (
                  <div key={index} className="rounded-[20px] bg-white/80 p-4">
                    {group.map((item) => (
                      <div key={item} className="flex items-center gap-3 border-b border-[var(--rule)] py-3 text-sm text-[var(--ink)] last:border-b-0 last:pb-0 first:pt-0">
                        <BadgeCheck size={16} className="text-[var(--gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--rule)] bg-white p-6 shadow-[0_14px_32px_rgba(17,16,9,0.06)]">
              <div className="section-kicker">Commitment snapshot</div>
              <div className="mt-4 space-y-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Onboarding</div>
                  <div className="mt-1 text-3xl font-semibold text-[var(--ink)]">2,000 GBP</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Time required</div>
                  <div className="mt-1 text-xl text-[var(--ink)]">1-4 hours per day</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Included</div>
                  <div className="mt-2 space-y-2 text-sm text-[#464136]">
                    <div>Profile positioning support</div>
                    <div>Proposal infrastructure</div>
                    <div>Sales training and meeting frameworks</div>
                    <div>CRM access and workflow support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="growth" className="border-y border-[var(--rule)] bg-[var(--paper2)] py-20 md:py-24">
        <div className="section-wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-kicker">What you build in 9 months</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.04] tracking-tight">
                From new profile to partner-level contract portfolio.
              </h2>
            </div>
            <div className="max-w-[330px] text-sm leading-relaxed text-[#494438]">
              Participants receive a contractual pathway toward 10K per month contract value within 3 to 6 months when the required process is followed.
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {portfolioMilestones.map((item, index) => (
              <div key={item.month} className="rounded-[28px] border border-[var(--rule)] bg-white p-6 shadow-[0_12px_24px_rgba(17,16,9,0.05)]">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{item.month}</div>
                  <div className="text-[var(--gold)]">0{index + 1}</div>
                </div>
                <div className="mt-5 font-serif text-2xl font-bold text-[var(--ink)]">{item.value}</div>
                <p className="mt-3 text-sm leading-loose text-[#4c473b]">{item.title}</p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--paper2)]">
                  <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--gold))]" style={{ width: `${(index + 1) * 30}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[30px] border border-[var(--accent)] bg-[var(--ink)] p-7 text-white md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="section-kicker !text-[var(--gold-light)]/80">Credibility timeline</div>
                <div className="mt-4 font-serif text-3xl font-bold">The sequence is deliberate.</div>
                <p className="mt-4 text-sm leading-loose text-white/70">
                  Internal credibility projects create billing signals, feedback loops, and ranking improvements so external contract access happens faster.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-5">
                {[
                  ["Month 1", "Profile positioning and proposal framework setup"],
                  ["Month 2", "Client conversations begin and pipeline tracking goes live"],
                  ["Month 3", "Initial recurring contracts begin forming"],
                  ["Month 6", "Multi-platform acquisition is active"],
                  ["Month 9", "Direct SME contracts activated toward 100K"],
                ].map(([month, text]) => (
                  <div key={month} className="rounded-[20px] border border-white/10 bg-white/6 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold-light)]/80">{month}</div>
                    <div className="mt-3 text-sm leading-relaxed text-white/74">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crm" className="py-20 md:py-24">
        <div className="section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="section-kicker">Internal CRM infrastructure</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.06] tracking-tight">
                Commercial infrastructure designed for contract acquisition.
              </h2>
              <p className="mt-5 text-[15px] leading-loose text-[#494338]">
                Participants operate inside a proprietary CRM environment built for proposal tracking, bid-stage monitoring, meeting readiness, deal velocity analytics, relationship ownership, and delivery coordination visibility.
              </p>
              <div className="mt-8 space-y-3">
                {crmModules.map((module) => (
                  <div key={module} className="flex items-center gap-3 rounded-[18px] border border-[var(--rule)] bg-white px-4 py-3 text-sm text-[var(--ink)]">
                    <Database size={16} className="text-[var(--accent)]" />
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--rule)] bg-[linear-gradient(180deg,#fffdf7_0%,#f4efe3_100%)] p-6 shadow-[0_16px_40px_rgba(17,16,9,0.08)]">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[24px] border border-[var(--rule)] bg-white p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Lead pipeline dashboard</div>
                      <div className="mt-1 text-xl font-semibold text-[var(--ink)]">Tracked opportunities</div>
                    </div>
                    <BriefcaseBusiness size={18} className="text-[var(--gold)]" />
                  </div>
                  <div className="space-y-4">
                    {[
                      ["Qualified leads", 18],
                      ["Proposal sent", 11],
                      ["Meeting booked", 7],
                      ["Verbal yes", 4],
                    ].map(([label, value]) => (
                      <div key={label as string}>
                        <div className="mb-1 flex items-center justify-between text-sm text-[var(--ink)]">
                          <span>{label}</span>
                          <span className="font-mono text-[11px] text-[var(--muted)]">{value}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[var(--paper2)]">
                          <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${Number(value) * 5}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[24px] border border-[var(--rule)] bg-[var(--ink)] p-5 text-white">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold-light)]/76">Deal velocity</div>
                    <div className="mt-3 text-4xl font-semibold">21d</div>
                    <div className="mt-2 text-sm text-white/70">Average time from first bid to live conversation.</div>
                  </div>
                  <div className="rounded-[24px] border border-[var(--rule)] bg-white p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Meeting readiness</div>
                    <div className="mt-4 space-y-2 text-sm text-[#4a4539]">
                      <div>Opportunity brief attached</div>
                      <div>Commercial angle prepared</div>
                      <div>Delivery scope aligned</div>
                      <div>Follow-up sequence queued</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="validation" className="border-y border-[var(--rule)] bg-[var(--paper2)] py-20 md:py-24">
        <div className="section-wrap">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-kicker">Validated through our business lab</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.06] tracking-tight">
                The model was tested internally before public rollout.
              </h2>
            </div>
            <p className="max-w-[380px] text-sm leading-relaxed text-[#4c473b]">
              Over 12 months, eight accounting professionals across multiple regions were used to validate proposal infrastructure, internal credibility projects, CRM workflows, and delivery support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-[var(--rule)] bg-white p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Participants", "8"],
                  ["Regions", "4"],
                  ["Validation period", "12 months"],
                  ["Threshold crossed", "10K / month"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[22px] bg-[var(--paper)] p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-[var(--ink)]">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[22px] border border-[var(--rule)] bg-[var(--paper2)] p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Validation objective</div>
                <p className="mt-3 text-sm leading-loose text-[#433f35]">
                  Determine whether centralized proposal support, internal credibility projects, and structured delivery infrastructure could compress contract acquisition timelines from years to months.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--rule)] bg-[var(--ink)] p-6 text-white">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Entered with", "Limited platform history"],
                  ["Introduced", "Proposal and meeting support"],
                  ["Added", "Internal credibility signals"],
                  ["Result", "Repeatable partner-track foundation"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold-light)]/76">{label}</div>
                    <div className="mt-3 font-serif text-2xl font-bold">{value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-loose text-white/72">
                Several participants crossed the 10K per month threshold during testing. That repeatability became the basis of the public VeridionFinance partner-track rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="regions" className="py-20 md:py-24">
        <div className="section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <div className="section-kicker">Who this is designed for</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight">
                Built for commercially motivated finance professionals in target regions.
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {roles.map((role) => (
                  <div key={role} className="rounded-full border border-[var(--rule)] bg-white px-4 py-2 text-sm text-[var(--ink)] shadow-[0_8px_16px_rgba(17,16,9,0.04)]">
                    {role}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[24px] border border-[var(--rule)] bg-[var(--paper2)] p-5 text-sm leading-loose text-[#474238]">
                No prior freelance platform experience required. New accounts are supported. Daily activity centers around reviewing proposals, attending prospect meetings, following bidding workflows, and building client relationships.
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {regions.map((region) => (
                <div key={region.name} className="rounded-[26px] border border-[var(--rule)] bg-white p-6 shadow-[0_12px_24px_rgba(17,16,9,0.05)]">
                  <div className="flex items-center justify-between">
                    <div className="font-serif text-2xl font-bold text-[var(--ink)]">{region.name}</div>
                    <Globe size={18} className="text-[var(--gold)]" />
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Primary currency context: {region.currency}</div>
                  <p className="mt-4 text-sm leading-loose text-[#464136]">{region.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="earnings" className="border-y border-[var(--rule)] bg-[var(--paper2)] py-20 md:py-24">
        <div className="section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="section-kicker">Earnings and guarantee structure</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight">
                Structured commission growth with contractual milestones.
              </h2>
              <p className="mt-5 text-[15px] leading-loose text-[#474236]">
                Participants who follow the bidding workflow, attend meetings, maintain proposal consistency, and actively engage the CRM pipeline receive structured support toward 10K per month contract value within 3 to 6 months.
              </p>
              <div className="mt-8 space-y-4">
                {commissionTiers.map((tier) => (
                  <div key={tier.range} className="rounded-[22px] border border-[var(--rule)] bg-white p-4">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm text-[var(--ink)]">{tier.range}</span>
                      <span className="font-serif text-2xl font-bold text-[var(--accent)]">{tier.rate}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--paper2)]">
                      <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--gold))]" style={{ width: `${tier.rate * 3}%` }} />
                    </div>
                    <div className="mt-2 text-[12px] text-[var(--muted)]">{tier.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--rule)] bg-white p-6 shadow-[0_18px_40px_rgba(17,16,9,0.07)] md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="section-kicker">Earnings projection calculator</div>
                  <div className="mt-2 font-serif text-3xl font-bold text-[var(--ink)]">Monthly commission output</div>
                </div>
                <ChartColumnBig className="text-[var(--gold)]" />
              </div>

              <div className="mt-8 rounded-[24px] bg-[var(--paper2)] p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Monthly contract portfolio value</div>
                <div className="mt-3 font-serif text-4xl font-bold text-[var(--ink)]">{formatCurrency(portfolioValue)}</div>
                <input
                  type="range"
                  min="0"
                  max="30000"
                  step="500"
                  value={portfolioValue}
                  onChange={(event) => setPortfolioValue(Number(event.target.value))}
                  className="mt-6 w-full accent-[var(--accent)]"
                />
                <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  <span>0</span>
                  <span>15K</span>
                  <span>30K</span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-[var(--rule)] bg-[var(--ink)] p-5 text-white">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold-light)]/74">Commission tier</div>
                  <div className="mt-3 text-5xl font-semibold">{commissionRate}%</div>
                  <div className="mt-2 text-sm text-white/70">Applied to current monthly portfolio value.</div>
                </div>
                <div className="rounded-[22px] border border-[var(--rule)] bg-[var(--paper)] p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Projected payout</div>
                  <div className="mt-3 text-4xl font-semibold text-[var(--ink)]">{formatCurrency(monthlyCommission)}</div>
                  <div className="mt-2 text-sm text-[#474136]">Typical long-term partner earnings target: 4K to 9K per month and above.</div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  ["6,000 GBP", "15%", "900 GBP / month"],
                  ["12,000 GBP", "20%", "2,400 GBP / month"],
                  ["18,000 GBP", "25%", "4,500 GBP / month"],
                  ["25,000 GBP", "30%", "7,500 GBP / month"],
                ].map(([value, rate, payout]) => (
                  <div key={value} className="rounded-[18px] border border-[var(--rule)] px-4 py-4 text-sm text-[var(--ink)]">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">{value}</div>
                    <div className="mt-2">{rate} commission tier</div>
                    <div className="mt-1 text-[var(--accent)]">{payout}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-24">
        <div className="section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <div className="section-kicker">Objection handling</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight">
                The practical questions are already built into the model.
              </h2>
              <div className="mt-8 rounded-[28px] border border-[var(--rule)] bg-[var(--ink)] p-6 text-white">
                <div className="section-kicker !text-[var(--gold-light)]/78">Internal credibility projects</div>
                <div className="mt-4 font-serif text-2xl font-bold">Faster proof, stronger profile authority.</div>
                <div className="mt-4 grid gap-3">
                  {[
                    "Billing signals",
                    "Client feedback",
                    "Platform ranking improvement",
                    "Profile authority",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/78">
                      <ShieldCheck size={16} className="text-[var(--gold-light)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {faq.map((item) => (
                <div key={item.q} className="rounded-[24px] border border-[var(--rule)] bg-white p-5 shadow-[0_10px_22px_rgba(17,16,9,0.04)]">
                  <div className="font-serif text-xl font-bold text-[var(--ink)]">{item.q}</div>
                  <p className="mt-3 text-sm leading-loose text-[#4a4539]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="border-t border-[var(--rule)] bg-[var(--ink)] py-20 text-white md:py-24">
        <div className="section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="section-kicker !text-[var(--gold-light)]/78">Apply for the next partner intake</div>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,5vw,4rem)] font-black leading-[0.98] tracking-tight">
                VeridionFinance is recruiting operators, not observers.
              </h2>
              <p className="mt-5 max-w-[50ch] text-[15px] leading-loose text-white/70">
                Applicants should be commercially motivated, relationship-oriented, based in target regions, and able to commit 1 to 4 hours daily. Applications close when capacity is reached.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/12 bg-white/6 p-5">
                  <div className="flex items-center gap-3 text-[var(--gold-light)]"><Clock3 size={18} /> <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Next intake opens</span></div>
                  <div className="mt-4 font-serif text-3xl font-bold">14 May 2026</div>
                  <div className="mt-2 text-sm text-white/66">{daysRemaining} days remaining</div>
                </div>
                <div className="rounded-[24px] border border-white/12 bg-white/6 p-5">
                  <div className="flex items-center gap-3 text-[var(--gold-light)]"><Users size={18} /> <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Remaining partner slots</span></div>
                  <div className="mt-4 font-serif text-3xl font-bold">{slotsRemaining}</div>
                  <div className="mt-2 text-sm text-white/66">Applications close once filled.</div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Full name",
                  "Primary region",
                  "Professional specialism",
                  "Years of finance experience",
                  "LinkedIn or profile link",
                  "Daily time availability",
                ].map((field) => (
                  <div key={field} className="rounded-[18px] border border-white/10 bg-black/10 px-4 py-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{field}</div>
                    <div className="mt-4 text-sm text-white/72">Input field placeholder</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[18px] border border-white/10 bg-black/10 px-4 py-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Why VeridionFinance?</div>
                <div className="mt-4 text-sm text-white/72">Long-form application response field placeholder</div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="mailto:partners@veridionfinance.com" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink)]">
                  Start application <ArrowRight size={14} />
                </a>
                <div className="flex items-center gap-2 text-sm text-white/66">
                  <Handshake size={16} className="text-[var(--gold-light)]" />
                  Minimum onboarding commitment: 2,000 GBP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
