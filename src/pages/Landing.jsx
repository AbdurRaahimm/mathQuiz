import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='bg-landing bg-no-repeat md:bg-contain bg-center bg-auto h-screen flex justify-center items-center'>
       <div className="flex flex-col space-y-4">  
       <h1 className='text-6xl text-white text-center capitalize font-Luckiest'>Math quiz</h1>
        <Link to={`/add`} className='bg-[#FFC667] text-xl text-center text-[#CC4F1C] font-Luckiest border-4 border-[#C04B05] capitalize rounded-md px-0 md:px-10'>add quiz (+)</Link>
        <Link to={`/subtract`} className='bg-[#FFC667] text-xl text-center text-[#CC4F1C] font-Luckiest border-4 border-[#C04B05] capitalize rounded-md md:px-10'>subtract quiz (-)</Link>
        <Link to={`/multiply`} className='bg-[#FFC667] text-xl text-center text-[#CC4F1C] font-Luckiest border-4 border-[#C04B05] capitalize rounded-md md:px-10'>multiplication quiz (x)</Link>
        <Link to={`/divide`} className='bg-[#FFC667] text-xl text-center text-[#CC4F1C] font-Luckiest border-4 border-[#C04B05] capitalize rounded-md md:px-10'>divide quiz (/)</Link>
       </div>
    </div>
  )
}
