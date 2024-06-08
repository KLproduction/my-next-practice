"use client"

import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

const PostNavBtn = ({id}) => {
  const router = useRouter()
    const handleClick=()=>{
        router.push(`/posts/${id}`)
    }
  return (
    <Button variant="outline" onClick={handleClick}>
        View posts
    </Button>
  )
    
}

export default PostNavBtn