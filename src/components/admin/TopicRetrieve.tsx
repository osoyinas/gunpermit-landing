import { Topic } from '@/types/Topic'

export default function TopicRetrieve ({ topic }: { topic: Topic }) {
  return (
    topic &&
    (<div className="flex flex-col gap-4 my-4">
      <h1 className='font-bold text-4xl'>Vista previa</h1>
      <h2 className="font-bold">Nombre: <span className='text-primary text-2xl'>{topic.name}</span></h2>
      <div className="flex flex-col gap-4">
       <h2 className=' font-semibold'> Subtemas totales: <span className='text-secondary text-xl'>{topic.subtopics.length}</span></h2>
       <ul className='flex flex-col gap-2'>
        {topic.subtopics.map((subtopic) => (
          <li key={subtopic.id}><h3>- {subtopic.name}</h3></li>
        ))}
       </ul>
       <h2 className=' font-semibold'> Preguntas totales: <span className='text-secondary text-xl'>{topic.questions.length}</span></h2>
      </div>
    </div>
    )
  )
}
