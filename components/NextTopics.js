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
        <div className="button--wrapper">
          <div className="button--container">
            <button className="thumbup"
              onClick={upvotesIncrement}
              role="button"
              aria-label={`upvotes ${topic.title}`}
            ></button>
            <span>{topic.upvotes}</span>
            <button className="thumbdown"
              role="button"
              aria-label={`downvotes ${topic.title}`}
              onClick={downvotesDecrement}
            ></button>
            <span>{topic.downvotes}</span>
          </div>
        </div>
      </div>
    </>
  )
}