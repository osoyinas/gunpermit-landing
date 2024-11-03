import { FullscreenContainer } from './ui/FullscreenContainer'
import { NextAssessmentCard } from './dashboard/assesments/NextAssessmentCard'
import { RecentResultsCard } from './dashboard/results/RecentResultsCard'
import { PuntuationProgressCard } from './dashboard/stats/progress/PuntuationProgressCard'
import { TopicPerformanceCard } from './dashboard/stats/topics/TopicPerformanceCard'
import { QuickAccessCard } from './dashboard/quick_access/QuickAccessCard'
import { Suspense } from 'react'
import { RecentResultsCardSkeleton } from './dashboard/results/RecentResultsCardSkeleton'
import { PuntuationProgressCardSkeleton } from './dashboard/stats/progress/PuntuationProgressCardSkeleton'
import { TopicPerformanceCardSkeleton } from './dashboard/stats/topics/TopicPerformanceCardSkeleton'

export function Dashboard () {
  return (
    <FullscreenContainer className="flex flex-col max-w-7xl m-auto">
      <main className="flex-1 px-2 py-4 space-y-6">
        <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <QuickAccessCard />
          <Suspense fallback={<RecentResultsCardSkeleton />}>
            <RecentResultsCard />
          </Suspense>
          <NextAssessmentCard />
          <div className="col-span-1 md:col-span-2">
            <Suspense fallback={<PuntuationProgressCardSkeleton />}>
              <PuntuationProgressCard />
            </Suspense>
          </div>
          <Suspense fallback={<TopicPerformanceCardSkeleton />}>
            <TopicPerformanceCard />
          </Suspense>
        </div>
      </main>
    </FullscreenContainer>
  )
}
