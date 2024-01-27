import React from 'react';
import MovieCard from '@/components/shared/MovieCard';
import request from '../../lib/config';

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

function Film({ films }) {
  return (
    <div className="bg-secondary flex items-start justify-center h-screen pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-4 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>فیلم</span>
            <h1 className="text-2xl font-semibold">آخرین ویدئوها</h1>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-x-20">
          {films &&
            films.map((film) => <MovieCard key={film.id} movie={film} />)}
        </div>
      </div>
    </div>
  );
}

export default Film;

Film.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  let gallery;
  try {
    gallery = await request('/gallery/index');
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  return {
    props: {
      films: gallery?.data?.data?.data?.filter((item) => item.type === 'video'),
    },
  };
};
