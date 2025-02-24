import React from 'react'
import { Link } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import Students from './Students'
const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-2'>
      <div className='m-5 font-bold text-4xl'>Saraswati Admin Page.</div>
      <Link className='bg-blue-500 p-3 rounded-2xl' to="/Leaderboard">LeaderBoard</Link>
      <Link className='bg-blue-500 p-3 rounded-2xl' to="/Students">Students</Link>
    </main>
  )
}

export default Home