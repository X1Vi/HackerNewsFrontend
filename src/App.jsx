import React, { useEffect, useState } from 'react'

// components
import StoryCard from './components/StoryCard'

import { URL } from './Url';

// css
import './App.css'

function App() {
  const [stories, setStories] = useState([]);

  const fetchStoryData = () => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log('Success:', setStories(data["stories"])))
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    fetchStoryData()
  }, [stories])

  return (
    <div className='main-container'>
      {stories.map((story) => (
        <StoryCard
          key={story?.id}  // Make sure to use a unique key
          title={story?.title}
          author={story?.by}
          score={story?.score}
          url={story?.url}
          time={story?.time}
          type={story?.type}
        />
      ))}

    </div>
  )
}

export default App