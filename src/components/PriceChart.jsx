import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const PriceChart = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const data = [
    { name: "Pre-Seed Round", price: 0.1, amount: 0.5 },
    { name: "Public Round", price: 0.4, amount: 0.2 },
  ];

  return (
    <div className="bg-[#0E1117] rounded-2xl p-6">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Price and Amount Raised per Round
      </h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0}>
            <XAxis
              dataKey="name"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
            />
            <YAxis
              yAxisId="left"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickFormatter={(value) => `$${value.toFixed(4)}`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickFormatter={(value) => `${value.toFixed(1)}M`}
            />

            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3A4D79" />
                <stop offset="100%" stopColor="rgba(58, 77, 121, 0.5)" />
              </linearGradient>
            </defs>

            <defs>
              <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#404040" />
                <stop offset="100%" stopColor="rgba(64, 64, 64, 0.5)" />
              </linearGradient>
            </defs>

            <Bar
              yAxisId="left"
              dataKey="price"
              fill="url(#barGradient)"
              stroke="#6A94ED"
              radius={[4, 4, 0, 0]}
              label={{
                position: "top",
                fill: "white",
                formatter: (value) => `${value.toFixed(1)}M`,
              }}
            />
            <Bar
              yAxisId="right"
              dataKey="amount"
              fill="url(#barGradient1)"
              stroke="#666666"
              radius={[4, 4, 0, 0]}
              label={{
                position: "top",
                fill: "white",
                formatter: (value) => `${value.toFixed(1)}M`,
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

export default PriceChart;
