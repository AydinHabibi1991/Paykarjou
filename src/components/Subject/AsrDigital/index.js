import Image from 'next/image';
import React from 'react';

const AsreDigital = () => {
  return (
    <div className='p-4'>
      <div className='text-2xl sm:text-4xl text-[#E98074] mt-8 sm:mt-16 mb-6 sm:mb-10'>
      اقتصاد عصر دیجیتال         </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative h-56 sm:h-96 rounded">
          <Image src={'/assets/images/Rectangle 3905.png'} layout="fill" objectFit="cover" alt="Image 1" className="rounded" />
        </div>
        <div className="relative h-56 sm:h-96 rounded">
          <Image src={'/assets/images/Rectangle 3906.png'} layout="fill" objectFit="cover" alt="Image 2" className="rounded" />
        </div>
        <div className="space-y-4 sm:space-y-8 relative h-112 sm:h-96">
          <div className="relative h-44 rounded">
            <Image src={'/assets/images/Rectangle 3907.png'} layout="fill" objectFit="cover" alt="Image 3" className="rounded" />
          </div>
          <div className="relative h-44 rounded">
            <Image src={'/assets/images/Rectangle 3908.png'} layout="fill" objectFit="cover" alt="Image 4" className="rounded" />
          </div>
        </div>
      </div>

      {[1, 2, 3, 4].map(i => (
        <div key={i} className="mt-4">
          <div className='text-[#E98074]'><strong>لورم ایپسوم متن ساختگی با تولید سادگی</strong></div>
          <div className="text-gray-500 text-xs sm:text-sm">عضو هیات مدیره هلدینگ رایانمهر دانش‌سنج(وابسته به هلدینگ مالی بانک گردشگری)</div>
        </div>
      ))}
    </div>
  );
};

export default AsreDigital;


export const getServerSideProps = async () => {
  let gallery;
  try {
    gallery = await request('/gallery/index');
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  return {
    props: {
      podcasts: gallery?.data?.data?.data?.filter(
        (item) => item.type === 'music'
      ),
    },
  };
};