import { AlertCircle, Calendar, CheckCircle2 } from 'lucide-react'
import React from 'react'

function AppoinmentCard() {
    const appointmentData = [
        {
            id: 1,
            logo: <Calendar size={20} className="text-blue-500" />,
            title: 'Total Booked',
            total: 34,
            slug: '+8 this week',
            slugColor: 'text-green-500'
        },
        {
            id: 2,
            logo: <CheckCircle2 size={20} className="text-green-500" />,
            title: 'AI Booked',
            total: 28,
            slug: '82% of total',
            slugColor: 'text-gray-400'
        },
        {
            id: 3,
            logo: <AlertCircle size={20} className="text-yellow-500" />,
            title: 'Pending',
            total: 3,
            slug: 'Awaiting confirmation',
            slugColor: 'text-gray-400'
        }
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 ">
            {appointmentData.map((item) => (
                <div
                    key={item.id}
                    className="bg-primary border border-white/10 p-6 rounded-2xl shadow-xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg">
                            {item.logo}
                        </div>
                        <span className="text-gray-400 text-sm font-medium">
                            {item.title}
                        </span>
                    </div>

                    <div className="mb-2">
                        <h1 className="text-white text-4xl font-bold">
                            {item.total}
                        </h1>
                    </div>

                    <div className={`text-sm font-medium ${item.slugColor}`}>
                        {item.slug}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AppoinmentCard