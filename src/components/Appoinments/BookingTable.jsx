import React, { useState } from 'react';
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { allBookings } from '../../utils';

const BookingTable = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const [itemId, setItemId] = useState('store123')
    const [copied, setCopied] = useState(false);
    let bookingLink = `https://u-breaki-fix-net.vercel.app/appoinments?id=${itemId}`
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allBookings.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allBookings.length / itemsPerPage);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(bookingLink)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.log("Failed to copy text:", err)
        }
    }
    return (
        <div >
            <div className="mb-8 bg-primary p-6 rounded-2xl border border-white/5 shadow-2xl">
                <p className="text-lg text-gray-400 mb-2">Booking Link</p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-black/40 border border-green-950 rounded-xl px-4 py-3 text-gray-300 text-sm">
                        {bookingLink}
                    </div>
                    <button onClick={handleCopy} className="relative flex items-center gap-2  px-6 py-3 rounded-2xl border border-white/10 transition-all  group  shadow-[inset_0px_0px_20px_rgba(255,255,255,0.80)]">
                        <Copy size={18} className={copied ? 'text-white' : 'text-blue-400'} />
                        <span className="font-semibold text-sm text-white">
                            {copied ? 'Copied!' : 'Copy Link'}
                        </span>
                    </button>
                </div>
            </div>


            <div className="overflow-x-auto min-h-[450px] bg-primary p-6 rounded-2xl border border-white/5 shadow-2xl custom-scrollbar">
                <table className="w-full text-left min-w-[900px]">
                    <thead>
                        <tr className="text-gray-400 text-xs uppercase border-b border-white/10">
                            <th className="py-4 px-2">Client Name</th>
                            <th className="py-4 px-2">Client Phone</th>
                            <th className="py-4 px-2">Client Mail</th>
                            <th className="py-4 px-2">Device</th>
                            <th className="py-4 px-2">Repair Type</th>
                            <th className="py-4 px-2">Date</th>
                            <th className="py-4 px-2">Slot no</th>
                            <th className="py-4 px-2">Start Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {currentItems.map((item) => (
                            <tr key={item.id} className="hover:bg-white/5 transition-colors group " onClick={() => setItemId(item.id)}>
                                <td className="py-4 px-2 text-blue-400 text-sm whitespace-nowrap ">{item.name}</td>
                                <td className="py-4 px-2 text-gray-300 text-sm whitespace-nowrap ">{item.phone}</td>
                                <td className="py-4 px-2 text-gray-300 text-sm whitespace-nowrap ">{item.mail}</td>
                                <td className="py-4 px-2 text-gray-400 text-sm whitespace-nowrap ">{item.device}</td>
                                <td className="py-4 px-2 text-gray-400 text-sm whitespace-nowrap ">{item.type}</td>
                                <td className="py-4 px-2 text-gray-400 text-sm whitespace-nowrap ">{item.date}</td>
                                <td className="py-4 px-2 text-gray-400 text-sm whitespace-nowrap ">{item.slot}</td>
                                <td className="py-4 px-2 text-gray-400 text-sm whitespace-nowrap">{item.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-500 flex items-center hover:text-white disabled:opacity-30"
                >
                    <ChevronLeft size={20} /> <span>Previous</span>
                </button>

                {[1, 2, 3, 4, 5].map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-blue-400 hover:bg-white/10'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <span className="text-gray-600 px-2">...</span>
                <button onClick={() => setCurrentPage(11)} className="w-10 h-10 text-blue-400">11</button>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 text-blue-500 hover:text-white flex items-center disabled:opacity-30"
                >
                    <span>Next</span>  <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default BookingTable;