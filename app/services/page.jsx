import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealInit from '@/components/RevealInit';
import FaqList from '@/components/FaqList';

export const metadata = {
  title: 'Services – Amri Digital Marketing',
};

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function ServicesPage() {
  const faqItems = [
    {
      q: 'Do you work with clients outside the Philippines?',
      a: "Absolutely. I work with clients worldwide. Most of my projects are done fully remotely, and I'm comfortable with async communication across time zones.",
    },
    {
      q: 'How does payment work?',
      a: 'I typically require a 50% deposit before work begins, with the remaining 50% due on delivery. For larger projects, milestone-based payments can be arranged.',
    },
    {
      q: 'What if I need changes after the project is delivered?',
      a: 'All projects include a 30-day post-launch window for bug fixes and minor tweaks at no extra cost. Larger feature changes or new scope can be quoted separately.',
    },
    {
      q: 'Can you work with my existing design?',
      a: 'Yes. If you have a Figma file, XD mockup, or even a rough sketch, I can build from it. I can also recommend improvements if I spot UX issues during the build.',
    },
    {
      q: 'What information do you need to get started?',
      a: "A brief description of what you need, your target audience, any reference sites you like, and your timeline or deadline. We'll sort the rest on our discovery call.",
    },
  ];

  return (
    <>
      <Nav />
      <RevealInit />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner centered reveal">
          <div className="page-hero-text">
            <div className="pill">What I Offer</div>
            <h1>
              Services Built for
              <br />
              <span className="hl">Real Results</span>
            </h1>
            <p>
              From landing pages to full-scale web apps, every service is delivered with clean code, sharp design, and a focus on your business goals.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="outer">
        <div className="services-grid reveal">
          {/* WEBSITE DESIGN & DEVELOPMENT */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3>WEBSITE DESIGN & DEVELOPMENT</h3>
            <p>Custom-built, high-converting websites designed to attract clients, build trust, and grow your business online.</p>
            <ul>
              <li>Business websites & landing pages</li>
              <li>Mobile-responsive design</li>
              <li>SEO-ready structure</li>
              <li>Fast loading speed optimization</li>
              <li>Conversion-focused UI/UX</li>
            </ul>
            <div className="price">
              <div>
                <div className="price-from">Starting from</div>
                <div className="price-val">₱15,000</div>
              </div>
              <Link href="/contact" className="price-link">
                Get a Quote →
              </Link>
            </div>
          </div>

          {/* SOCIAL MEDIA MANAGEMENT */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3>SOCIAL MEDIA MANAGEMENT</h3>
            <p>Grow your brand and attract more customers with strategic content, consistent posting, and audience engagement.</p>
            <ul>
              <li>Content planning & scheduling</li>
              <li>Facebook & Instagram management</li>
              <li>Engaging captions & creatives</li>
              <li>Audience growth strategies</li>
              <li>Monthly performance reports</li>
            </ul>
            <div className="price">
              <div>
                <div className="price-from">Starting from</div>
                <div className="price-val">₱5,200</div>
              </div>
              <Link href="/contact" className="price-link">
                Get a Quote →
              </Link>
            </div>
          </div>

          {/* WEBCASTING */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3>WEBCASTING | HYBRID PRESSCON</h3>
            <p>Professional live streaming solutions for events, press conferences, and webinars with seamless online and offline integration.</p>
            <ul>
              <li>Live streaming setup & production</li>
              <li>Multi-platform broadcasting (FB, YouTube, Zoom)</li>
              <li>Audio & video quality optimization</li>
              <li>Hybrid event integration</li>
              <li>Technical support & event management</li>
            </ul>
            <div className="price">
              <div>
                <div className="price-from">Starting from</div>
                <div className="price-val">₱5,500</div>
              </div>
              <Link href="/contact" className="price-link">
                Get a Quote →
              </Link>
            </div>
          </div>

          {/* AUTOCAD */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h3>AUTOCADD | SKETCHUP | VRAY | ENSCAPE</h3>
            <p>Professional architectural and 3D visualization services to bring your concepts into realistic and detailed designs.</p>
            <ul>
              <li>2D drafting (AutoCAD)</li>
              <li>3D modeling (SketchUp)</li>
              <li>Realistic rendering (V-Ray / Enscape)</li>
              <li>Interior & exterior visualization</li>
              <li>Project presentation materials</li>
            </ul>
            <div className="price">
              <div>
                <div className="price-from">Starting from</div>
                <div className="price-val">₱30,000</div>
              </div>
              <Link href="/contact" className="price-link">
                Get a Quote →
              </Link>
            </div>
          </div>

          {/* BRAND BOOSTING */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h3>BRAND BOOSTING</h3>
            <p>Build a strong online presence and attract more clients through targeted marketing and brand positioning strategies.</p>
            <ul>
              <li>Digital marketing strategy</li>
              <li>Paid ads (Facebook & Google)</li>
              <li>Lead generation funnels</li>
              <li>Brand identity improvement</li>
              <li>Analytics & performance tracking</li>
            </ul>
            <div className="price">
              <div>
                <div className="price-from">Starting from</div>
                <div className="price-val">₱5,600</div>
              </div>
              <Link href="/contact" className="price-link">
                Get a Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="outer">
        <section className="process reveal">
          <div className="pill">How It Works</div>
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Discovery Call</h3>
              <p>We kick off with a free 30-min call to understand your goals, timeline, and budget. No obligation.</p>
              <div className="step-connector"></div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Proposal & Scope</h3>
              <p>We send a detailed proposal with deliverables, timeline, and fixed pricing. No surprise invoices.</p>
              <div className="step-connector"></div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Design & Build</h3>
              <p>Weekly check-ins, a shared staging environment, and regular feedback rounds keep you in the loop.</p>
              <div className="step-connector"></div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h3>Launch & Support</h3>
              <p>We handle deployment and provide 30 days of post-launch support to make sure everything runs perfectly.</p>
            </div>
          </div>
        </section>
      </div>

      {/* PACKAGES */}
      <div className="outer">
        <section className="packages reveal">
          <div className="pill">Pricing</div>
          <h2>Simple, Transparent Packages</h2>
          <p>Not sure which service fits? These bundles cover the most common project types.</p>
          <div className="pkg-grid">
            <div className="pkg-card">
              <div className="pkg-name">STARTER</div>
              <div className="pkg-price">
                ₱10,200 <span>/ project</span>
              </div>
              <div className="pkg-desc">Perfect for landing pages, portfolio sites, and simple business websites.</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                <li><CheckIcon />Up to 5 pages</li>
                <li><CheckIcon />Responsive design</li>
                <li><CheckIcon />Contact form</li>
                <li><CheckIcon />SEO basics</li>
                <li><CheckIcon />14-day delivery</li>
                <li className="off"><XIcon />CMS integration</li>
                <li className="off"><XIcon />E-commerce</li>
              </ul>
              <Link href="/contact" className="pkg-btn pkg-btn-outline">
                Get Started
              </Link>
            </div>

            <div className="pkg-card featured">
              <div className="pkg-badge">Most Popular</div>
              <div className="pkg-name">GROWTH</div>
              <div className="pkg-price">
                ₱15,500 <span>/ project</span>
              </div>
              <div className="pkg-desc">Ideal for e-commerce stores, blogs, and business sites that need a CMS and custom features.</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                <li><CheckIcon />Up to 15 pages</li>
                <li><CheckIcon />Responsive design</li>
                <li><CheckIcon />CMS integration</li>
                <li><CheckIcon />E-commerce (up to 50 products)</li>
                <li><CheckIcon />Advanced SEO</li>
                <li><CheckIcon />30-day support</li>
                <li><CheckIcon />21-day delivery</li>
              </ul>
              <Link href="/contact" className="pkg-btn pkg-btn-solid">
                Get Started
              </Link>
            </div>

            <div className="pkg-card">
              <div className="pkg-name">ENTERPRISE</div>
              <div className="pkg-price">
                Custom <span>/ project</span>
              </div>
              <div className="pkg-desc">Full-scale web applications, SaaS platforms, and complex custom builds with bespoke requirements.</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                <li><CheckIcon />Unlimited pages & features</li>
                <li><CheckIcon />Full-stack development</li>
                <li><CheckIcon />Custom API & integrations</li>
                <li><CheckIcon />Auth, payments, roles</li>
                <li><CheckIcon />Cloud deployment & CI/CD</li>
                <li><CheckIcon />60-day support</li>
                <li><CheckIcon />Custom timeline</li>
              </ul>
              <Link href="/contact" className="pkg-btn pkg-btn-outline">
                Let's Talk
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="outer">
        <section className="faq reveal">
          <div className="pill">FAQ</div>
          <h2>Common Questions</h2>
          <FaqList items={faqItems} />
        </section>
      </div>

      {/* CTA BAND */}
      <div className="outer">
        <div className="cta-band reveal">
          <h2>Have a project in mind? Let's talk.</h2>
          <div className="cta-btns">
            <Link href="/contact" className="btn-black">
              Start a Project
            </Link>
            <Link href="/about" className="btn-ghost">
              Learn About Me
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
