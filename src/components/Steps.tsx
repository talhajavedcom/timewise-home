'use client';
import { stepsData } from '../constants';

const Steps = () => {
  return (
    <div className="py-8 sm:py-16 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-tw-heading">
          Its easy as 1, 2, 3
          <br />
          and simple as do, re, mi 🎶
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {stepsData.map(step => (
            <div
              key={step.number}
              className="bg-tw-secondary rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 pt-6 sm:pt-8 px-4 sm:px-8 pb-6 sm:pb-12 mx-1 sm:mx-6 flex flex-col"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 text-tw-white rounded-sm flex items-center justify-center bg-tw-primary font-bold text-sm sm:text-base mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-tw-heading">{step.title}</h3>
              <p className="text-tw-body text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
