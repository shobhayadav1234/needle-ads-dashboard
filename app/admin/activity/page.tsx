"use client";

import { useState } from "react";
import {
  Search,
  Timer,
  TrendingUp,
  CheckSquare,
  CircleAlert,
  Building2,
  Clock3,
} from "lucide-react";

import PageHeader from "@/components/ui/header";
import StatCard from "@/components/ui/stat-card";

import {
  adminActivityTracking,
  pageContent,
} from "@/data/admin";

export default function AdminActivityTrackingPage() {
  const [search, setSearch] = useState("");

  const filteredActivities = adminActivityTracking.filter((item) =>
    item.employee.toLowerCase().includes(search.toLowerCase())
  );

  const totalActivities = adminActivityTracking.length;

  const completedActivities = adminActivityTracking.filter(
    (item) => item.status === "Completed"
  ).length;

  const pendingActivities = adminActivityTracking.filter(
    (item) => item.status === "Pending"
  ).length;

  const productivity =
    totalActivities > 0
      ? Math.round((completedActivities / totalActivities) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 p-6 w-full">
      <PageHeader
        title={pageContent.adminActivityTracking.title}
        subtitle={pageContent.adminActivityTracking.subtitle}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Total Activities"
          value={totalActivities}
          icon={Timer}
          color="text-[#0b5fa5]"
        />

        <StatCard
          title="Completed"
          value={completedActivities}
          icon={CheckSquare}
          color="text-green-600"
        />

        <StatCard
          title="Pending"
          value={pendingActivities}
          icon={CircleAlert}
          color="text-[#ff9800]"
        />

        <StatCard
          title="Productivity"
          value={`${productivity}%`}
          icon={TrendingUp}
          color="text-[#1ea7d7]"
        />
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-3 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-cyan-200"
        />
      </div>

      {/* Activity Cards */}
      <div className="space-y-6">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Building2 size={20} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      {activity.employee}
                    </h2>

                    <p className="text-blue-100 text-sm">
                      {activity.designation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-xl">
                  <Clock3 size={16} />
                  {activity.time}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
                <div>
                  <p className="text-sm text-slate-500">Client</p>

                  <p className="font-semibold text-slate-800">
                    {activity.client}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium w-fit ${activity.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                    }`}
                >
                  {activity.status}
                </span>
              </div>

              {/* Platforms */}
              <div className="mb-5">
                <h3 className="font-semibold text-slate-700 mb-3">
                  Platforms
                </h3>

                <div className="flex flex-wrap gap-2">
                  {activity.platforms.map((platform: string) => (
                    <span
                      key={platform}
                      className="px-3 py-2 rounded-xl bg-slate-100 text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Update */}
              <div className="mb-5">
                <h3 className="font-semibold text-slate-700 mb-2">
                  Work Update
                </h3>

                <div className="rounded-xl border bg-slate-50 p-4 text-slate-700">
                  {activity.workUpdate}
                </div>
              </div>

              {/* Remarks */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">
                  Manager Remarks
                </h3>

                <div className="rounded-xl border bg-slate-50 p-4 text-slate-700">
                  {activity.remarks}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredActivities.length === 0 && (
          <div className="bg-white rounded-2xl border p-10 text-center text-slate-500">
            No activity found
          </div>
        )}
      </div>
    </div>
  );
}