import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SmartWheels Skating Academy — our vision, mission, and training programs. Building champions through expert coaching and world-class facilities since 2019.',
  alternates: {
    canonical: 'https://www.smartwheelsskating.com/about',
  },
  openGraph: {
    title: 'About SmartWheels Skating Academy',
    description: 'Our vision, mission, and coaching programs. Producing state and national champions across India.',
    url: 'https://www.smartwheelsskating.com/about',
    images: [{ url: '/skating_action.png', width: 1200, height: 630, alt: 'SmartWheels Skating Academy' }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
