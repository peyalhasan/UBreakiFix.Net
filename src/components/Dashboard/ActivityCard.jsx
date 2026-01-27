import React from 'react'

function ActivityCard({ card }) {
    const { title, icon, time } = card;
    const colorVariants = {
        green: 'bg-green-600',
        orange: 'bg-orange-500',
        pink: 'bg-pink-400',
    };
    return (
        <div className='bg-ternary mt-5 p-7 rounded-lg flex items-start gap-5'>
            <div className={`w-3 h-3 mt-2 rounded-full shrink-0 ${colorVariants[icon] || 'bg-gray-500'}`} />
            <div className=''>
                <h1 className='text-sm md:text-xl'> {title} </h1>
                <h3 className='text-gray-400'>{time} min ago</h3>
            </div>
        </div>

    )
}

export default ActivityCard