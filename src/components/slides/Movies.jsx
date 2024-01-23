import React from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Button from './../shared/Button/index';
import MovieCard from '../shared/MovieCard';
import { useRouter } from 'next/router';

const Movies = ({ movies, handleNext, handlePrev }) => {
  const router = useRouter();

  return (
    <div className="bg-secondary flex items-start justify-center h-screen text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-4 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>فیلم</span>
            <h1 className="text-2xl font-semibold">آخرین ویدئوها</h1>
          </div>
          <Button
            onClick={() => router.push('/film')}
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
        <div className="w-full flex items-center justify-around gap-4">
          {movies.map(
            (movie, index) =>
              index < 3 && <MovieCard key={movie.id} movie={movie} />
          )}
        </div>
      </div>
      <div className="w-full h-52 bg-primary absolute bottom-[39%] flex flex-col items-center justify-between p-5 "></div>
    </div>
  );
};

export default Movies;
