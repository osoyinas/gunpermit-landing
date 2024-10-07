import { Loading } from './Loading'

export function FullscreenLoading () {
  return (
<div className=" text-foreground flex justify-center items-center" style={
        { height: 'calc(100vh - 4rem)' }
      }>
        <Loading />
      </div>
  )
}
