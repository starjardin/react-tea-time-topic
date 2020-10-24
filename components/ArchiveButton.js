import React from 'react'


export default function ArchiveButton ( { 
  topic,
  topics,
  setTopics
  } ) {
function archived () {
  topic.discussedOn = Date.now();
  setTopics([...topics])
}

  return (
    <>
      <button className="archive"
        onClick={archived}
        role='button'
        aria-label={`archive ${topic.title}`}
      ></button>
    </>
  )
}