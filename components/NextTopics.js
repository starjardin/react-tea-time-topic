import React from 'react'
import ArchiveButton from './ArchiveButton'

export default function NextTopics ({ 
  topic, 
  likeTopic,
  unLikeTopic,
  setLikeTopic,
  setUnLikeTopic }) {
  function increment () {
    setLikeTopic(prev => prev + 1)
  }
  
  function decrement () {
    setUnLikeTopic(prev => prev + 1)
  }
  return  (
    <>
      <div className="next-topic">
        <div className="row">
          <p>{topic.title}</p>
          <ArchiveButton />
        </div>
        <div>
          <button onClick={increment}>+👍</button>
          <span>{likeTopic}</span>
          <button onClick={decrement}>-👎</button>
          <span>{unLikeTopic}</span>
        </div>
      </div>
    </>
  )
}