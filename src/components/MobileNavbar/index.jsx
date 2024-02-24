import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoMenu } from 'react-icons/io5';

export default function MobileNavbar({ onClose, social }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative mr-10 ml-10">
      <div className="md:hidden z-50 border-2 border-gray-300 fixed top-3 left-0 right-0 mx-10 max-w-screen-xxl p-2 bg-secondary ">
        <div className="flex justify-between gap-5 items-center ">
          <div className="flex items-center gap-3">
            <button onClick={toggleMenu} className="text-primary">
              {isCollapsed ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>

          <div className="flex flex-row items-center gap-4">
            <Link
              href={
                social?.find((s) => s.key.includes('instagram'))?.content ?? ''
              }
            >
              <Image
                src={'/assets/images/instagram.svg'}
                width={20}
                height={15}
                alt="instagram"
              />
            </Link>
            <Link
              href={social?.find((s) => s.key.includes('ita'))?.content ?? ''}
            >
              <Image
                src={'/assets/images/group.svg'}
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
                src={'/assets/images/Auto-added frame.svg'}
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
                src={'/assets/images/whatsapp.svg'}
                width={20}
                height={15}
                alt="whatsapp"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-secondary  border-2 border-gray-300 rounded-md shadow-md mt-16 p-4 w-full transition duration-300 transform origin-top-right ${
          isCollapsed ? 'scale-100' : 'scale-0'
        }`}
      >
        <ul className="flex flex-col justify-start items-start divide-y divide-primary/25">
          <li className="w-full py-3">
            <Link href="/">صفحه نخست </Link>
          </li>
          <li className="w-full py-3">
            <Link href="/mabahes">مباحث</Link>
          </li>
          <li className="w-full py-3">
            <Link href="/podcast">پادکست</Link>
          </li>
          <li className="w-full py-3">
            <Link href="/film">فیلم</Link>
          </li>
          <li className="w-full py-3">
            <Link href="/gallery">گالری تصاویر</Link>
          </li>
          <li className="w-full py-3">
            <Link href="/about">درباره من</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
