'use client';

import { useState } from 'react';

/**
 * FAQ accordion component. Only one item can be open at a time
 * (same behavior as the original toggleFaq handler in main.js).
 */
export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className="faq-list">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`faq-item${openIndex === idx ? ' open' : ''}`}
        >
          <div className="faq-q" onClick={() => toggle(idx)}>
            {item.q}
            <div className="icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
