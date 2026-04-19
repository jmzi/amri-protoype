'use client';

import { useRef, useState } from 'react';
import PortfolioCard from './PortfolioCard';

/**
 * Shared portfolio grid with category filters.
 *
 * - `variant="home"` : compact filter set + header (home page)
 * - `variant="page"` : full filter set + results counter + empty state
 *
 * Reproduces the FLIP-style transition from the original main.js so matching
 * cards reorder to the front with a smooth translate animation while
 * unmatched cards fade to 15% opacity.
 */
export default function PortfolioGrid({ items, variant = 'home' }) {
  const [active, setActive] = useState('all');
  const gridRef = useRef(null);

  const countVisible = (() => {
    if (active === 'all') return items.length;
    return items.filter((i) => i.cat === active).length;
  })();

  const filterPort = (cat) => {
    setActive(cat);

    // Run the FLIP animation on the next tick once React has processed state
    requestAnimationFrame(() => {
      const grid = gridRef.current;
      if (!grid) return;
      const cards = Array.from(grid.querySelectorAll('.pc'));

      // Step 1: Starting positions
      const startRects = new Map();
      cards.forEach((card) => startRects.set(card, card.getBoundingClientRect()));

      // Step 2: Split matched/unmatched
      const matched = [];
      const unmatched = [];
      cards.forEach((card) => {
        const match = cat === 'all' || card.dataset.cat === cat;
        if (match) matched.push(card);
        else unmatched.push(card);
      });

      // Step 3: DOM reorder (matched first)
      [...matched, ...unmatched].forEach((card) => grid.appendChild(card));

      // Step 4: Snap back to start with transform
      cards.forEach((card) => {
        const start = startRects.get(card);
        const end = card.getBoundingClientRect();
        const dx = start.left - end.left;
        const dy = start.top - end.top;
        card.style.transition = 'none';
        card.style.transform = `translate(${dx}px, ${dy}px)`;
        card.style.opacity = card.style.opacity || '1';
      });

      // Step 5: Animate to final position
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          matched.forEach((card) => {
            card.style.transition =
              'transform .45s cubic-bezier(.4,0,.2,1), opacity .35s ease';
            card.style.transform = '';
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
          });
          unmatched.forEach((card) => {
            card.style.transition =
              'transform .45s cubic-bezier(.4,0,.2,1), opacity .35s ease';
            card.style.transform = '';
            card.style.opacity = '0.15';
            card.style.pointerEvents = 'none';
          });
        });
      });
    });
  };

  const homeFilters = [
    { id: 'all', label: 'All' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'hotel', label: 'Hotel' },
    { id: 'blog', label: 'Blog' },
    { id: 'business', label: 'Business / Corporate' },
    { id: 'portfolio', label: 'Portfolio' },
  ];
  const pageFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'business', label: 'Business / Corporate' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'hotel', label: 'Hotel' },
    { id: 'blog', label: 'Blog' },
    { id: 'elearning', label: 'E-Learning' },
  ];
  const filters = variant === 'home' ? homeFilters : pageFilters;

  return (
    <>
      {variant === 'home' ? (
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`fbtn${active === f.id ? ' active' : ''}`}
              onClick={() => filterPort(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="outer">
          <div className="filters-bar reveal">
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f.id}
                  className={`fbtn${active === f.id ? ' active' : ''}`}
                  onClick={() => filterPort(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="result-count">
              Showing <span id="countNum">{countVisible}</span> projects
            </div>
          </div>
        </div>
      )}

      {variant === 'home' ? (
        <div className="port-grid" id="pg" ref={gridRef}>
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="outer">
          <div className="port-wrap">
            <div className="port-grid" id="pg" ref={gridRef}>
              {items.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
            <div
              className="empty-state"
              id="emptyState"
              style={{ display: countVisible === 0 ? 'block' : 'none' }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <p>No projects found in this category.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
