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

const allBookings = [
    { id: 1, name: 'Alex Johnson', phone: '01711223344', mail: 'alex@gmail.com', device: 'iPhone 15 Pro', type: 'Screen', date: '02/06/2026', slot: '1', time: '09:00' },
    { id: 2, name: 'Sara Smith', phone: '01822334455', mail: 'sara.s@yahoo.com', device: 'Samsung S23 Ultra', type: 'Battery', date: '02/06/2026', slot: '2', time: '10:00' },
    { id: 3, name: 'Rahim Ahmed', phone: '01933445566', mail: 'rahim.rep@gmail.com', device: 'iPhone 14', type: 'Back Glass', date: '02/06/2026', slot: '3', time: '11:00' },
    { id: 4, name: 'David Miller', phone: '01644556677', mail: 'david.m@outlook.com', device: 'Google Pixel 8', type: 'Charging Port', date: '02/06/2026', slot: '4', time: '12:00' },
    { id: 5, name: 'Emily Davis', phone: '01555667788', mail: 'emily.d@gmail.com', device: 'iPhone 13 Pro Max', type: 'Software', date: '02/06/2026', slot: '5', time: '02:00' },
    { id: 6, name: 'James Wilson', phone: '01366778899', mail: 'james.w@tech.com', device: 'Samsung Fold 5', type: 'Screen', date: '02/06/2026', slot: '6', time: '03:00' },
    { id: 7, name: 'Linda Taylor', phone: '01711223301', mail: 'linda.t@gmail.com', device: 'iPhone 12 Mini', type: 'Battery', date: '03/06/2026', slot: '1', time: '09:00' },
    { id: 8, name: 'Michael Brown', phone: '01822334402', mail: 'mike.b@live.com', device: 'iPad Air 5', type: 'Screen', date: '03/06/2026', slot: '2', time: '10:00' },
    { id: 9, name: 'Sophia Garcia', phone: '01933445503', mail: 'sophia.g@gmail.com', device: 'iPhone 11', type: 'Camera', date: '03/06/2026', slot: '3', time: '11:00' },
    { id: 10, name: 'Chris Evans', phone: '01644556604', mail: 'chris.e@marvel.com', device: 'Samsung A54', type: 'Software', date: '03/06/2026', slot: '4', time: '12:00' },
    { id: 11, name: 'Jessica Lee', phone: '01555667705', mail: 'jess.lee@gmail.com', device: 'iPhone 15', type: 'Charging Port', date: '04/06/2026', slot: '1', time: '09:00' },
    { id: 12, name: 'Kevin Parker', phone: '01366778806', mail: 'kevin.p@gmail.com', device: 'Google Pixel 7a', type: 'Back Glass', date: '04/06/2026', slot: '2', time: '10:00' },
    { id: 13, name: 'Anna White', phone: '01711223307', mail: 'anna.w@outlook.com', device: 'iPhone SE 2022', type: 'Battery', date: '04/06/2026', slot: '3', time: '11:00' },
    { id: 14, name: 'Robert Moore', phone: '01822334408', mail: 'rob.m@gmail.com', device: 'Samsung S22', type: 'Screen', date: '04/06/2026', slot: '4', time: '12:00' },
    { id: 15, name: 'Mary Martin', phone: '01933445509', mail: 'mary.m@yahoo.com', device: 'iPhone 14 Plus', type: 'Software', date: '05/06/2026', slot: '1', time: '02:00' },
    { id: 16, name: 'Daniel Clark', phone: '01644556610', mail: 'daniel.c@gmail.com', device: 'OnePlus 11', type: 'Camera', date: '05/06/2026', slot: '2', time: '03:00' },
    { id: 17, name: 'Laura Hall', phone: '01555667711', mail: 'laura.h@live.com', device: 'iPhone 13', type: 'Screen', date: '05/06/2026', slot: '3', time: '04:00' },
    { id: 18, name: 'Paul Young', phone: '01366778812', mail: 'paul.y@gmail.com', device: 'Samsung Note 20', type: 'Battery', date: '06/06/2026', slot: '1', time: '09:00' },
    { id: 19, name: 'Karen King', phone: '01711223313', mail: 'karen.k@tech.com', device: 'Google Pixel 6', type: 'Software', date: '06/06/2026', slot: '2', time: '10:00' },
    { id: 20, name: 'Steven Wright', phone: '01822334414', mail: 'steven.w@gmail.com', device: 'iPhone 15 Pro Max', type: 'Back Glass', date: '06/06/2026', slot: '3', time: '11:00' },
    { id: 21, name: 'Michelle Scott', phone: '01933445515', mail: 'mich.s@outlook.com', device: 'iPad Pro M2', type: 'Screen', date: '07/06/2026', slot: '1', time: '09:00' },
    { id: 22, name: 'Brian Green', phone: '01644556616', mail: 'brian.g@gmail.com', device: 'Samsung S21 FE', type: 'Charging Port', date: '07/06/2026', slot: '2', time: '10:00' },
    { id: 23, name: 'Amy Adams', phone: '01555667717', mail: 'amy.a@yahoo.com', device: 'iPhone 12 Pro', type: 'Battery', date: '07/06/2026', slot: '3', time: '11:00' },
    { id: 24, name: 'Gary Baker', phone: '01366778818', mail: 'gary.b@gmail.com', device: 'iPhone 14 Pro', type: 'Screen', date: '07/06/2026', slot: '4', time: '12:00' },
    { id: 25, name: 'Lisa Nelson', phone: '01711223319', mail: 'lisa.n@live.com', device: 'Google Pixel 8 Pro', type: 'Camera', date: '08/06/2026', slot: '1', time: '09:00' },
    { id: 26, name: 'Ryan Hill', phone: '01822334420', mail: 'ryan.h@gmail.com', device: 'Samsung Flip 5', type: 'Screen', date: '08/06/2026', slot: '2', time: '10:00' },
    { id: 27, name: 'Angela Rivera', phone: '01933445521', mail: 'angela.r@outlook.com', device: 'iPhone 13 Mini', type: 'Software', date: '08/06/2026', slot: '3', time: '11:00' },
    { id: 28, name: 'Scott Cook', phone: '01644556622', mail: 'scott.c@gmail.com', device: 'Motorola Razr+', type: 'Battery', date: '08/06/2026', slot: '4', time: '12:00' },
    { id: 29, name: 'Sandra Bell', phone: '01555667723', mail: 'sandra.b@yahoo.com', device: 'iPhone 15 Plus', type: 'Charging Port', date: '09/06/2026', slot: '1', time: '02:00' },
    { id: 30, name: 'Jason Ward', phone: '01366778824', mail: 'jason.w@gmail.com', device: 'Samsung S23', type: 'Back Glass', date: '09/06/2026', slot: '2', time: '03:00' },
    { id: 31, name: 'Kimberly Reed', phone: '01711223325', mail: 'kim.r@live.com', device: 'iPhone 11 Pro', type: 'Screen', date: '09/06/2026', slot: '3', time: '04:00' },
    { id: 32, name: 'Jeffrey Perry', phone: '01822334426', mail: 'jeff.p@tech.com', device: 'OnePlus Open', type: 'Screen', date: '10/06/2026', slot: '1', time: '09:00' },
    { id: 33, name: 'Deborah Long', phone: '01933445527', mail: 'deb.l@gmail.com', device: 'iPhone 12', type: 'Battery', date: '10/06/2026', slot: '2', time: '10:00' },
    { id: 34, name: 'Mark Foster', phone: '01644556628', mail: 'mark.f@outlook.com', device: 'Samsung S20 Ultra', type: 'Camera', date: '10/06/2026', slot: '3', time: '11:00' },
    { id: 35, name: 'Sharon Ross', phone: '01555667729', mail: 'sharon.r@gmail.com', device: 'iPhone 14 Pro Max', type: 'Software', date: '11/06/2026', slot: '1', time: '09:00' },
    { id: 36, name: 'Timothy Gray', phone: '01366778830', mail: 'tim.g@yahoo.com', device: 'Google Pixel 7', type: 'Screen', date: '11/06/2026', slot: '2', time: '10:00' },
    { id: 37, name: 'Cynthia James', phone: '01711223331', mail: 'cyn.j@live.com', device: 'iPhone 13 Pro', type: 'Battery', date: '11/06/2026', slot: '3', time: '11:00' },
    { id: 38, name: 'Edward Watson', phone: '01822334432', mail: 'ed.w@gmail.com', device: 'Samsung A73', type: 'Charging Port', date: '12/06/2026', slot: '1', time: '02:00' },
    { id: 39, name: 'Kathleen Brooks', phone: '01933445533', mail: 'kath.b@outlook.com', device: 'iPhone XS', type: 'Screen', date: '12/06/2026', slot: '2', time: '03:00' },
    { id: 40, name: 'Larry Kelly', phone: '01644556634', mail: 'larry.k@gmail.com', device: 'Sony Xperia 1 V', type: 'Software', date: '12/06/2026', slot: '3', time: '04:00' },
    { id: 41, name: 'Shirley Sanders', phone: '01555667735', mail: 'shirley.s@yahoo.com', device: 'iPhone 15 Pro', type: 'Back Glass', date: '13/06/2026', slot: '1', time: '09:00' },
    { id: 42, name: 'Patrick Price', phone: '01366778836', mail: 'pat.p@live.com', device: 'Samsung Tab S9', type: 'Screen', date: '13/06/2026', slot: '2', time: '10:00' },
    { id: 43, name: 'Janet Wood', phone: '01711223337', mail: 'janet.w@gmail.com', device: 'iPhone 11 Pro Max', type: 'Battery', date: '13/06/2026', slot: '3', time: '11:00' },
    { id: 44, name: 'Jack Barnes', phone: '01822334438', mail: 'jack.b@outlook.com', device: 'Google Pixel Fold', type: 'Screen', date: '14/06/2026', slot: '1', time: '09:00' },
    { id: 45, name: 'Alice Perry', phone: '01933445539', mail: 'alice.p@gmail.com', device: 'iPhone 14', type: 'Software', date: '14/06/2026', slot: '2', time: '10:00' },
    { id: 46, name: 'Frank Murphy', phone: '01644556640', mail: 'frank.m@yahoo.com', device: 'Samsung S21 Ultra', type: 'Camera', date: '14/06/2026', slot: '3', time: '11:00' },
    { id: 47, name: 'Grace Simmons', phone: '01555667741', mail: 'grace.s@live.com', device: 'iPhone 13 Pro Max', type: 'Charging Port', date: '15/06/2026', slot: '1', time: '09:00' },
    { id: 48, name: 'Henry Foster', phone: '01366778842', mail: 'henry.f@gmail.com', device: 'Google Pixel 8', type: 'Battery', date: '15/06/2026', slot: '2', time: '10:00' },
    { id: 49, name: 'Irene Butler', phone: '01711223343', mail: 'irene.b@outlook.com', device: 'iPhone 12 Pro Max', type: 'Screen', date: '15/06/2026', slot: '3', time: '11:00' },
    { id: 50, name: 'Jane Doe', phone: '01822334444', mail: 'jane.d@gmail.com', device: 'iPhone 15 Pro', type: 'Screen', date: '15/06/2026', slot: '4', time: '12:00' }
];

export { OverView, Activity, callList, allBookings }