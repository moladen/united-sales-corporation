'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
import { site } from '@/lib/site';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services', dropdown: true },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' },
  { href: '/services/maintenance-amc', label: 'Maintenance & AMC' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  if (href === '/services') return pathname === '/services' || (pathname.startsWith('/services/') && pathname !== '/services/maintenance-amc');
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header({ logo }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-[0.8125rem] text-white/70 lg:block">
        <div className="container-site flex h-9 items-center justify-between">
          <p className="font-label font-semibold text-[0.7rem] tracking-[0.2em] uppercase">{site.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.contact.phones[0].tel}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              {site.contact.phones[0].display}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp
            </a>
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b bg-white/95 backdrop-blur-sm transition-shadow duration-300 supports-[backdrop-filter]:bg-white/90 ${
          scrolled ? 'border-line shadow-[0_6px_24px_-12px_rgb(7_18_38/0.25)]' : 'border-transparent'
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label="United Sales Corporation — Home" className="shrink-0">
            {logo}
          </Link>

          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {links.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`relative py-2 pr-1 pl-3 text-[0.9rem] font-medium transition-colors hover:text-brand-600 ${
                          isActive(pathname, link.href) ? 'text-brand-600' : 'text-ink'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="services-menu"
                        aria-label="Show services"
                        onClick={() => setServicesOpen((v) => !v)}
                        className="p-1.5 text-ink hover:text-brand-600"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id="services-menu"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-[4px] border border-line bg-white shadow-[0_24px_48px_-16px_rgb(7_18_38/0.28)]">
                            <ul className="grid grid-cols-2 gap-px bg-line">
                              {services.map((s) => {
                                const Icon = s.icon;
                                return (
                                  <li key={s.slug} className="bg-white">
                                    <Link
                                      href={`/services/${s.slug}`}
                                      className="group flex items-start gap-3 p-4 transition-colors hover:bg-brand-50"
                                    >
                                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                                      <span>
                                        <span className="block text-[0.9rem] font-semibold text-ink group-hover:text-brand-700">
                                          {s.navTitle}
                                        </span>
                                      </span>
                                    </Link>
                                  </li>
                                );
                              })}
                              <li className="bg-navy-900">
                                <Link
                                  href="/services"
                                  className="flex h-full items-center justify-between gap-3 p-4 text-[0.9rem] font-semibold text-white hover:bg-navy-800"
                                >
                                  View all services
                                  <ArrowRight className="h-4 w-4 text-amber-400" aria-hidden="true" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                      className={`px-3 py-2 text-[0.9rem] font-medium transition-colors hover:text-brand-600 ${
                        isActive(pathname, link.href) ? 'text-brand-600' : 'text-ink'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#enquiry"
              className="hidden rounded-[3px] bg-amber-500 px-4 py-2.5 text-[0.875rem] font-semibold text-navy-950 transition-colors hover:bg-amber-400 sm:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-line text-ink xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto border-t border-line bg-white xl:hidden lg:top-[116px]"
          >
            <nav aria-label="Mobile navigation" className="container-site py-4">
              <ul className="divide-y divide-line">
                {links.map((link) =>
                  link.dropdown ? (
                    <li key={link.href}>
                      <div className="flex items-center justify-between">
                        <Link href={link.href} className="flex-1 py-4 text-lg font-semibold text-ink">
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services"
                          aria-label="Show services"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="inline-flex h-11 w-11 items-center justify-center text-ink"
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <ul id="mobile-services" className="mb-4 space-y-1 border-l-2 border-amber-500 pl-4">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link href={`/services/${s.slug}`} className="block py-2 text-[0.95rem] text-body hover:text-brand-600">
                                {s.navTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                        className={`block py-4 text-lg font-semibold ${isActive(pathname, link.href) ? 'text-brand-600' : 'text-ink'}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-6 space-y-3 border-t border-line pt-6">
                <Link
                  href="/contact#enquiry"
                  className="flex w-full items-center justify-center rounded-[3px] bg-amber-500 px-5 py-3.5 font-semibold text-navy-950"
                >
                  Request a Quote
                </Link>
                {site.contact.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 py-1 text-body">
                    <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" /> {p.display}
                  </a>
                ))}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-1 text-body"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#128C7E]" /> WhatsApp {site.contact.whatsapp.display}
                </a>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 py-1 break-words text-body">
                  <Mail className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> {site.contact.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
