import React from 'react';
import Image from 'next/image';
import { CiPlay1 } from 'react-icons/ci';
import { useRouter } from 'next/router';

const MovieCard = ({ movie, width = 350, height = 370 }) => {
  const router = useRouter();
  return (
    <div
      className="overflow-hidden max-w-xs basis-52 flex flex-col gap-3 text-txt_primary cursor-pointer"
      onClick={() => router.push(`/film/${movie.id}`)}
    >
      <div className="relative rounded-md max-w-xs basis-52 overflow-hidden">
        <Image
          src={movie?.cover || '/assets/images/videocover.png'}
          width={width}
          height={height}
          alt={movie?.title}
        />

        <div className="text-primary absolute top-5 left-5 flex items-center gap-1 p-2 justify-between bg-secondary rounded-xl bg-opacity-90">
          <div>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.63497 2.99634V5.99759"
                stroke="#031828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6389 2.99634V5.99759"
                stroke="#031828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.13281 9.49899H21.1403"
                stroke="#031828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="3.13281"
                y="4.49707"
                width="18.0075"
                height="16.5069"
                rx="3"
                stroke="#031828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>date</div>
        </div>
        <div className="text-primary absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-3 bg-secondary bg-opacity-90 rounded-full flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L14.05 6.20002L17.14 7.98002C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
              stroke="#4B4B4A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-start gap-3 pr-3">
          <h2 className="text-md font-semibold">{movie?.title}</h2>
          <p className=" text-primary text-sm">{movie?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
