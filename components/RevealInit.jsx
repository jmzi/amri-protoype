'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Runs the same IntersectionObserver-based scroll-reveal logic from the
 * original main.js. Also applies the stagger delay to portfolio/service/
 * testimonial cards and sets up the nav scroll highlight on the home page.
 * Re-runs on every route change so newly mounted elements get observed.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // ── SCROLL REVEAL ────────────────────────────────────
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    // ── CARD STAGGER DELAYS ──────────────────────────────
    document.querySelectorAll('.pc, .sc, .tc').forEach((c, i) => {
      c.style.transitionDelay = `${(i % 3) * 0.08}s`;
    });

    // ── NAV SCROLL HIGHLIGHT (home page anchors) ─────────
    const navLinks = document.querySelectorAll('nav ul li a');
    const onScroll = () => {
      if (!navLinks.length) return;
      let cur = '';
      document.querySelectorAll('[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id;
      });
      navLinks.forEach((a) => {
        const href = a.getAttribute('href') || '';
        const active = href === `#${cur}`;
        a.style.fontWeight = active ? '700' : '';
        a.style.color = active ? '#000' : '';
      });
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      revealObs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return null;
}
