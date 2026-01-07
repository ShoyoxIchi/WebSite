import React from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/common/AdPlaceholder';

const GuidePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <span className="text-primary font-bold tracking-wide text-sm uppercase">Beginner's Guide</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">How to Choose Cheap WordPress Hosting in 2026</h1>
        <p className="text-slate-500">By Admin • Updated August 15, 2025</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <article className="md:col-span-2 prose prose-slate prose-lg text-slate-600">
           <p className="lead">
             Hosting companies use confusing terms like "bandwidth," "inodes," and "CDN" to confuse beginners. 
             This guide cuts through the jargon to tell you exactly what matters.
           </p>
           
           <h3>1. Speed is Money</h3>
           <p>
             Google Core Web Vitals are a major ranking factor in 2026. If your site takes >3 seconds to load, 
             50% of mobile users will leave.
           </p>
           <p>
             <strong>Look for:</strong> NVMe Storage, LiteSpeed Web Server, and Server Caching. 
             Avoid "HDD" storage at all costs.
           </p>

           <AdPlaceholder height="250px" label="In-Article Ad" />

           <h3>2. "Unlimited" is a Myth</h3>
           <p>
             Many cheap hosts promise "Unlimited Storage" or "Unlimited Bandwidth." This is marketing fluff. 
             If you use too much CPU (processing power), they will throttle your site.
           </p>
           <p>
             Instead of worrying about "unlimited," check the <strong>CPU and RAM</strong> allocation. 
             Hostinger, for example, is transparent about giving you 1 Core and 1GB RAM on their starter plan.
           </p>

           <h3>3. Support: Chat vs. Phone</h3>
           <p>
             Do you need to hear a human voice? Go with <Link to="/reviews/bluehost-review-2026">Bluehost</Link>.
             Are you okay with text chat (which is often faster)? <Link to="/reviews/hostinger-review-2026">Hostinger</Link> is great.
           </p>

           <h3>Summary Checklist</h3>
           <ul>
             <li>✅ Free SSL Certificate (Required for security)</li>
             <li>✅ One-click WordPress Installer</li>
             <li>✅ SSD or NVMe Storage</li>
             <li>✅ 24/7 Support availability</li>
           </ul>
        </article>

        <aside className="space-y-6">
            <AdPlaceholder width="300px" height="600px" label="Sidebar Skyscraper" />
        </aside>
      </div>
    </div>
  );
};

export default GuidePage;
