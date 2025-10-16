import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Set page title
    document.title = 'Elite Notary Services | Professional Loan Signing Agent & Mobile Notary in El Paso, Texas';
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Elite Notary Services - Certified loan signing agent and mobile notary serving El Paso, Texas and surrounding areas. NNA certified, $100K insured, 24/7 availability. Professional notary services for refinances, purchases, and general notarizations.');

    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'loan signing agent, mobile notary, notary public, notary near me, loan signing, refinance notary, purchase signing, HELOC signing, remote online notarization, RON, El Paso notary, El Paso mobile notary, El Paso loan signing agent');

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Elite Notary Services",
      "description": "Certified loan signing agent and mobile notary serving El Paso, Texas and surrounding areas",
      "telephone": "+1-915-312-7216",
      "email": "christiancox683@gmail.com",
      "areaServed": "El Paso, Texas and surrounding areas",
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Notary Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Loan Signing Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Notary"
            }
          }
        ]
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}
