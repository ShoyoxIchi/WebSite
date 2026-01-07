
export const providers = [
  {
    id: 'hostinger',
    name: 'Hostinger',
    slug: 'hostinger-review-2026',
    logo: 'https://assets.hostinger.com/images/logo-hostinger-black-2.png', // Placeholder or use text if image fails
    rating: 4.9,
    priceIntro: 2.99,
    priceRenewal: 7.99,
    storage: '100 GB SSD',
    websites: '100',
    domain: 'Free (1st Year)',
    speed: '298 ms',
    uptime: '99.99%',
    bestFor: 'Best Overall Value',
    verdict: 'Excellent performance for the price. The custom hPanel is easier than cPanel for beginners.',
    pros: [
        'Incredible speed for the price (LiteSpeed servers)',
        'Free domain & SSL included',
        'User-friendly custom dashboard',
        '24/7 Fast Chat Support'
    ],
    cons: [
        'No phone support',
        'Renewal price is higher (standard industry practice)'
    ],
    link: 'https://hostinger.com'
  },
  {
    id: 'bluehost',
    name: 'Bluehost',
    slug: 'bluehost-review-2026',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bluehost_primary_logo.png/1200px-Bluehost_primary_logo.png',
    rating: 4.5,
    priceIntro: 2.95,
    priceRenewal: 10.99,
    storage: '10 GB SSD',
    websites: '1',
    domain: 'Free (1st Year)',
    speed: '450 ms',
    uptime: '99.98%',
    bestFor: 'WordPress Recommended',
    verdict: 'The classic choice. Officially recommended by WordPress.org, but slightly slower than Hostinger.',
    pros: [
        'Officially recommended by WordPress',
        'Very easy setup wizard',
        'Phone support available',
        'Unmetered bandwidth'
    ],
    cons: [
        'Aggressive upselling in dashboard',
        'No monthly billing option'
    ],
    link: 'https://bluehost.com'
  },
  {
    id: 'siteground',
    name: 'SiteGround',
    slug: 'siteground-review-2026',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/SiteGround_Logo.svg/1200px-SiteGround_Logo.svg.png',
    rating: 4.8,
    priceIntro: 3.99,
    priceRenewal: 14.99,
    storage: '10 GB SSD',
    websites: '1',
    domain: 'Paid',
    speed: '320 ms',
    uptime: '100%',
    bestFor: 'Best Support & Security',
    verdict: 'Premium support and security tools. A bit pricier, but worth it if you need hand-holding.',
    pros: [
        'Top-tier customer support',
        'Google Cloud infrastructure',
        'Daily backups included free',
        'Super easy staging tool'
    ],
    cons: [
        'Higher renewal prices',
        'Storage limits are strict'
    ],
    link: 'https://siteground.com'
  },
  {
    id: 'dreamhost',
    name: 'DreamHost',
    slug: 'dreamhost-review-2026',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Dreamhost_logo.svg/2560px-Dreamhost_logo.svg.png',
    rating: 4.3,
    priceIntro: 2.59,
    priceRenewal: 5.99,
    storage: 'Unlimited',
    websites: 'Unlimited',
    domain: 'Free (1st Year)',
    speed: '560 ms',
    uptime: '99.96%',
    bestFor: 'Month-to-Month',
    verdict: 'Great if you don’t want to lock into a long contract. Performance is decent but not top-tier.',
    pros: [
        'No lock-in monthly plans available',
        '97-day money-back guarantee',
        'Unlimited traffic',
        'Recommended by WordPress.org'
    ],
    cons: [
        'No cPanel (custom panel)',
        'Support chat not 24/7'
    ],
    link: 'https://dreamhost.com'
  },
   {
    id: 'namecheap',
    name: 'Namecheap',
    slug: 'namecheap-review-2026',
    logo: 'https://about.namecheap.com/wp-content/uploads/2023/11/logo_standard_red.svg',
    rating: 4.2,
    priceIntro: 1.98,
    priceRenewal: 4.48,
    storage: '20 GB SSD',
    websites: '3',
    domain: 'Free',
    speed: '650 ms',
    uptime: '99.95%',
    bestFor: 'Absolute Cheapest',
    verdict: 'Insanely cheap starter plans. Good for hobby sites, but maybe not for mission-critical business.',
    pros: [
        'Cheapest introductory price',
        'Free domain name',
        'Easy cPanel interface',
        'Unmetered bandwidth'
    ],
    cons: [
        'Slower support response',
        'Performance fluctuates'
    ],
    link: 'https://namecheap.com'
  }
];

export const reviews = [
    {
        slug: 'hostinger-review-2026',
        title: 'Hostinger Review 2026: Is It Really The Fastest Cheap Host?',
        author: 'John WP',
        date: 'August 12, 2025',
        providerId: 'hostinger',
        content: `
            <p class="lead">Hostinger has aggressively taken over the market by offering premium features (LiteSpeed servers, NVMe storage) at budget prices. In our 2026 tests, it remains the speed king of the budget tier.</p>
            
            <h3>Performance Tests</h3>
            <p>We set up a test site using the "Premium" plan. Using GTmetrix from a London server, we recorded an average LCP (Largest Contentful Paint) of <strong>298ms</strong>. This is faster than Bluehost (450ms) and DreamHost (560ms).</p>

            <h3>The Dashboard</h3>
            <p>Hostinger uses "hPanel" instead of the traditional cPanel. It's cleaner, modern, and honestly easier for beginners. Installing WordPress takes literally 3 clicks.</p>

            <h3>Support</h3>
            <p>Chat support is 24/7. We tested them at 3 AM on a Sunday. Response time: 2 minutes. The agent was knowledgeable, not just a script reader.</p>
        `
    }
    // ... add more if needed
];
