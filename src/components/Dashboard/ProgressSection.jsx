const repairs = [
  { name: 'Screen Repair', count: 156, width: '75%' },
  { name: 'Battery Replacement', count: 89, width: '45%' },
  { name: 'Back Glass Repair', count: 67, width: '35%' },
  { name: 'Software Issues', count: 45, width: '25%' },
];

export default function ProgressSection() {
  return (
    <div className="bg-primary p-6 rounded-2xl">
      <h2 className="mb-4 text-lg font-semibold">Top Repair Requests</h2>
      {repairs.map((item) => (
        <div key={item.name} className="mb-6">
          <div className="flex justify-between mb-2 text-sm">
            <span>{item.name}</span>
            <span className="text-gray-400">{item.count} requests</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              style={{ width: item.width }} 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
