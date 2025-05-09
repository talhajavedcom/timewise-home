'use client';
import Image from 'next/image';
import founderImage from '../assets/founderImage.png';
const FounderBio = () => {
  return (
    <div className="py-12 px-4 md:px-24">
      <div className="  py-12 bg-tw-secondary container mx-auto flex justify-center flex-col md:flex-row items-center gap-8 rounded-2xl shadow-sm ">
        <div className="  flex justify-center">
          <Image
            src={founderImage}
            width={2000}
            height={2000}
            alt="Founder Dipta Savalia"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-3/5 w-full px-4 text-center md:text-left">
          <p className="text-xl text-tw-black font-medium mb-4">“We dont just improve grades—we transform potential into performance.</p>
          <p className="text-lg text-tw-body mb-4">
            Our mission centers on developing mathematical minds that approach challenges with confidence and creativity. Through tailored
            learning experiences, we equip students with the analytical skills needed in an increasingly technical world.”
          </p>
          <p className="text-tw-primary pt-4 font-semibold text-lg">Dipta Savalia</p>
          <p className="text-tw-body">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default FounderBio;
