import React from 'react'

export default function FormTopics ({ topics, setTopics }) { 

  function handleChange (e) {
    e.preventDefault()
    //create a new object for the new topics
    const newTopics = {
      discussedOn: "",
      downvotes: 0,
      id: Date.now(),
      title: e.target.input.value,
      upvotes: 0
    }
    //add the new topics to the main array
    setTopics([...topics, newTopics])
    //reset the form
    e.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={handleChange}>
        <input 
          type="text"
          name="input"
        />
        <button>Submit</button>
      </form>
    </>
  )
}