import { RecentResultsCard } from '@components/dashboard/results/RecentResultsCard'
import { PuntuationProgressCard } from '@components/dashboard/stats/progress/PuntuationProgressCard'
import { TopicPerformanceCard } from '@components/dashboard/stats/topics/TopicPerformanceCard'
import { Suspense } from 'react'
import { RecentResultsCardSkeleton } from '@components/dashboard/results/RecentResultsCardSkeleton'
import { PuntuationProgressCardSkeleton } from '@components/dashboard/stats/progress/PuntuationProgressCardSkeleton'
import { TopicPerformanceCardSkeleton } from '@components/dashboard/stats/topics/TopicPerformanceCardSkeleton'
import { TopicStatisticsCard } from './TopicStatisticsCard'

export function ProgressDashboard () {
  return (
    <main className="flex-1 px-2 py-8 space-y-6 max-w-8xl mx-auto">
      <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<RecentResultsCardSkeleton />}>
          <RecentResultsCard />
        </Suspense>
        <Suspense fallback={<RecentResultsCardSkeleton />}>
          <TopicStatisticsCard />
        </Suspense>
        <Suspense fallback={<TopicPerformanceCardSkeleton />}>
          <TopicPerformanceCard />
        </Suspense>
        <div className="col-span-1 md:col-span-3">
          <Suspense fallback={<PuntuationProgressCardSkeleton />}>
            <PuntuationProgressCard />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
