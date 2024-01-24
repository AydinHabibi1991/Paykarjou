import { UPLOAD_URL } from '@/lib/config';
import Image from 'next/image';
import React from 'react';

const PostSection = ({ post }) => {
  return (
    <div className="p-4">
      <div className="text-2xl sm:text-4xl text-[#E98074] mt-8 sm:mt-16 mb-6 sm:mb-10">
        {post?.title}{' '}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative h-56 sm:h-96 rounded">
          <Image
            src={
              UPLOAD_URL + post?.cover_file ||
              '/assets/images/Rectangle 3905.png'
            }
            layout="fill"
            objectFit="cover"
            alt="Image 1"
            className="rounded"
          />
        </div>
        <div className="relative h-56 sm:h-96 rounded">
          <Image
            src={ post?.letter_file}
            layout="fill"
            objectFit="cover"
            alt="Image 2"
            className="rounded"
          />
        </div>
        <div className="space-y-4 sm:space-y-8 relative h-112 sm:h-96">
          <div className="relative h-44 rounded">
            <Image
              src={'/assets/images/Rectangle 3907.png'}
              layout="fill"
              objectFit="cover"
              alt="Image 3"
              className="rounded"
            />
          </div>
          <div className="relative h-44 rounded">
            <Image
              src={'/assets/images/Rectangle 3908.png'}
              layout="fill"
              objectFit="cover"
              alt="Image 4"
              className="rounded"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-[#E98074]">
          <strong>{post?.description}</strong>
        </div>
        <div
          className="text-gray-500 text-xs sm:text-sm"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        ></div>
      </div>
    </div>
  );
};

export default PostSection;
