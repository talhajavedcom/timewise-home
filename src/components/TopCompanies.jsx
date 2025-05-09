'use client';
import Image from 'next/image';
import { topCompanies } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TopCompanies = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl md:text-4xl text-tw-heading font-bold text-center mb-12">
        Our Students Have Launched Successful <br /> Careers At Top Companies
      </h1>
      <div className="w-full bg-tw-secondary py-8 sm:py-12 md:py-24 relative overflow-hidden">
        <Swiper
          spaceBetween={32}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0, // for smooth continuous scroll
            disableOnInteraction: false,
          }}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          grabCursor={false}
          allowTouchMove={false}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {[...topCompanies, ...topCompanies].map((company, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center px-4">
              <Image
                src={company.logo}
                alt={company.name}
                className="object-contain w-20 h-auto sm:w-32 sm:h-auto md:w-44 md:h-auto"
                width={176}
                height={96}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopCompanies;
