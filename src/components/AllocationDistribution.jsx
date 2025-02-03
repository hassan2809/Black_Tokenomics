import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const AllocationDistribution = () => {
  const data = [
    { name: 'Investors', value: 30, color: '#4B91F1' },
    { name: 'Insiders', value: 25, color: '#666666' },
    { name: 'Foundation', value: 20, color: '#444444' },
    { name: 'Community', value: 15, color: '#333333' },
    { name: 'Public Sale', value: 10, color: '#1E54B7' }
  ];

  return (
    <div className="w-full bg-[#0E1117] rounded-2xl p-6 h-[500px]">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Allocation Distribution
      </h2>
      <p className="text-gray-400 text-sm text-left mb-6">
        Sets the token distributions percentages to the different pools and shareholders
        involved in the ecosystem of the project (Community, Investors, Core
        Contributors, Foundation)
      </p>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="35%"
              outerRadius="70%"
              paddingAngle={3}
              
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} stroke='none'/>
              ))}
            </Pie>
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconType="circle"
              wrapperStyle={{
                paddingLeft: '20px'
              }}
              formatter={(value) => (
                <span className="text-white text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AllocationDistribution;
