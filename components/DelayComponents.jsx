import simulateLongApiRequest from '@/lib/SlowRquest'
import React from 'react'

const DelayComponents = ({delay,number}) => {
    const data = simulateLongApiRequest(delay,number)
  return (
    <div className=' border-red-500'>
        <h1>{data}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat tenetur optio amet nam temporibus ea beatae qui, impedit quisquam! Necessitatibus nisi laudantium possimus quas consequuntur, neque vitae quasi consequatur!</p>
    </div>
  )
}

export default DelayComponents