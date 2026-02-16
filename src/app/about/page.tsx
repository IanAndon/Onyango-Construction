import type { Metadata } from "next";
import { stats } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import { heroSlides } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Onyango Construction Company Limited, our mission, vision, values, and commitment to safety, quality, and timelines.",
};

const values = [
  { title: "Integrity", icon: "Integrity", desc: "We act honestly and transparently in every project and relationship." },
  { title: "Excellence", icon: "Excellence", desc: "We strive for the highest standards in delivery and workmanship." },
  { title: "Safety First", icon: "Safety", desc: "The wellbeing of our team and communities is non-negotiable." },
  { title: "Partnership", icon: "Partnership", desc: "We work alongside clients and stakeholders as trusted partners." },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero / Page header with image and gradient */}
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[3fr_2.4fr] gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left: copy */}
          <ScrollReveal className="max-w-2xl min-w-0">
            <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">
              About Onyango Construction
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight">
              Building infrastructure and relationships that last.
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8">
              We are a Tanzanian-owned construction and engineering company delivering complex projects with precision,
              safety, and integrity across Mbeya and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-sm">
              <div className="flex items-start gap-3 min-w-0">
                <div className="mt-0.5 sm:mt-1 h-8 w-8 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-semibold">5+</span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Years of experience</p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Delivering commercial, residential, and public sector projects on time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 min-w-0">
                <div className="mt-0.5 sm:mt-1 h-8 w-8 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-semibold">Quality</span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Safety &amp; compliance</p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Robust HSE practices aligned with local regulations and global standards.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: image card */}
          <ScrollReveal delay={120} className="relative min-w-0">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-primary/40">
              <ImageWithLoader
                src={heroSlides[0].src}
                alt={heroSlides[0].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                placeholderClassName="bg-primary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 via-primary-dark/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                <div className="min-w-0">
                  <p className="font-semibold">Civil &amp; building works</p>
                  <p className="text-gray-200 text-[11px] sm:text-xs">
                    Foundations, superstructures, finishes, and infrastructure.
                  </p>
                </div>
                <div className="flex flex-col sm:items-end sm:text-right">
                  <span className="text-accent font-semibold text-sm">Mbeya, Tanzania</span>
                  <span className="text-gray-300 text-[11px]">On-site project coordination</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company overview with imagery */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-[3fr_2.4fr] gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Text */}
          <ScrollReveal className="max-w-2xl min-w-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark mb-3 sm:mb-6">Company Overview</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 lg:mb-6">
              Onyango Construction Company Limited is a full-service construction and engineering partner delivering
              building construction, civil works, road and infrastructure, and renovation and maintenance projects.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 lg:mb-6">
              Our multidisciplinary teams bring together engineers, project managers, quantity surveyors, and skilled
              craftspeople. We combine local knowledge with best-practice project controls to deliver work that is safe,
              durable, and cost-effective.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              From early design coordination through to handover and maintenance, we focus on open communication,
              transparent reporting, and long-term relationships with clients, consultants, and suppliers.
            </p>
          </ScrollReveal>

          {/* Image collage */}
          <ScrollReveal delay={80} className="relative w-full max-w-xl mx-auto min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 shadow-md bg-primary/10">
                <ImageWithLoader
                  src={heroSlides[1].src}
                  alt={heroSlides[1].alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 20vw, 260px"
                  placeholderClassName="bg-primary-light"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 sm:translate-y-4 lg:translate-y-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 shadow-md bg-primary/10">
                  <ImageWithLoader
                    src={heroSlides[2].src}
                    alt={heroSlides[2].alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 20vw, 260px"
                    placeholderClassName="bg-primary-light"
                  />
                </div>
                <div className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm min-w-0">
                  <p className="font-semibold text-primary-dark mb-1">Trusted, hands-on leadership</p>
                  <p className="text-gray-600">
                    Our project managers and site engineers are present on site, coordinating works, quality checks, and
                    stakeholder communication every day.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <ScrollReveal delay={0}>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To deliver high-quality, safe, and sustainable construction and infrastructure solutions that meet our clients&apos; needs and contribute to economic and social development.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To be a leading construction and engineering partner known for reliability, innovation, and lasting impact in every project we undertake.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-6 sm:mb-8">Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow min-w-0">
                  <div className="mb-3 sm:mb-4">
                    <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/10 text-accent">
                      <ValueIcon name={v.icon} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Stats, numbers count up when section is in view */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-wide">
          <ScrollReveal className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold">Our Track Record</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className="text-center min-w-0 px-1 sm:px-0"
                numberClassName="text-xl sm:text-2xl md:text-4xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-4xl min-w-0">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">Our Commitment</h2>
            <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3 min-w-0">
                <span className="text-accent font-bold shrink-0">Safety:</span>
                <span>We maintain rigorous safety protocols and training so every project is completed without compromise to people or the environment.</span>
              </li>
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3 min-w-0">
                <span className="text-accent font-bold shrink-0">Quality:</span>
                <span>We use quality materials and skilled workmanship, with clear warranties and follow-up where needed.</span>
              </li>
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3 min-w-0">
                <span className="text-accent font-bold shrink-0">Timelines:</span>
                <span>We plan carefully and communicate openly so we meet agreed schedules and keep you informed throughout.</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function ValueIcon({ name }: { name: (typeof values)[number]["icon"] }) {
  const className = "w-5 h-5 sm:w-6 sm:h-6";
  switch (name) {
    case "Integrity":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.5l7 3.11v4.26c0 3.46-2.4 6.6-7 8.63-4.6-2.03-7-5.17-7-8.63V7.61L12 4.5z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 12.5l2 2 3-4" />
        </svg>
      );
    case "Excellence":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3l2.09 4.24 4.68.68-3.39 3.3.8 4.65L12 14.77 7.82 15.9l.8-4.65-3.39-3.3 4.68-.68z"
          />
        </svg>
      );
    case "Safety":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.5l7 3.11v4.39c0 3.02-1.96 5.87-7 7.75-5.04-1.88-7-4.73-7-7.75V7.61L12 4.5z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11.5h4M12 9.5v4" />
        </svg>
      );
    case "Partnership":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0zM3 21v-1a4 4 0 014-4h1m8 0h1a4 4 0 014 4v1M9 17l2.5-2.5a1.5 1.5 0 012 0L16 17M9 21l3-3 3 3"
          />
        </svg>
      );
    default:
      return null;
  }
}
