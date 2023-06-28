'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type Props = { children: ReactNode };

export default function HeroBanner({ children }: Props) {
  const router = useRouter();
  const [image, setImage] = useState(1);
  const [searchData, setSearchData] = useState('');
  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);
  console.log('image', image);
  return (
    <>
      <div className="h-[600px] relative bg-cover">
        <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
          <Image
            alt="hero"
            src="/images/bg-hero1.webp"
            fill
            className={`${
              image === 1 ? 'opacity-100' : 'opacity-0'
            } transition-all duration-1000`}
          />
          <Image
            alt="hero"
            src="/images/bg-hero2.webp"
            fill
            className={`${
              image === 2 ? 'opacity-100' : 'opacity-0'
            } transition-all duration-1000`}
          />
          <Image
            alt="hero"
            src="/images/bg-hero3.webp"
            fill
            className={`${
              image === 3 ? 'opacity-100' : 'opacity-0'
            } transition-all duration-1000`}
          />
          <Image
            alt="hero"
            src="/images/bg-hero4.webp"
            fill
            className={`${
              image === 4 ? 'opacity-100' : 'opacity-0'
            } transition-all duration-1000`}
          />
          <Image
            alt="hero"
            src="/images/bg-hero5.webp"
            fill
            className={`${
              image === 5 ? 'opacity-100' : 'opacity-0'
            } transition-all duration-1000`}
          />
          <Image
            alt="hero"
            src="/images/bg-hero6.webp"
            fill
            className={`${
              image === 6 ? 'opacity-100' : 'opacity-0'
            } transition-all duration-1000`}
          />
        </div>
      </div>
      {children}
    </>
  );
}
