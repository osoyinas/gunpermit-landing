export function Divider ({ text }: { text?: string }) {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-muted" />
      <span className="text-sm text-muted-foreground">{text}</span>
      <div className="flex-1 h-px bg-muted" />
    </div>
  )
}
