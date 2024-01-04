export default function Page ({ params }: { params: { topicId: number } }) {
  return (
        <p>topic page {params.topicId}</p>
  )
}
