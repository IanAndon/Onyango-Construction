import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Onyango Construction Company Limited. Phone, email, and office location.",
};

const contactInfo = {
  phone: "+255 788 885 926 | +255 654 623 712",
  email: "info@onyangoconstruction.co.tz",
  address: "Iwambi , Mbeya, Tanzania",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary-dark text-white section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
              Have a question or want to discuss a project? Reach out and we will respond as soon as we can.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact form */}
            <ScrollReveal className="lg:col-span-2 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">Send a message</h2>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
                <ContactForm />
              </div>
            </ScrollReveal>

          {/* Company contact info card with colour */}
            <ScrollReveal delay={100}>
              <div className="h-full rounded-xl border-l-4 border-l-accent border border-gray-200 bg-primary/5 p-4 sm:p-6 lg:p-7 shadow-sm min-w-0">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-primary-dark">Company contact</h2>
                </div>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-light uppercase tracking-wider block mb-0.5">Phone</span>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-primary-dark font-medium hover:text-accent transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-light uppercase tracking-wider block mb-0.5">Email</span>
                      <a href={`mailto:${contactInfo.email}`} className="text-primary-dark font-medium hover:text-accent transition-colors break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-light uppercase tracking-wider block mb-0.5">Office location</span>
                      <p className="text-primary-dark font-medium">{contactInfo.address}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Map embed, replace src with your office embed URL from Google Maps (Share → Embed) */}
      <section className="section-padding bg-gray-50" aria-label="Map location">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Find us</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[21/9] min-h-[200px] sm:min-h-[280px] bg-gray-200 w-full">
            <iframe
              title="Office location, Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.964!2d33.4666!3d-8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19fc4a1b2c2c2c2b%3A0x0!2sMbeya%2C%20Tanzania!5e0!3m2!1sen!2stz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[280px]"
            />
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Replace the iframe <code className="bg-gray-200 px-1 rounded">src</code> above with your office embed URL from Google Maps (Share → Embed a map).
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
