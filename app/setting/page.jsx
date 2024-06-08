import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div>Setting page</div>
      <Link href="/setting/configuration" className={buttonVariants({
        size:'lg',
        variant:"default"
      })}>Configuration</Link>

    </MaxWidthWrapper>
  )
}

export default Page