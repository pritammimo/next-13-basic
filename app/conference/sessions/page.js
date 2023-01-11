import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
      <div>Welcome to Sessions page</div>
     <h2>
      <Link href="/conference/speakers">Speakers Page</Link>
     </h2>
    </>
  
  )
}

export default page