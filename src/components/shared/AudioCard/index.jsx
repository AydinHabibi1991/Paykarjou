import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import { BsClock } from 'react-icons/bs';
import Button from '../Button';
import AudioProgress from '@/utils/AudioProgress';
import { useRouter } from 'next/router';

const AudioCard = ({ audio, width = 350, height = 370 }) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/podcast/${audio.id}`)}
      className={`max-w-sm max-h-56 p-2 border bg-secondary border-primary rounded-sm overflow-hidden flex flex-col gap-1 items-center justify-between cursor-pointer`}
    >
      <div className="max-w-sm basis-52 overflow-hidden relative rounded-sm space-y-2">
        <Image
          src={audio?.cover || '/assets/images/image8.png'}
          alt="alt"
          width={width}
          height={height}
          //   style={{ width: '100%', height: '100%' }}
        />
        <div className="flex items-start flex-col gap-2">
          <div className="text-primary"> {audio?.title}</div>
          <div className="text-primary w-full flex items-center justify-between ">
            <div className="flex items-center gap-1">
              <BsClock size={24} />
              <span>{audio?.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.46005 17.49V14.57C4.46005 13.6 5.22005 12.73 6.30005 12.73C7.27005 12.73 8.14005 13.49 8.14005 14.57V17.38C8.14005 19.33 6.52005 20.9501 4.57005 20.9501C2.62005 20.9501 1.00005 19.32 1.00005 17.38V11.22C0.890047 5.60005 5.33005 1.05005 10.95 1.05005C16.57 1.05005 21 5.60005 21 11.11V17.2701C21 19.2201 19.38 20.84 17.43 20.84C15.48 20.84 13.86 19.2201 13.86 17.2701V14.46C13.86 13.49 14.62 12.62 15.7 12.62C16.67 12.62 17.54 13.38 17.54 14.46V17.49"
                    stroke="#9C9C9C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>{'دکتر پیکارجو و علی احمدی'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full border border-primary rounded-sm">
        <div className="flex items-center justify-center relative w-full">
          <div className="w-full flex justify-center overflow-hidden">
            <AudioProgress stroke="#908971" />
          </div>
          {/* <div className="w-full flex justify-center overflow-hidden absolute">
            <AudioProgress stroke="#E98074" />
          </div> */}
        </div>
        <div
          // onClick={() => setIsPlaying((prev) => !prev)}
          // icon={isPlaying ? <CiPause1 size={24} /> : <CiPlay1 size={24} />}

          className="flex justify-self-end self-end items-center justify-center w-16 h-full p-2 bg-txt_primary text-secondary"
        >
          <CiPlay1 size={24} />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
