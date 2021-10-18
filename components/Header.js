import { BeakerIcon, HomeIcon,  } from "@heroicons/react/solid"
import { 
  SearchIcon, 
  PlusCircleIcon, 
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserCircleIcon,
  CameraIcon
} from '@heroicons/react/outline';
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
//import { modalState } from '../atoms/modalAtom';

function Header() {
  const { data: session } = useSession();
  //const [open, setOpen] = useRecoilState(modalState); // global state using recoil. see atoms/modalAtom.js
  const router = useRouter();

  console.log(session);


  async function signIn() {
  }

  function signOut() {
  }


  return (
    <div className="flex bg-red-400 h-20 justify-between sticky items-center px-10">

      {/* LEFT - logo/name text */}
      <div className='flex '>
        <h1 className='logo text-5xl hidden md:inline-flex'>Catstagram</h1>
        <CameraIcon className='h-10 w-10 md:hidden' />
      </div>

      {/* MIDDLE - searchbar */}

      <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounder-md '>
          <div className='absolute inset-y-0 pl-3 flex items-center 
          pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-500' />
          </div>
          <input 
            className='block w-full pl-10  border-gray-300 focus:ring-black focus:border-black rounded-full' 
            type='text' 
            placeholder='Search...' 
          />
        </div>
      </div>

      {/* RIGHT - icons/signin */}
      <div className='space-x-1 flex text-center'>
        <MenuIcon className='h-10 w-10 md:hidden' />
        
        <HomeIcon className='navBtn' />
        <PlusCircleIcon className='navBtn' />
        {/* <PaperAirplaneIcon className='navBtn rotate-45 ' /> */}
        {/* <UserGroupIcon className='navBtn' /> */}
        {/* <UserCircleIcon className='navBtn' /> */}
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>


      </div>



    </div>
  )
}

export default Header
