import React from "react";
import { Link } from "react-router-dom";
import Dataroom from "../assets/dataroom.svg";
import Marketing from "../assets/marketing.svg";
import Investor from "../assets/investor.svg";

const SidebarComponent = () => {
  return (
    <div>
      {/* Navigation Links */}
      <nav className="space-y-4">
        <Link
          to="/mainDataroom"
          className="flex items-center space-x-3 text-white bg-blue-900/30 p-2 rounded-lg"
        >
          <img src={Dataroom} alt="Dataroom" className="w-5 h-5" />
          <span className="text-xs md:text-sm">Main Dataroom</span>
        </Link>
        <Link
          to="/marketingStrategy"
          className="flex items-center space-x-3 text-gray-400 p-2 hover:bg-blue-900/30 rounded-lg"
        >
          <img src={Marketing} alt="Marketing" className="w-5 h-5" />
          <span className="text-xs md:text-sm">Marketing Strategy</span>
        </Link>
        <Link
          to="/investorTokenomics"
          className="flex items-center space-x-3 text-gray-400 p-2 hover:bg-blue-900/30 rounded-lg"
        >
          <img src={Investor} alt="Investor" className="w-5 h-5" />
          <span className="text-xs md:text-sm">Investor Tokenomics</span>
        </Link>
      </nav>
    </div>
  );
};

export default SidebarComponent;
