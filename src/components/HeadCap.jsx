import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const HeadCap = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const data = [
    { name: "Pre-Seed Round", value: 4.3 },
    { name: "Public Round", value: 1.6 },
    { name: "Future Rounds", value: 1.0 },
    { name: "Total", value: 6.9, isTotal: true },
  ];

  return (
    <div className="bg-[#0E1117] rounded-2xl p-6">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Hardcap Target by Round
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3A4D79" />
                <stop offset="100%" stopColor="rgba(58, 77, 121, 0.5)" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
            />
            <YAxis
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 8]}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
            />

            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 4, 4]}
              stroke="#6A94ED"
              strokeWidth={2}
              label={{
                position: "top",
                fill: "white",
                formatter: (value) => `${value}M`,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 flex items-center justify-between px-4 py-2 rounded-xl border border-[#3D4044] transition-colors"
      >
        <span>More Information</span>
        <ChevronDown
          className={`transform transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default HeadCap;
