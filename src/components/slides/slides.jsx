import React from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Button from '../shared/Button/index';
import { useRouter } from 'next/router';

const Slides = ({ img, title, desc, handleNext, handlePrev, categories }) => {
  const router = useRouter();
  return (
    <div className="bg-secondary flex items-start justify-center h-screen">
      <div className="w-[85%] h-full flex flex-row-reverse items-start justify-start gap-5">
        <div className="w-6/12 pt-20 h-full flex flex-col gap-5 text-txt_primary">
          <div className="w-full relative flex items-center h-32">
            <div className="absolute -right-12 rotate-90 opacity-50 text-2xl ">
              <span>درباره اقتصاد</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl">اقتصاد به زبان ساده</h3>
          </div>
          <div className="flex items-end gap-3 w-full">
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
          <div className="flex items-center flex-wrap gap-5 text-primary">
            <p>{desc}</p>
            <Button
              onClick={() => router.push('/mabahes')}
              title={'مشاهده بیشتر'}
              className="flex items-center justify-start gap-3 p-3 border border-primary text-primary rounded-full hover:text-secondary hover:bg-primary"
            />
          </div>
          <div className="flex items-center self-start gap-3 justify-self-end">
            <Button
              onClick={handlePrev}
              icon={<BsArrowRight />}
              className="border-primary rounded-full border p-3 flex items-center justify-center text-primary text-lg hover:text-secondary hover:bg-primary"
            />
            <Button
              onClick={handleNext}
              icon={<BsArrowLeft />}
              className="border-primary rounded-full border p-3 flex items-center justify-center text-primary text-lg hover:text-secondary hover:bg-primary"
            />
          </div>
        </div>
        <div className="w-5/12 h-full flex flex-row-reverse relative overflow-hidden">
          <div className="self-end w-[60%] bg-primary h-full" />
          <Image
            className="absolute left-0 top-24"
            src={img}
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Slides;
