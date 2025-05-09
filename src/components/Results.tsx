'use client';
import { resultsData } from '../constants';

const Results = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-tw-heading text-center mb-12">Results you’ll see</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resultsData.map((item, index) => (
            <div key={index} className=" p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <p className="text-4xl font-bold text-tw-primary mb-2 text-center ">{item.value}</p>
              <p className="text-tw-body text-base md:text-lg text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
