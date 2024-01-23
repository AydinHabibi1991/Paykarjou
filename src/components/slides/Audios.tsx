import React from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Button from './../shared/Button/index';
import MovieCard from '../shared/MovieCard';
import AudioCard from '../shared/AudioCard';
import { useRouter } from 'next/router';

const Audios = ({ audios, handleNext, handlePrev }) => {
  const router = useRouter();
  return (
    <div className="bg-secondary flex items-start justify-center h-screen text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-4 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>رادیو اقتصاد</span>
            <h1 className="text-2xl font-semibold">آخرین پادکست ها</h1>
          </div>
          <Button
            onClick={() => router.push('/podcast')}
            title={'مشاهده همه'}
            className="flex items-center text-primary justify-start p-2 border border-primary rounded-full hover:text-secondary hover:bg-primary"
          />
        </div>
        <div className="flex items-center justify-center self-start justify-self-start gap-4">
          <Button
            onClick={handlePrev}
            icon={<BsArrowRight />}
            className="border-black text-black rounded-full border p-2 flex items-center justify-center text-lg hover:text-secondary hover:bg-primary"
          />
          <Button
            onClick={handleNext}
            icon={<BsArrowLeft />}
            className="border-black text-black  rounded-full border p-2 flex items-center justify-center text-lg hover:text-secondary hover:bg-primary"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          {audios.map(
            (audio, index) =>
              index < 6 && <AudioCard key={audio.id} audio={audio} />
          )}
        </div>
      </div>
      <div className="w-full h-52 bg-primary absolute bottom-[25%] flex flex-col items-center justify-between p-5 "></div>
    </div>
  );
};

export default Audios;
