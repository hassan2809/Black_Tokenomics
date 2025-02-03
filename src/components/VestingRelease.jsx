
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const VestingRelease = () => {
  const categories = [
    { name: 'Advisors', color: '#1E54B7' },
    { name: 'Future Rounds', color: '#2B63C1' },
    { name: 'Team', color: '#3B7AD9' },
    { name: 'Foundation', color: '#4B91F1' },
    { name: 'Ecosystem', color: '#757575' },
    { name: 'Validator Nodes (VD)', color: '#9E9E9E' },
    { name: 'Marketing', color: '#BDBDBD' },
    { name: 'Liquidity (LP & MM)', color: '#E0E0E0' }
  ];

  const data = Array.from({ length: 46 }, (_, i) => ({
    month: i,
    Advisors: Math.floor(100 + (i * 15)),
    FutureRounds: Math.floor(90 + (i * 14)),
    Team: Math.floor(80 + (i * 13)),
    Foundation: Math.floor(70 + (i * 12)),
    Ecosystem: Math.floor(60 + (i * 11)),
    Validator: Math.floor(50 + (i * 10)),
    Marketing: Math.floor(40 + (i * 9)),
    Liquidity: Math.floor(30 + (i * 8))
  }));

  return (
    <div className="w-full bg-[#0E1117] rounded-2xl p-6">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
      Vesting Release Schedule
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Influences how and to whom new tokens are introduced into the market. This
        schedule is vital for maintaining market equilibrium, as it outlines the specific
        timeline for token distribution to the different shareholders.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center gap-1">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-sm text-gray-400">{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="month"
              stroke="#666"
              tickLine={false}
              tick={{ fill: '#666' }}
              label={{ value: 'Months', position: 'bottom', fill: '#666' }}
            />
            <YAxis
              stroke="#666"
              tickLine={false}
              tick={{ fill: '#666' }}
            //   label={{ value: 'Amount', angle: -90, position: 'left', fill: '#666' }}
              orientation="right"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area
              type="monotone"
              dataKey="Liquidity"
              stackId="1"
              stroke="none"
              fill="#E0E0E0"
            />
            <Area
              type="monotone"
              dataKey="Marketing"
              stackId="1"
              stroke="none"
              fill="#BDBDBD"
            />
            <Area
              type="monotone"
              dataKey="Validator"
              stackId="1"
              stroke="none"
              fill="#9E9E9E"
            />
            <Area
              type="monotone"
              dataKey="Ecosystem"
              stackId="1"
              stroke="none"
              fill="#757575"
            />
            <Area
              type="monotone"
              dataKey="Foundation"
              stackId="1"
              stroke="none"
              fill="#4B91F1"
            />
            <Area
              type="monotone"
              dataKey="Team"
              stackId="1"
              stroke="none"
              fill="#3B7AD9"
            />
            <Area
              type="monotone"
              dataKey="FutureRounds"
              stackId="1"
              stroke="none"
              fill="#2B63C1"
            />
            <Area
              type="monotone"
              dataKey="Advisors"
              stackId="1"
              stroke="none"
              fill="#1E54B7"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VestingRelease;
