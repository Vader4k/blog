import Card from '@/components/Card'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='flex justify-between w-full gap-20'>
        <Card />
        <Menu />
      </div>
    </div>
  )
}

export default Home