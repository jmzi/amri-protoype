import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-outer">
      <footer>
        <div className="ft">
          <div className="fc">
            <div className="fl">
              <Link href="/" className="">
                <img
                  src="https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776558591/logo_kv0csr.png"
                  width="120px"
                  alt=""
                />
              </Link>
            </div>
            <p>
              Crafting high-performance web experiences for startups and growing businesses worldwide.
            </p>
          </div>
          <div className="fc">
            <h4>SERVICES</h4>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Social Media Management</Link></li>
              <li><Link href="/services">WebCasting</Link></li>
              <li><Link href="/services">Brand Boosting</Link></li>
            </ul>
          </div>
          <div className="fc">
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Our Works</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="fc">
            <h4>CONNECT</h4>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="https://ph.linkedin.com/company/amri-web-portal">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/digitalmarketingbyamri">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="fb">
          <p>© 2026 Amri Digital Marketing. All rights reserved.</p>
          <div className="socials">
            <a href="#" className="sp">GitHub</a>
            <a href="#" className="sp">LinkedIn</a>
            <a href="#" className="sp">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
