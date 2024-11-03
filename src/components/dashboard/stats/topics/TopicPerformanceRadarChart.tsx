'use client'
import { TopicPerformance } from '@/types/Metrics'
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'
interface TopicPerformanceRadarChartProps {
    data: TopicPerformance[]
}

export function TopicPerformanceRadarChart (props:TopicPerformanceRadarChartProps) {
  return (
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={props.data}
          >
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="topic" stroke="#888" />
            <PolarRadiusAxis stroke="#888" />
            <Radar
              name="Preguntas correctas"
              dataKey="mark"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.9}
            />
            <Radar
              name="Preguntas totales"
              dataKey="full_mark"
              strokeDasharray="5 5"
              stroke="#82ca9d"
              fillOpacity={0.1}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
  )
}
