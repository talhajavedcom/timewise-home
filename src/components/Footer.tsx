'use client';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-tw-dark text-tw-white py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <p className="font-semibold mt-3 text-sm sm:text-base">GET IN TOUCH!</p>
            <p className="text-sm text-tw-white mt-1 leading-relaxed">
              Helping students excel in math through <br />
              personalized learning and engaging curriculum.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-6 md:mt-0">
            <div>
              <p className="font-semibold text-sm text-tw-yellow mb-2">Programs</p>
              <ul className="space-y-2 text-sm">
                {['Elementary Math', 'Middle School Math', 'High School Math'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-tw-gray-400 hover:text-tw-primary transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm text-tw-yellow mb-2">Coming Soon!</p>
              <ul className="space-y-2 text-sm">
                {['Referral Program', 'SAT Math', 'ADHD Learning'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-tw-gray-400 hover:text-tw-primary transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-tw-gray-500 mt-8 pt-6">
          <p className="text-center text-xs text-tw-gray-400">© {new Date().getFullYear()} Dipta’s Math Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
