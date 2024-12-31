import { NextAssessmentCard } from './dashboard/assesments/NextAssessmentCard'
import { RecentResultsCard } from './dashboard/results/RecentResultsCard'
import { QuickAccessCard } from './dashboard/quick_access/QuickAccessCard'
import { Suspense } from 'react'
import { RecentResultsCardSkeleton } from './dashboard/results/RecentResultsCardSkeleton'

export function Dashboard () {
  return (
      <main className="flex-1 px-2 py-8 space-y-6 max-w-8xl mx-auto">
        <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <QuickAccessCard />
          <Suspense fallback={<RecentResultsCardSkeleton />}>
            <RecentResultsCard size={10}/>
          </Suspense>
          <NextAssessmentCard />
        </div>
      </main>
  )
}
