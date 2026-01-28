import React from 'react'
import Profile from '../components/Settings/Profile'
import { Outlet } from 'react-router'

function Settings() {
  return (
    <main>
     <Outlet />
    </main>
  )
}

export default Settings