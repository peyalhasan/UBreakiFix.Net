import React from 'react';

const DashboardsCard = ({card}) => {
    const {image, title, total,percent, icon,} = card
    return (
        <div className='bg-[#2B7FFF33] border-2 border-[#93bcf933] rounded-2xl flex flex-col-reverse sm:flex-row justify-between gap-3 p-4 font-bold'>
            <div>
                <h1 className='text-xl text-gray-400 '>{title}</h1>
                <p className='text-3xl'>{total}</p>
                <p className={`${icon ? 'text-green-600' : 'text-red-500'} text-lg`} > {icon? '+' : '-'} {percent} %</p>
            </div>
            <img className='w-15 h-15' src={image} />
        </div>
    );
};

export default DashboardsCard;