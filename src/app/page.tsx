import HeroSection from '@/components/home/HeroSection';
import WhySmartWheels from '@/components/home/WhySmartWheels';
import BranchesSection from '@/components/home/BranchesSection';
import AchievementsCounter from '@/components/home/AchievementsCounter';
import GuinnessRecord from '@/components/home/GuinnessRecord';
import SkatingBanner from '@/components/home/SkatingBanner';
import GalleryPreview from '@/components/home/GalleryPreview';
import SkatingBanner2 from '@/components/home/SkatingBanner2';
import ParentReviews from '@/components/home/ParentReviews';
import CTASection from '@/components/home/CTASection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: 'SmartWheels Skating Academy',
  url: 'https://www.smartwheelsskating.com',
  logo: 'https://www.smartwheelsskating.com/logo.jpg',
  image: 'https://www.smartwheelsskating.com/skating_action.png',
  description:
    "Kerala's premier roller skating academy. Expert coaches, world-class facilities, and a Guinness World Record holder in our ranks.",
  sport: 'Roller Skating',
  areaServed: {
    '@type': 'State',
    name: 'Kerala, India',
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['English', 'Malayalam'],
  },
  location: [
    {
      '@type': 'Place',
      name: 'SmartWheels Skating Academy — Thrissur',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thrissur',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'Place',
      name: 'SmartWheels Skating Academy — Palakkad',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palakkad',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <WhySmartWheels />
      <BranchesSection />
      <AchievementsCounter />
      <SkatingBanner />
      <GuinnessRecord />
      <GalleryPreview />
      <SkatingBanner2 />
      <ParentReviews />
      <CTASection />
    </>
  );
}
