import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">About CheapWP2026</h1>
      
      <div className="prose prose-lg prose-slate text-slate-600">
        <p className="lead text-xl">
            We are a team of WordPress developers and enthusiasts who got tired of fake hosting reviews.
        </p>
        <p>
            Most "hosting review" sites are just lists of whoever pays the highest commission. We wanted to build something different. 
            Something useful for beginners who are starting their first website in 2026.
        </p>

        <h3>Our Testing Methodology</h3>
        <p>
            When we review a host, we don't just read their marketing page. We:
        </p>
        <ul>
            <li><strong>Buy a plan:</strong> We use our own credit card to sign up anonymously.</li>
            <li><strong>Install WordPress:</strong> We test how easy (or hard) the onboarding is.</li>
            <li><strong>Run Speed Tests:</strong> We use GTmetrix and Google PageSpeed Insights to measure real-world performance.</li>
            <li><strong>Harass Support:</strong> We open tickets and chat with support agents to test their knowledge and patience.</li>
        </ul>

        <h3>Transparency & Affiliate Disclosure</h3>
        <p>
            CheapWP2026 is reader-supported. When you buy through links on our site, we may earn an affiliate commission. 
            This does not affect our rankings or reviews. 
        </p>
        <p>
            For example, we often rank Hostinger #1 not because they pay the most (they don't), but because our data shows they consistently offer the best speed-per-dollar ratio in the industry.
        </p>

        <h3>Contact Us</h3>
        <p>
            Have a question? Found a mistake? Email us at hello@cheapwp2026.com
        </p>
      </div>
    </div>
  );
};

export default About;
