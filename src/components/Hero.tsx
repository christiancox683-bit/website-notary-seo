import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { BookingModal } from './BookingModal';
export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBooking = () => {
    setBookingOpen(true);
  };
  const handleCall = () => {
    window.location.href = 'tel:+19153127216';
  };
  return <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760579934253_b048ee31.webp')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Certified & Insured Notary Professional
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Local <span className="text-gold-400">Loan Signing Agent</span> & Notary
            </h1>
            <p className="text-xl mb-8 text-gray-300">Professional, accurate, and reliable notary services available 24/7. Serving El Paso, Texas and surrounding areas with mobile notary convenience.
          </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={handleBooking} className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                Schedule Appointment
              </button>
              <button onClick={handleCall} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center gap-2">
                <Phone size={20} /> Call Now
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['NNA Certified', '$100K E&O Insured', 'Background Screened', '24/7 Available'].map((badge, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="text-gold-400" size={18} />
                  <span>{badge}</span>
                </div>)}
            </div>
          </div>
          <div className="relative">
            <img src="https://d64gsuwffb70l.cloudfront.net/68f05127d4938ad6516b53d4_1760579933073_6e4f036c.webp" alt="Professional Notary" className="rounded-2xl shadow-2xl border-4 border-gold-400/30" />
          </div>
        </div>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>;
}