import React from 'react'
import useProfile from '../../hooks/useProfile'
import { Link } from 'react-router';

function Profile() {
    const { profile } = useProfile()
    const { author, name, email, store, address } = profile || {};
    return (
        <div>
            <div className='text-xl font-bold flex gap-10 '>
                <h1>Profile</h1>
                <h1>Password Settings</h1>
            </div>

            <div className='mt-8 space-y-5'>
                <h1 className='text-lg font-medium'>Profile Image</h1>
                <div className='flex items-end gap-5'>
                    <img className='w-25 h-25 rounded-full' src={author} alt={name} />
                    <Link to='/settings/editProfile'>
                        <button className='p-1 px-2 rounded-full to-transparent border border-white bg-white/10 shadow-[inset_0px_0px_20px_rgba(255,255,255,0.40),0px_10px_20px_rgba(255,255,255,0.50)] cursor-pointer'>
                            Edit Profile
                        </button>
                    </Link>
                </div>
                <div className="max-w-2xl space-y-6 mt-10">
                    <div className="flex border-b border-white/10 pb-3">
                        <span className="w-40 text-lg text-gray-300">Full Name:</span>
                        <span className="text-gray-200">{name}</span>
                    </div>
                    <div className="flex border-b border-white/10 pb-3">
                        <span className="w-40 text-lg text-gray-300">Email:</span>
                        <span className="text-gray-200">{email}</span>
                    </div>
                    <div className="flex border-b border-white/10 pb-3">
                        <span className="w-40 text-lg text-gray-300">Store Name:</span>
                        <span className="text-gray-200">{store}</span>
                    </div>
                    <div className="flex border-b border-white/10 pb-3">
                        <span className="w-40 text-lg text-gray-300">Store Address:</span>
                        <span className="text-gray-200">{address}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile