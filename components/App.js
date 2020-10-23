import React, { useState, useEffect } from 'react'
import Header from './Header'
import PrevTopics from './PrevTopics'
import NextTopics from './NextTopics'

const dataUrl = 'https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json'

export default function App () {
  const [topics, setTopics] = useState([])
  const [newTopics, setNewTopics] = useState([])
  const [prevTopics, setPrevTopics] = useState([])
  const [likeTopic, setLikeTopic] = useState(0)
  const [unLikeTopic, setUnLikeTopic] = useState(0)

  const getTopics = async () => {
    const res = await fetch(dataUrl)
    const data = await res.json()
    setTopics(data)
  }

    useEffect ( () => {
      getTopics()
    }, [])

    useEffect (() => {
      setNewTopics(topics.filter(topics => topics.discussedOn === ""))
    }, [topics])

    useEffect (() => {
      setPrevTopics(topics.filter(topics => topics.discussedOn !== ""))
    }, [topics])

  return (
    <>
      <Header />
      <div className="next-topic-container">
        <h3>Next Topics</h3>
        {newTopics.map(topic => {
        return (
          <NextTopics 
            key={topic.id} 
            topic={topic}
            likeTopic={likeTopic}
            unLikeTopic={unLikeTopic}
            setLikeTopic={setLikeTopic}
            setUnLikeTopic={setUnLikeTopic}
          />
        )
        })}
      </div>
      <div className="prev-topic-container">
        <h3>Past Topics</h3>
        {prevTopics.map(topic => {
          return (
            <PrevTopics key={topic.id} topic={topic} />
          )
        })}
      </div>
    </>
  )
}