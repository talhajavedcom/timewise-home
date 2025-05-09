'use client';
import { JSX } from 'react';
import { statsData } from '../constants';

export default function Stats(): JSX.Element {
  return (
    <div className="container mx-auto px-4  p-10 md:py-15 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, index) => (
          <div key={index}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tw-primary">{stat.value}</h2>
            <p className="text-base sm:text-lg md:text-base text-tw-body">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
