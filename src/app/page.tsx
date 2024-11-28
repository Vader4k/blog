import { auth } from '@/auth'
import Card from '@/components/Card'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import React from 'react'

const Home = async() => {
  const session = await auth()
  console.log(session)
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='flex md:flex-row flex-col justify-between w-full gap-10 lg:gap-20'>
        <Card />
        <Menu />
      </div>
    </div>
  )
}

export default Home