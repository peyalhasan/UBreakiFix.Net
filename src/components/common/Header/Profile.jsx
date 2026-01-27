import { Bell, User } from 'lucide-react'
import Image from '/Profile.png'

function Profile() {
    return (
        <div className='items-center gap-5 justify-end hidden md:flex'>
            <Bell />
            {
                Image ? <img className='h-15 w-15 rounded-full' src={Image} alt='Profile' /> : <User />
            }

        </div>
    )
}

export default Profile