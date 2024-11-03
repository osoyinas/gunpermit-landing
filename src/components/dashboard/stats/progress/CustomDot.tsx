export const CustomDot = (props: { cx: any; cy: any; payload: any, key:any }) => {
  const { cx, cy, payload, key } = props
  const fillColor = payload.passed ? '#15803d' : '#7f1d1d'

  return <circle cx={cx} cy={cy} r={4} fill={fillColor} strokeWidth={1} key={key} />
}
