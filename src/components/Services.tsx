import React, { useState } from 'react';
import { FileText, Home, Briefcase, Smartphone, Clock, Shield, Award, ClipboardCheck } from 'lucide-react';


export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: <Home size={40} />,
      title: 'Loan Signing Services',
      description: 'Refinances, purchases, HELOCs, reverse mortgages, and seller packages handled with precision.',
      details: 'Certified loan signing agent with extensive training in mortgage documents. Available for last-minute signings.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760579935784_a92716b8.webp'
    },
    {
      icon: <FileText size={40} />,
      title: 'General Notary Work',
      description: 'Affidavits, powers of attorney, trusts, wills, and all general notarization needs.',
      details: 'Professional handling of estate planning documents, business contracts, and legal paperwork.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760579936557_069b20bb.webp'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Mobile Notary',
      description: 'We come to you - home, office, hospital, or anywhere convenient for your signing.',
      details: 'Same-day and after-hours appointments available. Serving a 30-mile radius.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760579935051_1ba0987b.webp'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Remote Online Notarization',
      description: 'RON services for digital signings via secure video conference platform.',
      details: 'State-certified for remote notarization. Perfect for out-of-state clients.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760579937569_76f0f9f5.webp'
    },
    {
      icon: <Award size={40} />,
      title: 'Apostille Services',
      description: 'Document authentication for international use with apostille certification.',
      details: 'Facilitate apostille processing for birth certificates, diplomas, court documents, and corporate papers for use abroad.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760582297314_ce899459.webp'
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: 'Field Inspector Services',
      description: 'Professional property inspections and documentation for lenders and insurance companies.',
      details: 'Comprehensive field inspection reports including property condition assessments, occupancy verification, and photo documentation.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760582298165_22d15639.webp'
    }
  ];


  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Professional Notary Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive notarization solutions tailored to your needs with accuracy and professionalism.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedService(selectedService === service.title ? null : service.title)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-gold-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {selectedService === service.title && (
                  <p className="text-sm text-navy-700 bg-navy-50 p-3 rounded-lg">{service.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
