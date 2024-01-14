/* eslint-disable no-undef */
'use client'
import { Question as QuestionType } from '@/types/Topic'
import React, { useState } from 'react'
import { updateQuestion } from '@/services/updateQuestion'

export default function Question ({ question } : {question: QuestionType}) {
  const [updatedQuestion, setUpdatedQuestion] = useState<QuestionType>(question)
  const [edited, setEdited] = useState<boolean>(false)

  const onQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedQuestion((prevQuestion) => {
      console.log(updatedQuestion)

      if (prevQuestion.question === event.target.value) {
        return prevQuestion
      } else {
        return {
          ...prevQuestion,
          question: event.target.value
        }
      }
    }
    )
    setEdited(true)
  }

  const onAnswerChange = (answerIndex:number, newText: string) => {
    setUpdatedQuestion((prevQuestion) => {
      const updatedAnswers = prevQuestion.answers.map((answer, index) => {
        if (index === answerIndex) {
          return {
            ...answer,
            answer: newText
          }
        } else {
          return answer
        }
      })
      return {
        ...prevQuestion,
        answers: updatedAnswers
      }
    })
    setEdited(true)
  }

  const handleCorrectChange = (newCorrectAnswerIndex:number) => {
    setUpdatedQuestion((prevQuestion) => {
      const updatedAnswers = prevQuestion.answers.map((answer, index) => {
        if (index === newCorrectAnswerIndex) {
          return {
            ...answer,
            is_true: !answer.is_true
          }
        } else {
          return {
            ...answer,
            is_true: false
          }
        }
      })
      return {
        ...prevQuestion,
        answers: updatedAnswers
      }
    }
    )
    setEdited(true)
  }

  const handleSave = async () => {
    await updateQuestion(updatedQuestion)
    setUpdatedQuestion(updatedQuestion)
    setEdited(false)
  }
  return (
    <article className='py-8 px-12 pb-12 rounded-xl flex flex-col gap-8 relative z-30 border border-accent shadow-xl'>
        <textarea className='text-pretty text-base-content bg-base-100 min-h-max' onChange={onQuestionChange} value={updatedQuestion.question}/>
        <ul className='flex flex-col gap-4'>
            {updatedQuestion.answers.map((answer, index) => (
                <li key={index} className='w-full flex items-center gap-4'>
                    <input type="checkbox" className="checkbox checkbox-accent" checked={answer.is_true} onChange={() => {
                      if (answer.is_true) return
                      handleCorrectChange(index)
                    }}/>
                    <textarea className='bg-base-300 w-full p-2 px-4 rounded-xl font-semibold text-wrap min-h-max' value={answer.answer} onChange={
                        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                          onAnswerChange(index, event.target.value)
                        }
                        }/>
                </li>
            ))}
        </ul>
        {edited && (
            <footer className='flex justify-between'>
            <button className='btn btn-error' onClick={() => {
              setUpdatedQuestion(question)
              setEdited(false)
            }}>Deshacer</button>
            <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
            </footer>
        )}
    </article>
  )
}
