import { useSession, signIn, signOut } from 'next-auth/react'
import { useAuth } from '../pages/auth/authUserContext';

function MiniProfile() {

  const { data: session } = useSession();
  const { authUser, loading } = useAuth();

  console.log({authUser}, {loading});

  return (
    <div className='flex items-center mt-14 ml-10'>
      <img
        className='w-16 h-16 rounded-full border border-green-600 p-[2px] '
        src={session?.user.image}
        alt=''
      />

      <div className='flex-1 mx-4'>
      <h2 className='font-bold'>{session?.user?.username}</h2>
        <h3 className='text-sm text-green-600 font-semibold'>Welcome to Catstagram!</h3>
      </div>

      <button 
        onClick={signOut}
        className='text-blue-500 text-sm font-semibold'
      >
        Sign Out
      </button>

    </div>
  )
}

export default MiniProfile
