import AudioCard from '@/components/shared/AudioCard';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import { BsClock } from 'react-icons/bs';
// import AudioProgress from '@/utils/AudioProgress';
import Image from 'next/image';
// import useAudioPlayer from '@/hooks/useAudio';
import Button from '@/components/shared/Button';
import WaveSurfer from 'wavesurfer.js';
import request from './../../lib/config';
// const WaveSurfer = dynamic(() => import('wavesurfer.js'));
const audios = [

  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
];

function SinglePodcast({ audio, audios }) {

  // audio = audios[0];
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [wavesurfer, setWavesurfer] = useState();
  // On play button click
  const onPlayClick = () => {
    if (isPlaying) {
      wavesurfer.pause();
    } else {
      wavesurfer.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#8E8D8A',
      progressColor: '#E98074',
      height: 40,
      barWidth: 2,
      barGap: 2,
      barRadius: 5,
    });
    ws.load(
      audio?.url ||
        'https://www.mfiles.co.uk/mp3-downloads/brahms-symphony3-3-theme-violin-piano.mp3'
    );
    setAudioDuration(ws.getDuration());
    setWavesurfer(ws);
    return () => {
      ws.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-secondary min-h-screen flex items-start justify-center h-full pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-6 z-40">
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>رادیو اقتصاد</span>
            <h1 className="text-2xl font-semibold">{audio?.title}</h1>
          </div>
          <div
            className={`w-full p-2 border bg-secondary border-primary rounded-sm overflow-hidden flex flex-col gap-1 items-center justify-between`}
          >
            <div className="w-full h-80 overflow-hidden relative rounded-sm space-y-2">
              <Image
                src={audio?.cover || ''}
                alt="alt"
                layout='fill'
                //   style={{ width: '100%', height: '100%' }}
              />
              <div className="flex items-start flex-col gap-2">
                <div className="text-primary"> {audio?.title}</div>
                <div className="text-primary w-full flex items-center justify-between ">
                  <div className="flex items-center gap-1">
                    <BsClock size={24} />
                    <span>
                      {('0' + parseInt(wavesurfer?.getDuration() / 60)).slice(
                        -2
                      ) +
                        ':' +
                        ('0' + parseInt(wavesurfer?.getDuration() % 60)).slice(
                          -2
                        )}
                    </span>
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                <div ref={waveformRef} className="w-full px-1" />
                {/* <AudioProgress stroke="#908971" /> */}
                {/* </div> */}
              </div>
              <Button
                onClick={onPlayClick}
                icon={
                  isPlaying ? <CiPause1 size={24} /> : <CiPlay1 size={24} />
                }
                className="flex justify-self-end self-end items-center justify-center w-16 h-full p-2 bg-txt_primary text-secondary"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] overflow-x-auto flex flex-col items-start justify-center gap-5">
          <h3 className="text-lg font-semibold">شاید بپسندید</h3>

          <div className="flex items-center justify-center gap-5">
            {audios.map(
              (audio, idx) =>
                idx < 3 && <AudioCard key={audio.title} audio={audio} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePodcast;

export const getServerSideProps = async ({ params }) => {
  let gallery;
  let item;
  try {
    gallery = await request('/gallery/index');
    item = await request(`/gallery/get/${+params.id}`);
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  return {
    props: {
      audios: gallery?.data?.data?.data?.filter(
        (item) => item.type === 'podcast'
      ) || [],
      audio: item?.data?.data || {},
    },
  };
};
