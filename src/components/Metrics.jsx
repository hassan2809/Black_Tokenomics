import React, { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Meter from "./meter";
import LineGraph from "./lineGraph";
import Tooltip from "./tollTip";

const Metrics = ({ supplyShock, className, data, name, line, selected, cu, pu, ci, pi }) => {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [percentageDifferences, setPercentageDifferences] = useState({
    totalUnlockDiff: 0,
    investorUnlockDiff: 0,
  });

  const formatNumber = (number) => typeof number === "number" ? number.toLocaleString() : number;

  const calculatePercentageDifference = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : -100;
    const average = (current + previous) / 2;
    return parseFloat(((current - previous) / average) * 100).toFixed(2);
  };

  useEffect(() => {
    setPercentageDifferences({
      totalUnlockDiff: calculatePercentageDifference(cu, pu),
      investorUnlockDiff: calculatePercentageDifference(ci, pi),
    });
  }, [cu, pu, ci, pi]);

  return (
    <div className={`border-2 p-4 sm:p-6 lg:p-8 rounded-3xl ${className}`}>
      <h1 className="font-sansPro text-xl sm:text-2xl lg:text-[25px] font-[600] text-white mb-4">
        {name}
      </h1>

      <div className="flex flex-col space-y-4 sm:space-y-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Supply Shock Card */}
          <div className="w-full lg:w-1/2 bg-[#0E1117] p-4 sm:p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <p className="font-sansPro text-sm font-[600] text-[#A3A8B8]">Supply Shock (%)</p>
              <Tooltip text="Indicates the percentage of newly released tokens relative to the circulating supply." />
            </div>
            <div className="flex justify-center">
            <Meter progress={supplyShock} />
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Total Unlock Value Card */}
            <div className="bg-[#0E1117] p-4 sm:p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <p className="font-sansPro text-sm font-[600] text-[#A3A8B8]">Total Unlock Value</p>
                <Tooltip text="Overall dollar value of tokens scheduled to unlock this month." />
              </div>
              <LineGraph processedEmissionsData={line} selected={selected} name={`TotalUnlockValue${name}`} />
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg sm:text-xl font-bold text-white">${formatNumber(cu)}</p>
                <div className={`px-3 py-1 rounded-3xl ${percentageDifferences.totalUnlockDiff >= 0 ? "bg-[#6A94F7]" : "bg-[#DB0D16]"}`}>
                  <p className="text-sm">{percentageDifferences.totalUnlockDiff}%</p>
                </div>
              </div>
            </div>

            {/* Unlock Value for Investors Card */}
            <div className="bg-[#0E1117] p-4 sm:p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <p className="font-sansPro text-sm font-[600] text-[#A3A8B8]">Unlock Value for Investors</p>
                <Tooltip text="Portion of total unlocked tokens allocated to investors." />
              </div>
              <LineGraph processedEmissionsData={line} selected={selected} name={`UnlockValueforInvestors${name}`} />
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg sm:text-xl font-bold text-white">${formatNumber(data.Value_for_Investors_SP)}</p>
                <div className={`px-3 py-1 rounded-3xl ${percentageDifferences.investorUnlockDiff >= 0 ? "bg-[#6A94F7]" : "bg-[#DB0D16]"}`}>
                  <p className="text-sm">{percentageDifferences.investorUnlockDiff}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#0E1117] rounded-xl">
          <div className="flex justify-between items-center p-4">
            <p className="font-sansPro text-sm font-[600] text-[#A3A8B8]">Worst Case Scenario</p>
            <button onClick={() => setIsContentVisible(!isContentVisible)} className="p-1">
              {isContentVisible ? <EyeIcon className="h-5 w-5 text-white" /> : <EyeSlashIcon className="h-5 w-5 text-white" />}
            </button>
          </div>

          {isContentVisible && (
            <div className="px-4 pb-4">
              <div className="border-t border-[#26282E] mb-3" />
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                  <p className="text-lg sm:text-xl font-bold text-white mb-2">${formatNumber(data.unlock_value_max)}</p>
                  <div className="flex items-start">
                    <p className="font-sansPro text-sm text-[#A3A8B8] mr-2">Total Maximum Unlock</p>
                    <Tooltip text="Highest dollar value of tokens that could be sold this month." />
                  </div>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <p className="text-lg sm:text-xl font-bold text-white mb-2">${formatNumber(data.Value_for_Investors_Max)}</p>
                  <div className="flex items-start justify-end">
                    <Tooltip text="Highest dollar value of tokens that investors can sell this month." />
                    <p className="font-sansPro text-sm text-[#A3A8B8] ml-2">Maximum for Investors</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metrics;