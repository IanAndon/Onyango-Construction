import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";
import { heroSlides, serviceImages } from "@/lib/images";
import ScrollReveal from "@/components/ScrollReveal";
import ImageWithLoader from "@/components/ImageWithLoader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Building construction, civil works, Building materials supply & infrastructure, renovation & maintenance. Full-service construction solutions from Onyango Construction.",
};

function ServiceIcon({ name, className = "w-8 h-8" }: { name: string; className?: string }) {
  const c = className;
  switch (name) {
    case "Building":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "Shovel":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "Road":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "Wrench":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero with image and gradient */}
      <section className="relative overflow-hidden bg-primary-dark text-white min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={heroSlides[1].src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-80" />
        </div>
        <div className="container-wide relative z-10 py-16 sm:py-20 lg:py-24">
          <ScrollReveal className="max-w-2xl">
            <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">
              What we do
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Our Services
            </h1>
            <p className="text-gray-200 text-sm sm:text-base">
              End-to-end construction and engineering, from buildings and civil works to roads, infrastructure, and maintenance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services at a glance, visual strip with pictures */}
      <section className="section-padding bg-gray-50 border-b border-gray-100">
        <div className="container-wide">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">
              Full range
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3">
              What we offer
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              From new builds to civil works,supply building materials and maintenance, you have one partner for your entire project.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, i) => {
              const image = serviceImages[service.id];
              return (
                <ScrollReveal key={service.id} delay={i * 60}>
                  <a
                    href={`#${service.id}`}
                    className="group block rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      {image ? (
                        <ImageWithLoader
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          placeholderClassName="bg-primary-light"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary">
                          <ServiceIcon name={service.icon} className="w-12 h-12" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm font-bold shadow">
                        {i + 1}
                      </span>
                      <span className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm drop-shadow">
                        {service.title}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 group-hover:text-primary-dark transition-colors">
                        {service.shortDesc}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-accent text-xs font-medium group-hover:gap-2 transition-all">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services list with alternating image left/right, advanced layout */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal className="mb-12 sm:mb-16">
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">
              In detail
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
              Explore each service area below to see the scope, benefits, and how we deliver.
            </p>
          </ScrollReveal>
          <div className="space-y-16 sm:space-y-24 lg:space-y-28">
            {services.map((service, i) => {
              const image = serviceImages[service.id];
              const imageFirst = i % 2 === 0;
              return (
                <ScrollReveal key={service.id} delay={i * 50}>
                  <article
                    id={service.id}
                    className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-w-0"
                  >
                    {/* Image block */}
                    <div className={`relative ${!imageFirst ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden border border-gray-200/80 shadow-lg bg-gray-100">
                        {image ? (
                          <ImageWithLoader
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            placeholderClassName="bg-primary-light"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary">
                            <ServiceIcon name={service.icon} className="w-16 h-16 sm:w-20 sm:h-20" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary-dark shadow-sm">
                            <ServiceIcon name={service.icon} className="w-4 h-4 text-accent" />
                            {service.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content block */}
                    <div className={`flex flex-col justify-center ${!imageFirst ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4 sm:mb-5">
                        <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-accent text-white text-sm font-bold shadow-sm">
                          {i + 1}
                        </span>
                        <div className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 text-accent items-center justify-center">
                          <ServiceIcon name={service.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark mb-2 sm:mb-3">
                        {service.title}
                      </h2>
                      <p className="text-accent font-medium text-sm sm:text-base mb-3 sm:mb-4">
                        {service.shortDesc}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      <div>
                        <p className="text-xs font-semibold text-primary-dark uppercase tracking-wider mb-2 sm:mb-3">
                          Benefits
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {service.benefits.map((b) => (
                            <li
                              key={b}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium border border-gray-200/80"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center rounded-2xl bg-primary-dark/5 border border-primary/10 p-8 sm:p-10">
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2 sm:mb-3">
                Ready to discuss your project?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Tell us your requirements and we&apos;ll propose a scope, timeline, and approach tailored to you.
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 min-h-[44px] touch-manipulation"
              >
                Request Appointment
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
