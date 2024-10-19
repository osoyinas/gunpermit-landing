import { Button } from '@/components/ui/button'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

export function BottomNavigationButtons () {
  const {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  } = useQuizNavigation()
  return (
    <footer className="flex justify-between pt-6">
      <aside className="flex gap-4 items-center">
        <Button
          onClick={goToPreviousQuestion}
          variant="outline"
          size="icon"
          disabled={previousQuestionDisable}
          className="flex items-center"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <span className={previousQuestionDisable ? 'opacity-60' : ''}>
          Anterior
        </span>
      </aside>
      <aside className="flex gap-4 items-center">
        <span className={nextQuestionDisable ? 'opacity-60' : ''}>
          Siguiente
        </span>
        <Button
          onClick={goToNextQuestion}
          variant="outline"
          size="icon"
          disabled={nextQuestionDisable}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </aside>
    </footer>
  )
}
