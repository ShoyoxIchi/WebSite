import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Star, CheckCircle2, XCircle, ExternalLink, ArrowRight } from 'lucide-react';
import AdPlaceholder from '../components/common/AdPlaceholder';

const ReviewPage = () => {
  const { slug } = useParams();
  const [provider, setProvider] = useState(null);
  const [review, setReview] = useState(null);
  const [allProviders, setAllProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch review first to get providerId (though we assume slug matches mostly, data model links them)
        // Actually, our API for provider is by slug? 
        // In our seed data, provider has a slug 'hostinger-review-2026'.
        // So we can fetch provider by slug.
        
        const [provData, reviewData, allProv] = await Promise.all([
            api.getProviderBySlug(slug),
            api.getReviewBySlug(slug),
            api.getProviders() // For sidebar
        ]);

        if (provData) {
            setProvider(provData);
            setReview(reviewData);
            setAllProviders(allProv);
        } else {
            setError(true);
        }
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    loadData();
  }, [slug]);

  if (loading) return <div className="container py-12">Loading review...</div>;
  if (error || !provider) return <div className="container py-12">Review not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Review Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-6">
                    <div>
                        <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">
                            Updated {review?.date || 'August 2025'}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            {provider.name} Review
                        </h1>
                        <div className="flex items-center gap-2 mt-2 text-slate-500">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-slate-900 text-lg">{provider.rating}</span>
                            <span>/ 5.0 Rating</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm w-full md:w-auto">
                        <div className="text-center">
                            <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Starting at</span>
                            <div className="text-3xl font-extrabold text-primary">${provider.priceIntro}<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 font-bold" asChild>
                            <a href={provider.link} target="_blank" rel="noopener noreferrer">
                                Visit {provider.name} <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <span className="text-[10px] text-slate-400">30-day money-back guarantee</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                {/* Verdict Box */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-l-primary">
                    <h2 className="text-xl font-bold mb-3">Our Verdict</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {provider.verdict}
                    </p>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                        <h3 className="font-bold text-green-700 flex items-center gap-2 mb-4">
                            <CheckCircle2 className="h-5 w-5" /> Pros
                        </h3>
                        <ul className="space-y-3">
                            {provider.pros.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    {pro}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-red-100 shadow-sm">
                        <h3 className="font-bold text-red-700 flex items-center gap-2 mb-4">
                            <XCircle className="h-5 w-5" /> Cons
                        </h3>
                         <ul className="space-y-3">
                            {provider.cons.map((con, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                    <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                                    {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white p-8 rounded-xl border shadow-sm prose prose-slate max-w-none">
                    {review ? (
                        <div dangerouslySetInnerHTML={{ __html: review.content }} />
                    ) : (
                        <p>Detailed review content coming soon.</p>
                    )}
                    
                    <h3 className="mt-8">Speed Test Results</h3>
                    <div className="not-prose bg-slate-50 p-6 rounded-lg border">
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-bold">{provider.name}</span>
                                    <span className="font-bold text-green-600">{provider.speed}</span>
                                </div>
                                <Progress value={90} className="h-3 bg-slate-200" indicatorColor="bg-green-500" />
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-500">Industry Average</span>
                                    <span className="text-slate-500">850 ms</span>
                                </div>
                                <Progress value={45} className="h-3 bg-slate-200" indicatorColor="bg-slate-400" />
                            </div>
                        </div>
                        <p className="text-xs text-center text-slate-400 mt-4">Lower is better. Tested using GTmetrix.</p>
                    </div>
                </div>

                 <AdPlaceholder label="In-Content Ad" />

                 <div className="text-center py-8">
                    <Button size="lg" className="w-full md:w-auto text-lg px-12 h-14" asChild>
                        <a href={provider.link} target="_blank" rel="noopener noreferrer">
                            Get Started with {provider.name}
                        </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                        30-day money-back guarantee. No risk to try.
                    </p>
                 </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
                <div className="sticky top-24 space-y-6">
                    <AdPlaceholder width="100%" height="300px" label="Sidebar Ad" />
                    
                    <div className="bg-white border rounded-xl p-6 shadow-sm">
                        <h3 className="font-bold mb-4">Alternatives</h3>
                        <ul className="space-y-4">
                            {allProviders.filter(p => p.id !== provider.id).slice(0, 3).map(p => (
                                <li key={p.id} className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold">
                                        {p.name.substring(0,1)}
                                    </div>
                                    <div>
                                        <Link to={`/reviews/${p.slug}`} className="text-sm font-semibold hover:text-primary block">
                                            {p.name}
                                        </Link>
                                        <span className="text-xs text-slate-500">From ${p.priceIntro}/mo</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
