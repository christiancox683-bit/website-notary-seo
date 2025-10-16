import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gold-400 mb-4">Elite Notary Services</h3>
            <p className="text-gray-300 mb-4">Your trusted local loan signing agent and notary public. Certified, insured, and available 24/7.</p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-gold-500 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold-500 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold-500 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-gold-400 transition-colors">Loan Signings</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-gold-400 transition-colors">General Notary</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-gold-400 transition-colors">Mobile Notary</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-gold-400 transition-colors">Remote Online Notarization</button></li>
              <li><button onClick={() => scrollToSection('service-area')} className="hover:text-gold-400 transition-colors">Service Area</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('blog')} className="hover:text-gold-400 transition-colors">Blog & Articles</button></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold-400" />
                <a href="tel:+19153127216" className="hover:text-gold-400">915-312-7216</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-400" />
                <a href="mailto:christiancox683@gmail.com" className="hover:text-gold-400">christiancox683@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-400 mt-1" />
                <span>El Paso, Texas and surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Elite Notary Services. All rights reserved. | Licensed & Insured Notary Public</p>
          <p className="text-sm mt-2">NNA Certified Loan Signing Agent | $100K E&O Insurance | Background Screened</p>
        </div>
      </div>
    </footer>;
}