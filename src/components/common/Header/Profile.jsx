import { Bell, User } from 'lucide-react'
import Image from '/Profile.png'
import useProfile from '../../../hooks/useProfile'

function Profile() {
    const {profile} = useProfile()
    return (
        <div className='items-center gap-5 justify-end hidden md:flex'>
            <Bell />
            {
                Image ? <img className='h-15 w-15 rounded-full object-cover shadow-sm antialiased' src={profile?.author} alt='Profile' /> : <User />
            }

        </div>
    )
}

export default Profile