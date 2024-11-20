import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full flex justify-between py-10'>
      <button className='w-fit bg-red-500 px-6 py-2 text-white text-sm'>Prev</button>
      <button className='w-fit bg-red-500 px-6 py-2 text-white text-sm'>Next</button>
    </div>
  )
}

export default Pagination