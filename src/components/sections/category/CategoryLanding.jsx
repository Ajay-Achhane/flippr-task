import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'

const CategoryLanding = ({categoryName}) => {
  return (
    <section className='w-screen min-h-[40vh] bg-[#F4F0F8] gap-y-4 px-4 flex items-center justify-center flex-col'>
    <h2 className="lg:text-5xl text-black text-5xl text-center capitalize ">{categoryName}</h2>
    <p className='text-center max-w-2xl tracking-wide leading-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur,Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur sit amet, consectetur</p>
    <div className='flex items-center gap-x-3'><span className='font-semibold'>Blog</span> <FaGreaterThan size={12}/> <span>{categoryName}</span></div>
    </section>
  )
}

export default CategoryLanding