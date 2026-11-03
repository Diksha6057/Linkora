// import React from 'react';
// import { Heart, Sparkles, Mail } from 'lucide-react';

// // GitHub Icon
// const GithubIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="h-5 w-5"
//     aria-hidden="true"
//   >
//     <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
//   </svg>
// );

// // LinkedIn Icon
// const LinkedInIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="h-5 w-5"
//     aria-hidden="true"
//   >
//     <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18.5h-3v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7h-3V9h2.88v1.3h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.56 2 3.56 4.6v5.14Z" />
//   </svg>
// );

// const Footer = () => {

//   // Social Media Links
//   const socialLinks = [
//     {
//       icon: GithubIcon,
//       href: 'https://github.com/Diksha6057',
//       label: 'GitHub',
//     },
//     {
//       icon: LinkedInIcon,
//       href: 'https://www.linkedin.com/in/diksha-sharma--/',
//       label: 'LinkedIn',
//     },
//     {
//       icon: Mail,
//       href: 'mailto:dikshasharma.psr@gmail.com',
//       label: 'Gmail',
//     },
//   ];

//   // Footer Navigation Links
//   const footerLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Features', href: '#features' },
//     { name: 'Community', href: '#community' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#0a0a0a]">

//       {/* Top Border */}
//       <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       {/* Background Effects */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

//       <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

//       <div className="relative mx-auto max-w-7xl px-6 py-16">

//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

//           {/* Brand Section */}
//           <div className="lg:col-span-2">

//             <a
//               href="/"
//               className="mb-5 inline-flex items-center gap-2"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
//                 <Sparkles className="h-5 w-5 text-white" />
//               </div>

//               <span className="text-2xl font-bold text-white">
//                 Linkora
//               </span>
//             </a>

//             <p className="max-w-md text-sm leading-7 text-zinc-400">
//               Connect, collaborate, and build meaningful relationships.
//               Linkora brings people together through shared interests and
//               communities.
//             </p>

//             {/* Social Media Icons */}
//             <div className="mt-6 flex items-center gap-4">

//               {socialLinks.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     target={item.label === 'Gmail' ? '_self' : '_blank'}
//                     rel={item.label === 'Gmail' ? undefined : 'noopener noreferrer'}
//                     aria-label={item.label}
//                     title={item.label}
//                     className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
//                   >
//                     <Icon size={20} />
//                   </a>
//                 );
//               })}

//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>

//             <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">

//               {footerLinks.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-sm text-zinc-400 transition-colors duration-300 hover:text-purple-400"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}

//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>

//             <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
//               Get in Touch
//             </h3>

//             <p className="text-sm leading-7 text-zinc-400">
//               Have questions or suggestions? We'd love to hear from you.
//             </p>

//             <a
//               href="mailto:dikshasharma.psr@gmail.com"
//               className="mt-4 inline-flex items-center gap-2 text-sm text-purple-400 transition-colors hover:text-pink-400"
//             >
//               <Mail size={16} />
//               Contact Us
//             </a>

//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

//           <p className="text-center text-sm text-zinc-500">
//             © {new Date().getFullYear()} Linkora. All rights reserved.
//           </p>

//           <p className="flex items-center gap-1 text-sm text-zinc-500">
//             Made with
//             <Heart
//               size={14}
//               className="fill-pink-500 text-pink-500"
//             />
//             for the community
//           </p>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { Heart, Sparkles, Mail } from 'lucide-react';

// // GitHub Icon
// const GithubIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//     <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
//   </svg>
// );

// // LinkedIn Icon
// const LinkedInIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//     <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18.5h-3v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7h-3V9h2.88v1.3h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.56 2 3.56 4.6v5.14Z" />
//   </svg>
// );

// const Footer = () => {

//   // Social Media Links
//   const socialLinks = [
//     {
//       name: 'GitHub',
//       href: 'https://github.com/Diksha6057',
//       icon: GithubIcon,
//     },
//     {
//       name: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/diksha-sharma--/',
//       icon: LinkedInIcon,
//     },
//     {
//       name: 'Gmail',
//       href: 'mailto:dikshasharma.psr@gmail.com',
//       icon: Mail,
//     },
//   ];

//   // Quick Navigation Links
//   const quickLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '#about' },
//     { name: 'Features', href: '#features' },
//     { name: 'Community', href: '#community' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   // Legal Links
//   const legalLinks = [
//     { name: 'Privacy Policy', href: '#privacy' },
//     { name: 'Terms & Conditions', href: '#terms' },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#0a0a0a]">

//       {/* Top Border */}
//       <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       {/* Background Glow Effects */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

//       <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

//       <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">

//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

//           {/* Brand Section */}
//           <div className="lg:col-span-1">

//             <a
//               href="/"
//               className="mb-4 inline-flex items-center gap-2"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
//                 <Sparkles className="h-5 w-5 text-white" />
//               </div>

//               <span className="text-2xl font-bold text-white">
//                 Linkora
//               </span>
//             </a>

//             <p className="mb-3 text-sm leading-7 text-zinc-400">
//               Connect, collaborate, and build meaningful relationships.
//               Linkora brings people together through shared interests
//               and communities.
//             </p>

//             <p className="text-sm text-zinc-500">
//               Developer:{' '}
//               <span className="font-medium text-zinc-300">
//                 Diksha Sharma
//               </span>
//             </p>

//           </div>

//           {/* Quick Links */}
//           <div>

//             <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>

//             <ul className="space-y-4">

//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-sm text-zinc-400 transition-all duration-300 hover:pl-1 hover:text-purple-400"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}

//             </ul>

//           </div>

//           {/* Follow Me */}
//           <div>

//             <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
//               Follow Me
//             </h3>

//             <ul className="space-y-4">

//               {socialLinks.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <li key={item.name}>
//                     <a
//                       href={item.href}
//                       target={item.name === 'Gmail' ? undefined : '_blank'}
//                       rel={item.name === 'Gmail' ? undefined : 'noopener noreferrer'}
//                       className="inline-flex items-center gap-3 text-sm text-zinc-400 transition-colors duration-300 hover:text-purple-400"
//                     >
//                       <Icon size={17} />
//                       {item.name}
//                     </a>
//                   </li>
//                 );
//               })}

//             </ul>

//           </div>

//           {/* Legal Section */}
//           <div>

//             <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
//               Legal
//             </h3>

//             <ul className="space-y-4">

//               {legalLinks.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-sm text-zinc-400 transition-colors duration-300 hover:text-purple-400"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}

//             </ul>

//           </div>

//         </div>

//         {/* Divider */}
//         <div className="my-10 h-px bg-white/10" />

//         {/* Bottom Footer */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

//           {/* Copyright */}
//           <p className="text-center text-sm text-zinc-500">
//             © {new Date().getFullYear()} Linkora. All Rights Reserved.
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex items-center gap-5">

//             {socialLinks.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   target={item.name === 'Gmail' ? undefined : '_blank'}
//                   rel={item.name === 'Gmail' ? undefined : 'noopener noreferrer'}
//                   aria-label={item.name}
//                   title={item.name}
//                   className="text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-purple-400"
//                 >
//                   <Icon size={20} />
//                 </a>
//               );
//             })}

//           </div>

//           {/* Made With Love */}
//           <p className="flex items-center gap-1 text-sm text-zinc-500">
//             Made with
//             <Heart
//               size={14}
//               className="fill-pink-500 text-pink-500"
//             />
//             for the community
//           </p>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';

// ------------------------------
// Social Media Icons
// ------------------------------

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18.5h-3v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7h-3V9h2.88v1.3h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.56 2 3.56 4.6v5.14Z" />
  </svg>
);

// ------------------------------
// Footer Component
// ------------------------------

const Footer = () => {
  // Social Media Links
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Diksha6057',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/diksha-sharma--/',
      icon: LinkedInIcon,
    },
    {
      name: 'Gmail',
      href: 'mailto:dikshasharma.psr@gmail.com',
      icon: Mail,
    },
  ];

  // Website Navigation
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  // Legal Navigation
  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
  ];

  // Reusable Footer Link
  const FooterLink = ({ href, children }) => (
    <a
      href={href}
      className="text-sm text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
    >
      {children}
    </a>
  );

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a]">

      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">

        {/* ==============================
            MAIN FOOTER CONTENT
        ============================== */}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="lg:pr-8">

            <a
              href="/"
              className="mb-5 inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <span className="text-2xl font-bold text-white">
                Linkora
              </span>
            </a>

            <p className="mb-4 max-w-sm text-sm leading-7 text-zinc-400">
              Connect, collaborate, and build meaningful relationships
              through shared interests and communities.
            </p>

            <p className="text-sm text-zinc-500">
              Designed & Developed by{' '}
              <span className="font-medium text-zinc-300">
                Diksha Sharma
              </span>
            </p>

          </div>

          {/* Explore Section */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>

          </div>

          {/* Connect Section */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <ul className="space-y-4">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.name === 'Gmail' ? undefined : '_blank'}
                      rel={item.name === 'Gmail' ? undefined : 'noopener noreferrer'}
                      className="inline-flex items-center gap-3 text-sm text-zinc-400 transition-colors duration-300 hover:text-purple-400"
                    >
                      <Icon size={17} />
                      {item.name}
                    </a>
                  </li>
                );
              })}

            </ul>

          </div>

          {/* Legal Section */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>

            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* ==============================
            BOTTOM FOOTER SECTION
        ============================== */}

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Copyright */}
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Linkora. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === 'Gmail' ? undefined : '_blank'}
                  rel={item.name === 'Gmail' ? undefined : 'noopener noreferrer'}
                  aria-label={item.name}
                  title={item.name}
                  className="text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-purple-400"
                >
                  <Icon size={20} />
                </a>
              );
            })}

          </div>

          {/* Made With Love */}
          <p className="flex items-center gap-1 text-sm text-zinc-500">
            Made with
            <Heart
              size={14}
              className="fill-pink-500 text-pink-500"
            />
            for the community
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
