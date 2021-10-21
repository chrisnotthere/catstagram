import { useState, useEffect } from "react";
import faker from 'faker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(6)].map((i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    
    setSuggestions(suggestions);
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <h3 className='text-sm font-bold text-green-600 dark:text-red-600'>Suggestions for you</h3>

    {
      suggestions.map((profile) => (
        <div
          key={profile.id}
          className='flex items-center justify-between mt-3'
        >
          <img 
          className='w-10 h-10 rounded-full border border-green-500 p-[2px]'
          src={profile.avatar} alt='' />

          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h3 className='text-xs text-green-600 dark:text-red-600' >works at {profile.company.name}</h3>

          </div>

          <button className='text-blue-400 dark:text-blue-200 text-xs font-bold'>Follow</button>

        </div>
      ))
    }
    
  </div>
  )
}

export default Suggestions
