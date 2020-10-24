import React, { useState, useEffect } from 'react'
import dataUrl from './Url'
import Header from './Header'
import PrevTopics from './PrevTopics'
import NextTopics from './NextTopics'
import FormTopics from './FormTopics'

export default function App () {
  //State for the main array, start it with an empty array
  const [topics, setTopics] = useState([])
  //state for the new topics, start with an empty array
  const [newTopics, setNewTopics] = useState([])
  //state for the past topics, start with an empty array
  const [prevTopics, setPrevTopics] = useState([])

  //fetching topics
  const getTopics = async () => {
    const res = await fetch(dataUrl)
    const data = await res.json()
    setTopics(data)
  }

//use useEffect to fetch topic
  useEffect ( () => {
    getTopics()
  }, [])

//set the new topics depending on what their discussedOn property is.
  useEffect (() => {
    setNewTopics(topics.filter(topics => topics.discussedOn === ""))
  }, [topics])
//set the past topics depending on what their discussedOn property is.
  useEffect (() => {
    setPrevTopics(topics.filter(topics => topics.discussedOn !== ""))
  }, [topics])

  return (
    <>
      <Header />
      <FormTopics 
        topics={topics} 
        setTopics={setTopics} />
      <div className="next-topic-container">
        <h3>Next Topics</h3>
        {/* sort the whole array depending on the upvotes and downvotes ratio before mapping it */}
        {newTopics.sort((a , b) => {
          const ratioA = a.upvotes - a.downvotes
          const ratioB = b.upvotes - b.downvotes
          return ratioB - ratioA
        }).map(topic => {
        return (
          <NextTopics 
            key={topic.id} 
            topic={topic}
            topics={topics}
            setTopics={setTopics}
          />
        )
        })}
      </div>
      <div className="prev-topic-container">
        <h3>Past Topics</h3>
        {prevTopics.map(topic => {
          return (
            <PrevTopics 
              key={topic.id} 
              topic={topic} 
              prevTopics={prevTopics}
              setPrevTopics={setPrevTopics} 
            />
          )
        })}
      </div>
    </>
  )
}