'use client'

import * as React from 'react'
import { BookOpenIcon, ClipboardIcon, TrophyIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { FullscreenContainer } from './ui/FullscreenContainer'
import { NextAssessmentCard } from './dashboard/assesments/NextAssessmentCard'
import { RecentResultsCard } from './dashboard/results/RecentResultsCard'

const lineChartData = [
  { date: '01/05', score: 65 },
  { date: '08/05', score: 72 },
  { date: '15/05', score: 78 },
  { date: '22/05', score: 85 },
  { date: '29/05', score: 82 },
  { date: '05/06', score: 90 }
]

const radarChartData = [
  { subject: 'Seguridad', A: 120, fullMark: 150 },
  { subject: 'Leyes', A: 98, fullMark: 150 },
  { subject: 'Manejo', A: 86, fullMark: 150 },
  { subject: 'Primeros Auxilios', A: 99, fullMark: 150 },
  { subject: 'Ética', A: 85, fullMark: 150 },
  { subject: 'Mantenimiento', A: 65, fullMark: 150 }
]

export function Dashboard () {
  return (
    <FullscreenContainer className="flex flex-col max-w-7xl m-auto">
      <main className="flex-1 p-4 lg:p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Progreso de Puntuación</CardTitle>
              <CardDescription>Evolución de tus resultados en el tiempo</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#333', border: 'none' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Rendimiento por Categoría</CardTitle>
              <CardDescription>Tus puntuaciones en diferentes áreas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="subject" stroke="#888" />
                  <PolarRadiusAxis stroke="#888" />
                  <Radar name="Puntuación" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </FullscreenContainer>
  )
}
