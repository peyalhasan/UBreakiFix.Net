import React, { useState } from 'react';
import { ProfileContext } from '../context';
import Author from '/Profile.png'

const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState({
        author: Author,
        name: 'Jabe D',
        email: 'jane@gmail.com',
        store: 'Ubreakfix Store',
        address: '123 Main Street, New York, NY 10001'
    })

    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;