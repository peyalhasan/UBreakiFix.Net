import React from 'react';
import { PlayCircle, FileText, Clock, Phone, Calendar, PenTool } from 'lucide-react';

const CallDetails = ({ call }) => {
    const { number, date, uploadTime, time, slug, problem, type, iconColor } = call;

    const statusStyles = {
        green: 'bg-green-900/30 text-green-500 border-green-700/50',
        orange: 'bg-orange-900/30 text-orange-500 border-orange-700/50',
        blue: 'bg-blue-900/30 text-blue-500 border-blue-700/50',
        red: 'bg-red-900/30 text-red-500 border-red-700/50',
    };
    return (
        <div className="bg-primary p-6 text-white overflow-y-auto max-h-[85vh]">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Phone Number</p>
                    <h2 className="text-lg font-semibold">{number}</h2>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Duration</p>
                    <h2 className="text-lg font-semibold">{time}</h2>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Date & Time</p>
                    <h2 className="text-base font-medium text-gray-200">{date} {uploadTime}</h2>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Issue Type</p>
                    <h2 className="text-base font-medium text-gray-200">{problem}</h2>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Call Type</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border  ${statusStyles[iconColor]} `}>
                    {type}
                </span>

                <div className="mt-6">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Outcome</p>
                    <h2 className="text-base font-medium">{slug}</h2>
                </div>
            </div>

            <button className="w-full py-4 rounded-xl border border-purple-500/30 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-900/40 to-indigo-900/40  hover:from-purple-900/60 hover:to-indigo-900/60 transition-all mb-10 group">
                <PlayCircle className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-purple-200">Play Audio Recording</span>
            </button>

            <div className="flex items-center gap-2 mb-4 text-gray-300">
                <FileText size={18} />
                <h3 className="font-semibold">Conversation Transcript</h3>
            </div>

            <div className="bg-[#0a0f1e] rounded-2xl p-6 border border-white/5 space-y-6">
                <div className="space-y-2">
                    <p className="text-green-500 font-bold text-sm">AI Assistant:</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Thank you for calling UBreakiFix! How can I help you today?
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-blue-500 font-bold text-sm">Customer:</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Hi, my iPhone 13 screen is cracked. How much would it cost to repair?
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-green-500 font-bold text-sm">AI Assistant:</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallDetails;