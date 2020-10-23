import React from 'react'
import DeleteButton from './DeleteButton'

export default function PrevTopics ({ topic }) {
  return (
    <>
      <div className="prev-topic">
        <div className="row">
          <p>{topic.title}</p>
          <DeleteButton />
        </div>
      </div>
    </>
  )
}