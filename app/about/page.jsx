import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SvgDefs from '@/components/SvgDefs';
import RevealInit from '@/components/RevealInit';

export const metadata = {
  title: 'About – Amri Digital Marketing',
};

export default function AboutPage() {
  return (
    <>
      <SvgDefs />
      <Nav />
      <RevealInit />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner reveal">
          <div className="page-hero-text">
            <div className="pill">About Us</div>
            <h1>
              The Minds <br /> Behind <span className="hl"> Amri Digital Marketing</span>
            </h1>
            <p>
              AMRI Was founded by Mr. Ramon Emmanuel Quevedo and Brother Jim. both are IT expert, in pursuit of promoting digital marketing and new uses of information technology. <br /> <br />
              The name AMRI was derives from their firstchild&rsquo;s name RIYA and AMBER (AmRi). It means POWER, AUTHORITY and COMMAND.
            </p>{' '}
            <br />
            <p>
              Brother Jim has been working as a Web Designer/Developer for 8 years now and working with international accounts, while Mr. Quevedo has a wide experience in Marketing. AMRI has been featured in &quot;Radyo Pilipinas&quot; and &quot;J101.5 FM BIG RADIO&quot;
            </p>
            <p>Together, AMRI is on its high potential to fulfill its mission and vision.</p>
          </div>
          <div className="page-hero-img">
            <img
              src="https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776510752/ramon-quevedo-amri_vhf3qb.png"
              alt="Developer at work"
            />
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="outer" style={{ paddingTop: 0 }}>
        <div className="stats-bar reveal">
          <div className="stat-item">
            <div className="stat-num">
              50<span>+</span>
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              6<span>+</span>
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              40<span>+</span>
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              98<span>%</span>
            </div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className="outer">
        <div className="story reveal">
          <div className="story-left">
            <div className="pill">Our Mission & Vision</div>
            <h2>
              Empowering <br /> Businesses Through Digital Innovation
            </h2>
            <p>
              Our <b>MISSION</b> is to help businesses establish a strong and lasting digital identity by leveraging modern technology, strategic marketing, and innovative solutions. We aim to transform ideas into powerful digital assets that drive growth, visibility, and long-term success in an increasingly competitive online landscape.
            </p>

            <p>
              Our <b>VISION</b> is to become one of the leading IT solutions and digital marketing companies in the Philippines, recognized for excellence, innovation, and client success. We strive to continuously evolve with technology and be a trusted partner for businesses aiming to scale and succeed in the digital era.
            </p>

            <Link href="/contact" className="btn-primary">
              Work With Us{' '}
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
          </div>
          <div className="story-right">
            <div className="fact-card">
              <div className="fact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3>Fast Turnaround</h3>
                <p>Most projects are scoped, designed, and shipped in 2–6 weeks depending on complexity — no endless delays.</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16.92z" />
                </svg>
              </div>
              <div>
                <h3>Clear Communication</h3>
                <p>Weekly updates, shared project boards, and always-on messaging — you're never left wondering what's happening.</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <h3>Performance-First</h3>
                <p>Every project is built with Core Web Vitals in mind. Fast load times, clean code, and scores that make Google happy.</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3>Post-Launch Support</h3>
                <p>I don't disappear after go-live. All projects include a 30-day support window for bug fixes and minor adjustments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BAND */}
      <div className="outer">
        <div className="cta-band reveal">
          <h2>Ready to build something great together?</h2>
          <div className="cta-btns">
            <Link href="/contact" className="btn-green">
              Start a Project
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View My Work
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
