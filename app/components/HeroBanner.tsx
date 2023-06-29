'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

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
        <div className="z-1 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20">
          <h1 className="text-white text-5xl leading-snug">
            Find the perfect &nbsp;<i>Freelancing</i> <br />
            services for your business
          </h1>
          <div className="flex items-center pt-1">
            <div className="relative">
              <Input
                className="h-12 w-[450px] rounded-r-none"
                placeholder="Try building your dream"
              />
            </div>
            <Button
              size="xl"
              className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-md rounded-l-none"
            >
              Search
            </Button>
          </div>
          <div className="text-white flex gap-4">
            Popular:{' '}
            <ul className="flex gap-5">
              <li
                className="text-sm py-1 px-2 border rounded-full hover:bg-white 
              hover:text-black transition-all duration-300 cursor-pointer"
              >
                Website Design
              </li>
              <li
                className="text-sm py-1 px-2 border rounded-full hover:bg-white 
              hover:text-black transition-all duration-300 cursor-pointer"
              >
                Mobile Design
              </li>
              <li
                className="text-sm py-1 px-2 border rounded-full hover:bg-white 
              hover:text-black transition-all duration-300 cursor-pointer"
              >
                Logo Design
              </li>
              <li
                className="text-sm py-1 px-2 border rounded-full hover:bg-white 
              hover:text-black transition-all duration-300 cursor-pointer"
              >
                AI Design{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
