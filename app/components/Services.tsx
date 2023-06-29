'use client';
import { categories } from '@/app/utils/categories';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';


export default function Services() {
  const router = useRouter();
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-10 text-[#4b4145] font-bold">
        What are you waiting for?, We got it all.
      </h2>
      <ul className="grid grid-cols-5 gap-10">
        {categories.map(({ name, logo }) => (
          <li
            key={name}
            className="flex flex-col justify-center items-center cursor-pointer 
          hover:shadow-2xl hover:border-[#1dbf73] border-2 border-transparent p-5 duration-500
          text-center hover:rounded-sm relative
          "
            onClick={() => {
              router.push(`/search?q=${name.toLowerCase()}`);
            }}
          >
            <div className="">
              <Image
                height={40}
                width={40}
                src={logo}
                alt={name}
                className="rounded-md object-cover"
              />
            </div>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
