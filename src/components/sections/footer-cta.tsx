import Image from 'next/image';
import { Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:brandonlow0610@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/brandon-low-zhen-xuen/' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/Brandon73614140' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/zxKyouma' },
];

const quickLinks = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=CRN_qCEAAAAJ&view_op=list_works' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0000-3324-8705' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Zhen-Xuen-Brandon-Low' },
];

const FooterCTA = () => {
  return (
    <footer id="contact" className="bg-space py-8 md:py-16">
      <div className="container">
        <div className="overflow-hidden rounded-xl">
          {/* Contact CTA - Full Width */}
          <div className="relative border border-strokeDark bg-gradient-to-br from-fire/20 via-orange-accent/20 to-blue-accent/20 p-8 md:p-12 lg:p-16">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/images/grid-dot-6.png')`,
                backgroundSize: '20px 20px',
                backgroundRepeat: 'repeat'
              }}
            />
            <div className="relative">
              <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light uppercase leading-[1.1] text-mist">
                Let's Build
                <br />
                <span className="text-fire">Something</span>
                <br />
                Revolutionary
              </h2>
              <p className="mb-8 text-18 font-light text-mist/80">
                Looking for collaborators, co-founders, and opportunities to apply AI in healthcare.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:brandonlow0610@gmail.com"
                  className="flex items-center gap-2 text-18 text-mist transition-colors hover:text-fire"
                >
                  <Mail className="h-5 w-5" />
                  brandonlow0610@gmail.com
                </a>
                <p className="flex items-center gap-2 text-18 text-mist">
                  📍 George Town, Penang, Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Quick Links */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-14 uppercase tracking-wider text-mist">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded border border-strokeDark bg-eerie px-4 py-2 text-15 text-mist transition-all duration-300 hover:border-fire hover:text-fire"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-14 uppercase tracking-wider text-mist">Research Profiles</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-15 text-mist/70 transition-colors hover:text-fire"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-strokeDark pt-8 text-center">
          <p className="text-14 text-mist/50">
            © {new Date().getFullYear()} Brandon Low Zhen Xuen. All rights reserved.
          </p>
          <p className="mt-2 text-14 text-mist/50">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;