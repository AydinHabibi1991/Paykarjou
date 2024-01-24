import Head from 'next/head';
import Carousel from '../../components/Carousel/index.js';
import MainLayout from '../../layout/MainLayout.jsx'; 
import request from './../../lib/config';

function Gallery({ gallery }) {
  return (
    <div>
      {/* <Head>
        <title>Next.js Tailwind Carousel</title>
        <meta name="description" content="Next.js with Tailwind CSS and Swiper Carousel" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-secondary">
        <Carousel gallery={gallery} />
      </main>
    </div>
  );
}

Gallery.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Gallery;

export const getServerSideProps = async () => {
  let gallery;
  try {
    gallery = await request('/gallery/index');
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  console.log(gallery?.data?.data);
  return {
    props: {
      gallery: gallery?.data?.data?.data?.filter(
        (item) => item.type === 'image'
      ),
    },
  };
};
