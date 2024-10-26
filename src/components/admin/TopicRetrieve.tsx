'use client'
import { Topic } from '@/types/Topic'
import Question from '../Question'
import React, { useState } from 'react'
import { updateTopic } from '@/services/updateTopic'
import useAxios from '@/hooks/useAxios'

export default function TopicRetrieve ({ topic }: { topic: Topic }) {
  const [updatedTopic, setUpdatedTopic] = useState<Topic>(topic)
  const [edited, setEdited] = useState<boolean>(false)
  const axiosInstance = useAxios()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTopic((prevTopic) => {
      if (prevTopic.title === event.target.value) {
        return prevTopic
      } else {
        return {
          ...prevTopic,
          title: event.target.value
        }
      }
    })
    setEdited(true)
  }
  const handleSave = async () => {
    await updateTopic(updatedTopic, axiosInstance)
    setUpdatedTopic(updatedTopic)
    setEdited(false)
  }
  return (
    topic &&
    (<div className="flex flex-col gap-4 my-4">
      <input className="font-bold text-primary text-4xl bg-transparent" value={updatedTopic.title} onChange={handleInputChange}/>
      {edited && (
            <footer className='flex justify-between'>
            <button className='btn btn-error' onClick={() => {
              setUpdatedTopic(topic)
              setEdited(false)
            }}>Deshacer</button>
            <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
            </footer>
      )}
      <div className="flex flex-col gap-4">
       <div className='divider'></div>
        <ul className='flex flex-col gap-8'>
          {topic.questions.map((question, index) => (
            <>
              {index + 1}
            <Question key={question.id} question={question}/>
            </>
          ))}
        </ul>
      </div>
    </div>
    )
  )
}
