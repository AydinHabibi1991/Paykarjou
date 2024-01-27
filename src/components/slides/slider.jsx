import React, { useRef, useCallback } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import FirstSlide from '@/components/slides/FirstSlide';
import Slides from '@/components/slides/slides';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Movies from './Movies';
import Audios from './Audios';

// export const slides = [
//   {
//     title: 'اقتصاد بر اقتصاد ناپذیر',
//     desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
//     img: '/assets/images/pngwing1.png',
//   },
//   {
//     title: 'اقتصاد مدرن',
//     desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
//     img: '/assets/images/pngwing1.png',
//   },
//   {
//     title: 'اقتصاد عصر دیجیتال',
//     desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
//     img: '/assets/images/pngwing1.png',
//   },
//   {
//     title: 'اقتصاد آینده پژوهی',
//     desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
//     img: '/assets/images/pngwing1.png',
//   },
//   {
//     title: 'اقتصاد ایران',
//     desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
//     img: '/assets/images/pngwing1.png',
//   },
// ];

export const movies = [
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
];

export const audios = [
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
];

export default function Slider({ categories, audios, movies }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        ref={sliderRef}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        allowTouchMove={false}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper !w-screen"
      >
        <SwiperSlide>
          <FirstSlide
            categories={categories}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        {categories.map((slide) => {
          return (
            <SwiperSlide key={slide.title}>
              <Slides
                categories={categories}
                img={slide.img}
                title={slide.label}
                desc={slide.short_description}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <Movies
            movies={movies}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Audios
            audios={audios}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Gallery />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
