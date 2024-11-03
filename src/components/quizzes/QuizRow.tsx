import { QuizAttempt } from '@/types/Quizzes'
import { BookOpen, Play } from 'lucide-react'
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
      <TableCell className="font-bold text-right">
        <span
          className={`${
            quiz.passed === true
              ? 'text-green-500'
              : quiz.passed === false
              ? 'text-red-500'
              : ''
          }`}
        >
          {quiz.score_str != null ? `${quiz.score_str}` : '-'}
        </span>
      </TableCell>
      <TableCell>
        <div className="flex justify-center space-x-2">
          <LinkButton size="sm" variant="outline" href={`/tests/${quiz.id}`}>
            <BookOpen className="h-4 w-4 mr-1" />
            Estudio
          </LinkButton>
          <aside>
            <LinkButton size="sm" variant="default" href={`/tests/${quiz.id}`}>
              <Play className="h-4 w-4 mr-1" />
              Test
            </LinkButton>
            <p className="text-xs opacity-70 text-center">{quiz.attempts} intentos</p>
          </aside>
        </div>
      </TableCell>
    </TableRow>
  )
}
