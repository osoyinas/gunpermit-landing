import { QuizAttempt } from '@/types/Quizzes'
import { BookOpen, Check, Play, X } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import { LinkButton } from '@components/ui/linkButton'

interface QuizItemProps {
  quiz: QuizAttempt;
}
export function QuizRow (props: QuizItemProps) {
  const { quiz } = props
  return (
    <TableRow>
      <TableCell className="font-medium">{quiz.title}</TableCell>
      <TableCell className="text-right">{quiz.attempts}</TableCell>
      <TableCell className="flex items-center justify-end gap-2 font-bold">
          {quiz.score_str != null ? `${quiz.score_str}` : '-'}
          {quiz.passed === true && <Check className=" text-green-500 w-5" />}
          {quiz.passed === false && <X className=" text-red-500 w-5" />}
      </TableCell>
      <TableCell>
        <div className="flex justify-center space-x-2">
          <LinkButton size="sm" variant="outline" href={`/tests/${quiz.id}`}>
            <BookOpen className="h-4 w-4 mr-1" />
            Estudio
          </LinkButton>
          <LinkButton size="sm" variant="default" href={`/tests/${quiz.id}`}>
            <Play className="h-4 w-4 mr-1" />
            Test
          </LinkButton>
        </div>
      </TableCell>
    </TableRow>
  )
}
