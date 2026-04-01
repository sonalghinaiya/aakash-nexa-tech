"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto px-4 mt-3 rounded-2xl transition-all ${
          scrolled ? "glass-strong shadow-lg py-3" : "glass py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center neon-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-poppins font-bold text-lg text-foreground">
              Aakash <span className="text-gradient">NexaTech</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2 bg-white/40 backdrop-blur-md px-2 py-1 rounded-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-violet-50 text-violet-700"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/40"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300 neon-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} className="block py-2">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
