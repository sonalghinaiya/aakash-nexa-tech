import Link from "next/link";
import { Zap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Android & iOS Apps",
  "Web Development",
  "Startup MVP",
  "UI/UX Design",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-poppins font-bold text-lg text-foreground">
                Aakash <span className="text-gradient">NexaTech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Building the next in technology. We craft digital experiences that
              push boundaries and drive innovation.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>+91 9081069042</p>
                  <p>+91 9499762136</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground break-all">
                  aakashnexatech@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Aakash NexaTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-xs hover:text-foreground cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-muted-foreground text-xs hover:text-foreground cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
