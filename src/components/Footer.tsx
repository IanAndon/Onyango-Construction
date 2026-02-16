import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ],
  actions: [
    { href: "/appointment", label: "Request Appointment" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300 overflow-x-hidden">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 min-w-0">
            <Link href="/" className="text-lg sm:text-xl font-semibold text-white hover:text-accent transition-colors inline-block">
              Onyango Construction
            </Link>
            <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-gray-400">
              Building reliable infrastructure for the future. Quality, safety, and timely delivery at the core of every project.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2 sm:py-1 hover:text-white transition-colors text-sm min-h-[44px] sm:min-h-0 flex items-center">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.actions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2 sm:py-1 hover:text-white transition-colors text-sm min-h-[44px] sm:min-h-0 flex items-center">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="min-w-0">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+255754000000" className="hover:text-white transition-colors inline-block py-1 break-all">
              +255 788 885 926 | +255 654 623 712
                </a>
              </li>
              <li>
                <a href="mailto:info@onyangoconstruction.co.tz" className="hover:text-white transition-colors break-all">
                  info@onyangoconstruction.co.tz
                </a>
              </li>
              <li className="text-gray-400">Iwambi, Mbeya, Tanzania</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-light flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl" suppressHydrationWarning>
            © {new Date().getFullYear()} Onyango Construction Company Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
