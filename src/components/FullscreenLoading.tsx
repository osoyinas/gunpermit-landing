import { ReactNode } from 'react'
import { Loading } from './Loading'

export function FullscreenLoading (props: { children?: ReactNode }) {
  return (
    <div
      className=" text-foreground flex justify-center items-center"
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <Loading />
      {props.children && <p className="ml-4 text-lg">{props.children}</p>}
    </div>
  )
}
