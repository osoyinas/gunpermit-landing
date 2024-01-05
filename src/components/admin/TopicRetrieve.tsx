'use client'
import { Topic } from '@/types/Topic'
import Question from '../Question'

export default function TopicRetrieve ({ topic }: { topic: Topic }) {
  return (
    topic &&
    (<div className="flex flex-col gap-4 my-4">
      <h2 className="font-bold text-primary text-4xl">{topic.name}</h2>
      <div className="flex flex-col gap-4">
       <div className='divider'></div>
        <ul className='flex flex-col gap-8'>
          {topic.questions.map((question) => (
            <Question key={question.id} question={question}/>
          ))}
        </ul>
      </div>
    </div>
    )
  )
}
