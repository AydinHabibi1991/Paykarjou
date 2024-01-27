import AudioCard from '@/components/shared/AudioCard'
import React from 'react'
import request from './../../lib/config';


function Podcast({ podcasts }) {
  return (
    <div className="bg-secondary flex h-screen items-start justify-center pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-6 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>رادیو اقتصاد</span>
            <h1 className="text-2xl font-semibold">آخرین پادکست ها</h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {podcasts.map((audio) => (
            <AudioCard key={audio.id} audio={audio} />
          ))}
        </div>
      </div>
    </div>
  );
}

Podcast.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Podcast;

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
      podcasts: gallery?.data?.data?.data?.filter(
        (item) => item.type === 'podcast'
      ),
    },
  };
};