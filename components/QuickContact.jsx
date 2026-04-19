'use client';

import { useState } from 'react';

/**
 * Quick "drop your email" form in the home-page contact section.
 * Mirrors handleContact() in the original main.js.
 */
export default function QuickContact() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleContact = () => {
    if (email && email.includes('@')) {
      setSuccess(true);
      setEmail('');
    }
  };

  return (
    <>
      <div className="cf">
        <input
          type="email"
          placeholder="Enter your email address"
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleContact}>
          Send It{' '}
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
        </button>
      </div>
      <p
        id="successMsg"
        style={{
          color: 'var(--green)',
          fontSize: '.85rem',
          marginTop: '12px',
          display: success ? 'block' : 'none',
        }}
      >
        <svg
          style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>{' '}
        Got it! I'll be in touch soon.
      </p>
    </>
  );
}
