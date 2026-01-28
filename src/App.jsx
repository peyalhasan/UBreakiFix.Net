import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header/Header';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import Call from './Pages/Call';
import Apponments from './Pages/Apponments';
import Settings from './Pages/Settings';
import Profile from './components/Settings/Profile';
import EditProfile from './components/Settings/EditProfile';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <main className='bg-primary min-h-screen flex overflow-x-hidden'>
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  z-40 md:hidden transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary transform transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>

        <Sidebar closeMobileMenu={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 bg-secendary flex flex-col md:ml-64 w-full">

        {/* Mobile Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between p-4 bg-secondary border-b border-gray-800 md:hidden">
          <button onClick={toggleSidebar} className="text-white p-2 hover:bg-white/10 rounded-lg">
            <Menu size={24} />
          </button>
          <span className="text-white font-semibold">Dashboard</span>
          <div className="w-8" /> {/* Spacer */}
        </div>

        <Header />

        <section className='p-4 md:p-8 flex-1'>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Dashboard />} index />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/call' element={<Call />} />
              <Route path='/appoinments' element={<Apponments />} />
              <Route path='/settings' element={<Settings />} >
                <Route index element={<Profile />} />
                <Route path='/settings/editProfile' element={<EditProfile />} />
              </Route>
            </Route>
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;