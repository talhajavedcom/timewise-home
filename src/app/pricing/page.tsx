'use client';

import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import Testimonials from '@/components/Testimonials';

const page = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <Steps />
    </main>
  );
};

export default page;
