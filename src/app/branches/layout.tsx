import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Branches',
  description: 'Find a SmartWheels Skating Academy training center near you. We have branches across India with expert coaches and state-of-the-art skating facilities.',
  alternates: {
    canonical: 'https://www.smartwheelsskating.com/branches',
  },
  openGraph: {
    title: 'SmartWheels Branches Across India',
    description: 'Find your nearest SmartWheels skating center. Expert coaches, structured programs, and world-class facilities.',
    url: 'https://www.smartwheelsskating.com/branches',
    images: [{ url: '/skating_action.png', width: 1200, height: 630, alt: 'SmartWheels Skating Academy' }],
  },
};

export default function BranchesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
