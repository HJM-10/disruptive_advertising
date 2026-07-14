"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  LineChart,
  Menu,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X
} from "lucide-react";
import { FormEvent, useState } from "react";

const logoNames = [
  "GUITAR CENTER",
  "PENNYMAC",
  "INSTRUCTURE",
  "ARENA",
  "PROCURIFY",
  "ADOBE",
  "FIRST LITE",
  "LITTER ROBOT",
  "KPMG",
  "CONOCO"
];

const serviceColumns = [
  {
    title: "What We Do",
    items: ["All Services", "Paid Search", "Paid Social", "SEO", "Amazon", "Lifecycle Marketing", "CRO", "Creative", "Data Analytics"]
  },
  {
    title: "Who We Help",
    items: ["B2B", "B2C", "eCommerce", "Local", "SaaS", "Online Education", "High AOV Brands"]
  },
  {
    title: "Who We Are",
    items: ["About Us", "Why Disruptive", "Meet Our Team", "Our Mission", "Giving Back", "Careers"]
  }
];

const proofStats = [
  ["4.8", "Average rating from hundreds of public reviews"],
  ["90+", "Long-term clients partnered for four or more years"],
  ["160+", "Specialists aligned around measurable growth"],
  ["#145", "Recognized on a major fastest-growing company list"],
  ["$450M+", "Annual managed media spend across client accounts"]
];

const values = [
  ["Authenticity", "Partner with brands and marketers whose goals are clear and honest."],
  ["Top Talent", "Match each account with senior specialists across the growth stack."],
  ["Strategy", "Tie every channel decision to margin, lead quality, and revenue."],
  ["Breakthroughs", "Test creative, landing pages, audiences, and offers until waste drops."],
  ["Exclusivity", "Stay selective so every client gets the attention growth demands."]
];

const timeline = [
  ["Initial Discovery", "A fast look at goals, budget, channels, and current blockers."],
  ["Audit Review", "Waste, leakage, and underused opportunity are mapped clearly."],
  ["Mutual Fit", "Both teams confirm expectations, targets, and operating rhythm."],
  ["Impact Check-In", "Early wins and risks are reviewed before scaling further."],
  ["Strategy Workshop", "Channel owners align on creative, media, CRO, and analytics."],
  ["Ongoing Growth", "Weekly testing and transparent reporting keep momentum visible."]
];

const testimonials = [
  {
    name: "Marketing Director",
    company: "B2B Software Brand",
    quote:
      "The audit made our wasted spend painfully obvious, but the plan was calm, practical, and immediately useful."
  },
  {
    name: "Founder",
    company: "eCommerce Retailer",
    quote:
      "They moved beyond clicks and helped us understand which campaigns were actually creating profitable customers."
  },
  {
    name: "Growth Lead",
    company: "Local Services Group",
    quote:
      "The communication rhythm felt senior from week one. We always knew what was being tested and why."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  async function submitAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    setFormStatus("Sending...");
    const response = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    setFormStatus(data.message);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Disruptive Advertising home">
          <span className="brand-mark">D</span>
          <span>Disruptive Advertising</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {serviceColumns.map((column) => (
            <div className="nav-item" key={column.title}>
              <button type="button">
                {column.title}
                <ChevronDown size={15} />
              </button>
              <div className="mega-menu">
                <strong>{column.title}</strong>
                {column.items.map((item) => (
                  <a href="#services" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a href="#results">Results</a>
          <a href="#resources">Resources</a>
          <a className="nav-cta" href="#audit">
            Let's Talk
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Top reviewed agency in the USA | No-strings-attached audit</p>
          <h1>Most marketing budgets are wasted. Let&apos;s fix that.</h1>
          <p>
            Get a clear look at the channels, offers, landing pages, and tracking gaps quietly
            draining your growth budget.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#audit">
              Get Your Free Marketing Audit
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#results">
              See Results
            </a>
          </div>
        </div>
        <div className="hero-card" aria-label="Audit summary preview">
          <span>Audit Preview</span>
          <strong>76%</strong>
          <p>Average budget waste found in underperforming accounts.</p>
          <div className="mini-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Representative client logos">
        <div className="logo-track">
          {[...logoNames, ...logoNames].map((name, index) => (
            <span key={`${name}-${index}`}>{name}</span>
          ))}
        </div>
      </section>

      <section className="reviews section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">Loved by business owners and marketers</p>
          <h2>What marketers say about Disruptive</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.company}>
              <MessageSquareQuote size={28} />
              <p>&quot;{item.quote}&quot;</p>
              <strong>{item.name}</strong>
              <span>{item.company}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-band" id="results">
        {proofStats.map(([number, label]) => (
          <div className="stat" key={number}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="guarantee section-pad">
        <div className="split">
          <div>
            <p className="eyebrow">Risk-free guarantee</p>
            <h2>Get results in 90 days or you do not pay.</h2>
            <p>
              The first step is a clear audit: what is working, what is leaking money, and where
              the fastest measurable improvements are hiding.
            </p>
            <a className="primary-button" href="#audit">
              Get Your Free Marketing Audit
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="rating-panel">
            <div className="stars">★★★★★</div>
            <strong>Hundreds of five-star review signals</strong>
            <p>
              A recreated review widget with the same proof-driven role as the original page,
              built with fresh visual treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="agency section-pad" id="services">
        <div className="section-heading">
          <p className="eyebrow">Over $450M in annual managed ad spend</p>
          <h2>Meet a performance marketing team built around accountable growth.</h2>
          <p>
            Strategy, media, creative, lifecycle, CRO, and analytics are brought together so every
            channel can be judged by the same commercial scoreboard.
          </p>
        </div>
        <div className="value-grid">
          {values.map(([title, description], index) => {
            const icons = [ShieldCheck, Users, Target, Sparkles, CheckCircle2];
            const Icon = icons[index];
            return (
              <article className="value-card" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="selective section-pad">
        <div className="selective-image" aria-label="Marketing team workshop" />
        <div className="selective-copy">
          <p className="eyebrow">Most agencies say yes to everyone. We do not.</p>
          <h2>Only taking on 10 new clients this month.</h2>
          <p>
            After thousands of audits and billions in tracked spend, fit matters. The best
            partnerships start with a practical plan before any contract is discussed.
          </p>
          <a className="primary-button" href="#audit">
            Reserve Your Audit
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="timeline section-pad">
        <div className="section-heading centered">
          <h2>New client timeline to success</h2>
        </div>
        <div className="timeline-grid">
          {timeline.map(([title, description], index) => (
            <article className="timeline-step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="growth section-pad">
        <div>
          <h2>What is slowing down your growth?</h2>
          <p>
            The audit gives you a concrete view of what to keep, what to cut, and what to test next
            across paid media, landing pages, lifecycle flows, and attribution.
          </p>
        </div>
        <div className="growth-stack">
          <div>
            <Search size={24} />
            Channel leakage
          </div>
          <div>
            <LineChart size={24} />
            Conversion lift
          </div>
          <div>
            <BarChart3 size={24} />
            Reporting clarity
          </div>
        </div>
      </section>

      <section className="audiences section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">For business owners and marketers</p>
          <h2>The right partner for teams that need momentum.</h2>
        </div>
        <div className="audience-grid">
          <article>
            <h3>For Business Owners</h3>
            <ul>
              <li>Receive a focused strategy to get revenue growth moving again.</li>
              <li>Solve urgent marketing challenges with senior channel ownership.</li>
              <li>Stop hiring, firing, and managing isolated marketing roles.</li>
            </ul>
          </article>
          <article>
            <h3>For Marketers</h3>
            <ul>
              <li>Improve performance without rebuilding your team from scratch.</li>
              <li>Look sharper internally with clear reporting and next steps.</li>
              <li>Focus on your best work while specialists cover the gaps.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="success section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">#1 most reviewed agency style proof</p>
          <h2>Helping marketers hit the goals that matter.</h2>
        </div>
        <div className="portrait-row">
          {["USA Clean", "Panda Windows", "Little Adventures", "Smarty", "Sunline", "Phone Ninjas"].map(
            (name, index) => (
              <div className="portrait" key={name}>
                <span>{name}</span>
                <i>{index + 1}</i>
              </div>
            )
          )}
        </div>
      </section>

      <section className="audit section-pad" id="audit">
        <div className="audit-copy">
          <p className="eyebrow">Let&apos;s do this</p>
          <h2>Get a free marketing audit.</h2>
          <p>
            Share a few details and the Next.js backend route will validate and return a realistic
            confirmation, ready to connect to email or a CRM later.
          </p>
        </div>
        <form className="audit-form" onSubmit={submitAudit}>
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Business email
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Company
            <input name="company" placeholder="Company name" required />
          </label>
          <label>
            Monthly media spend
            <select name="spend" defaultValue="$25k-$50k">
              <option>$0-$25k</option>
              <option>$25k-$50k</option>
              <option>$50k-$100k</option>
              <option>$100k+</option>
            </select>
          </label>
          <button className="primary-button" type="submit">
            Submit Audit Request
            <TrendingUp size={18} />
          </button>
          <p className="form-status" role="status">
            {formStatus}
          </p>
        </form>
      </section>

      <footer className="footer" id="resources">
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">D</span>
            <span>Disruptive Advertising</span>
          </a>
          <p>(877) 956-7510</p>
          <p>Educational Next.js recreation for coursework.</p>
        </div>
        <div className="footer-links">
          {serviceColumns.map((column) => (
            <div key={column.title}>
              <strong>{column.title}</strong>
              {column.items.slice(0, 6).map((item) => (
                <a href="#services" key={item}>
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
