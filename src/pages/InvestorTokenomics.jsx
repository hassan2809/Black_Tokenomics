import React, { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import SettingsPanel from "../components/SettingPanel";
import Metrics from "../components/Metrics";
import SupplyShocksChart from "../components/SupplyShocksChart";
import OptimizedMarketingStrategy from "../components/OptimizedMarketingStrategy";
import Path0 from "../assets/path0.png";
import SidebarComponent from "../components/SidebarComponent";
import logo from "../assets/logo.png";
import AllocationDistribution from "../components/AllocationDistribution";
import TokenomicsBreakdown from "../components/TokenomicsBreakdown";
import VestingRelease from "../components/VestingRelease";
import CirculationLocks from "../components/CirculationLocks";
import PriceChart from "../components/PriceChart";
import HeadCap from "../components/HeadCap";
import ROICalculator from "../components/ROICalculator";
import FDVChart from "../components/FDVChart";
import VDVChart from "../components/VDVChart";

function InvestorTokenomics() {
  const [isOpen, setIsOpen] = useState(true);
  const [sellingPressure, setSellingPressure] = useState(40);
  const [sellingPressureSource, setSellingPressureSource] =
    useState("Circulation");
  const [launchFDV, setLaunchFDV] = useState(500);
  const [month, setMonth] = useState("0");
  const [apiData, setApiData] = useState(null);
  const [apiData2, setApiData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const baseUrl = "http://localhost:5001";
        const payload1 = {
          sellingPressure: sellingPressure.toString(),
          selectedMonth: month,
          startingPrice: (launchFDV / 1000).toFixed(2),
        };
        const payload2 = {
          sellingPressure: sellingPressure.toString(),
          sellingPressureSource,
          selectedMonth: month,
        };

        const [response1, response2] = await Promise.all([
          axios.post(baseUrl, payload1),
          axios.post(`${baseUrl}/plot-values`, payload2),
        ]);

        setApiData(response1.data);
        setApiData2(response2.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [sellingPressure, sellingPressureSource, launchFDV, month]);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-sans p-4 lg:p-6">
      {/* Sidebar */}
      <div className="relative">
        <div
          className={`fixed top-0 left-0 h-full z-10 w-[40%] md:w-[20%] p-1 bg-[#0E1117] text-white shadow-lg transition-transform duration-300 border-r-[1px] border-gray-600 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex flex-col p-4 mt-5">
            <div className="flex items-center space-x-2 mb-8">
              <img src={Path0} alt="logo" className="h-3 lg:h-6" />
              <span className="text-white text-sm lg:text-2xl">
                blacktokenomics
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Specialized Tokenomics firm for Web3 Projects, Launchpads, VCs &
              Funds.
            </p>

            <SidebarComponent />
          </div>

          {/* Selling Pressure Section */}
          <div className="mt-6 mx-4 border-[1px] border-[#2E79C7] rounded-xl bg-customBg">
            <div className="bg-[#181D2D] border-b border-[#2E79C7] flex items-center rounded-t-2xl justify-between p-4 cursor-pointer">
              <p className="font-sansPro text-md font-semibold text-left">
                Select Investment Round
              </p>
            </div>

            <div className="p-4 bg-customBg rounded-xl">
              <div className="">
                <select
                  value={"Pre-Seed Round"}
                  className="w-full bg-[#16171D] text-gray-300 py-3 text-sm rounded border border-[#3D4044]"
                >
                  <option value="Circulation">Pre-Seed Round</option>
                  <option value="Liquidity">Unlocks</option>
                </select>
                <p className="text-xs text-gray-400 text-center mt-2">
                  Select the investment round in which you are investing at, to
                  highlight the FDV, price and amount being raised.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-4 border-[1px] border-[#2E79C7] rounded-xl bg-customBg">
            <div className="bg-[#181D2D] border-b border-[#2E79C7] flex items-center rounded-t-2xl justify-between p-4 cursor-pointer">
              <p className="font-sansPro text-md font-semibold text-left">
                Select a Competitor for Comparison
              </p>
            </div>

            <div className="p-4 bg-customBg rounded-xl">
              <div className="">
                <select
                  value={"Pre-Seed Round"}
                  className="w-full bg-[#16171D] text-gray-300 py-3 text-sm rounded border border-[#3D4044]"
                >
                  <option value="Circulation">Pre-Seed Round</option>
                  <option value="Liquidity">Unlocks</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 flex flex-col ${
          isOpen ? "ml-[21%]" : "ml-0"
        }`}
      >
        <div className="bg-[#195DE8] rounded-3xl">
          {/* Border Gradient */}
          <div className=" inset-0 bg-gradient-to-r from-gradientEnd to-gradientEnd rounded-3xl m-[2px] p-6">
            <div className="rounded-lg flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-white max-w-lg">
                <h1 className="text-2xl font-sansProSemiBold font-semibold leading-[29.05px] mb-4">
                  Optimized Marketing Strategy
                </h1>
                <p className="font-sansPro font-normal text-sm leading-[18.2px] mb-4 text-[#A3A8B8]">
                  This tool enables your marketing team to align their efforts
                  with token unlock events, ensuring a coordinated approach
                  between marketing strategies and tokenomics.
                </p>
                <p className="font-sansPro font-normal text-sm leading-[18.2px] mb-4 text-[#A3A8B8]">
                  It will help to strategically utilize marketing funds for
                  maximum impact and mitigate potential price volatility during
                  significant token release events.
                </p>
              </div>
              {/* Logo Section */}
              <div className="">
                <img
                  src={logo}
                  alt="Naoris Protocol Logo"
                  className="w-[100%] h-40"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className={`fixed top-10 z-50 transition-all duration-300 bg-gray-800 text-gray-400 hover:text-white rounded-full border border-gray-600 p-2
            ${isOpen ? "left-[40%] md:left-[20%]" : "left-5"}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: "translateX(-50%)" }}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>

        <div className="p-4 lg:p-8 mt-9 bg-[#0E1117] border-2 border-[#3D4044] rounded-3xl flex flex-col">
          <div className="w-full bg-[#6F8EEC1A] rounded-3xl p-6 border border-[#5066A7]">
            <h1 className="text-3xl text-white w-full text-center">
              Tokenomics Information
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <AllocationDistribution />
            </div>
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <TokenomicsBreakdown />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <VestingRelease />
            </div>
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <CirculationLocks />
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-8 mt-9 bg-[#0E1117] border-2 border-[#3D4044] rounded-3xl flex flex-col">
          <div className="w-full bg-[#6F8EEC1A] rounded-3xl p-6 border border-[#5066A7]">
            <h1 className="text-3xl text-white w-full text-center">
              Investment Opportunity
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
            <div className="mt-8 w-full lg:w-1/2 border border-[#6F8EEC1A] rounded-2xl">
              <PriceChart />
            </div>
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <HeadCap />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <ROICalculator />
            </div>
            <div className="mt-8 w-full lg:w-1/2 bg-[#16171D] border border-[#6F8EEC1A] rounded-2xl">
              <FDVChart />
            </div>
          </div>
          <div>
            <VDVChart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorTokenomics;
