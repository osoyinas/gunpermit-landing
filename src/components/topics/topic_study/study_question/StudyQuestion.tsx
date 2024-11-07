import { Question } from '@/types/Topic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, XCircle } from 'lucide-react'
interface QuestionViewProps {
  question: Question;
  totalQuestions: number;
  index: number;
}

export function StudyQuestion (props: QuestionViewProps) {
  const { question, totalQuestions, index } = props
  return (
    <Card className="w-full border-none">
      <CardHeader className='px-0'>
        <CardTitle className="flex justify-between items-center">
          <span>Pregunta {index + 1}</span>
          <span className="text-sm text-muted-foreground">
            {index + 1} de {totalQuestions}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className='px-0'>
        <p className="text-lg font-medium mb-6">{question.question}</p>
        <ul className="space-y-4">
          {question.answers.map((answer, index) => (
            <li
              key={index}
              className={`flex items-start p-4 rounded-lg ${
                answer.is_true
                  ? 'bg-green-500/20 border border-green-500'
                  : 'bg-background border'
              }`}
            >
              <div className="flex-shrink-0 mr-3 mt-1">
                {answer.is_true
                  ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )
                  : (
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                    )}
              </div>
              <div>
                <p className={answer.is_true ? 'font-medium' : ''}>
                  {answer.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
