import { Question } from '@/types/Topic'
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { AnimatedGenericQuestionOption } from '@components/quizzes/generics/AnimatedGenericQuestionOption'

export function OptionsWithNoAnswerSelected ({
  question,
  handleOptionSelection
}: {
    question: Question;
    handleOptionSelection: (questionId: number, answerIndex: number) => void;
  }) {
  return (
      <RadioGroup
        className="w-full flex flex-col items-center justify-start gap-4"
        value={''}
      >
        {question.answers.map((option, index) => (
          <AnimatedGenericQuestionOption index={index} key={index}>
            <RadioGroupItem
              value={index.toString()}
              id={index.toString()}
              onClick={() => {
                handleOptionSelection(question.id, index)
              }}
              className="text-primary bg-primary/5 hover:bg-primary/10"
            />
            <Label
              htmlFor={index.toString()}
              className="text-left text-base md:text-lg cursor-pointer flex-grow py-4"
            >
              {option.answer}
            </Label>
          </AnimatedGenericQuestionOption>
        ))}
      </RadioGroup>
  )
}
