import React from 'react';

const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
};

function StoryCard({ title, author, type, url, score, time }) {
  return (
    <div className="story-card">
      <h2 className="story-title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <div className="story-details">
        <p className="story-author">By: {author}</p>
        <p className="story-score">Score: {score}</p>
        <p className="story-time">Posted: {formatDate(time)}</p>
        <p className="story-type">Type: {type}</p>
      </div>
    </div>
  );
}

export default StoryCard;
