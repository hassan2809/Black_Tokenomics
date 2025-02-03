import React from 'react';
import { Eye } from 'lucide-react';

const Tokenomic = () => {
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
        <div className="p-6 bg-[#0E1117] border-3 border-red-600">
            <h2 className="text-xl font-semibold text-white mb-6">Tokenomics Spreadsheets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tokenomicsCards.map((card, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                        {/* Top Section with Eye Icon */}
                        <div className="bg-gray-900 p-4 rounded-t-xl">
                            <div className="flex items-center justify-center mb-2">
                                <Eye className="w-8 h-8 text-white" strokeWidth={1} />
                            </div>
                            <div className="text-center">
                                <h3 className="text-white text-base font-medium">{card.title}</h3>
                                <p className="text-gray-400 text-sm">{card.subtitle}</p>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="bg-gray-800/50 p-4 rounded-b-xl">
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
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                    <span className="text-white text-xs">↗</span>
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
    );
};

export default Tokenomic;