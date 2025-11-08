"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-[44px] z-50 bg-space md:top-[48px]">
      <div className="container">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex h-[36px] w-[36px] items-center justify-center rounded bg-fire text-mist font-bold text-xl">
              BL
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-block rounded border border-strokeDark bg-eerie px-4 py-2 text-15 text-mist transition-all duration-[400ms] hover:border-space/10 hover:bg-mist hover:text-space"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/Brandon_Low_CV.pdf"
              target="_blank"
              className="hidden rounded border border-strokeDark bg-eerie px-4 py-2 text-15 text-mist transition-all duration-[400ms] hover:border-space/10 hover:bg-mist hover:text-space md:inline-block"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="hidden rounded bg-fire px-4 py-2 text-15 text-mist transition-all duration-[400ms] hover:bg-fire-light md:inline-block"
            >
              Get In Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded border border-strokeDark bg-eerie text-mist md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-strokeDark bg-space md:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded border border-strokeDark bg-eerie px-4 py-3 text-15 text-mist transition-all duration-[400ms] hover:bg-mist hover:text-space"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Brandon_Low_CV.pdf"
                target="_blank"
                className="rounded border border-strokeDark bg-eerie px-4 py-3 text-15 text-mist transition-all duration-[400ms] hover:bg-mist hover:text-space"
                onClick={() => setIsMenuOpen(false)}
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded bg-fire px-4 py-3 text-center text-15 text-mist transition-all duration-[400ms] hover:bg-fire-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;