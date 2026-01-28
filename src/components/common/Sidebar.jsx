import { Calendar, Home, LogOut, Phone, Settings } from 'lucide-react'
import { Link, NavLink } from 'react-router'

function Sidebar({closeMobileMenu}) {
    const menuItems = [
        { name: 'Dashboard Overview', path: '/dashboard', icon: <Home size={20} /> },
        { name: 'Call Logs', path: '/call', icon: <Phone size={20} /> },
        { name: 'Appoinments', path: '/appoinments', icon: <Calendar size={20} /> },
        { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    ]
    return (
        <div className='border-3 flex justify-between flex-col bg-white sm:bg-primary text-black sm:text-white border-[#62758f] h-screen'>
            <div className=''>
            <Link className='flex  justify-center ' to='/dashboard'>
                <img className='w-15 hidden sm:flex h-15 mt-8 ' src='/Logo.png' />
            </Link>

            <nav className="flex flex-col gap-2 mt-4 p-2">
                {menuItems.map((item) => (
                    <NavLink
                    onClick={closeMobileMenu}
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 relative group ${isActive
                                ? ' to-transparent border-2 border-white bg-white/10 shadow-[inset_0px_0px_20px_rgba(255,255,255,0.40),0px_10px_20px_rgba(255,255,255,0.50)]'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`
                        }
                    >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                    </NavLink>
                ))}
            </nav>
            </div>

            <div className='flex gap-2 mb-8 cursor-pointer'>
                <LogOut /> <span className='text-red-700 '>Log Out</span>
            </div>
        </div>
    )
}

export default Sidebar