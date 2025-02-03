import React from "react";

const ROICalculator = () => {
  const metricsData = [
    {
      label: "Investment Price",
      value: "$0.0200",
    },
    {
      label: "Fully Diluted Valuation",
      value: "$20,000,000",
    },
    {
      label: "Expected Price",
      value: "$0.102",
    },
    {
      label: "Expected ROI",
      value: "509% ↑",
      isROI: true,
    },
  ];

  return (
    <div className="bg-[#0E1117] rounded-2xl p-6">
      <h2 className="text-white text-xl font-medium text-center mb-2 w-full py-2 rounded-xl border border-[#3D4044]">
        Investment ROI Calculator
      </h2>

      <p className="text-gray-400 text-sm mb-3">
        To calculate the potential ROI of your investment, select a competitor
        with whom you wish to compare the investment opportunity with.
      </p>

      <p className="text-gray-400 text-sm mb-6">
        And then, based on the launch FDV and the selected competitor, you will
        receive the potential return on investment if {"{project_name}"} repeats
        the pricing behavior of the selected competitor.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {metricsData.map((metric, index) => (
          <div key={index} className="bg-[#1A1B1E] p-4 rounded-lg">
            <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
            <div className={`text-2xl font-medium text-white`}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-sm mb-2">
        <span className="text-white">{"{project_name}"}</span> would have an FDV
        of <span className="text-white">$102.0M</span>, if it repeated the same
        price behavior as{" "}
        <span className="text-white">{"{selected_competitor_name}"}</span>.
      </p>

      <p className="text-gray-400 text-sm">
        And the people who invested at the{" "}
        <span className="text-white">Pre-Seed Round Round</span> would be up{" "}
        <span className="text-white">5X</span>.
      </p>
    </div>
  );
};

export default ROICalculator;
