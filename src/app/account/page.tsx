import SkeletonAccount from '@components/account/SkeletonAccount'
import SocialAccount from '@components/account/SocialAccount'
import { Suspense } from 'react'

export default async function Page () {
  return (
    <Suspense fallback={<SkeletonAccount />}>
      <SocialAccount />
    </Suspense>
  )
}
