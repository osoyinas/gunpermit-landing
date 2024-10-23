'use client'

import * as React from 'react'
import { BookOpenIcon, ClipboardIcon, TrophyIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FullscreenContainer } from './ui/FullscreenContainer'
import { NextAssessmentCard } from './dashboard/assesments/NextAssessmentCard'
import { RecentResultsCard } from './dashboard/results/RecentResultsCard'
import { PuntuationProgressCard } from './dashboard/stats/progress/PuntuationProgressCard'
import { TopicPerformanceCard } from './dashboard/stats/topics/TopicPerformanceCard'

export function Dashboard () {
  return (
    <FullscreenContainer className="flex flex-col max-w-7xl m-auto">
      <main className="flex-1 p-4 lg:p-6 space-y-6">
        <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Acceso Rápido</CardTitle>
              <CardDescription>Recursos de estudio y herramientas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                <BookOpenIcon className="mr-2 h-4 w-4" />
                Material de Estudio
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <ClipboardIcon className="mr-2 h-4 w-4" />
                Prueba de Práctica
              </Button>
              <Button className="w-full" variant="outline">
                <TrophyIcon className="mr-2 h-4 w-4" />
                Mis Certificaciones
              </Button>
            </CardContent>
          </Card>
          <RecentResultsCard />
          <NextAssessmentCard />
          <div className='col-span-1 md:col-span-2'>
          <PuntuationProgressCard />

          </div>
          <TopicPerformanceCard />
        </div>
      </main>
    </FullscreenContainer>
  )
}
