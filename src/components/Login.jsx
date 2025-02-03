import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, KeyRound } from "lucide-react";
import Path0 from "../assets/path0.png";
import bgGrid from "../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", formData);
  };

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${bgGrid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gray-900/50" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-white mb-2 flex justify-center items-center">
          <img src={Path0} alt="" className="h-3 w-5 mr-1" />
          BlackTokenomics
        </div>

        {/* Login container */}
        <div className="w-full max-w-md bg-[#6F8EEC40] backdrop-blur-3xl border-2 border-[#6F8EEC] rounded-2xl shadow-xl p-8 space-y-6">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-400 mb-2">
              Welcome!
            </h1>
            <h2 className="text-3xl text-white">
              Enter Your Account Credentials to Login
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-white">
                <Mail className="w-4 h-4 mr-2" />
                Enter Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Type here"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-white">
                <KeyRound className="w-4 h-4 mr-2" />
                Enter Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white pr-10"
                  placeholder="Type here"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
              onClick={() => navigate('/mainDataroom')}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
