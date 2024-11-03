'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { CustomTooltip } from './CustomStatsTooltip'
import { CustomDot } from './CustomDot'
interface LineChartData {
    data: {
        date: string;
        mark: number;
        score: string;
        score_to_pass: number;
        passed: boolean;
    }[]
}

export function PuntuationProgressLineChart (props:LineChartData) {
  return (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="mark"
              stroke="#8884d8"
              dot={CustomDot}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotoneY"
              strokeDasharray="5 5"
              label="Aprobado"
              dataKey="score_to_pass"
              stroke="#15803d"
              dot={{ r: 0 }}
              activeDot={{ r: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
  )
}
