import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Disclaimer */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="font-bold text-xl tracking-tight text-primary">
              CheapWP<span className="text-foreground">2026</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We test and review budget WordPress hosting providers so beginners can make confident choices. All opinions based on real 2026 tests.
            </p>
            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-md text-xs text-blue-800">
              <span className="font-semibold">Advertiser Disclosure:</span> We may earn a commission if you purchase through our links – at no extra cost to you. This helps us keep our testing labs running.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/reviews/hostinger-review-2026" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/comparisons/bluehost-vs-hostinger" className="hover:text-primary transition-colors">Comparisons</Link></li>
              <li><Link to="/guides/how-to-choose-hosting" className="hover:text-primary transition-colors">Guides</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} CheapWP2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
