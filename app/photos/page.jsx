import DelayComponents from '@/components/DelayComponents'
import simulateLongApiRequest from '@/lib/SlowRquest'
import Image from 'next/image'
import React, { Suspense } from 'react'

const BigPhoto = () => {
  const data = simulateLongApiRequest(3000,'Loaded')
  return (
    <div className=' flex flex-col justify-center items-center gap-5'>
      <h1>This is Photo</h1>
      <img src="/1.jpg" alt="" />
      <Image src="/2.jpg" alt="2" width={500} height={500}/>


    </div>
  )
}

export default BigPhoto