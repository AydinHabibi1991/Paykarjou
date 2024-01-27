import React, { useRef, useState, useEffect } from 'react';
import MovieCard from '@/components/shared/MovieCard';
import ReactPlayer from 'react-player/lazy';
import request from '../../lib/config';
import MainLayout from '@/layout/MainLayout';

const movies = [
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

function SingleFilm({ films, film }) {
  const [movie, setMovie] = React.useState(film);

  return (
    <div className="bg-secondary flex items-start justify-center h-full pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-4 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>فیلم</span>
            <h1 className="text-2xl font-semibold">{movie?.title}</h1>
            <div className="flex flex-col gap-3 text-txt_primary">
              <div className="relative rounded-md overflow-hidden">
                <div className="w-full">
                  {/* Lazy load the YouTube player */}
                  <ReactPlayer controls url={movie?.url} height={400} />
                </div>
              </div>
              <div>
                <div className="flex flex-col items-start gap-3 pr-3">
                  <h2 className="text-md font-semibold">{movie?.title}</h2>
                  <p className=" text-primary text-sm">{movie?.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] overflow-x-auto flex flex-col items-start justify-center gap-5">
          <h3 className="text-lg font-semibold">شاید بپسندید</h3>

          <div className="flex items-center justify-center gap-5">
            {films.map(
              (film, idx) => idx < 3 && <MovieCard key={film.id} movie={film} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFilm;

SingleFilm.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async ({ params }) => {
  let gallery;
  let item;
  try {
    gallery = await request('/gallery/index');
    item = await request(`/gallery/get/${params.id}`);
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  return {
    props: {
      films:
        gallery?.data?.data?.data?.filter((item) => item.type === 'video') ||
        [],
      film: item?.data?.data,
    },
  };
};