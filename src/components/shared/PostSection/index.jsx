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
            src={post?.letter_file}
            layout="fill"
            objectFit="cover"
            alt="Image 1"
            className="rounded"
          />
        </div>
        <div className="relative h-56 sm:h-96 rounded">
          <Image
            src={post?.letter_file}
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

      <div className="w-full flex flex-wrap items-center justify-start gap-3 text-gray-500 mt-3 text-xs">
        <div>
          <span>تاریخ : </span>
          <span>
            {new Date(post?.updated_at).toLocaleDateString('fa-ir', {
              month: 'long',
              year: 'numeric',
              day: 'numeric',
            })}
          </span>
        </div>
        <div className="flex gap-2">
          <span>برچسب ها : </span>
          <div className="flex items-center gap-3 justify-center flex-wrap divide-x">
            {post?.tags.map((tag) => (
              <span key={tag.name}>{tag.label}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[#E98074] max-w-[calc(100% - 1rem)] overflow-hidden">
          <strong>{post?.description}</strong>
        </p>
        <p
          className="text-gray-500 text-xs sm:text-sm max-w-[calc(100% - 1rem)] overflow-hidden"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        ></p>
      </div>
    </div>
  );
};

export default PostSection;
