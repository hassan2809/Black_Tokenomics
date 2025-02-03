import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const CirculationLocks = () => {
  const categories = [
    { name: "Unlocked Supply", color: "#4B91F1" },
    { name: "Circulating Supply", color: "#666666" },
  ];

  const data = Array.from({ length: 46 }, (_, i) => ({
    month: i,
    unlockedSupply: 10 + i * 0.8,
    circulatingSupply: 15 + i * 1.3,
    showLabel: i === 15 || i === 30 || i === 45,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1E1E1E] p-3 rounded-lg border border-gray-700">
          {payload.map((entry) => (
            <div key={entry.name} className="text-sm text-white">
              {entry.name === "unlockedSupply"
                ? "Unlocked Supply: "
                : "Circulating Supply: "}
              {entry.value.toFixed(1)}%
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = (props) => {
    const { x, y, value, stroke } = props;
    if (props.showLabel) {
      return (
        <text
          x={x}
          y={y}
          dy={-10}
          fill={"white"}
          fontSize={12}
          textAnchor="middle"
        >
          {`${Math.round(value)}%`}
        </text>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-[#0E1117] rounded-2xl p-6 h-full">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
      Circulation vs Unlocks Over Time
      </h2>
      <p className="text-gray-400 text-sm mb-4">
        The chart separates Unlocked and Circulating token supply, emphasizing
        that not all unlocked tokens immediately enter circulation. It forecasts
        of when tokens unlock and what percentage of them circulate.
      </p>

      <div className="flex gap-6 mb-6">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center gap-2">
            <div
              className="w-4 h-[2px]"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-sm text-gray-400">{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="h-[400px] mt-0 lg:mt-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              stroke="#666"
              tickLine={false}
              tick={{ fill: "#666" }}
              label={{ value: "Months", position: "bottom", fill: "#666" }}
            />
            <YAxis
              stroke="#666"
              tickLine={false}
              tick={{ fill: "#666" }}
              //   label={{ value: 'Percentage', angle: -90, position: 'left', fill: '#666' }}
              domain={[0, 80]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
              orientation="right"
            />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="circulatingSupply"
              stroke="#666666"
              fill="#666666"
              fillOpacity={0.6}
              strokeWidth={2}
            //   dot={true}
            //   label={(props) =>
            //     renderCustomizedLabel({
            //       ...props,
            //       showLabel: data[props.index].showLabel,
            //     })
            // }
            />
            <Area
              type="monotone"
              dataKey="unlockedSupply"
              stroke="#4B91F1"
              fill="#4B91F1"
              fillOpacity={0.6}
              strokeWidth={2}
            //   dot={true}
            //   label={(props) =>
            //     renderCustomizedLabel({
            //       ...props,
            //       showLabel: data[props.index].showLabel,
            //     })
            //   }
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CirculationLocks;
