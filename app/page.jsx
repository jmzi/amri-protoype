import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SvgDefs from '@/components/SvgDefs';
import RevealInit from '@/components/RevealInit';
import PortfolioGrid from '@/components/PortfolioGrid';
import QuickContact from '@/components/QuickContact';
import portfolio from '@/data/portfolio.json';

export const metadata = {
  title: 'Amri – Digital Marketing & Web Development Services',
};

export default function HomePage() {
  // Only the "showOnHome" subset appears on the homepage portfolio section
  const homeItems = portfolio.filter((p) => p.showOnHome);

  return (
    <>
      <SvgDefs />
      <Nav />
      <RevealInit />

      {/* HERO */}
      <div className="hero-outer">
        <section className="hero reveal">
          <div className="hero-content">
            <h1>
              Building <br />
              the Web That Drives Your Growth{' '}
            </h1>
            <p>
              From pixel-perfect frontends to bulletproof backends, I craft digital experiences that elevate your brand and accelerate your business.
            </p>
            <div className="hero-btns">
              <a href="#portfolio" className="btn-primary">View Our Work</a>
              <a href="#contact" className="btn-outline">Let's Collaborate</a>
            </div>
          </div>
          <div className="hero-exp">
            <div className="stars">
              <svg width="80" height="14" viewBox="0 0 80 14" fill="#f5c518">
                <use href="#star" x="0" />
                <use href="#star" x="16" />
                <use href="#star" x="32" />
                <use href="#star" x="48" />
                <use href="#star" x="64" />
                <defs>
                  <symbol id="star" viewBox="0 0 14 14">
                    <polygon points="7,1 8.8,5.2 13.5,5.5 10,8.5 11.1,13 7,10.5 2.9,13 4,8.5 0.5,5.5 5.2,5.2" />
                  </symbol>
                </defs>
              </svg>
            </div>
            <div className="exp-text">
              6 Years<span>Experience</span>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776412677/amri-office_trjalh.png"
              alt="Developer at work"
            />
            <div className="hero-badge">
              <svg
                style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>{' '}
              Available for Projects
            </div>
          </div>
          <div className="scroll-hint">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>{' '}
            Scroll to explore
          </div>
        </section>
      </div>

      {/* ABOUT */}
      <div className="outer" id="about">
        <section className="about inner reveal">
          <div className="about-left">
            <div className="pill">About Us</div>
            <h2>
              Turning Ideas Into
              <br />
              Functional Realities
            </h2>
            <div className="about-imgs">
              <div className="img-bl tall">
                <img
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&q=80"
                  style={{ height: '340px' }}
                  alt="Coding"
                />
              </div>
              <div className="img-bl">
                <img
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&q=80"
                  style={{ height: '200px' }}
                  alt="Workspace"
                />
              </div>
              <div className="img-bl">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=80"
                  style={{ height: '200px' }}
                  alt="Planning"
                />
              </div>
              <div className="about-badge">
                <Link href="/about" style={{ color: '#000', textDecoration: 'none' }}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="pill">Our Story</div>
            <p>
              AMRI Was founded by Mr. Ramon Emmanuel Quevedo and Brother Jim. both are IT expert, in pursuit of promoting digital marketing and new uses of information technology. <br />
            </p>

            <p>
              The name AMRI was derives from their firstchild&rsquo;s name RIYA and AMBER (AmRi). It means POWER, AUTHORITY and COMMAND.
            </p>
            <p>
              Brother Jim has been working as a Web Designer/Developer for 8 years now and working with international accounts, while Mr. Quevedo has a wide experience in Marketing. AMRI has been featured in &quot;Radyo Pilipinas&quot; and &quot;J101.5 FM BIG RADIO&quot;
            </p>
            <p>Together, AMRI is on its high potential to fulfill its mission and vision.</p>
          </div>
        </section>
      </div>

      <div className="gap"></div>

      {/* SERVICES */}
      <div className="outer" id="services">
        <section className="svc-box reveal">
          <div className="svc-left">
            <div className="pill">What We Do</div>
            <h2>
              Our{' '}
              <span
                style={{
                  background: 'var(--green)',
                  color: 'var(--black)',
                  padding: '2px 12px',
                  borderRadius: '6px',
                }}
              >
                Services
              </span>
            </h2>
            <p>
              I offer a full range of web development services to take your project from concept to launch—and beyond.
            </p>
            <ul className="svc-list">
              <li className="svc-item">
                <span>
                  <span className="svc-n">01</span>WEBSITE DESIGN & DEVELOPMENT
                </span>
                <div className="svc-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
              <li className="svc-item">
                <span>
                  <span className="svc-n">04</span>SOCIAL MEDIA MANAGEMENT
                </span>
                <div className="svc-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
              <li className="svc-item">
                <span>
                  <span className="svc-n">05</span>WEBCASTING | HYBRID PRESSCON
                </span>
                <div className="svc-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
              <li className="svc-item">
                <span>
                  <span className="svc-n">06</span>AUTOCADD | SKETCHUP | VRAY | ENSCAPE
                </span>
                <div className="svc-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
              <li className="svc-item">
                <span>
                  <span className="svc-n">07</span>BRAND BOOSTING
                </span>
                <div className="svc-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
          <div className="svc-right">
            <div className="svc-img">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                alt="Coding"
              />
            </div>
            <div className="svc-cta">
              <p>
                Ready to see how <strong>we turn ideas into results?</strong>
              </p>
              <a href="#portfolio" className="cta-pill">
                See how We work{' '}
                <span className="cta-icon">
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
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <p>Looking for a developer to turn your vision into reality?</p>
              <a href="#contact" className="cta-pill">
                Work with Us{' '}
                <span className="cta-icon">
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
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* PORTFOLIO */}
      <div className="outer" id="portfolio">
        <section className="port reveal">
          <div className="port-head">
            <div>
              <div className="pill">Selected Work</div>
              <h2>
                Our <span className="hl">Works</span>
              </h2>
            </div>
            <PortfolioGrid items={homeItems} variant="home" />
          </div>
        </section>
      </div>

      {/* TESTIMONIALS */}
      <div className="outer">
        <section className="testi-box reveal">
          <div className="testi-head">
            <div className="pill">Client Reviews</div>
            <h2>
              What{' '}
              <span
                style={{
                  background: 'var(--green)',
                  color: 'var(--black)',
                  padding: '2px 14px',
                  borderRadius: '6px',
                }}
              >
                Clients
              </span>{' '}
              Say
            </h2>
          </div>
          <div className="testi-grid">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'CEO, BrightLeaf Studio',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
                alt: 'Sarah',
                body: 'Absolutely transformed our online presence. Delivered ahead of schedule with zero bugs. Our conversion rate jumped 40% within the first month.',
              },
              {
                name: 'James Okoro',
                role: 'CTO, NovaTech Labs',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                alt: 'James',
                body: "One of the most technically sharp freelancers I've worked with. Clean code, great communication, and an eye for detail that made our product shine.",
              },
              {
                name: 'Mia Rousseau',
                role: 'Founder, Paloma Shop',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
                alt: 'Mia',
                body: "Built our entire e-commerce platform from scratch. The UI is gorgeous and the backend is rock solid. We've had zero downtime in 8 months.",
              },
              {
                name: 'David Chen',
                role: 'Director, EduPath',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
                alt: 'David',
                body: "We needed a complex LMS built fast. Not only did he nail every feature, he suggested improvements we hadn't even thought of. A true partner.",
              },
              {
                name: 'Priya Nair',
                role: 'PMO, FinFlow Inc.',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
                alt: 'Priya',
                body: 'Integrated our payment system seamlessly. The documentation he left behind was so thorough our team could maintain it with no handholding needed.',
              },
              {
                name: 'Luca Ferretti',
                role: 'Co-Founder, Launchpad SaaS',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
                alt: 'Luca',
                body: 'Brought our MVP to life in just 6 weeks. Investors loved the polish and the codebase was clean enough for our team to build on immediately.',
              },
            ].map((t) => (
              <div key={t.name} className="tc">
                <div className="qmark">
                  <svg width="28" height="22" viewBox="0 0 32 24" fill="rgba(181,255,71,0.25)">
                    <path d="M0 24V14C0 6.268 4.477 1.232 13.43 0l1.57 2.4C10.1 3.696 7.547 6.04 6.786 9.6H12V24H0zm20 0V14c0-7.732 4.477-12.768 13.43-13.6L35 2.8c-4.9 1.296-7.453 3.64-8.214 7.2H32V24H20z" />
                  </svg>
                </div>
                <div className="tc-top">
                  <div className="tc-av">
                    <img src={t.avatar} alt={t.alt} />
                  </div>
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
                <div className="tc-stars">
                  <svg width="72" height="12" viewBox="0 0 80 14" fill="#f5c518">
                    <use href="#star" />
                    <use href="#star" x="16" />
                    <use href="#star" x="32" />
                    <use href="#star" x="48" />
                    <use href="#star" x="64" />
                  </svg>
                </div>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CONTACT */}
      <div className="outer" id="contact">
        <section className="contact reveal">
          <div className="contact-l">
            <div className="pill">Let's Work Together</div>
            <h2>
              Get in Touch
              <br />
              Today!{' '}
              <svg
                style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 11V6.5a1.5 1.5 0 0 0-3 0V11" />
                <path d="M15 11V5a1.5 1.5 0 0 0-3 0v6" />
                <path d="M12 11V4a1.5 1.5 0 0 0-3 0v8" />
                <path d="M9 12V7.5a1.5 1.5 0 0 0-3 0V15a6 6 0 0 0 12 0v-3" />
              </svg>
            </h2>
            <p>
              Have a project in mind? Drop your email below and I'll get back to you within 24 hours to discuss how we can make it happen.
            </p>
            <QuickContact />
          </div>
          <div className="contact-r">
            <img
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&q=80"
              alt="Collaboration"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
