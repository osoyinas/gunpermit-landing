import { Topic } from '@/types/Topic'
import Question from '../Question'

export default function TopicRetrieve ({ topic }: { topic: Topic }) {
  return (
    topic &&
    (<div className="flex flex-col gap-4 my-4">
      <h2 className="font-bold text-center"><span className='text-primary text-4xl'>{topic.name}</span></h2>
      <div className='divider'></div>
      <div className="flex flex-col gap-4">
      <h2 className="font-bold"><span className='text-secondary text-2xl'>Subtemas</span></h2>
       <ul className='rounded-xl flex flex-col gap-2'>
        {topic.subtopics.map((subtopic) => (
          <li key={subtopic.id} className='underline'><h3>{subtopic.name}</h3></li>
        ))}
       </ul>
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
