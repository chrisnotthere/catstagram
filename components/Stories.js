import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {
  const [stories, setStories] = useState([]);

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
    
      {stories.map(story => {
        return(
          <Story 
            username={story.username}
            image={story.avatar}
          />
        )

      })}

    </div>
  )
}

export default Stories
