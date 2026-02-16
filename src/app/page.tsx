import Link from "next/link";
import ImageWithLoader from "@/components/ImageWithLoader";
import HeroSlideshow from "@/components/HeroSlideshow";
import { services, whyChooseUs, stats, projects, clients } from "@/lib/data";
import { heroSlides, serviceImages } from "@/lib/images";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";

export default function HomePage() {
  return (
    <>
      {/* Hero, pictures only as full-width background; text overlaid in gradient zone (nearly right, closely centered) */}
      <section className="relative text-white overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[600px]">
        <ScrollReveal delay={100} className="absolute inset-0 w-full h-full">
          <HeroSlideshow slides={heroSlides} variant="background" />
        </ScrollReveal>
        {/* Text: on small = small + centered; on md+ = in gradient zone (nearly right, closely centered) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start pointer-events-none">
          <div className="pointer-events-auto w-full max-w-[92%] sm:max-w-[88%] md:max-w-[48%] lg:max-w-[42%] px-4 sm:px-6 md:px-0 md:pl-10 md:pr-4 lg:pl-14 xl:pl-20">
            <ScrollReveal className="max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center">
              <p className="text-accent font-medium text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2">
                Onyango Construction Company Limited
              </p>
              <h1 className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold leading-tight mb-1.5 sm:mb-2 md:mb-3 lg:mb-6">
                Building Reliable Infrastructure for the Future
              </h1>
              <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-gray-300 mb-2 sm:mb-3 md:mb-5 lg:mb-10 max-w-full leading-snug md:leading-relaxed">
                We deliver quality construction, civil works, and infrastructure projects with a focus on safety, timelines, and lasting value. Partner with a team you can trust.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center items-center">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3.5 md:py-2.5 text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-dark min-h-[32px] sm:min-h-[36px] md:min-h-[44px] touch-manipulation"
                >
                  Request Appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3.5 md:py-2.5 text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium text-white border border-white/80 rounded-full hover:bg-white hover:text-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-dark min-h-[32px] sm:min-h-[36px] md:min-h-[44px] touch-manipulation"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services overview card container (no hover), service cards keep hover */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 p-5 sm:p-8 lg:p-12">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">Our Services</h2>
              <p className="text-gray-600">
                From building and civil works to roads and maintenance, we offer end-to-end construction solutions.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, i) => {
                const image = serviceImages[service.id];
                return (
                  <ScrollReveal key={service.id} delay={i * 80}>
                    <Link
                      href={`/services#${service.id}`}
                      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative aspect-[4/3] bg-primary-light overflow-hidden">
                        {image ? (
                          <ImageWithLoader
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            placeholderClassName="bg-primary/10"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary">
                            <ServiceIcon name={service.icon} className="w-12 h-12" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-2 right-2 text-white font-semibold text-sm drop-shadow-md">
                          {service.title}
                        </span>
                      </div>
                      <div className="p-4 sm:p-5">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3 group-hover:bg-accent/20 transition-colors">
                          <ServiceIcon name={service.icon} className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary-dark mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.shortDesc}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
            <ScrollReveal className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                View all services
                <span className="ml-1">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us, image left, cards right on large screens */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              Experience, safety, quality, and reliability are the pillars of every project we deliver.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-8 lg:gap-12 xl:gap-16 items-center">
            <ScrollReveal delay={0} className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-primary/10">
                <ImageWithLoader
                  src={heroSlides[0].src}
                  alt={heroSlides[0].alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholderClassName="bg-primary-light"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary-dark/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <p className="font-semibold text-sm sm:text-base">On site, on time</p>
                  <p className="text-white/90 text-xs sm:text-sm">Safety and quality at every step.</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 order-1 lg:order-2">
              {whyChooseUs.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 90}>
                  <div className="text-center p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      <WhyChooseIcon name={item.icon} />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients, logos sliding right to left */}
      <section className="section-padding bg-white overflow-hidden border-y border-gray-100">
        <div className="container-wide">
          <ScrollReveal className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-2">Our Clients</h2>
            <p className="text-gray-600">Trusted by leading organisations</p>
          </ScrollReveal>
          <ClientLogosMarquee clients={clients} />
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-1 sm:mb-2">Featured Projects</h2>
              <p className="text-gray-600">A selection of our completed and ongoing work.</p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors shrink-0"
            >
              View all projects →
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.slice(0, 6).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 70}>
                <Link
                  href="/projects"
                  className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative bg-primary-light overflow-hidden">
                    <ImageWithLoader
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Half-slash gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(15,23,42,0.5) 0%, transparent 50%)",
                        clipPath: "polygon(0 0, 50% 0, 35% 100%, 0 100%)",
                      }}
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-semibold text-primary-dark mt-1 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Client trust, numbers count up when section is in view */}
      <section className="relative section-padding bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithLoader
            src={heroSlides[2].src}
            alt=""
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
            placeholderClassName="bg-primary-dark"
          />
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className="text-center min-w-0"
                numberClassName="text-2xl sm:text-4xl lg:text-5xl mb-1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip with optional supporting image */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50 grid grid-cols-1 lg:grid-cols-[1fr_280px]">
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-center lg:text-left">
              <ScrollReveal>
                <h2 className="text-xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4">
                  Ready to start your project?
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
                  Request an appointment or get in touch and we&apos;ll respond promptly and work with you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center px-4 py-3 sm:py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 min-h-[44px] touch-manipulation"
                  >
                    Request Appointment
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-3 sm:py-2 text-sm font-medium text-primary-dark border border-primary/70 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 min-h-[44px] touch-manipulation"
                  >
                    Contact Us
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[240px] bg-primary/10 hidden sm:block">
              <ImageWithLoader
                src={heroSlides[1].src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 280px"
                placeholderClassName="bg-primary-light"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-gray-50 lg:bg-gradient-to-l lg:via-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Simple inline icons (no external deps)
function ServiceIcon({ name, className: c }: { name: string; className?: string }) {
  const className = c ?? "w-6 h-6";
  switch (name) {
    case "Building":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "Shovel":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "Road":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "Wrench":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

function WhyChooseIcon({ name }: { name: string }) {
  const className = "w-7 h-7";
  switch (name) {
    case "Award":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "Shield":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "CheckCircle":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "Clock":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
}

