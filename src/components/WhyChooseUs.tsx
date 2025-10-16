import React from 'react';
import { Award, Shield, Clock, Star, CheckCircle, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const credentials = [
    {
      icon: <Award size={32} />,
      title: 'NNA Certified',
      description: 'National Notary Association certified loan signing agent with ongoing education'
    },
    {
      icon: <Shield size={32} />,
      title: '$100K E&O Insurance',
      description: 'Fully insured with errors & omissions coverage for your protection'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Background Screened',
      description: 'Comprehensive background check completed for your peace of mind'
    },
    {
      icon: <Clock size={32} />,
      title: 'Introductory Rates',
      description: 'Special pricing while building experience - quality service at competitive rates'
    },
    {
      icon: <Star size={32} />,
      title: '5-Star Rated',
      description: 'Consistently rated excellent by clients, title companies, and lenders'
    },
    {
      icon: <Users size={32} />,
      title: 'Bilingual Services',
      description: 'English and Spanish speaking notary for your convenience'
    }
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional credentials and commitment to excellence that set us apart
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((cred, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-gold-400 mb-4">{cred.icon}</div>
              <h3 className="text-xl font-bold mb-2">{cred.title}</h3>
              <p className="text-gray-300">{cred.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
