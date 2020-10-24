import React from 'react'


export default function DeleteButton ({ 
  // destructuring objects i.e. topic= topic.topic
  topic,
  prevTopics,
  setPrevTopics
}) {

//This is the id of the element to delete
const id = topic.id
//function to delete an item (a topic)
  function deleted () {
    setPrevTopics(prevTopics.filter(prevTopic => prevTopic.id !== id))
  }
  return (
    <>
      <button
        onClick={deleted}
      >Delete</button>
    </>
  )
}