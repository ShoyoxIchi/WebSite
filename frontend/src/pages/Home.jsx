import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, Star, ExternalLink, ChevronRight, Zap, Shield, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import AdPlaceholder from '../components/common/AdPlaceholder';

const Home = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getProviders();
      setProviders(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
      return <div className="min-h-screen flex items-center justify-center">Loading best deals...</div>;
  }

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-12 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <Badge variant="outline" className="bg-white text-blue-700 border-blue-200 px-4 py-1 mb-4 shadow-sm">
            Updated for August 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Best Cheap WordPress Hosting <br/>
            <span className="text-primary">Ranked & Tested (2026)</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We bought and tested the most popular budget hosting plans so you don't have to. 
            Real speed tests. Real uptime data. No fluff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 h-14 bg-primary hover:bg-blue-700 shadow-lg shadow-blue-500/20" asChild>
                <a href="#comparison-table">See Top Picks</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link to="/guides/how-to-choose-hosting">How We Test</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section id="comparison-table" className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    Top 5 Budget Hosts Compared
                </h2>
                <span className="text-sm text-muted-foreground hidden md:inline-block">Sorted by overall value</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                {/* Desktop/Tablet Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-5 bg-slate-50 border-b text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-3">Hosting Provider</div>
                    <div className="col-span-2">Price /mo</div>
                    <div className="col-span-2">Speed Score</div>
                    <div className="col-span-3">Best Feature</div>
                    <div className="col-span-2 text-right">Rating</div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-slate-100">
                    {providers.map((provider, index) => (
                        <div key={provider.id} className="relative group transition-colors hover:bg-blue-50/30">
                            {index === 0 && (
                                <div className="absolute top-0 left-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-br-md z-10">
                                    #1 Editor's Choice
                                </div>
                            )}
                            
                            <div className="p-5 md:grid md:grid-cols-12 md:gap-4 md:items-center flex flex-col gap-4">
                                {/* Provider Info */}
                                <div className="col-span-3 flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400 text-xs overflow-hidden">
                                        {/* Mock Logo Handling */}
                                        <div className="text-center">{provider.name.substring(0,2)}</div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">{provider.name}</h3>
                                        <Link to={`/reviews/${provider.slug}`} className="text-sm text-primary hover:underline flex items-center gap-1">
                                            Read Review <ChevronRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="col-span-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-slate-900">${provider.priceIntro}</span>
                                        <span className="text-sm text-slate-500">/mo</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Renews at ${provider.priceRenewal}</p>
                                </div>

                                {/* Speed */}
                                <div className="col-span-2">
                                    <div className="flex items-center gap-2">
                                        <Zap className={`h-4 w-4 ${parseInt(provider.speed) < 300 ? 'text-green-500' : 'text-yellow-500'}`} />
                                        <span className="font-medium text-slate-700">{provider.speed}</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Avg Load Time</p>
                                </div>

                                {/* Feature */}
                                <div className="col-span-3">
                                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-normal hover:bg-slate-100 mb-1">
                                        {provider.bestFor}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                        <Check className="h-3 w-3 text-green-500" />
                                        {provider.storage}
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <Check className="h-3 w-3 text-green-500" />
                                        {provider.websites} Website{provider.websites !== '1' && 's'}
                                    </div>
                                </div>

                                {/* CTA & Rating */}
                                <div className="col-span-2 flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span className="font-bold text-slate-900">{provider.rating}</span>
                                        <span className="text-xs text-slate-400">/ 5</span>
                                    </div>
                                    <Button className="w-full md:w-auto bg-primary hover:bg-blue-600 font-bold" size="sm" asChild>
                                        <a href={provider.link} target="_blank" rel="noopener noreferrer">
                                            Visit Site <ExternalLink className="ml-2 h-3 w-3" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-4">
                * Prices listed are for the initial term. Regular renewal rates apply.
            </p>
        </div>
      </section>

      {/* Content Section with Ads */}
      <section className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
        <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">How to Choose the Best Cheap Hosting</h2>
            <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                    Choosing a hosting provider in 2026 isn't just about finding the lowest price tag. 
                    A $1/month host might cost you thousands in lost sales if your site is down or loads slowly.
                </p>
                <p>
                    We evaluate hosts based on <strong>Value for Money</strong>. This means we look for:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Speed:</strong> Does it load under 2 seconds?</li>
                    <li><strong>Uptime:</strong> Is it reliable (99.9% or higher)?</li>
                    <li><strong>Support:</strong> Can they actually help you when things break?</li>
                    <li><strong>Hidden Costs:</strong> Are the renewal prices reasonable?</li>
                </ul>

                <AdPlaceholder height="250px" label="In-Article Ad Space" />

                <h3>Why Hostinger is our #1 Pick for 2026</h3>
                <p>
                    After testing 15+ providers, Hostinger remains the champion of the budget category. 
                    They use LiteSpeed Enterprise servers even on their cheapest plans, which gives them a massive performance edge over competitors using standard Apache servers.
                </p>
                <p>
                    Plus, their interface is built for 2026, not 2005. It's clean, fast, and intuitive.
                </p>
            </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
             <div className="bg-slate-50 border p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Our Promise
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                    We actually buy these plans. We install WordPress. We measure speed. We talk to support.
                </p>
                <Link to="/about" className="text-sm font-medium text-primary hover:underline">Read our testing methodology &rarr;</Link>
             </div>

             <AdPlaceholder width="300px" height="250px" label="Sidebar Ad" />

             <div className="bg-white border rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                    {providers.map(p => (
                        <li key={p.id}>
                            <Link to={`/reviews/${p.slug}`} className="text-slate-600 hover:text-primary block py-1 border-b border-slate-50 last:border-0">
                                {p.name} Review
                            </Link>
                        </li>
                    ))}
                </ul>
             </div>
        </aside>
      </section>
    </div>
  );
};

export default Home;
