import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { testimonialData } from '../constants';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="px-3 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-10 md:py-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">What parents are saying</h2>
          <p className="text-gray-600 leading-relaxed text-justify md:text-left text-sm sm:text-base">
            Learning is a perfect blend of curiosity, practice, and expert guidance. With the right mix of knowledge and hands-on
            experience, we create an environment where growth flourishes. Just like a great recipe, the right ingredients lead to success.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute px-2 top-1/2 left-2 z-10 -translate-y-1/2 hidden md:block">
            <button ref={prevRef}>
              <CircleArrowLeft className="text-tw-primary w-6 h-6 hover:scale-110 transition" />
            </button>
          </div>
          <div className="absolute px-2 top-1/2 right-2 z-10 -translate-y-1/2 hidden md:block">
            <button ref={nextRef}>
              <CircleArrowRight className="text-tw-primary w-6 h-6 hover:scale-110 transition" />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            onInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            loop
            spaceBetween={20}
          >
            {testimonialData.map(item => (
              <SwiperSlide key={item.id}>
                <div className="p-4 bg-tw-secondary sm:p-6 md:p-8 rounded-xl shadow-md">
                  <div className="px-4">
                    <h4 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h4>
                    <p className="text-tw-gray-400 italic mb-4 text-sm sm:text-base">"{item.quote}"</p>

                    <div className="flex items-center gap-4">
                      <Image
                        src={item.user.avatar}
                        alt={item.user.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="text-tw-primary font-medium">{item.user.name}</p>
                        <p className="text-xs sm:text-sm text-tw-gray-400">{item.user.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
