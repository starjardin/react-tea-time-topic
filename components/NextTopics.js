import React, { useState } from 'react'
import ArchiveButton from './ArchiveButton'

export default function NextTopics ({ 
  topic,
  topics,
  setTopics
  }) {


  function upvotesIncrement () {
    topic.upvotes ++
    setTopics([...topics])
  }
  
  function downvotesDecrement () {
    topic.downvotes ++
    setTopics([...topics])
  }

  return  (
    <>
      <div className="next-topic">
        <div className="row">
          <p>{topic.title}</p>
          <ArchiveButton 
            topic={topic}
            topics={topics}
            setTopics={setTopics}
          />
        </div>
        <div>
          <button onClick={upvotesIncrement}>+👍</button>
          <span>{topic.upvotes}</span>
          <button onClick={downvotesDecrement}>-👎</button>
          <span>{topic.downvotes}</span>
        </div>
      </div>
    </>
  )
}