'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '../utils/utilscss';
import Link from 'next/link';
import FiverrLogo from './FiverLogo';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

type Props = {};

export default function NavBar({}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navFixed, setIsFixed] = useState(true);
  const [searchData, setsearchData] = useState('');
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();
  console.log('session', session);
  const handleLogin = () => {};
  const handleSignUp = () => {};
  const links = [
    {
      linkName: 'Fiver Bussiness',
      handler: '#',
      type: 'link'
    },
    {
      linkName: 'Explore',
      handler: '#',
      type: 'link'
    },
    {
      linkName: 'English',
      handler: '#',
      type: 'link'
    },
    {
      linkName: 'Become a Seller',
      handler: '#',
      type: 'link'
    },
    {
      linkName: 'Sign In',
      handler: handleLogin,
      type: 'button'
    },
    {
      linkName: 'Join',
      handler: handleSignUp,
      type: 'button2'
    }
  ];
  useEffect(() => {
    if (pathName === '/') {
      const positionNavbar = () => {
        window.scrollY > 0 ? setIsFixed(true) : setIsFixed(false);
      };
      window.addEventListener('scroll', positionNavbar);
      return () => window.removeEventListener('scroll', positionNavbar);
    } else {
      setIsFixed(true);
    }
  }, [pathName]);
  useEffect(() => {
    if (session?.user) {
      setIsLoaded(true);
    }
  }, [session?.user]);

  return (
    <>
      {isLoaded ? (
        <nav
          className={cn(
            'w-full px-24 flex justify-between items-center py-6 top-0 z-30 transition-all duration-500 ease-in-out',
            {
              'fixed bg-white border-b border-gray-200': navFixed,
              'absolute bg-transparent border-none dark:bg-transparent dark:border-none':
                !navFixed
            }
          )}
        >
          <div>
            <Link href="/">
              <FiverrLogo
                fillColor={!navFixed || !session?.user ? '#ffffff' : '#404145'}
              />
            </Link>
          </div>

          <ul className="flex gap-10 items-center">
            {links.map(({ linkName, handler, type }) => {
              return (
                <li
                  key={linkName}
                  className={`${
                    navFixed ? 'text-black' : 'text-white'
                  } font-medium`}
                >
                  {type === 'link' && (
                    <Link href={handler as string}>{linkName}</Link>
                  )}
                  {type === 'button' && (
                    <button onClick={handler as () => {}}>{linkName}</button>
                  )}
                  {type === 'button2' && (
                    <button
                      onClick={handler as () => {}}
                      className={`border   text-md font-semibold py-1 px-3 rounded-sm ${
                        navFixed
                          ? 'border-[#1DBF73] text-[#1DBF73]'
                          : 'border-white text-white'
                      } hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] transition-all duration-500`}
                    >
                      {linkName}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
