'use client';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FounderBio from '@/components/FounderBio';
import Results from '@/components/Results';
import TopCompanies from '@/components/TopCompanies';
import Testimonials from '@/components/Testimonials';
import Steps from '@/components/Steps';

const page = () => {
  return (
    <main className="bg-tw-white min-h-screen">
      <Hero />
      <Stats />
      <FounderBio />
      <Results />
      <TopCompanies />
      <Testimonials />
      <Steps />
    </main>
  );
};

export default page;
