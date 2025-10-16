import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };
  const navItems = [{
    label: 'Services',
    id: 'services'
  }, {
    label: 'Service Area',
    id: 'service-area'
  }, {
    label: 'Resources',
    id: 'blog'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-navy-900"><span className="text-gold-500">Elite</span> Notary Services
          </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-navy-900 hover:text-gold-500 font-semibold transition-colors">
                {item.label}
              </button>)}
            <a href="/admin/appointments" className="text-navy-900 hover:text-gold-500 font-semibold transition-colors">Admin</a>
            <a href="tel:+19153127216" className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
              <Phone size={18} /> Call Now
            </a>

          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-navy-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-navy-900 hover:text-gold-500 font-semibold py-2">
                {item.label}
              </button>)}
            <a href="tel:+19153127216" className="block bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold text-center">
              Call Now
            </a>
          </div>
        </div>}
    </nav>;
}