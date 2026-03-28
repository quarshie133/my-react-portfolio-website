import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <BsGithub size={17} />,
    href: "https://github.com/quarshie133",
    label: "GitHub",
  },
  {
    icon: <BsLinkedin size={17} />,
    href: "https://www.linkedin.com/in/prince-e-quarshie/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark-100 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold text-white hover:text-primary transition-colors"
            >
              PEQ<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-slate-500 mt-1">Full-Stack Software Engineer</p>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-1 flex-wrap justify-center">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Prince Ephraim Quarshie. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors group"
          >
            Back to top
            <HiArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
