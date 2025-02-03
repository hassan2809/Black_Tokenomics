import React, { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import SettingsPanel from "../components/SettingPanel";
import Metrics from "../components/Metrics";
import SupplyShocksChart from "../components/SupplyShocksChart";
import OptimizedMarketingStrategy from "../components/OptimizedMarketingStrategy";

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [sellingPressure, setSellingPressure] = useState(40);
  const [sellingPressureSource, setSellingPressureSource] =
    useState("Circulation");
  const [launchFDV, setLaunchFDV] = useState(500);
  const [month, setMonth] = useState("0");
  const [apiData, setApiData] = useState(null);
  const [apiData2, setApiData2] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <SettingsPanel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sellingPressure={sellingPressure}
        setSellingPressure={setSellingPressure}
        sellingPressureSource={sellingPressureSource}
        setSellingPressureSource={setSellingPressureSource}
        launchFDV={launchFDV}
        setLaunchFDV={setLaunchFDV}
        month={month}
        setMonth={setMonth}
      />

      <div
        className={`transition-all duration-300 flex flex-col ${
          isOpen ? "ml-[21%]" : "ml-0"
        }`}
      >
        <OptimizedMarketingStrategy />

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

        <div className="p-4 lg:p-8 mt-9 bg-[#0E1117] border-2 border-[#3D4044] rounded-3xl">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <PulseLoader color="#ffffff" size={15} />
            </div>
          ) : apiData ? (
            <>
              <div
                className={`flex gap-6 w-full justify-center ${
                  isOpen ? "flex-col" : "flex-col xl:flex-row"
                }`}
              >
                <Metrics
                  supplyShock={apiData2.supplyShocks.selected}
                  className="flex-1 border-[#6F8EEC] bg-[#26304C]"
                  data={apiData.selectedMonth}
                  name="Current Month"
                  line={apiData2.plotData}
                  selected={month}
                  cu={apiData.selectedMonth.unlock_value_sp}
                  pu={apiData.previousMonth.unlock_value_sp}
                  ci={apiData.selectedMonth.Value_for_Investors_SP}
                  pi={apiData.previousMonth.Value_for_Investors_SP}
                />
                <Metrics
                  supplyShock={apiData2.supplyShocks.future}
                  className="flex-1 bg-[#181D2D] border-[#293353]"
                  data={apiData.futureMonth}
                  name="Upcoming Month"
                  line={apiData2.plotData}
                  selected={month}
                  cu={apiData.futureMonth.unlock_value_sp}
                  pu={apiData.selectedMonth.unlock_value_sp}
                  ci={apiData.futureMonth.Value_for_Investors_SP}
                  pi={apiData.selectedMonth.Value_for_Investors_SP}
                />
              </div>

              <div className="border-2 border-[#293353] rounded-3xl mt-10">
                <SupplyShocksChart
                  selected={month}
                  processedEmissionsData={apiData2.plotData}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
