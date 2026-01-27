import React from 'react'
import { useLocation } from 'react-router';

import Profile from './Profile';
import DashboardHeader from './DashboardHeader';
import CallLog from './CallLog';
import AppoinmentsHeader from './AppoinmentsHeader';
import SettingsHeader from './SettingsHeader';

function Header() {
    const location = useLocation()
    const path = location.pathname;

    const changedHeader = () => {

        if (path === '/dashboard') {
            return <DashboardHeader />
        }
        if(path === '/call'){
            return <CallLog />
        }
        if(path === '/appoinments'){
            return <AppoinmentsHeader />
        }
        if(path === '/settings'){
            return <SettingsHeader />
        }

        return <DashboardHeader />
    }
    return (
        <header className='flex px-8 bg-primary shadow-xl p-2   justify-between items-center'>
            {
                changedHeader()
            }
            <Profile />
        </header>
    )
}

export default Header