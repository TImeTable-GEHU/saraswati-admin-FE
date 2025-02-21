import React from 'react'
import Leaderboard from './Components/Leaderboard'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/leaderboard",
      element:<Leaderboard/>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App