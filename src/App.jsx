import React from 'react'
import Leaderboard from './Components/Leaderboard'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Students from './Components/Students'

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
    {
      path:"/students",
      element:<Students/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App