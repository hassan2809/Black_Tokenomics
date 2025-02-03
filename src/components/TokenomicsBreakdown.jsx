import React from "react";

const TokenomicsBreakdown = () => {
  const rows = [
    {
      name: "Pre-Seed Round",
      allocation: "5.00%",
      distribution: "10.0% at TGE , 3 Month Cliff, 21 Month Linear Vesting",
    },
    {
      name: "Public Round",
      allocation: "2.00%",
      distribution: "20.0% at TGE , 1 Month Cliff, 8 Month Linear Vesting",
    },
    {
      name: "Liquidity (LP & MM)",
      allocation: "5.00%",
      distribution: "-",
    },
    {
      name: "Marketing",
      allocation: "10.00%",
      distribution: "15.0% at TGE , 36 Month Linear Vesting",
    },
    {
      name: "Validator Nodes (VDI)",
      allocation: "20.00%",
      distribution: "60 Month Linear Vesting",
    },
    {
      name: "Ecosystem",
      allocation: "17.00%",
      distribution: "20.0% at TGE , 12 Month Cliff, 48 Month Linear Vesting",
    },
  ];

  const metrics = [
    { label: "Max Total Supply", value: "1,000,000,000" },
    { label: "Initial Marketcap", value: "$4,640,000" },
    { label: "Initial Float", value: "5.80%" },
    { label: "Listing Price", value: "$0.080" },
  ];

  return (
    <div className="bg-[#0E1117] rounded-2xl pt-6 px-6 h-[500px] overflow-hidden overflow-y-auto">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Tokenomics Breakdown
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        In detail outlines the distribution and vesting schedules of allocated
        tokens among different stakeholder groups. This current structure
        ensures fair and controlled token distribution aligned with project
        goals.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#1E1F23]">
              <th className="py-3 text-sm font-normal text-gray-400 text-center">
                Allocation
              </th>
              <th className="py-3 text-sm font-normal text-gray-400 text-center">
                Distribution
              </th>
              <th className="py-3 text-sm font-normal text-gray-400 text-center">
                Vesting
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-[#1E1F23] hover:bg-[#1A1B1E] transition-colors"
              >
                <td className="py-4 text-white">{row.name}</td>
                <td className="py-4 text-white">{row.allocation}</td>
                <td className="py-4 text-white">{row.distribution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sticky bottom-0 bg-black grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-[#1A1B1E] p-4 rounded-lg">
            <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
            <div className="text-white font-medium">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenomicsBreakdown;
