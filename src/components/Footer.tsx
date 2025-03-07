import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin, Mail, Disc as Discord } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/helpops-hub', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/helpopshub', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/helpops-hub', label: 'LinkedIn' },
  { icon: Discord, href: 'https://discord.gg/helpops-hub', label: 'Discord' },
  { icon: Mail, href: 'mailto:contact@helpops-hub.com', label: 'Email' },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/features' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API', href: '/api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Community', href: '/community' },
      { name: 'Partners', href: '/partners' },
      { name: 'Status', href: '/status' },
      { name: 'Terms', href: '/terms' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                HelpOps-Hub
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering DevOps enthusiasts through open-source collaboration. Join our community
              and help shape the future of infrastructure automation.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HelpOps-Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};