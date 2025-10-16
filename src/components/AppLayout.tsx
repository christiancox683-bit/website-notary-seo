import React from 'react';
import SEOHead from './SEOHead';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import { Toaster } from './ui/toaster';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Blog from './Blog';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';


export default function AppLayout() {
  return (
    <>
      <SEOHead />
      <Navigation />
      <main>
        <Hero />
        <Services />

        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

