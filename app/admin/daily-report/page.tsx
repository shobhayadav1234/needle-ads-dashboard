"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  CalendarDays,
  User,
  Briefcase,
} from "lucide-react";

import PageHeader from "@/components/ui/header";

import {
  dailyReports,
  pageContent,
} from "@/data/admin";

export default function DailyReportPage() {
  const [search, setSearch] = useState("");

  const filteredReports = dailyReports.filter((report) =>
    report.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <PageHeader
        title={pageContent.dailyReports.title}
        subtitle={pageContent.dailyReports.subtitle}
      />

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-3 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Employee</th>
              <th className="p-4 text-left">Designation</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Manager</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredReports.map((report) => (
              <tr
                key={report.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {report.employee}
                </td>

                <td className="p-4">
                  {report.designation}
                </td>

                <td className="p-4">
                  {report.date}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${report.status === "Submitted"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {report.status}
                  </span>
                </td>

                <td className="p-4">
                  {report.manager}
                </td>

                <td className="p-4">
                  <button className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <User size={18} />
              <h3 className="font-semibold">
                {report.employee}
              </h3>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Briefcase size={15} />
                {report.designation}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                {report.date}
              </div>

              <div className="flex items-center gap-2">
                <FileText size={15} />
                {report.manager}
              </div>

              <p className="text-slate-600 mt-2">
                {report.summary}
              </p>

              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${report.status === "Submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
              >
                {report.status}
              </span>

              <button className="mt-3 w-full rounded-xl bg-slate-900 py-2 text-white hover:bg-slate-800 transition">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredReports.length === 0 && (
        <div className="mt-6 rounded-2xl border bg-white p-10 text-center text-slate-500">
          No reports found
        </div>
      )}
    </div>
  );
}