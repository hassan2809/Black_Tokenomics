import React, { useState } from 'react';
// import logo from "../assets/blacktokenomics.png";
import Path0 from '../assets/path0.png';
import Dataroom from '../assets/dataroom.svg';
import Marketing from '../assets/marketing.svg';
import Investor from '../assets/investor.svg';
import Naoris from '../assets/naoris.png';
import Explanation from '../assets/asd.png';
import { Link } from 'lucide-react';
import SidebarComponent from '../components/SidebarComponent';

const MainDataroom = () => {
    const [isOpen, setIsOpen] = useState(true);

    const tokenomicsCards = [
        {
            title: "Minimal Tokenomics",
            subtitle: "For investor",
            status: "Ready",
            mainTitle: "Investors (Password Protected)",
            description: "Minimal model for investors (with password)",
            link: "blacktokenomics.com/mew...omics/"
        },
        {
            title: "Minimal Tokenomics",
            subtitle: "For investor",
            status: "Ready",
            mainTitle: "Investors (Password Protected)",
            description: "Minimal model for investors (with password)",
            link: "blacktokenomics.com/mew...omics/"
        },
        {
            title: "Minimal Tokenomics",
            subtitle: "For investor",
            status: "Ready",
            mainTitle: "Investors (Password Protected)",
            description: "Minimal model for investors (with password)",
            link: "blacktokenomics.com/mew...omics/"
        },
        {
            title: "Minimal Tokenomics",
            subtitle: "For investor",
            status: "Ready",
            mainTitle: "Investors (Password Protected)",
            description: "Minimal model for investors (with password)",
            link: "blacktokenomics.com/mew...omics/"
        }
    ];

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
                    <div className="flex flex-col p-4 mt-5">
                        <div className="flex items-center space-x-2 mb-8">
                            <img src={Path0} alt="logo" className="h-3 lg:h-6" />
                            <span className="text-white text-sm lg:text-2xl">blacktokenomics</span>
                        </div>

                        <p className="text-sm text-gray-400 mb-6">
                            Specialized Tokenomics firm for Web3 Projects, Launchpads, VCs & Funds.
                        </p>

                        <SidebarComponent/>

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
                    <div className="flex flex-col md:flex-row gap-2 justify-between items-center mb-4 p-5 bg-[#6799FE14] border-[1px] border-[#195DE8] rounded-lg">
                        <div>
                            <h1 className="text-2xl font-bold text-white mb-2">Main Tokenomics Dataroom</h1>
                            <p className="text-gray-400">
                                Here you will find all the documentation created by Blacktokenomics. This includes all deliverables focused on tokenomics, specifically designed for fundraising, investors and your team.
                            </p>
                            <p className="text-gray-400 mt-2">
                                Access the password-protected documents, Python models, reports, and more, all in one convenient location.
                            </p>
                        </div>
                        <img src={Naoris} alt="Logo" className="h-25 w-25 md:h-12 md:w-17 lg:w-25 lg:h-25" />
                    </div>
                </div>

                <div className=" gap-2 mb-4 p-5 bg-[#6799FE14] border-[1px] border-[#FAFAFA33] rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-6">Tokenomics Spreadsheets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tokenomicsCards.map((card, index) => (
                            <div key={index} className="rounded-xl p-4 overflow-hidden border-[1px] border-[#6F8EEC] bg-[#6F8EEC40]">
                                {/* Top Section with Eye Icon */}
                                <div className="bg-black p-4 rounded-xl">
                                    <div className="flex flex-col items-center justify-center mb-2">
                                        <img src={Path0} alt="" className='w-15'/>
                                        <h3 className="text-white text-base font-medium mt-1 text-center">{card.title}</h3>
                                        <p className="text-gray-400 text-sm">{card.subtitle}</p>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="mt-2 rounded-b-xl">
                                    {/* Status Badge */}
                                    <div className="mb-2">
                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                            {card.status}
                                        </span>
                                    </div>

                                    {/* Main Title and Description */}
                                    <h4 className="text-white text-base mb-1">{card.mainTitle}</h4>
                                    <p className="text-gray-400 text-sm mb-3">{card.description}</p>

                                    {/* Link */}
                                    <div className="flex items-center space-x-2 overflow-hidden">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center p-2">
                                            <Link className='text-white'/>
                                        </div>
                                        <a href={card.link} className="text-blue-400 text-sm hover:underline">
                                            {card.link}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" gap-2 mb-4 p-5 bg-[#6799FE14] border-[1px] border-[#FAFAFA33] rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-6">Explaination Documents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tokenomicsCards.map((card, index) => (
                            <div key={index} className="rounded-xl p-4 overflow-hidden bg-[#6F8EEC40] border-[1px] border-[#6F8EEC]">
                                {/* Top Section with Eye Icon */}
                                <div className="bg-black rounded-xl">
                                        <img src={Explanation} alt="" className='rounded-xl'/>
                                </div>

                                {/* Bottom Section */}
                                <div className="mt-2 rounded-b-xl">
                                    {/* Status Badge */}
                                    <div className="mb-2">
                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                            {card.status}
                                        </span>
                                    </div>

                                    {/* Main Title and Description */}
                                    <h4 className="text-white text-base mb-1">{card.mainTitle}</h4>
                                    <p className="text-gray-400 text-sm mb-3">{card.description}</p>

                                    {/* Link */}
                                    <div className="flex items-center space-x-2 overflow-hidden">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center p-2">
                                            <Link className='text-white'/>
                                        </div>
                                        <a href={card.link} className="text-blue-400 text-sm hover:underline">
                                            {card.link}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDataroom;