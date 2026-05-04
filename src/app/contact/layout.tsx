import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SmartWheels Skating Academy. Reach us by phone, email, or visit one of our branches. We\'d love to hear from you.',
  alternates: {
    canonical: 'https://www.smartwheelsskating.com/contact',
  },
  openGraph: {
    title: 'Contact SmartWheels Skating Academy',
    description: 'Reach out to join SmartWheels or ask about our skating programs. We\'re always happy to help.',
    url: 'https://www.smartwheelsskating.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
