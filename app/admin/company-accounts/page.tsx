"use client";

import {
  Building2,
  Globe,
  ExternalLink,
  CheckCircle2,
  Users,
  ShieldCheck,
} from "lucide-react";

import PageHeader from "@/components/ui/header";

import {
  companyAccounts,
  pageContent,
} from "@/data/admin";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Page() {
  const activeAccounts = companyAccounts.filter(
    (account) => account.status === "Active"
  ).length;

  const verifiedProfiles = companyAccounts.filter(
    (account) => account.verified
  ).length;

  const getIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <FaInstagram size={22} />;

      case "Facebook":
        return <FaFacebook size={22} />;

      case "LinkedIn":
        return <FaLinkedin size={22} />;

      case "YouTube":
        return <FaYoutube size={22} />;

      case "Twitter/X":
        return <FaXTwitter size={22} />;

      case "Google Business Profile":
        return <Globe size={22} />;

      default:
        return <Building2 size={22} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <PageHeader
        title={pageContent.companyAccounts.title}
        subtitle={pageContent.companyAccounts.subtitle}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                Total Accounts
              </p>
              <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                {companyAccounts.length}
              </h3>
            </div>

            <Users
              className="text-[#1ea7d7]"
              size={28}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                Active Accounts
              </p>
              <h3 className="text-3xl font-bold text-green-600 mt-1">
                {activeAccounts}
              </h3>
            </div>

            <CheckCircle2
              className="text-green-600"
              size={28}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                Verified Profiles
              </p>
              <h3 className="text-3xl font-bold text-[#ff9800] mt-1">
                {verifiedProfiles}
              </h3>
            </div>

            <ShieldCheck
              className="text-[#ff9800]"
              size={28}
            />
          </div>
        </div>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {companyAccounts.map((account) => (
          <div
            key={account.id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  {getIcon(account.platform)}
                </div>

                <div>
                  <h2 className="font-bold text-lg">
                    {account.platform}
                  </h2>

                  <p className="text-blue-100 text-sm">
                    Official Account
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  Username
                </span>

                <span className="font-medium break-all text-right">
                  {account.username}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  Followers
                </span>

                <span className="font-medium">
                  {account.followers}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-500">
                  Status
                </span>

                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle2 size={16} />
                  {account.status}
                </span>
              </div>

              {account.verified && (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">
                    Verified
                  </span>

                  <span className="flex items-center gap-1 text-blue-600 font-medium">
                    <ShieldCheck size={16} />
                    Verified
                  </span>
                </div>
              )}
            </div>

            {/* Footer Button */}
            <div className="p-5 pt-0">
              <button
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                onClick={() =>
                  account.url &&
                  window.open(account.url, "_blank")
                }
              >
                <ExternalLink size={16} />
                Open Account
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}