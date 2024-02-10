import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button/index';
import { useRouter } from 'next/router';

const MobileSlide = ({ post }) => {
  const router = useRouter();
  return (
    <div className="bg-secondary w-full flex items-center justify-center relative">
      <div className="w-full h-full flex flex-col items-start justify-start gap-5">
        <div className="self-end w-full bg-primary h-32 absolute z-0" />
        <div className="w-[80%] h-96 self-center relative overflow-hidden top-5 flex items-center justify-center z-10 ">
          <Image
            // className="absolute left-0 top-24"
            src={post?.icon}
            layout="fill"
            alt="paykarjoo"
          />
        </div>
        <div className="px-5 pt-20 h-full flex flex-col gap-5 text-txt_primary  mt-8">
          <div>
            <h3 className="text-xl">اقتصاد به زبان ساده</h3>
          </div>
          <div className="flex items-end gap-3 w-full">
            <h1 className="text-4xl font-bold">{post?.label}</h1>
          </div>
          <div className="flex items-center flex-wrap gap-5 text-primary">
            <p>{post?.short_description}</p>
            <Button
              onClick={() => router.push('/mabahes')}
              title={'مشاهده بیشتر'}
              className="flex items-center justify-start gap-3 p-3 border border-primary text-primary rounded-full hover:text-secondary hover:bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSlide;
