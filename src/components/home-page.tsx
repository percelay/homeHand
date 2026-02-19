"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Droplets,
  Facebook,
  Hammer,
  Leaf,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Square,
  Wrench
} from "lucide-react";

type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
};

type PortfolioItem = {
  title: string;
  service: string;
  image: string;
  description: string;
  size: string;
};

const companyName = "Home & Handy";
const heroHeadline = "Expert Craftsmanship. Reliable Service.";
const heroSubhead =
  "Your trusted partner for home maintenance, remodeling, and landscaping in Bethany, OK.";

const services: Service[] = [
  {
    name: "Maintenance",
    description:
      "Routine repairs, preventive upkeep, and detailed punch-list work that keeps every system running safely.",
    icon: Wrench
  },
  {
    name: "Remodeling",
    description:
      "Kitchen, bath, and interior upgrades delivered with disciplined planning, clean execution, and dependable timelines.",
    icon: Hammer
  },
  {
    name: "Flooring",
    description:
      "Durable floor installations and replacements that improve performance, comfort, and long-term property value.",
    icon: Ruler
  },
  {
    name: "Plumbing",
    description:
      "Fast, code-conscious plumbing support for fixture installs, leak response, and practical system improvements.",
    icon: Droplets
  },
  {
    name: "Drywall",
    description:
      "Seamless drywall patching, finishing, and wall restoration with sharp lines and paint-ready consistency.",
    icon: Square
  },
  {
    name: "Painting",
    description:
      "Interior and exterior paint work with clean prep, premium materials, and high-contrast finishes.",
    icon: Paintbrush
  },
  {
    name: "Landscaping",
    description:
      "Reliable yard transformation services, from seasonal cleanup to curb-appeal upgrades that frame your property.",
    icon: Leaf
  }
];

const portfolioItems: PortfolioItem[] = [
  {
    title: "Preventive Maintenance Program",
    service: "Maintenance",
    image: "/images/2024-01-09.jpg",
    description: "Quarterly maintenance plan with coordinated multi-trade touchpoints.",
    size: "md:col-span-2"
  },
  {
    title: "Open-Plan Remodel",
    service: "Remodeling",
    image: "/images/2024-01-09.png",
    description: "Structural updates and finish work for a brighter, more functional layout.",
    size: "md:row-span-2"
  },
  {
    title: "Premium Floor Refit",
    service: "Flooring",
    image: "/images/2024-01-09%20(1).jpg",
    description: "Full replacement project with durable materials and precision leveling.",
    size: ""
  },
  {
    title: "Kitchen Plumbing Upgrade",
    service: "Plumbing",
    image: "/images/2024-01-09%20(1).png",
    description: "Fixture modernization and line corrections for better daily performance.",
    size: ""
  },
  {
    title: "Drywall Recovery Project",
    service: "Drywall",
    image: "/images/2024-01-09%20(2).png",
    description: "Water-damaged wall repair with clean texture matching and finishing.",
    size: "md:col-span-2"
  },
  {
    title: "Exterior Paint Refresh",
    service: "Painting",
    image: "/images/2024-01-09.jpg",
    description: "High-durability coating system designed for long-term weather resistance.",
    size: ""
  },
  {
    title: "Front Yard Transformation",
    service: "Landscaping",
    image: "/images/2024-01-09.png",
    description: "Hardscape and planting updates that improve curb appeal and flow.",
    size: "md:row-span-2"
  },
  {
    title: "Interior Repaint Sequence",
    service: "Painting",
    image: "/images/2024-01-09%20(1).jpg",
    description: "Room-by-room repaint with strict prep standards and minimal disruption.",
    size: ""
  },
  {
    title: "Drainage and Grading Fix",
    service: "Landscaping",
    image: "/images/2024-01-09%20(2).png",
    description: "Site correction work to protect foundations and preserve landscaping.",
    size: ""
  }
];

const testimonials = [
  {
    quote:
      "Home & Handy responded the same day, scoped the work clearly, and finished our remodel on schedule without cutting corners.",
    name: "Alicia T.",
    project: "Kitchen Remodel, Bethany"
  },
  {
    quote:
      "Their team handled plumbing and drywall repairs quickly after a leak. Communication was direct and the finish quality was excellent.",
    name: "Marcus L.",
    project: "Emergency Repair, Central OK"
  },
  {
    quote:
      "We hired Home & Handy for recurring landscaping. They arrive on time, keep the property sharp, and always follow through.",
    name: "Rebecca S.",
    project: "Seasonal Landscaping Plan"
  },
  {
    quote:
      "From estimate to final walkthrough, everything felt organized and professional. The flooring and paint work transformed the space.",
    name: "Jonathan R.",
    project: "Interior Upgrade Project"
  }
];

const filterOptions = ["All", ...services.map((service) => service.name)];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.service === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative overflow-x-clip bg-bg text-text-main">
      <div className="pointer-events-none absolute -left-32 top-[26rem] h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[74rem] h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="#top"
            className="text-sm font-black tracking-[0.2em] text-white transition-colors duration-200 hover:text-primary"
          >
            {companyName.toUpperCase()}
          </Link>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:flex">
            <Link href="#services" className="transition-colors duration-200 hover:text-primary">
              Services
            </Link>
            <Link href="#portfolio" className="transition-colors duration-200 hover:text-primary">
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              className="transition-colors duration-200 hover:text-primary"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="transition-colors duration-200 hover:text-primary">
              Contact
            </Link>
          </nav>
          <Link
            href="#quote-form"
            className="rounded-sm border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-bg"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative h-screen min-h-[800px] border-b border-white/10">
          <img
            src="/images/hero%20copy.jpeg"
            alt="Home & Handy team at work"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative flex h-full w-full items-end p-6 pb-10 md:p-10 md:pb-12 lg:p-16 lg:pb-16">
            <div className="grid w-full max-w-7xl items-end gap-8 lg:grid-cols-2">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  Bethany, Oklahoma Home Services
                </p>
                <h1 className="text-5xl font-black uppercase leading-[0.9] text-primary sm:text-6xl lg:text-8xl">
                  {heroHeadline}
                </h1>
                <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white sm:text-base">
                  {heroSubhead}
                </p>
              </div>

              <form
                id="quote-form"
                onSubmit={(event) => event.preventDefault()}
                className="w-full rounded-sm border border-white/10 bg-bg/80 p-5 backdrop-blur-sm md:ml-auto md:max-w-md"
              >
                <h2 className="mb-4 text-lg font-black uppercase tracking-[0.1em] text-white">
                  Request a Quote
                </h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-none border border-white/20 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-none border border-white/20 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-primary"
                  />
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full rounded-none border border-white/20 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors duration-200 focus:border-primary"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="details"
                    placeholder="Project details"
                    rows={4}
                    className="w-full rounded-none border border-white/20 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-bg"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Core Services
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
                Precision Work Across Every Critical Trade
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.name}
                    className="group rounded-sm border border-white/10 bg-surface/70 p-6 transition-colors duration-200 hover:border-primary"
                  >
                    <Icon className="h-6 w-6 text-primary transition-colors duration-200 group-hover:text-white" />
                    <h3 className="mt-5 text-lg font-black uppercase tracking-[0.08em] text-white transition-colors duration-200 group-hover:text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="border-b border-white/10 bg-surface/60 px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Selected Projects
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
                Built for Longevity, Delivered with Discipline
              </h2>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-sm border px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-200 ${
                      isActive
                        ? "border-primary bg-primary text-bg"
                        : "border-white/20 text-white hover:border-primary hover:text-primary"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3">
              {filteredPortfolio.map((item) => (
                <article
                  key={`${item.title}-${item.service}`}
                  className={`group relative overflow-hidden rounded-sm border border-white/10 bg-surface ${item.size}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 to-bg/20" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.service}
                    </p>
                    <h3 className="mt-1 text-lg font-black uppercase leading-tight text-white transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-xs leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Client Feedback
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
                Trusted by Homeowners Across Bethany
              </h2>
            </div>
            <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="mb-4 break-inside-avoid rounded-sm border border-white/10 bg-surface/70 p-6"
                >
                  <p className="text-sm leading-relaxed text-white">{item.quote}</p>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-primary">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-text-muted">
                    {item.project}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-black/50 px-6 py-14 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-black uppercase tracking-[0.1em] text-white">
              {companyName}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Residential maintenance, remodeling, and landscaping with dependable communication
              and clean execution.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Bethany, OK 73008
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">Newsletter</h4>
            <p className="mt-3 text-sm text-text-muted">
              Receive project tips and seasonal maintenance reminders.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-sm border border-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-bg"
              >
                Join
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li>
                <a href="#services" className="transition-colors duration-200 hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors duration-200 hover:text-primary">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition-colors duration-200 hover:text-primary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#quote-form" className="transition-colors duration-200 hover:text-primary">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">Legal & Social</h4>
            <ul className="mt-3 space-y-3 text-sm text-text-muted">
              <li>
                <a
                  href="https://www.bbb.org/us/ok/bethany/profile/handyman/home-handy-0995-90116560"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-primary"
                >
                  <ShieldCheck className="h-4 w-4" />
                  BBB Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/HOME-HANDY-100083082985084/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
              <li className="text-xs uppercase tracking-[0.12em] text-text-muted">
                Terms and privacy available on request.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
