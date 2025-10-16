import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xanyqbvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 2 hours.",
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call us at 915-312-7216",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return <>
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-6">Schedule your appointment or ask us a question</p>
          <button onClick={() => setBookingOpen(true)} className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center gap-2">
            <Calendar size={20} /> Book Appointment Online
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Phone</p>
                  <a href="tel:+19153127216" className="text-gold-600 hover:underline text-lg">915-312-7216</a>
                  <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Email</p>
                  <a href="mailto:christiancox683@gmail.com" className="text-gold-600 hover:underline">christiancox683@gmail.com</a>
                  <p className="text-sm text-gray-600">Response within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Service Area</p>
                  <p className="text-gray-700">El Paso, Texas and surrounding areas</p>
                  <p className="text-sm text-gray-600">30-mile mobile service radius</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500 p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Hours</p>
                  <p className="text-gray-700">24/7 by Appointment</p>
                  <p className="text-sm text-gray-600">Same-day service available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50" />
              <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50" />
              <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50" />
              <select name="service" value={formData.service} onChange={handleChange} disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50">
                <option value="">Select Service Type</option>
                <option value="loan">Loan Signing</option>
                <option value="general">General Notary</option>
                <option value="mobile">Mobile Notary</option>
                <option value="ron">Remote Online Notarization</option>
              </select>
              <textarea name="message" placeholder="Tell us about your needs..." rows={4} value={formData.message} onChange={handleChange} disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50"></textarea>
              <button type="submit" disabled={loading} className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <Send size={20} /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
  </>;
}