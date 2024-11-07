import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function StudyQuestionSkeleton () {
  return (
    <Card className="w-full border-none">
      <CardHeader className="px-0">
        <CardTitle className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Skeleton className="h-14 w-full mb-6" />
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-start p-4 rounded-lg border">
              <Skeleton className="h-5 w-5 mr-3 mt-1" />
              <div className="flex-grow">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-1/2 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
