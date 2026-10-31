import React from 'react';
import {
  Heart,
  MessageCircle,
  CodeXml,
  Globe,
  Sparkles,
  Mail,
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: CodeXml, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = ['About', 'Features', 'Community', 'Contact'];

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-5 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <span className="text-2xl font-bold text-white">
                Linkora
              </span>
            </a>

            <p className="max-w-md text-sm leading-7 text-zinc-400">
              Connect, collaborate, and build meaningful relationships.
              Linkora brings people together through shared interests and
              communities.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>

            <p className="text-sm leading-7 text-zinc-400">
              Have questions or suggestions? We'd love to hear from you.
            </p>

            <a
              href="mailto:hello@linkora.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-purple-400 transition-colors hover:text-pink-400"
            >
              <Mail size={16} />
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Linkora. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-zinc-500">
            Made with
            <Heart size={14} className="fill-pink-500 text-pink-500" />
            for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;