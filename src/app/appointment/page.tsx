import type { Metadata } from "next";
import ImageWithLoader from "@/components/ImageWithLoader";
import AppointmentForm from "@/components/AppointmentForm";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Request Appointment",
  description:
    "Request an appointment with Onyango Construction Company Limited. Share your project details and we will get back to you promptly.",
};

export default function AppointmentPage() {
  return (
    <>
      <section className="bg-primary-dark text-white section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Request Appointment</h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
              Tell us about your project. We will review your request and get back to you to confirm a suitable time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 bg-white min-w-0">
            {/* Left: picture with half-slash gradients */}
            <ScrollReveal className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] min-h-[240px] bg-primary-dark overflow-hidden">
                <ImageWithLoader
                  src={images.appointment}
                  alt="Schedule a consultation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  placeholderClassName="bg-primary"
                />
                {/* Half-slash gradient overlays, diagonal from top-left */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.5) 40%, transparent 65%)",
                    clipPath: "polygon(0 0, 60% 0, 45% 100%, 0 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(150deg, rgba(249,115,22,0.2) 0%, transparent 50%)",
                    clipPath: "polygon(0 0, 45% 0, 35% 100%, 0 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white relative z-10">
                    <p className="text-lg font-medium">Schedule a consultation</p>
                    <p className="text-sm mt-1 text-white/80">We&apos;ll get back to you promptly</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            {/* Right: form */}
            <ScrollReveal className="order-1 lg:order-2 min-w-0" delay={100}>
              <div className="p-4 sm:p-6 lg:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">Request an appointment</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Fill in your details and we&apos;ll confirm a suitable time.</p>
                <AppointmentForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
