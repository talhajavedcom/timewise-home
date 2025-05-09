'use client';
import Link from 'next/link';

const Hero = () => (
  <div className="bg-gradient-to-r from-gradient-blue to-gradient-offwhite px-4">
    <section className="py-16 px-4 sm:px-8 text-center">
      <div className="container mt-18 mx-auto flex flex-col items-center justify-center">
        <div className="w-full md:w-2/3 mb-10">
          <h1 className="mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-snug md:leading-relaxed font-bold text-tw-heading mb-4">
            <span className="block">Your child doesn’t need a math tutor</span>
            <span className="block text-yellow-400">and that’s the goal</span>
          </h1>
          <div className="px-2 sm:px-6 md:px-12">
            <p className="text-sm sm:text-base md:text-lg text-tw-body mb-6 py-6 leading-relaxed">
              We teach you how to solve problems on your own, step by step. Once you learn our methods, you’ll tackle math confidently
              without any help.
            </p>
          </div>
          <Link
            href="#"
            className="bg-tw-primary text-tw-white font-bold py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg inline-block transition duration-300"
          >
            Book Free Lesson 🏆
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
