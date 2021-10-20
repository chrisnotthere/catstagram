import { BeakerIcon, HomeIcon,  } from "@heroicons/react/solid"
import { 
  SearchIcon, 
  PlusCircleIcon, 
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserCircleIcon,
  CameraIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline';
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { useSession, signIn, signOut as signOutSession } from "next-auth/react";
import logo from '../public/logo.png';
import Image from 'next/image'
import { modalState } from '../atoms/modalAtom';
import { useEffect } from 'react';
import { useAuth } from '../pages/auth/authUserContext';

function Header() {
  //rename data object as 'session'
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState); // global state using recoil. see atoms/modalAtom.js
  const router = useRouter();
  const { authUser, loading, signOut } = useAuth();

  //console.log(session);

  return (
    <div className='bg-red-400 sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>

        {/* LEFT - logo/name text */}
        <div onClick={() => router.push('/')} className='relative hidden md:inline-grid w-28 
        cursor-pointer' >
          <Image 
            src='/../public/logo.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <CameraIcon onClick={() => router.push('/')} className=' w-10 md:hidden cursor-pointer' />

        {/* MIDDLE - searchbar */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounder-md '>
            <div className='absolute inset-y-0 pl-3 flex items-center 
            pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input 
              className='bg-gray-50 block w-full pl-10 sm:text-sm
              border-gray-300 focus:ring-black focus:border-black rounded-full' 
              type='text' 
              placeholder='Search' 
            />
          </div>
        </div>

        {/* RIGHT - icons/signin */}
        <div className='flex items-center 
        justify-end space-x-4' >
          <HomeIcon onClick={() => router.push('/')} className='navBtn' />
          <MenuIcon className='h-8 md:hidden 
          cursor-pointer' />

        {session ? (
          <>
            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
            <img 
              src={session?.user?.image} 
              onClick={signOutSession}
              alt='profile pic' 
              className='h-8 w-8 rounded-full hover:scale-125 cursor-pointer '
            />
            <button onClick={signOutSession} className='hidden xl:inline-block hover:scale-110'>Sign Out</button>
          </>
        ) : (
          <> 
            {!authUser && (
              <>
                <UserCircleIcon className='navBtn' onClick={signIn} />
                <button className='hover:scale-110' onClick={signIn}>Sign In</button>
              </>
            )}
          </>
        )}

        { authUser && (
          <>
          {console.log(authUser)}
            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
            <QuestionMarkCircleIcon 
              onClick={signOut} 
              className='h-8 w-8 hover:scale-125 cursor-pointer '
            />
            <button onClick={signOut} className='hover:scale-110' >Sign out</button> 
          </>
        )}
        
        </div>
      </div>
    </div>
  )
}

export default Header
