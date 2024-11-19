'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Toggle = () => {
    const [toggle, seToggle] = useState<boolean>(false)


  return (
    <button onClick={() => seToggle(!toggle)} className='w-10 h-5 rounded-xl overflow-hidden'>
        <div className='flex items-center w-full justify-between relative bg-black rounded-xl'>
            <Image src={'/moon.png'} alt='moon' width={18} height={18}/>
            <Image src={'/sun.png'} alt='sun' width={18} height={18} />
            <div className={`w-4 h-[90%] bg-white rounded-full absolute ${toggle ? 'right-[0.6] transition-all' : 'left-[0.5] transition-all'}`}/>
        </div>
    </button>
  )
}

export default Toggle