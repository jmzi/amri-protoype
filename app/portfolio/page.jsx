import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SvgDefs from '@/components/SvgDefs';
import RevealInit from '@/components/RevealInit';
import PortfolioGrid from '@/components/PortfolioGrid';
import portfolio from '@/data/portfolio.json';

export const metadata = {
  title: 'Our Works – Amri Digital Marketing',
};

export default function PortfolioPage() {
  return (
    <>
      <SvgDefs />
      <Nav />
      <RevealInit />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner reveal">
          <div className="page-hero-text">
            <div className="pill">Our Works</div>
            <h1>
              Work That
              <br />
              <span className="hl">Speaks for Itself</span>
            </h1>
            <p>
              A full archive of projects I've built — from e-commerce stores and corporate sites to blogs and learning platforms. Every project is a story of a problem solved.
            </p>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <div className="hstat-num">
                50<span>+</span>
              </div>
              <div className="hstat-label">Projects Built</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">
                5<span>+</span>
              </div>
              <div className="hstat-label">Industries</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">
                40<span>+</span>
              </div>
              <div className="hstat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS + GRID (handled by PortfolioGrid) */}
      <PortfolioGrid items={portfolio} variant="page" />

      {/* CTA BAND */}
      <div className="outer" style={{ paddingBottom: 0 }}>
        <div className="cta-band reveal">
          <h2>Like what you see? Let's build something together.</h2>
          <div className="cta-btns">
            <Link href="/contact" className="btn-black">
              Start a Project
            </Link>
            <Link href="/services" className="btn-ghost-dark">
              View Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
