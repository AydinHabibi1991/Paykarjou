import React from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Button from './../shared/Button/index';
import Link from 'next/link';

const FirstSlide = ({
  categories,
  handleNext,
  handlePrev,
  handleSwitch,
  social,
}) => {
  return (
    <div className="bg-secondary flex items-start justify-center h-screen">
      <div className="w-[85%] h-full flex items-start justify-start gap-5">
        <div className="w-9/12 pt-20 h-full flex flex-col gap-5 text-txt_primary">
          <div className="self-end text-4xl">
            <h2>دکترای اقتصاد</h2>
          </div>
          <div className="w-full relative flex items-center h-32">
            <div className="absolute -right-12 rotate-90 opacity-70 text-xl ">
              <span>به سمت آینده</span>
            </div>
          </div>
          <div className="flex items-end gap-3 w-full">
            <h1 className="text-6xl font-bold">دکتر کامبیز پیکارجو </h1>
            <span className="text-lg">هستم</span>
          </div>
          <div className="border-b border-txt_primary w-96" />
          <div>
            <h3 className="font-semibold text-xl">خوشبختم از آشنایی شما</h3>
          </div>
          <div className="flex items-center flex-wrap gap-5">
            {categories.map((article, index) => (
              <Button
                key={article?.id}
                title={article?.label}
                icon={article?.icon}
                onClick={() => handleSwitch(index + 1)}
                isCategory
                className="flex items-center justify-start pr-4 flex-grow basis-60 gap-3 p-2 border border-primary rounded-full hover:text-secondary hover:bg-primary"
              />
            ))}
          </div>
          <div className="flex items-center self-end gap-3 justify-self-end">
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
        <div className="w-3/12 bg-primary h-full flex flex-col items-center justify-between p-5 ">
          <div className="flex items-center justify-start gap-3 flex-col">
            <Image
              src={'/assets/images/paykarjoo.png'}
              width={400}
              height={300}
              alt="paykarjoo"
            />
            <h2 className="text-secondary text-center text-xl">
              عضو هیات علمی دانشگاه
            </h2>
            <h2 className="text-secondary text-center text-xl">
              اقتصاد دان وتحلیل گر اقتصادی
            </h2>
          </div>
          <div className="flex items-center justify-start gap-3 flex-col">
            <span className="text-secondary text-center">ارتباط با ما</span>
            <div className="flex flex-row-reverse items-center gap-4 text-gray-700">
              <Link
                href={
                  social?.find((s) => s.key.includes('instagram'))?.content ??
                  ''
                }
              >
                <Image
                  src={'/assets/images/instagram1.svg'}
                  width={20}
                  height={15}
                  alt="instagram"
                />
              </Link>
              <Link
                href={social?.find((s) => s.key.includes('ita'))?.content ?? ''}
              >
                <Image
                  src={'/assets/images/Youtube1.svg'}
                  width={20}
                  height={15}
                  alt="ita"
                />
              </Link>
              <Link
                href={
                  social?.find((s) => s.key.includes('telegram'))?.content ?? ''
                }
              >
                <Image
                  src={'/assets/images/telegram1.svg'}
                  width={20}
                  height={15}
                  alt="telegram"
                />
              </Link>
              <Link
                href={
                  social?.find((s) => s.key.includes('whatsapp'))?.content ?? ''
                }
              >
                <Image
                  src={'/assets/images/whatsapp1.svg'}
                  width={20}
                  height={15}
                  alt="whatsapp"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FirstSlide;
