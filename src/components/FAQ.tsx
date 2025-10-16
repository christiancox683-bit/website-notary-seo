import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are your fees for notary services?',
      answer: 'General notary services start at $15 per signature. Loan signing packages range from $100-$150 depending on document complexity. Mobile notary includes a travel fee based on distance. Contact us for a specific quote.'
    },
    {
      question: 'How far will you travel for mobile notary service?',
      answer: 'We provide mobile notary services within a 30-mile radius of our base location. For locations beyond this, please contact us to discuss availability and additional travel fees.'
    },
    {
      question: 'Do you offer same-day or emergency signings?',
      answer: 'Yes! We offer same-day service and are available 24/7 for emergency signings. Please call us directly for urgent requests to ensure immediate availability.'
    },
    {
      question: 'What documents do I need to bring to a notarization?',
      answer: 'You must bring a valid, government-issued photo ID (driver\'s license, passport, or state ID). For loan signings, the title company will provide all documents. For general notarizations, bring the unsigned documents.'
    },
    {
      question: 'Are you certified for loan signings?',
      answer: 'Yes, I am a certified loan signing agent through the National Notary Association with extensive training in mortgage documents. I carry $100,000 E&O insurance and have completed a comprehensive background check.'
    },
    {
      question: 'Can you notarize documents for someone who is hospitalized?',
      answer: 'Absolutely. We frequently provide mobile notary services at hospitals, nursing homes, and assisted living facilities. We understand the sensitivity of these situations and handle them with care and professionalism.'
    },
    {
      question: 'What is Remote Online Notarization (RON)?',
      answer: 'RON allows us to notarize documents via secure video conference. It\'s perfect for clients who are out of state or prefer the convenience of digital signing. We use state-approved platforms that meet all legal requirements.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'You can call us at 915-312-7216, email christiancox683@gmail.com, or fill out the contact form on this page. We typically respond within 2 hours and can often accommodate same-day requests.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy-900 text-lg">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-gold-500" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
