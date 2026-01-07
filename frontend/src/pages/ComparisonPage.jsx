import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Button } from '../components/ui/button';
import { Check, X, Minus, Trophy } from 'lucide-react';
import AdPlaceholder from '../components/common/AdPlaceholder';

const ComparisonPage = () => {
  const { slug } = useParams();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Basic logic to parse "bluehost-vs-hostinger"
  const isBluehostVsHostinger = slug.includes('bluehost') && slug.includes('hostinger');

  useEffect(() => {
    const fetchData = async () => {
        const data = await api.getProviders();
        setProviders(data);
        setLoading(false);
    };
    fetchData();
  }, []);
  
  const provider1 = providers.find(p => p.id === 'bluehost');
  const provider2 = providers.find(p => p.id === 'hostinger');

  if (loading) return <div className="container py-12">Loading comparison...</div>;

  if (!isBluehostVsHostinger || !provider1 || !provider2) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold">Comparison coming soon</h1>
            <p className="text-slate-500">We are currently testing these providers head-to-head.</p>
            <Button className="mt-4" asChild><Link to="/">Back to Home</Link></Button>
        </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-white border-b py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {provider1.name} vs {provider2.name}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The classic battle: The WordPress veteran vs. The speed king. 
                Which one is actually better for beginners in 2026?
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Winner Box */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-l-4 border-l-yellow-400 mb-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-yellow-100 p-4 rounded-full">
                <Trophy className="h-10 w-10 text-yellow-600" />
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">The Winner: {provider2.name}</h2>
                <p className="text-slate-600">
                    While {provider1.name} is easier for absolute tech-phobes, <strong>{provider2.name}</strong> wins by a landslide in performance, pricing, and features. The speed difference is noticeable.
                </p>
            </div>
            <Button size="lg" className="shrink-0" asChild>
                <a href={provider2.link} target="_blank" rel="noopener noreferrer">Get {provider2.name} Deal</a>
            </Button>
        </div>

        {/* Head to Head Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-12">
            <div className="grid grid-cols-3 bg-slate-100 p-4 font-bold text-center border-b">
                <div className="text-left pl-4">Feature</div>
                <div>{provider1.name}</div>
                <div>{provider2.name}</div>
            </div>
            
            <div className="divide-y">
                {[
                    { label: 'Starting Price', val1: `$${provider1.priceIntro}/mo`, val2: `$${provider2.priceIntro}/mo`, win: 2 },
                    { label: 'Renewal Price', val1: `$${provider1.priceRenewal}/mo`, val2: `$${provider2.priceRenewal}/mo`, win: 2 },
                    { label: 'Load Time', val1: provider1.speed, val2: provider2.speed, win: 2 },
                    { label: 'Uptime', val1: provider1.uptime, val2: provider2.uptime, win: 2 },
                    { label: 'Support', val1: '24/7 Chat + Phone', val2: '24/7 Chat', win: 1 },
                    { label: 'Free Domain', val1: true, val2: true, win: 0 },
                    { label: 'Storage', val1: provider1.storage, val2: provider2.storage, win: 2 },
                ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 p-4 text-center items-center hover:bg-slate-50">
                        <div className="text-left pl-4 font-medium text-slate-700">{row.label}</div>
                        <div className={`font-semibold ${row.win === 1 ? 'text-green-600' : 'text-slate-500'}`}>
                            {typeof row.val1 === 'boolean' ? (row.val1 ? <Check className="mx-auto h-5 w-5" /> : <X className="mx-auto h-5 w-5" />) : row.val1}
                        </div>
                        <div className={`font-semibold ${row.win === 2 ? 'text-green-600' : 'text-slate-500'}`}>
                             {typeof row.val2 === 'boolean' ? (row.val2 ? <Check className="mx-auto h-5 w-5" /> : <X className="mx-auto h-5 w-5" />) : row.val2}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="prose prose-slate max-w-none bg-white p-8 rounded-xl border shadow-sm">
            <h3>Detailed Breakdown</h3>
            <p>
                <strong>Bluehost</strong> has been the go-to recommendation for a decade. Their onboarding wizard is arguably the best in the business. 
                If you have never built a website before, Bluehost holds your hand perfectly.
            </p>
            <p>
                <strong>Hostinger</strong>, however, brings modern tech stack (LiteSpeed) to the masses. 
                Our tests show Hostinger sites load about 30-40% faster out of the box. 
                For SEO in 2026, speed is a ranking factor, which makes Hostinger the pragmatic choice.
            </p>
            
            <AdPlaceholder label="Comparison Ad Unit" />

            <h3>Conclusion</h3>
            <p>
                Choose <strong>Bluehost</strong> if you want phone support and the absolute easiest setup flow.
                <br/>
                Choose <strong>Hostinger</strong> if you want a faster website and lower monthly bills.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
