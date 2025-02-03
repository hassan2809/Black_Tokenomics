import React, { useState } from "react";
import { Eye, Calendar, Upload, Trash2, UploadCloud } from "lucide-react";
import Path0 from "../assets/path0.png";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ClientBackendSetting = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openNewCategory, setOpenNewCategory] = useState(false);
  const [openEditButton, setOpenEditButton] = useState(false);
  const [openNewDocument, setOpenNewDocument] = useState(false);
  const [openResetAdminCredentials, setOpenResetAdminCredentials] =
    useState(false);
  const navigate = useNavigate();

  const [documents] = useState([
    "SAFT Tokenomics",
    "Community Tokenomics",
    "Investor Tokenomics",
    "Team Tokenomics",
  ]);

  return (
    <div className="min-h-screen bg-[#0E1117]">
      {/* Sidebar */}
      <div className="relative">
        <div
          className={`fixed top-0 left-0 h-full w-[40%] md:w-[20%] p-1 bg-[#0E1117] text-white shadow-lg transition-transform duration-300 border-r-[1px] border-gray-600 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
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
              <span className="text-white text-sm lg:text-2xl">
                blacktokenomics
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Specialized Tokenomics firm for Web3 Projects, Launchpads, VCs &
              Funds.
            </p>

            <Dialog
              open={openResetAdminCredentials}
              onOpenChange={setOpenResetAdminCredentials}
            >
              <DialogTrigger asChild>
                <button className="border-[1px] border-[#3D4044] py-2 rounded-lg text-white w-full">
                  Reset Admin Credentials
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#6F8EEC1A] border border-[#6F8EEC] p-0 rounded-2xl max-w-md">
                <div className="p-6 space-y-4">
                  <h2 className="text-white text-2xl font-semibold">
                    Admin Login
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Reset or Update Admin Login Credentials
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white text-sm mb-2">Username</p>
                      <Input
                        type="text"
                        placeholder="Type here"
                        className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>

                    <div>
                      <p className="text-white text-sm mb-2">Enter the Password</p>
                      <div className="relative">
                        <Input
                          type="password"
                          placeholder="Type here"
                          className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <Eye className="absolute right-3 top-2.5 text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button className="w-full px-6 py-2 rounded-lg border border-[#3D4044] text-white">
                      Reset
                    </button>
                    <button className="w-full px-6 py-2 rounded-lg  bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white">
                      Save
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-auto min-h-screen ${
          isOpen ? "ml-[40%] md:ml-[20%]" : "ml-0"
        } p-6 bg-[#0E1117]`}
      >
        {/* Toggle Button */}
        <button
          className={`fixed ${
            isOpen ? "left-[40%] md:left-[20%]" : "left-5"
          } top-10 z-50 bg-gray-800 text-gray-400 hover:text-white rounded-full border-[1px] border-gray-600 p-2 transition-all duration-300`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: "translateX(-50%)" }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-start items-center mb-2">
            <button
              className="border-[1px] border-[#3D4044] px-8 py-2 rounded-lg text-white"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Main Form Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Information Section */}
          <div className="bg-[#1A1B1E] rounded-xl p-6 bg-[#6F8EEC1A] border border-[#6F8EEC]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg font-medium">
                General Information
              </h2>
              <span className="text-xs text-blue-500 border border-[#6F8EEC] py-1 px-4 rounded-md">
                Required!
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-2">
                  Name of the Project
                </label>
                <input
                  type="text"
                  placeholder="e.g., Example Project"
                  className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Project Page Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., /example-protocol"
                  className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Link to Spreadsheet
                </label>
                <input
                  type="text"
                  placeholder="e.g., https://docs.google.com/"
                  className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Image of the project
                </label>
                <button className="w-full flex items-center justify-between bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]">
                  <span>Upload</span>
                  <Upload size={16} />
                </button>
              </div>

              <div className="flex justify-between pt-4 gap-2">
                <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white w-1/2">
                  Reset
                </button>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white w-1/2">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Passwords Section */}
          <div className="bg-[#1A1B1E] rounded-xl p-6  bg-[#6F8EEC1A] border border-[#6F8EEC]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg font-medium">Passwords</h2>
              <span className="text-xs text-blue-500 border border-[#6F8EEC] py-1 px-4 rounded-md">
                Required!
              </span>
            </div>

            <div className="space-y-6 flex flex-col gap-4">
              <div>
                <label className="block text-white text-sm mb-4">
                  Main Dashboard Login for Team
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter the Password"
                      className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                    />
                    <Eye className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white w-1/2">
                  Reset
                </button>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white w-1/2">
                  Save
                </button>
              </div>
              <hr className="border-t border-[#3D4044]" />
              <div>
                <label className="block text-white text-sm mb-4">
                  Password Protection for Investors
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter the Password"
                      className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                    />
                    <Eye className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white w-1/2">
                  Reset
                </button>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white w-1/2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Data-Room Settings */}
        <div className="mt-6 bg-[#6F8EEC1A] rounded-xl p-6 border border-[#6F8EEC]">
          <h2 className="text-white text-lg font-medium mb-4">
            Main Data-Room Settings
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-white text-sm">Select Category</label>
              {/* <button className="text-blue-500 text-sm underline">New Category</button> */}
              <Dialog open={openNewCategory} onOpenChange={setOpenNewCategory}>
                <DialogTrigger asChild>
                  <button className="text-blue-500 text-sm underline">
                    New Category
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-[#6F8EEC1A] border border-[#6F8EEC] p-0 rounded-2xl max-w-md">
                  <div className="p-6">
                    <p className="text-white text-2xl font-semibold mb-2">
                      Add New Category
                    </p>
                    <p className="text-white text-sm mb-1">Category Name</p>
                    <Input
                      type="text"
                      placeholder="Type here"
                      className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full mt-4 bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white py-3 rounded-lg  transition-colors text-sm"
                    >
                      Submit
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <select className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] mb-4">
              <option>Select</option>
            </select>

            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between">
                  <input
                    type="text"
                    value={doc}
                    readOnly
                    className="w-[60%] flex bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] mr-2"
                  />
                  <button className="w-[20%] py-2 rounded-lg border border-[#3D4044] text-white mr-2">
                    Delete
                  </button>

                  <Dialog
                    open={openEditButton}
                    onOpenChange={setOpenEditButton}
                  >
                    <DialogTrigger asChild>
                      <button className="w-[20%] py-2 rounded-lg bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white">
                        Edit
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#6F8EEC1A] border border-[#6F8EEC] p-0 rounded-2xl max-w-md">
                      <div className="p-6 space-y-3">
                        <p className="text-white text-2xl font-semibold">
                          Editing SAFT Tokenomics
                        </p>
                        <div>
                          <p className="text-white text-sm mb-2">
                            Name of the Document
                          </p>
                          <Input
                            type="text"
                            placeholder="Type here"
                            className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-white text-sm mb-2">Status</p>
                            <Select>
                              <SelectTrigger className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus:ring-0">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">Option 1</SelectItem>
                                <SelectItem value="2">Option 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <p className="text-white text-sm mb-2">
                              Link to the Document
                            </p>

                            <Input
                              type="text"
                              placeholder="Type here"
                              className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="text-white text-sm mb-2">
                            Descriptions of the Document
                          </p>

                          <Input
                            type="text"
                            placeholder="Type here"
                            className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>

                        <div>
                          <p className="text-white text-sm mb-2">
                            Document Image
                          </p>

                          <button className="flex w-full items-center justify-between bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]">
                            <span>Upload</span>
                            <UploadCloud size={20} />
                          </button>
                        </div>

                        <button className="w-full bg-[#2563EB] hover:bg-blue-600 text-white py-3 rounded-lg text-sm">
                          Submit
                        </button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>

            <Dialog open={openNewDocument} onOpenChange={setOpenNewDocument}>
              <DialogTrigger asChild>
                <button className="w-full py-3 mt-4 rounded-lg bg-[#195DE866] text-white">
                  Add New Document
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#6F8EEC1A] border border-[#6F8EEC] p-0 rounded-2xl max-w-md">
                <div className="p-6 space-y-3">
                  <p className="text-white text-2xl font-semibold">
                    Add New Document
                  </p>
                  <div>
                    <p className="text-white text-sm mb-2">
                      Name of the Document
                    </p>
                    <Input
                      type="text"
                      placeholder="Type here"
                      className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-white text-sm mb-2">Status</p>
                      <Select>
                        <SelectTrigger className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus:ring-0">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Option 1</SelectItem>
                          <SelectItem value="2">Option 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <p className="text-white text-sm mb-2">
                        Link to the Document
                      </p>

                      <Input
                        type="text"
                        placeholder="Type here"
                        className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-white text-sm mb-2">
                      Descriptions of the Document
                    </p>

                    <Input
                      type="text"
                      placeholder="Type here"
                      className="bg-[#0E1117] text-gray-300 border-[#3D4044] focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  <div>
                    <p className="text-white text-sm mb-2">Document Image</p>

                    <button className="flex w-full items-center justify-between bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]">
                      <span>Upload</span>
                      <UploadCloud size={20} />
                    </button>
                  </div>

                  <button className="w-full bg-[#2563EB] hover:bg-blue-600 text-white py-3 rounded-lg text-sm">
                    Submit
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Marketing and Investors Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Marketing Page Settings */}
          <div className="bg-[#6F8EEC1A] rounded-xl p-6 border border-[#6F8EEC]">
            <h2 className="text-white text-lg font-medium mb-4">
              Marketing Page Settings
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Toggle Page Visibility</span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">
                    On
                  </button>
                  <button className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-400">
                    Off
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <span className="text-white">User Input Status</span>
                <div className="flex items-center space-x-2 ">
                  <button className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">
                    Auto
                  </button>
                  <button className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-400">
                    Manual
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Token Slug or ID
                </label>
                <input
                  type="text"
                  placeholder="e.g., 4235"
                  className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Launch Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                  />
                  <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="flex justify-between pt-4 gap-2">
                <button className="w-1/2 px-6 py-2 rounded-lg border border-[#3D4044] text-white">
                  Reset
                </button>
                <button className="w-1/2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Investors Section */}
          <div className="bg-[#6F8EEC1A] rounded-xl p-6 border border-[#6F8EEC] flex flex-col">
            <h2 className="text-white text-lg font-medium mb-4">Investors</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Toggle Page Visibility</span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">
                    On
                  </button>
                  <button className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-400">
                    Off
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 items-end">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Competitor Names
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                    />
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">FDVs</label>
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                      />
                      <Trash2 className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
                      />
                      <Trash2 className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="text-blue-500 text-sm">Add new Row</button>

              <div className="flex justify-between pt-4 gap-4">
                <button className="w-1/2 px-6 py-2 rounded-lg border border-[#3D4044] text-white">
                  Reset
                </button>
                <button className="w-1/2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#195DE8] to-[#6799FE] text-white">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBackendSetting;

// import React, { useState } from 'react';
// import { Eye, Calendar, Upload, Trash2 } from 'lucide-react';
// import Path0 from '../assets/path0.png';
// import { useNavigate } from "react-router-dom";

// const ClientBackendSetting = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const navigate = useNavigate();

//     const [documents] = useState([
//         "SAFT Tokenomics",
//         "Community Tokenomics",
//         "Investor Tokenomics",
//         "Team Tokenomics"
//     ]);

//     return (
//         <div className="min-h-screen bg-[#0E1117]">
//             {/* Sidebar code remains the same */}

//             {/* Main Content */}
//             <div className={`flex flex-col flex-auto min-h-screen ${
//                 isOpen ? "ml-[40%] md:ml-[20%]" : "ml-0"
//             } p-6 bg-[#0E1117]`}>
//                 {/* Toggle Button remains the same */}

//                 {/* Go Back Button */}
//                 <div className="mb-8">
//                     <div className="flex justify-start items-center mb-2">
//                         <button className="border border-[#3D4044] px-8 py-2 rounded-lg text-white">
//                             Go Back
//                         </button>
//                     </div>
//                 </div>

//                 {/* Main Form Sections */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* General Information Section */}
//                     <div className="bg-[#1A1B1E] rounded-xl p-6 border border-[#3D4044]">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-white text-lg font-medium">General Information</h2>
//                             <span className="text-xs text-blue-500">Required!</span>
//                         </div>

//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-white text-sm mb-2">Name of the Project</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g., Example Project"
//                                     className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] focus:outline-none focus:border-blue-500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-white text-sm mb-2">Project Page Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g., /example-protocol"
//                                     className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] focus:outline-none focus:border-blue-500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-white text-sm mb-2">Link to Spreadsheet</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g., https://docs.google.com/"
//                                     className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] focus:outline-none focus:border-blue-500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-white text-sm mb-2">Image of the project</label>
//                                 <button className="w-full flex items-center justify-between bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]">
//                                     <span>Upload</span>
//                                     <Upload size={16} />
//                                 </button>
//                             </div>

//                             <div className="flex justify-between pt-4">
//                                 <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white">Reset</button>
//                                 <button className="px-6 py-2 rounded-lg bg-blue-500 text-white">Save</button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Passwords Section */}
//                     <div className="bg-[#1A1B1E] rounded-xl p-6 border border-[#3D4044]">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-white text-lg font-medium">Passwords</h2>
//                             <span className="text-xs text-blue-500">Required!</span>
//                         </div>

//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-white text-sm mb-4">Main Dashboard Login for Team</label>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <input
//                                             type="text"
//                                             placeholder="Username"
//                                             className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                         />
//                                     </div>
//                                     <div className="relative">
//                                         <input
//                                             type="password"
//                                             placeholder="Enter the Password"
//                                             className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                         />
//                                         <Eye className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex justify-between">
//                                 <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white">Reset</button>
//                                 <button className="px-6 py-2 rounded-lg bg-blue-500 text-white">Save</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Data-Room Settings */}
//                 <div className="mt-6 bg-[#1A1B1E] rounded-xl p-6 border border-[#3D4044]">
//                     <h2 className="text-white text-lg font-medium mb-4">Main Data-Room Settings</h2>

//                     <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                             <label className="text-white text-sm">Select Category</label>
//                             <button className="text-blue-500 text-sm">New Category</button>
//                         </div>

//                         <select className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] mb-4">
//                             <option>Select</option>
//                         </select>

//                         <div className="space-y-2">
//                             {documents.map((doc, index) => (
//                                 <div key={index} className="flex items-center justify-between">
//                                     <input
//                                         type="text"
//                                         value={doc}
//                                         readOnly
//                                         className="flex-1 bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044] mr-2"
//                                     />
//                                     <button className="px-4 py-2 rounded-lg border border-[#3D4044] text-white mr-2">Delete</button>
//                                     <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">Edit</button>
//                                 </div>
//                             ))}
//                         </div>

//                         <button className="w-full py-3 mt-4 rounded-lg bg-blue-900/30 text-white hover:bg-blue-900/40">
//                             Add New Document
//                         </button>
//                     </div>
//                 </div>

//                 {/* Marketing and Investors Sections */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                     {/* Marketing Page Settings */}
//                     <div className="bg-[#1A1B1E] rounded-xl p-6 border border-[#3D4044]">
//                         <h2 className="text-white text-lg font-medium mb-4">Marketing Page Settings</h2>

//                         <div className="space-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-white">Toggle Page Visibility</span>
//                                 <div className="flex items-center space-x-2">
//                                     <button className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">On</button>
//                                     <button className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-400">Off</button>
//                                 </div>
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <span className="text-white">User Input Status</span>
//                                 <div className="flex items-center space-x-2">
//                                     <button className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">Auto</button>
//                                     <button className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-400">Manual</button>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-white text-sm mb-2">Token Slug or ID</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g., 4235"
//                                     className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-white text-sm mb-2">Launch Date</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         placeholder="dd/mm/yyyy"
//                                         className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                     />
//                                     <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
//                                 </div>
//                             </div>

//                             <div className="flex justify-between pt-4">
//                                 <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white">Reset</button>
//                                 <button className="px-6 py-2 rounded-lg bg-blue-500 text-white">Save</button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Investors Section */}
//                     <div className="bg-[#1A1B1E] rounded-xl p-6 border border-[#3D4044]">
//                         <h2 className="text-white text-lg font-medium mb-4">Investors</h2>

//                         <div className="space-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-white">Toggle Page Visibility</span>
//                                 <div className="flex items-center space-x-2">
//                                     <button className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">On</button>
//                                     <button className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-400">Off</button>
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-white text-sm mb-2">Competitor Names</label>
//                                     <div className="space-y-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Type here"
//                                             className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Type here"
//                                             className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-white text-sm mb-2">FDVs</label>
//                                     <div className="space-y-2">
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Type here"
//                                                 className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                             />
//                                             <Trash2 className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Type here"
//                                                 className="w-full bg-[#0E1117] text-gray-300 p-2 rounded-lg border border-[#3D4044]"
//                                             />
//                                             <Trash2 className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <button className="text-blue-500 text-sm">Add new Row</button>

//                             <div className="flex justify-between pt-4">
//                                 <button className="px-6 py-2 rounded-lg border border-[#3D4044] text-white">Reset</button>
//                                 <button className="px-6 py-2 rounded-lg bg-blue-500 text-white">Save</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ClientBackendSetting;
