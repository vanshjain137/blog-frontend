import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const UserLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default UserLayout
