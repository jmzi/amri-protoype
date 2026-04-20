'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileDrawer from './MobileDrawer';

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  const toggleDrawer = () => {
    const drawer = document.getElementById('mobDrawer');
    const overlay = document.getElementById('mobOverlay');
    const btn = document.getElementById('hamburger');
    if (!drawer || !overlay || !btn) return;
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      overlay.classList.add('open');
      btn.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <nav>
        <Link href="/" className="brand">
          <img
            src="https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776684778/amri-logo_xtgsmq.png"
            alt=""
          />
        </Link>
        <div className="nav-right">
          <ul>
            <li>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={isActive('/services') ? 'active' : ''}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>
                Our Works
              </Link>
            </li>
          </ul>
          <Link href="/contact" className="nav-cta">
            Contact Us{' '}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <button
            className="hamburger"
            id="hamburger"
            onClick={toggleDrawer}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <MobileDrawer />
    </>
  );
}
