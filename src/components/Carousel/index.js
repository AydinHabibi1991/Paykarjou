import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image'; 


export default function Carousel({ gallery }) {
  return (
    <div className="h-full w-full overflow-hidden bg-secondary font-sans relative">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="my-12"
      >
        {gallery?.length &&
          gallery.map((i) => (
            <SwiperSlide
              key={i?.id}
              style={{ width: '400px', height: '500px' }}
            >
              <Image
                src={i?.url || `/assets/images/${i + 1}.png`}
                alt={i?.title || `Nature ${i + 1}`}
                // width={300}
                // height={300}
                className="block w-full"
                layout="fill"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      
    </div>
  );
}