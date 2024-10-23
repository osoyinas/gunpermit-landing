import { TooltipProps } from 'recharts'

export const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: '#333',
            padding: '10px',
            borderRadius: '5px',
            color: '#fff'
          }}
        >
          <p className="label">{`${label}`}</p>
          <div
            className={`text-xl w-full px-3 py-1 rounded-full font-bold min-w-[4rem] flex items-center justify-center ${
              payload[0].payload.passed ? 'bg-green-700' : 'bg-red-900'
            }`}
          >
            {payload[0].payload.score}
          </div>
        </div>
    )
  }

  return null
}
