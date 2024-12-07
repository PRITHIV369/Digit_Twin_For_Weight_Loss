import React from 'react'
import BarChart from '../components/BarChart'

const Home = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-slate-800 flex justify-center'>
      <div className='bg-slate-700 h-fit w-[70vh] mt-[3%]'>
        <BarChart/>
      </div>
    </div>
  )
}

export default Home