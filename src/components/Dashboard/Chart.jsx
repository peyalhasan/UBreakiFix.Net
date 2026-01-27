import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', calls: 45 },
  { name: 'Tue', calls: 62 },
  { name: 'Wed', calls: 58 },
  { name: 'Thu', calls: 75 },
  { name: 'Fri', calls: 88 },
  { name: 'Sat', calls: 95 },
  { name: 'Sun', calls: 60 },
];

export default function Chart() {
  return (
    <div className="bg-primary p-6 rounded-2xl border border-white/10 shadow-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className=" text-lg font-semibold">Call Trends - This Week</h2>
          <p className="text-gray-400 text-xs">Total: 472 calls</p>
        </div>
        <select className="bg-[#1a264d] text-white text-xs border border-white/10 rounded-md px-2 py-1 outline-none">
          <option>This Week</option>
          <option>14 Days Ago</option>
          <option>30 Days Ago</option>
        </select>
      </div>

      <div className="h-[450px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis 
              dataKey="name" 
              stroke="#94a3b8" 
              fontSize={12} 
              dy={10} 
            />
            <YAxis
              stroke="#94a3b8" 
              fontSize={12} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111B3C', border: '1px solid #ffffff20', borderRadius: '8px' }}
            />
            <Area 
              type="monotone" 
              dataKey="calls" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorCalls)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}