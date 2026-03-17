import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ProductSection } from '@/components/product-section';
import { Features } from '@/components/features';
import { VideoSection } from '@/components/video-section';
import { Footer } from '@/components/footer';
import CommmunitySection from '@/components/CommmunitySection';
import { InternationalRecognition } from '@/components/InternationalRecognition';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ProductSection />
      <VideoSection />
      <CommmunitySection />
      <InternationalRecognition />
      <Footer />
    </main>
  );
}
