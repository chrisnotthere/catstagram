import Posts from "./Posts"
import Stories from "./Stories"
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'


function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto bg-blue-100 mt-2'>

      <section className='col-span-2 p-2' >

        <Stories />

        <Posts />

      </section>

      <section className='hidden xl:inline-grid md:col-span-1 bg-yellow-200'>

        <div className='fixed top-14 mr-4'>

          <MiniProfile />

          <Suggestions />

        </div>

      </section>

    </main>
  )
}

export default Feed
