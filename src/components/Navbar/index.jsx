import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar({ onClose, social }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (isCollapsed) {
    return (
      <div
        dir="rtl"
        className="z-50 border-2 border-[#5E5E67] h-full w-16 fixed top-0 right-0 flex flex-col items-center justify-between px-5 bg-secondary"
      >
        <button onClick={toggleMenu}>
          <Image
            src={'/assets/images/menu.svg'}
            width={20}
            height={15}
            alt="paykarjoo"
          />
        </button>
        <div className="flex flex-row items-center gap-4">
          <Link href={social.find((s) => s.key.includes('instagram')).content}>
            <Image
              src={'/assets/images/instagram.svg'}
              width={20}
              height={15}
              alt="instagram"
            />
          </Link>
          <Link href={social.find((s) => s.key.includes('ita')).content}>
            <Image
              src={'/assets/images/group.svg'}
              width={20}
              height={15}
              alt="ita"
            />
          </Link>
          <Link href={social.find((s) => s.key.includes('telegram')).content}>
            <Image
              src={'/assets/images/Auto-added frame.svg'}
              width={20}
              height={15}
              alt="telegram"
            />
          </Link>
          <Link href={social.find((s) => s.key.includes('whatsapp')).content}>
            <Image
              src={'/assets/images/whatsapp.svg'}
              width={20}
              height={15}
              alt="whatsapp"
            />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="z-50 border-2 border-gray-300 fixed top-3 left-0 right-0 mx-10 max-w-screen-xxl p-2 bg-secondary "
    >
      <button onClick={toggleMenu} className="absolute top-2 left-2">
        ×
      </button>
      <div className="flex justify-between items-center ">
        <ul className="flex justify-start gap-10">
          <li>
            <Link href="/mabahes">مباحث</Link>
          </li>
          <li>
            <Link href="/podcast">پادکست</Link>
          </li>
          <li>
            <Link href="/film">فیلم</Link>
          </li>
          <li>
            <Link href="/gallery">گالری تصاویر</Link>
          </li>
          <li>
            <Link href="/about">درباره من</Link>
          </li>
          <li>
            <Link href="/">صفحه نخست </Link>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-4">
          <Link href={social.find((s) => s.key.includes('instagram')).content}>
            <Image
              src={'/assets/images/instagram.svg'}
              width={20}
              height={15}
              alt="instagram"
            />
          </Link>
          <Link href={social.find((s) => s.key.includes('ita')).content}>
            <Image
              src={'/assets/images/group.svg'}
              width={20}
              height={15}
              alt="ita"
            />
          </Link>
          <Link href={social.find((s) => s.key.includes('telegram')).content}>
            <Image
              src={'/assets/images/Auto-added frame.svg'}
              width={20}
              height={15}
              alt="telegram"
            />
          </Link>
          <Link href={social.find((s) => s.key.includes('whatsapp')).content}>
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
  );
}
