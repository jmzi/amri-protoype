'use client';

import { useState } from 'react';

/**
 * Full contact form used on /contact. Mirrors the original behavior
 * (submitForm() just hides the form and shows the success message).
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    setSubmitted(true);
  };

  return (
    <div className="contact-form-box">
      <h3>Send a Message</h3>
      <p>Fill out the form below and We'll be in touch shortly.</p>
      {!submitted && (
        <div id="contactForm">
          <div className="form-row">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input type="text" placeholder="Alex" />
            </div>
            <div className="form-group">
              <label>LAST NAME</label>
              <input type="text" placeholder="Reyes" />
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="alex@company.com" />
          </div>
          <div className="form-group">
            <label>COMPANY / WEBSITE (OPTIONAL)</label>
            <input type="text" placeholder="acme.com" />
          </div>
          <div className="form-group">
            <label>SERVICE NEEDED</label>
            <select defaultValue="">
              <option value="" disabled>
                Select a service...
              </option>
              <option>Web Design & Development</option>
              <option>Social Media Management</option>
              <option>WebCasting | Hybrid Presscon</option>
              <option>Autocadd | SketchUp | VRAY | Enscape</option>
              <option>Brand Boosting</option>
              <option>Not sure yet — let's talk</option>
            </select>
          </div>
          <div className="form-group">
            <label>BUDGET RANGE</label>
            <select defaultValue="">
              <option value="" disabled>
                Select a budget...
              </option>
              <option>Under ₱10,000</option>
              <option>₱10,000 – ₱20,000</option>
              <option>₱20,000 – ₱30,000</option>
              <option>₱30,000 – ₱40,000</option>
              <option>₱50,000+</option>
            </select>
          </div>
          <div className="form-group">
            <label>TELL ME ABOUT YOUR PROJECT</label>
            <textarea placeholder="Describe your project, goals, timeline, or anything else you'd like me to know..."></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              I agree to be contacted about my project. I won't receive spam — just a response from a real human.
            </label>
          </div>
          <button className="submit-btn" onClick={submit}>
            Send Message
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      )}
      <div id="formSuccess" style={{ display: submitted ? 'block' : 'none' }}>
        <div className="check-circle">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b5ff47"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Message Sent!</h3>
        <p>
          Thanks for reaching out. I'll review your project details and get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
}
