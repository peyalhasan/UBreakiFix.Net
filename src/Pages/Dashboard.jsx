import React from 'react'
import { OverView } from '../utils'
import DashboardsCard from '../components/Dashboard/DashboardsCard'
import Chart from '../components/Dashboard/Chart'

function Dashboard() {
    return (
        <div className=' space-y-8 '>
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-5  '>
                {
                    OverView.map((card =>(
                        <DashboardsCard  key={card.id} card={card} />
                    )))
                }
            </div>
            <Chart />
        </div>
    )
}

export default Dashboard