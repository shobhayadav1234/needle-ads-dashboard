"use client";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { Globe } from "lucide-react";

export default function CompanyAccountsPage() {
  const accounts = [
    {
      name: "Instagram",
      username: "@needleads",
      icon: <FaInstagram size={24} />,
    },
    {
      name: "Facebook",
      username: "Needleads Official",
      icon: <FaFacebook size={24} />,
    },
    {
      name: "LinkedIn",
      username: "Needleads",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "Twitter / X",
      username: "@needleads",
      icon: <Globe size={24} />,
    },
    {
      name: "YouTube",
      username: "Needleads Official",
      icon: <FaYoutube size={24} />,
    },
    {
      name: "Google Business Profile",
      username: "Needleads",
      icon: <Globe size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-3xl font-bold text-[#0B3C5D]">
          Company Account Management
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Manage all official Needleads social media accounts from one panel.
        </p>
      </div>

      {/* Company Profile */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0B3C5D] mb-2">
          Needleads Official Accounts
        </h2>

        <p className="text-sm text-gray-600">
          Executive can directly work on company accounts from this panel.
        </p>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center">
                {account.icon}
              </div>

              <div>
                <h3 className="font-semibold text-[#0B3C5D]">
                  {account.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {account.username}
                </p>
              </div>
            </div>

            <button className="w-full bg-[#00C897] text-black py-2 rounded-lg font-medium hover:bg-[#00e3aa] transition">
              Open Account
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}