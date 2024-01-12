import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-3'>
        <h1 className='text-4xl'>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>

        <Link to={`/`} className='border-2 border-gray-400 px-4 rounded-md capitalize'>back home</Link>
    </div>
  )
}
