import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const FDVChart = () => {
  const data = [
    { name: "Yamata", value: 0.05, color: "#666666" },
    { name: "DeGate", value: 0.102, color: "#666666" },
    { name: "Sushi Swap", value: 0.204, color: "#666666" },
    { name: "1inch", value: 0.378, color: "#666666" },
    { name: "dYdX", value: 0.571, color: "#666666" },
    { name: "PancakeSwap", value: 0.721, color: "#4B91F1" },
    { name: "Raydium", value: 0.956, color: "#4B91F1" },
    { name: "KuCoin", value: 1.5, color: "#4B91F1" },
    { name: "GateToken", value: 2.6, color: "#4B91F1" },
    { name: "WhiteBIT", value: 7.1, color: "#4B91F1" },
  ];

  const formatValue = (value) => {
    return value >= 1 ? `${value}B` : `${value * 1000}M`;
  };

  return (
    <div className="bg-[#0E1117] rounded-2xl p-6">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Fully Diluted Valuation (FDV) Comparison
      </h2>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 30, bottom: 0, left: 80 }}
          >
            <XAxis
              type="number"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickFormatter={(value) => `${value}B`}
              domain={[0, 8]}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#666" }}
            />
            <Bar
              dataKey="value"
              barSize={20}
              radius={[0, 4, 4, 0]}
              label={{
                position: "right",
                fill: "white",
                formatter: formatValue,
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FDVChart;
