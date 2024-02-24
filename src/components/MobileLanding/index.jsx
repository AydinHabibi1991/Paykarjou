import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './../shared/Button/index';
import MobileSlide from '../slides/MobileSlide';
import MovieCard from '../shared/MovieCard';
import AudioCard from '../shared/AudioCard';
import { useRouter } from 'next/router';

function MobileLanding({ categories, posts, audios, movies, social }) {
  const router = useRouter();
  return (
    <div className="w-full text-txt_primary flex flex-col gap-7 justify-start items-center">
      {/* first slide header */}
      <div className=" bg-primary h-full flex px-5 flex-col items-center justify-between p-5 max-w-sm rounded-b-xl ">
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
        <div className="flex items-center justify-start gap-3 flex-col mt-3">
          <span className="text-secondary text-center">ارتباط با ما</span>
          <div className="flex flex-row-reverse items-center gap-4 text-gray-700">
            <Link
              href={
                social?.find((s) => s.key.includes('instagram'))?.content ?? ''
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
      {/* first style content */}
      <div className=" h-full flex flex-col px-5 items-center justify-between gap-5 max-w-sm p-5 ">
        <div className="w-full relative flex items-center">
          <div className=" opacity-70 text-xl ">
            <span>به سمت آینده</span>
          </div>
        </div>
        <div className="flex items-end gap-3 w-full">
          <h1 className="text-2xl font-bold">دکتر کامبیز پیکارجو </h1>
          <span className="text-lg">هستم</span>
        </div>
        <div className="self-start">
          <div className="border-b border-txt_primary w-96 mb-2" />
          <h3 className="font-normal text-xl">خوشبختم از آشنایی شما</h3>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          {categories.map((article) => (
            <Button
              key={article?.id}
              title={article?.label}
              icon={article?.icon}
              isCategory
              className="flex items-center justify-start pr-8 flex-grow basis-60 gap-3 p-2 border border-primary rounded-full hover:text-secondary hover:bg-primary"
            />
          ))}
        </div>
      </div>
      {/* articles */}
      <div className="w-full flex flex-col items-center gap-5 mt-5">
        {categories.map(
          (category, index) =>
            index < 6 && <MobileSlide key={category?.id} post={category} />
        )}
      </div>
      {/* movies */}
      <div className="w-full flex flex-col items-center gap-8 mt-5 px-5">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>فیلم</span>
            <h1 className="text-2xl font-semibold">آخرین ویدئوها</h1>
          </div>
        </div>
        {movies.map(
          (movie, index) =>
            index < 3 && <MovieCard key={movie.id} movie={movie} />
        )}
        <Button
          onClick={() => router.push('/film')}
          title={'مشاهده همه'}
          className=" w-full flex items-center max-w-sm text-primary justify-center p-2 border border-primary rounded-full hover:text-secondary hover:bg-primary"
        />
      </div>
      {/* audios */}
      <div className="w-full flex flex-col items-center gap-8 mt-5 px-5">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>رادیو اقتصاد</span>
            <h1 className="text-2xl font-semibold">آخرین پادکست ها</h1>
          </div>
        </div>
        {audios.map(
          (audio, index) =>
            index < 6 && <AudioCard key={audio.id} audio={audio} />
        )}
        <Button
          onClick={() => router.push('/podcast')}
          title={'مشاهده همه'}
          className=" w-full flex items-center max-w-sm text-primary justify-center p-2 border border-primary rounded-full hover:text-secondary hover:bg-primary"
        />
      </div>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title={'بازگشت به بالای صفحه'}
        className=" w-full flex items-center text-white max-w-sm  justify-center p-2 border bg-txt_primary rounded-full"
      />
    </div>
  );
}

export default MobileLanding;
