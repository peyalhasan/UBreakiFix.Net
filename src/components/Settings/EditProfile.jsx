import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Mail, Pencil } from 'lucide-react';
import useProfile from '../../hooks/useProfile';
import Field from '../common/Field';

function EditProfile() {
    const navigate = useNavigate();
    const { profile, setProfile } = useProfile();
    const fileInputRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(profile?.author);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: profile
    });

    const handleEditIconClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (formData) => {
        setProfile({
            ...profile,
            ...formData,
            author: previewImage
        });
        navigate('/settings');
    };

    return (
        <div>
            <div className='text-xl font-medium flex gap-10 border-b border-white/5 pb-2 mb-8'>
                <div className="relative">
                    <h1 className="pb-2 cursor-pointer">Profile</h1>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 "></div>
                </div>
                <h1 className='text-gray-500 cursor-pointer hover:text-white transition-colors'>Password Settings</h1>
            </div>

            <div className="mb-10">
                <p className="text-gray-400 mb-4 text-sm">Profile Image</p>
                <div className="relative w-20 h-20">
                    <img
                        className='w-full h-full rounded-full object-cover shadow-sm antialiased '
                        src={previewImage}
                        alt="Profile"
                    />

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/*"
                    />

                    <button
                        type="button"
                        onClick={handleEditIconClick}
                        className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-lg border-2 border-[#0a0f1e] text-white hover:bg-blue-600 transition-colors shadow-lg"
                    >
                        <Pencil size={14} strokeWidth={3} />
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <Field label='Full Name' error={errors.name}>
                        <input
                            {...register('name', { required: "Name is required" })}
                            className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 outline-none transition-all"
                            type="text"
                        />
                    </Field>

                    <Field label='Email' error={errors.email}>
                        <div className="relative">
                            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <input
                                {...register('email', { required: "Email is required" })}
                                className="w-full bg-primary border border-white/10 rounded-xl pl-10 pr-4 py-3 text-gray-200 focus:border-blue-500 outline-none transition-all"
                                type="email"
                            />
                        </div>
                    </Field>

                    <Field label='Store Name' error={errors.store}>
                        <input
                            {...register('store', { required: "Store name is required" })}
                            className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 outline-none transition-all"
                            type="text"
                        />
                    </Field>

                    <Field label='Store Address' error={errors.address}>
                        <input
                            {...register('address', { required: "Address is required" })}
                            className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 outline-none transition-all"
                            type="text"
                        />
                    </Field>
                </div>

                <div className="flex justify-center pt-10">
                    <button
                        type="submit"
                        className="bg-[#00D261] hover:bg-[#00ba56]  font-bold py-3.5 px-28 rounded-2xl transition-all active:scale-95 shadow-lg shadow-green-500/20"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;