"use client";

import {
  CheckSquare,
  Clock3,
  Users,
  ClipboardList,
  FileText,
  User,
} from "lucide-react";

import PageHeader from "@/components/ui/header";
import { pageContent, dailyReports } from "@/data/manager";

export default function Page() {
  const totalReports = dailyReports.length;

  const submittedReports = dailyReports.filter(
    (report) => report.status === "Submitted"
  ).length;

  const pendingReports = dailyReports.filter(
    (report) => report.status === "Pending"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <PageHeader
        title={pageContent.dailyReport.title}
        subtitle={pageContent.dailyReport.subtitle}
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Total Reports</p>
              <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                {totalReports}
              </h3>
            </div>
            <FileText className="text-[#0b5fa5]" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Submitted</p>
              <h3 className="text-3xl font-bold text-green-600 mt-1">
                {submittedReports}
              </h3>
            </div>
            <CheckSquare className="text-green-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Pending</p>
              <h3 className="text-3xl font-bold text-orange-500 mt-1">
                {pendingReports}
              </h3>
            </div>
            <Clock3 className="text-orange-500" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Employees</p>
              <h3 className="text-3xl font-bold text-[#1ea7d7] mt-1">
                {totalReports}
              </h3>
            </div>
            <Users className="text-[#1ea7d7]" size={28} />
          </div>
        </div>
      </div>

      {/* Reports Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {dailyReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">
              <div className="flex items-center gap-3">
                <User size={20} />

                <div>
                  <h2 className="font-bold text-lg">
                    {report.employeeName}
                  </h2>

                  <p className="text-blue-100 text-sm">
                    {report.designation}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Work Summary
                </p>

                <p className="text-sm text-slate-700">
                  {report.workSummary}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Pending Work
                </p>

                <p className="text-sm text-slate-700">
                  {report.pendingWork}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-slate-500">
                  {report.date}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === "Submitted"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                    }`}
                >
                  {report.status}
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="p-5 pt-0">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold transition">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}