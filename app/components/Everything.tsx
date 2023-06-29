import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {};
const everythingData = [
  {
    title: 'Stick to your budget',
    subtitle:
      'Find the right service for every price point. No hourly rates, just project-based pricing.'
  },
  {
    title: 'Quality work done quickly',
    subtitle:
      'Find the right freelancer to begin working on your project within minutes.'
  },
  {
    title: 'Protected payments, every time',
    subtitle:
      'Always know what you’ll pay upfront. Your payment isn’t released until you approve the work.'
  },
  {
    title: '24/7 support',
    subtitle:
      'Questions? Our round-the-clock support team is available to help anytime, anywhere.'
  }
];
export default function Everything({}: Props) {
  return (
    <div className="bg-[#f1fdf7] flex py-20 justify-between px-24">
      <div className='px-2'>
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
          The best part? You can do it all online.
        </h2>
        <ul className="flex flex-col gap-8">
          {everythingData.map(({ title, subtitle }) => (
            <li key={title}>
              <div className="flex gap-2 items-center text-xl">
                <CheckCircle2 size={24} className="text-green-500" />
                <h4>{title}</h4>
              </div>
              <p className="text-[#62646a]">{subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-96 w-2/4">
        <Image fill alt="everything" src="/images/everything.webp" />
      </div>
    </div>
  );
}
