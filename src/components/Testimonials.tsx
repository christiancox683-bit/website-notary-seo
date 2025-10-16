import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homebuyer',
      rating: 5,
      text: 'Absolutely professional! Made our refinance signing so easy. Arrived on time, explained everything clearly, and was incredibly patient with all our questions.',
      service: 'Refinance Signing'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      rating: 5,
      text: 'Used their mobile notary service for business documents. Quick response, fair pricing, and very professional. Will definitely use again!',
      service: 'Business Notarization'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Real Estate Agent',
      rating: 5,
      text: 'I recommend this notary to all my clients. Always reliable, detail-oriented, and makes the signing process smooth. A true professional!',
      service: 'Purchase Signing'
    },
    {
      name: 'Robert Williams',
      role: 'Attorney',
      rating: 5,
      text: 'Outstanding service for estate planning documents. Knowledgeable, thorough, and respectful. Exactly what you want in a notary professional.',
      service: 'Estate Planning'
    },
    {
      name: 'Lisa Anderson',
      role: 'Homeowner',
      rating: 5,
      text: 'Needed a last-minute HELOC signing and they accommodated us same day! Professional, efficient, and made the whole process stress-free.',
      service: 'HELOC Signing'
    },
    {
      name: 'David Thompson',
      role: 'Title Company Manager',
      rating: 5,
      text: 'We use this signing agent regularly. Zero errors, always on time, and clients consistently give positive feedback. Highly recommended!',
      service: 'Multiple Loan Types'
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="text-gold-400 mb-4" size={48} />
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-gold-400 fill-current" size={24} />
              ))}
            </div>
            <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentIndex].text}"</p>
            <div className="border-t pt-6">
              <p className="font-bold text-navy-900 text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              <p className="text-sm text-gold-600 mt-1">{testimonials[currentIndex].service}</p>
            </div>
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
