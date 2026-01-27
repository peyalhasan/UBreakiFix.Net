import Call from '/Call.png'
import AI from '/AI.png'
import Transfer from '/Transfer.png'
import Booked from '/Book.png'
import Missed from '/Missed.png'
import Duration from '/Duration.png'


const OverView = [
    {
        id: 1,
        title: "Total Calls Today",
        total: 127,
        icon: true,
        percent: 12,
        image: Call
    },
    {
        id: 2,
        title: "AI-Handled Calls",
        total: 98,
        icon: true,
        percent: 77,
        image: AI
    },
    {
        id: 3,
        title: "Warm Transfer",
        total: 23,
        icon: true,
        percent: 18,
        image: Transfer
    },
    {
        id: 4,
        title: "Appointments Booked",
        total: 34,
        icon: true,
        percent: 8,
        image: Booked
    },
    {
        id: 5,
        title: "Missed/Failed Calls",
        total: 6,
        icon: false,
        percent: 3,
        image: Missed
    },
    {
        id: 6,
        title: "Avg Call Duration",
        total: "3:42",
        icon: true,
        percent: 15,
        image: Duration
    },
]


const Activity = [
    {
        id: 1,
        title: 'AI booked appointment for iPhone 13 screen repair',
        time: 2,
        icon: "green"
    },
    {
        id: 2,
        title: 'Warm transfer to technician - Software issue',
        time: 5,
        icon: "orange"
    },
    {
        id: 3,
        title: 'Quote provided for iPad battery replacement',
        time: 8,
        icon: "green",
    },
    {
        id: 4,
        title: 'Call dropped after 12 seconds',
        time: 15,
        icon: "pink",
    },

]

const callList = [
    {
        id: 1,
        number: '+1 (555) 345-6789',
        image: AI,
        date: '2025-12-16',
        uploadTime: '09:42 AM',
        time: '5:23',
        slug: 'Quote Provided',
        problem: 'Screen',
        type: 'AI Resolved',
        iconColor: 'green',
    },
    {
        id: 2,
        number: '+1 (555) 123-4567',
        image: Transfer,
        date: '2025-12-16',
        uploadTime: '10:15 AM',
        time: '4:10',
        slug: 'Escalated to technician',
        problem: 'Software',
        type: 'Warm Transfer',
        iconColor: 'orange',
    },
    {
        id: 3,
        number: '+1 (555) 987-6543',
        image: Booked,
        date: '2025-12-16',
        uploadTime: '11:05 AM',
        time: '6:45',
        slug: 'Appointment Booked',
        problem: 'Battery',
        type: 'Appointment',
        iconColor: 'blue',
    },
    {
        id: 4,
        number: '+1 (555) 555-0199',
        image: Missed,
        date: '2025-12-16',
        uploadTime: '01:20 PM',
        time: '0:20',
        slug: 'Call Dropped',
        problem: 'Unknown',
        type: 'Dropped',
        iconColor: 'red',
    },
    {
        id: 5,
        number: '+1 (555) 222-3333',
        image: AI,
        date: '2025-12-16',
        uploadTime: '02:45 PM',
        time: '8:12',
        slug: 'Quote Provided',
        problem: 'Back Glass',
        type: 'AI Resolved',
        iconColor: 'green',
    },
    {
        id: 6,
        number: '+1 (555) 444-5555',
        image: Call,
        date: '2025-12-16',
        uploadTime: '04:10 PM',
        time: '3:50',
        slug: 'Technical Support',
        problem: 'Charging Port',
        type: 'Warm Transfer',
        iconColor: 'orange',
    }
];

export { OverView, Activity, callList }