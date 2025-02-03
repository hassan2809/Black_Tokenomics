import React, { useState } from 'react';
// import logo from "../assets/blacktokenomics.png";
import Path0 from '../assets/path0.png';
import { useNavigate } from "react-router-dom";

const BackendSetting = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <div className='min-h-screen bg-[#0E1117]'>
            {/* Sidebar */}
            <div className="relative">
                <div
                    className={`fixed top-0 left-0 h-full w-[40%] md:w-[20%] p-1 bg-[#0E1117] text-white shadow-lg transition-transform duration-300 border-r-[1px] border-gray-600 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    style={{
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <div className="flex flex-col p-4">
                        <div className="flex items-center space-x-2 mb-8">
                            <img src={Path0} alt="logo" className="h-3 lg:h-6" />
                            <span className="text-white text-sm lg:text-2xl">blacktokenomics</span>
                        </div>

                        <p className="text-sm text-gray-400 mb-6">
                            Specialized Tokenomics firm for Web3 Projects, Launchpads, VCs & Funds.
                        </p>

                        <button className='border-[1px] border-[#3D4044] py-2 rounded-lg'>
                            Reset Admin Credentials
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`flex flex-col flex-auto min-h-screen ${isOpen ? "ml-[40%] md:ml-[20%]" : "ml-0"
                    } p-6 bg-[#0E1117]`}
            >
                {/* Toggle Button */}
                <button
                    className={`fixed ${isOpen ? "left-[40%] md:left-[20%]" : "left-5"
                        } top-10 z-50 bg-gray-800 text-gray-400 hover:text-white rounded-full border-[1px] border-gray-600 p-2 transition-all duration-300`}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ transform: "translateX(-50%)" }}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    )}
                </button>

                {/* Header Section */}
                <div className="mb-8">
                    <div className='flex justify-between items-center mb-2'>
                        <p className='text-white'>Clients(2)</p>
                        <button className='border-[1px] border-[#3D4044] px-8 py-2 rounded-lg text-white'>
                            Add New
                        </button>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-5 bg-[#6799FE14] border-[1px] border-[#195DE8] rounded-lg" onClick={() => navigate('/clientBackendSetting')}>
                        <h1 className="text-xl font-bold text-white mb-2">MeWe</h1>
                        <div>
                            <button className='border-[1px] border-[#3D4044] px-8 py-2 rounded-lg text-white'>
                                Access Dataroom
                            </button>
                            <button className='bg-[#195DE8] ml-2 border-[1px] border-[#3D4044] px-8 py-2 rounded-lg text-white'>
                                Settings
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-5 bg-[#6799FE14] border-[1px] border-[#195DE8] rounded-lg">
                        <h1 className="text-xl font-bold text-white mb-2">Naoris Protocol</h1>
                        <div>
                            <button className='border-[1px] border-[#3D4044] px-8 py-2 rounded-lg text-white' onClick={() => navigate('/clientBackendSetting')}>
                                Access Dataroom
                            </button>
                            <button className='bg-[#195DE8] ml-2 border-[1px] border-[#3D4044] px-8 py-2 rounded-lg text-white'>
                                Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackendSetting;