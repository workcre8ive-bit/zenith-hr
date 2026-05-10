import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Empathy', A: 120, B: 110, fullMark: 150 },
  { subject: 'Communication', A: 98, B: 130, fullMark: 150 },
  { subject: 'Support', A: 86, B: 130, fullMark: 150 },
  { subject: 'Growth', A: 99, B: 100, fullMark: 150 },
  { subject: 'Safety', A: 85, B: 90, fullMark: 150 },
  { subject: 'Feedback', A: 65, B: 85, fullMark: 150 },
];

export const TeamHarmony: React.FC = () => {
  return (
    <div className="glass p-8 rounded-3xl w-full h-full flex flex-col">
      <h3 className="text-xl font-light mb-auto opacity-80 uppercase tracking-widest">Team Harmony</h3>
      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 150]} 
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Current Team"
              dataKey="A"
              stroke="#FF8C42"
              fill="#FF8C42"
              fillOpacity={0.3}
            />
            <Radar
              name="Ideal State"
              dataKey="B"
              stroke="#6B4226"
              fill="#6B4226"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-tighter opacity-40">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-sunset-orange/50 rounded-full" />
          <span>Team Velocity</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-sunset-purple/50 rounded-full" />
          <span>Industry Average</span>
        </div>
      </div>
    </div>
  );
};
