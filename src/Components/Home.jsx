import React from 'react'
import { Link } from 'react-router-dom'
import Leaderboard from './Leaderboard'

const Home = () => {
  return (
    <>
          <div className='m-5'>Saraswati Admin Page.</div>
          <Link className='bg-gray-500 p-3 rounded-2xl' to="/Leaderboard">LeaderBoard</Link>
    </>
  )
}

export default Home