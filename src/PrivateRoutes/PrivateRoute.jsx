import React from 'react'
import { Outlet } from 'react-router'

function PrivateRoute() {
    return (
        <div >
            <Outlet />
        </div>
    )
}

export default PrivateRoute