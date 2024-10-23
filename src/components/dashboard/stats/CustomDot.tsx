export const CustomDot = (props: { cx: any; cy: any; payload: any }) => {
  const { cx, cy, payload } = props
  console.log('payload', payload)
  const fillColor = payload.passed ? '#15803d' : '#7f1d1d'

  return <circle cx={cx} cy={cy} r={5} fill={fillColor} stroke='#FFF' strokeWidth={1} />
}
