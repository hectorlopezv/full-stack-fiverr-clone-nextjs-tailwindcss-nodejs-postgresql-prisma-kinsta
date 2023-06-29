'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';


const popularServicesData = [
  {
    name: 'AI Artists',
    label: 'Add talent to AI',
    image: '/images/service1.png'
  },
  {
    name: 'Logo Design',
    label: 'Buld your own brand',
    image: '/images/service2.jpeg'
  },
  {
    name: 'Wordpress',
    label: 'Create your own website',
    image: '/images/service3.jpeg'
  },
  {
    name: 'Voice Over',
    label: 'Share your message',
    image: '/images/service4.jpeg'
  },
  {
    name: 'Social Media',
    label: 'Reach more customers',
    image: '/images/service5.jpeg'
  },
  {
    name: 'Ilustration',
    label: 'Color your dreams',
    image: '/images/service6.jpeg'
  }
];
export default function PopularServices() {
  const router = useRouter();
  return (
    <div className="ml-10 my-10">
      <h2 className="text-4xl mb-5 text-[#404145] font-bold text-center pb-4">
        Popular Services
      </h2>
      <ul className="flex flex-wrap gap-8 items-center justify-center">
        {popularServicesData.map(({ label, name, image }) => (
          <li
            key={name}
            className="relative cursor-pointer"
            onClick={() => {
              router.push(`/search?q=${name.toLowerCase()}`);
            }}
          >
            <div className="absolute z-10 text-white left-5 top-4">
              <span>{label}</span>
              <h6 className="font-extrabold text-2xl">{name}</h6>
            </div>
            <div className="h-80 w-64">
              <Image fill src={image} alt={name} className="rounded-md" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
