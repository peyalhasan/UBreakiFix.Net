import { AlertCircle, CheckCircle2, Clock } from "lucide-react";


function CallList({ call }) {
    const { number, date, uploadTime, time, slug, problem, type, iconColor, image } = call;
    const statusStyles = {
        green: 'bg-green-900/30 text-green-500 border-green-700/50',
        orange: 'bg-orange-900/30 text-orange-500 border-orange-700/50',
        blue: 'bg-blue-900/30 text-blue-500 border-blue-700/50',
        red: 'bg-red-900/30 text-red-500 border-red-700/50',
    };
    return (
        <div className="bg-primary border-b border-white/10 p-5">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    <div className="">
                        <img src={image} alt={slug} className="w-15 h-15" />
                    </div>
                    <div>
                        <h2 className=" font-semibold text-lg">{number}</h2>
                        <p className="text-gray-400 text-sm flex gap-2">
                            <span>{date}</span> • <span>{uploadTime} AM</span>
                        </p>
                    </div>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[iconColor]}`}>
                    {type}
                </div>
            </div>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-gray-500" />
                    <span>{time}</span>
                </div>

                <div className="flex items-center gap-1.5">
                    {iconColor === 'red' ? (
                        <AlertCircle size={16} className="text-gray-500" />
                    ) : (
                        <CheckCircle2 size={16} className="text-gray-500" />
                    )}
                    <span>{slug}</span>
                </div>

                <div className="bg-blue-900/40 text-blue-400 px-3 py-0.5 rounded-md text-xs border border-blue-800/50">
                    {problem}
                </div>
            </div>
        </div>
    )
}

export default CallList