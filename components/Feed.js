import Posts from "./Posts"
import Stories from "./Stories"
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from "next-auth/react";
import { useAuth } from '../pages/auth/authUserContext';

function Feed() {
  const { data: session } = useSession();
  const { authUser, loading, signOut } = useAuth();

  return (

    // is there is no session, center the feed
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl mx-auto bg-blue-100 mt-2
    ${!session && '!grid-cols-1 !max-w-3xl'}`}>

      <section className='col-span-2 p-2' >

        <Stories />

        <Posts />

      </section>

      {session && (
        <section className='hidden xl:inline-grid md:col-span-1 bg-yellow-200'>
          <div className='fixed top-20'>
            <MiniProfile />
            <Suggestions />
            
          </div>
        </section>
      )}

    { authUser && <div>Congratulations {authUser?.email}! You are logged in.</div> }

    </main>
  )
}

export default Feed
