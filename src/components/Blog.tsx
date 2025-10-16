import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: 'What to Expect at Your Loan Signing Appointment',
      excerpt: 'A comprehensive guide to the loan signing process, what documents you\'ll see, and how to prepare for a smooth closing.',
      date: 'October 10, 2025',
      category: 'Loan Signings'
    },
    {
      title: 'Notary vs Loan Signing Agent: Understanding the Difference',
      excerpt: 'Learn about the specialized training and certification required for loan signing agents and how it differs from general notary work.',
      date: 'October 5, 2025',
      category: 'Education'
    },
    {
      title: 'Mobile Notary Services: Convenience at Your Doorstep',
      excerpt: 'Discover the benefits of mobile notary services and when it makes sense to have a notary come to your location.',
      date: 'September 28, 2025',
      category: 'Services'
    },
    {
      title: 'Common Notarization Mistakes and How to Avoid Them',
      excerpt: 'Protect yourself from invalid notarizations by understanding proper procedures and common errors to watch for.',
      date: 'September 20, 2025',
      category: 'Tips'
    },
    {
      title: 'Remote Online Notarization: The Future is Here',
      excerpt: 'Everything you need to know about RON services, including security, legality, and how the process works.',
      date: 'September 15, 2025',
      category: 'Technology'
    },
    {
      title: 'Estate Planning Documents: Why Proper Notarization Matters',
      excerpt: 'Understanding the critical role of notarization in wills, trusts, and powers of attorney for estate planning.',
      date: 'September 8, 2025',
      category: 'Estate Planning'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Resources & Insights</h2>
          <p className="text-xl text-gray-600">Expert guidance on notary services and loan signings</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="bg-gold-500 text-white px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Calendar size={14} /> {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-gold-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
