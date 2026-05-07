import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Watch our skaters in action. Browse photos and videos from SmartWheels Skating Academy training sessions, competitions, and award ceremonies.',
  alternates: {
    canonical: 'https://www.smartwheelsskating.com/gallery',
  },
  openGraph: {
    title: 'SmartWheels Gallery — Skaters in Action',
    description: 'Photos and videos from our training sessions, competitions, and the Guinness World Record ceremony.',
    url: 'https://www.smartwheelsskating.com/gallery',
    images: [{ url: '/skating_action.png', width: 1200, height: 630, alt: 'SmartWheels Skating Academy' }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
