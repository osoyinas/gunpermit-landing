import { Question as QuestionType } from '@/types/Topic'

export default function Question ({ question } : {question: QuestionType}) {
  return (
    <article className='py-8 px-12 pb-12 rounded-xl flex flex-col gap-8 relative z-30 border border-accent shadow-xl'>
        <p className=' text-pretty rounded-xl text-base-content'>{question.question}</p>
        <ul className='flex flex-col gap-4'>
            {question.answers.map((answer) => (
                <li key={answer.answer} className=' p-2 px-4 rounded-xl bg-base-300 font-semibold'>{answer.answer}</li>
            ))}
        </ul>
        <footer className='absolute top-[0.8rem] left-[1.2rem]'>
            <h3 className='font-semibold'>{question.id}</h3>
        </footer>
    </article>
  )
}
