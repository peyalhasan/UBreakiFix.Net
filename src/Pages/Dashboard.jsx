import React from 'react'
import { Activity, OverView } from '../utils'
import DashboardsCard from '../components/Dashboard/DashboardsCard'
import Chart from '../components/Dashboard/Chart'
import ActivityCard from '../components/Dashboard/ActivityCard'
import ProgressSection from '../components/Dashboard/ProgressSection'

function Dashboard() {
    return (
        <div className=' space-y-8 '>
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-5  '>
                {
                    OverView.map((card => (
                        <DashboardsCard key={card.id} card={card} />
                    )))
                }
            </div>
            <Chart />
            <div className='flex   flex-col lg:flex-row gap-10'>
                <div className='bg-primary rounded-xl lg:w-[50%] w-full border-white/10 p-5'>
                    <h1 className='text-xl font-bold'>Recent Activity</h1>
                    {
                        Activity.map((card => (<ActivityCard key={card.id} card={card} />)))
                    }
                </div>
                <div className='lg:w-[50%] w-full'>
                    <ProgressSection />
                </div>
            </div>
        </div>
    )
}

export default Dashboard