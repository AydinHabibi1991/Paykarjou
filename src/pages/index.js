import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';
import MobileLanding from '@/components/MobileLanding';
import request from '@/lib/config';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ categories, audios, movies, posts, social }) {
  return (
    <main className="bg-secondary min-w-screen min-h-screen">
      <div className="hidden md:flex">
        <Slider
          categories={categories}
          movies={movies}
          audios={audios}
          social={social}
        />
      </div>
      <div className="flex md:hidden">
        <MobileLanding
          categories={categories}
          posts={posts}
          movies={movies}
          audios={audios}
          social={social}
        />
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  let categories = [];
  let gallery;
  let posts;
  let social;
  try {
    const response = await request('/page/index');
    categories = response?.data?.data?.data || [];
    gallery = await request('/gallery/index');
    posts = await request('/post/index');
    social = await request('/custom/footer/get');
  } catch (error) {
    console.error('API Error:', error);
  }
  return {
    props: {
      categories,
      movies: gallery?.data?.data?.data?.filter(
        (item) => item.type === 'video'
      ),
      audios: gallery?.data?.data?.data?.filter(
        (item) => item.type === 'podcast'
      ),
      posts: posts?.data?.data?.data,
      social: social?.data?.data?.filter((s) => s.key.includes('social')),
    },
  };
};

