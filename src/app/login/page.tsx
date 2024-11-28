import React from 'react'
import Image from 'next/image'
import LoginWGoogle from '@/components/LoginWGoogle'
import LoginWGithub from '@/components/LoginWGithub'

const LoginPage = () => {
  return (
    <div className='h-screen w-full max-w-xl mx-auto flex flex-col items-center justify-center'>
      <div className='flex items-center gap-2'>
        <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
        <h2 className='font-medium text-lg'>Welcome back!</h2>
      </div>
      <div className='py-5 w-full space-y-5'>
        <LoginWGoogle />
        <LoginWGithub />
      </div>
    </div>
  )
}

export default LoginPage