import { Question } from '@/types/Topic'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { XIcon, CircleIcon } from 'lucide-react'
import { Label } from '@components/ui/label'
import { GenericQuestionOption } from '../generics/AnimatedGenericQuestionOption'

export function OptionsWithAnswerSelected ({
  question,
  selectedOptionIndex,
  correctAnswerIndex
}: {
    question: Question;
    selectedOptionIndex: number;
    correctAnswerIndex: number;
  }) {
  return (
      <section className="space-y-4">
        {question.answers.map((option, index) => {
          const isSelected = selectedOptionIndex === index
          const isCorrect = isSelected && correctAnswerIndex === index
          return (
            <GenericQuestionOption
              index={index}
              key={index}
              className={`
                  hover:cursor-default hover:bg-primary/5
                  ${
                    isSelected
                      ? isCorrect
                        ? 'bg-green-700 hover:bg-green-700'
                        : 'bg-red-500 hover:bg-red-500'
                      : ''
                  }
                  `}
            >
              {isSelected
                ? (
                    isCorrect
                      ? (
                  <CheckCircledIcon className="h-5 w-5" />
                        )
                      : (
                  <XIcon className="h-5 w-5" />
                        )
                  )
                : (
                <CircleIcon className="h-4 w-4 text-primary" />
                  )}
              <Label
                htmlFor={index.toString()}
                className="hover:cursor-default text-left text-base md:text-lg cursor-pointer flex-grow py-4"
              >
                {option.answer}
              </Label>
            </GenericQuestionOption>
          )
        })}
      </section>
  )
}
