import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const VDVChart = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const data = Array.from({ length: 46 }, (_, i) => ({
    month: i,
    preSeed:
      i < 5
        ? 10
        : i < 10
        ? 20
        : i < 15
        ? 30
        : i < 20
        ? 45
        : i < 25
        ? 60
        : i < 30
        ? 75
        : i < 35
        ? 90
        : 100,
    public:
      i < 5
        ? 5
        : i < 10
        ? 10
        : i < 15
        ? 15
        : i < 20
        ? 22
        : i < 25
        ? 30
        : i < 30
        ? 38
        : i < 35
        ? 45
        : 50,
    showLabel: i % 5 === 0,
  }));

  const renderCustomizedLabel = (props) => {
    const { x, y, value, stroke } = props;
    if (props.showLabel) {
      return (
        <g>
          {/* <circle cx={x} cy={y} r={3} fill={stroke} /> */}
          <text x={x} y={y - 10} fill="white" fontSize={12} textAnchor="middle">
            {`${value}%`}
          </text>
        </g>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#0E1117] rounded-2xl p-6">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Vesting Diluted Valuation (VDV)
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        VDV model shows exactly which is the Market Cap needed to break even
        depending on the different vesting conditions of investors, usually
        showing a lower and more attainable break-even point compared to the
        FDV.
      </p>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              stroke="#fff"
              ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]}
              // tick={{ fill: '#666' }}
              label={{ value: "Months", position: "bottom", fill: "#666" }}
            />
            <YAxis
              stroke="#fff"
              tick={{ fill: "#fff" }}
              domain={[0, 80]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
              orientation="right"
              // label={{
              //   value: "Value (M)",
              //   angle: -90,
              //   position: "left",
              //   fill: "#fff",
              // }}
            />

            <Line
              type="basis"
              dataKey="preSeed"
              stroke="#FF1493"
              strokeWidth={2}
              dot={false}
              label={(props) =>
                renderCustomizedLabel({
                  ...props,
                  showLabel: data[props.index].showLabel,
                })
              }
            />
            <Line
              type="basis"
              dataKey="public"
              stroke="#666666"
              strokeWidth={2}
              dot={false}
              label={(props) =>
                renderCustomizedLabel({
                  ...props,
                  showLabel: data[props.index].showLabel,
                })
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 flex items-center justify-between px-4 py-2 rounded-xl border border-[#6F8EEC] transition-colors"
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

export default VDVChart;
