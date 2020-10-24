import React from 'react'
import DeleteButton from './DeleteButton'

export default function PrevTopics ({ 
  topic,
  prevTopics,
  setPrevTopics
  }) {
  const date = new Date(Number(topic.discussedOn))
  return (
    <>
      <div className="prev-topic">
        <div className="row">
          <p>{topic.title}</p>
          <DeleteButton 
            topic={topic}
            prevTopics={prevTopics}
            setPrevTopics={setPrevTopics} 
          />
        </div>
        <p> Discussed on {date.toLocaleDateString()}</p>
      </div>
    </>
  )
}