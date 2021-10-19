import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(14)].map((i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setStories(suggestions);
  }, [])

  return (
    <div className='flex flex-row overflow-x-auto 
    scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-yellow-200 p-2'>
    
      {/* if there is a session, show users info as the first story */}
      {session && (
        <Story 
          key={session.user.id}
          image={session.user.image}
          username={session.user.username}
        />
      )}

      {stories.map(story => {
        return(
          <Story 
            key={story.id}
            username={story.username}
            image={story.avatar}
          />
        )
      })}

    </div>
  )
}

export default Stories
