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

export {OverView}