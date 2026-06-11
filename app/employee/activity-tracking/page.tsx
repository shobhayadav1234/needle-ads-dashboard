"use client";

import { activityTracking } from "@/data/employees";
import {
  Clock3,
  Building2,
  CheckCircle2,
  CheckSquare,
  TrendingUp,
  Timer,
  CircleAlert,
} from "lucide-react";

import StatCard from "@/components/ui/stat-card";
import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/employees";

export default function ActivityPage() {
  const data = activityTracking[0];

  const totalSlots = data.activities.length;
  const completedSlots = 0;
  const pendingSlots = totalSlots - completedSlots;

  const productivity =
    totalSlots > 0 ? Math.round((completedSlots / totalSlots) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER (CRM unified style) */}
      <PageHeader
        title={pageContent.activityTracking.title}
        subtitle={pageContent.activityTracking.subtitle}
      />

      {/* STATS (same UI exactly like your cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <StatCard
          title="Total Slots"
          value={totalSlots}
          icon={Timer}
          color="text-[#0b5fa5]"
        />

        <StatCard
          title="Completed"
          value={completedSlots}
          icon={CheckSquare}
          color="text-green-600"
        />

        <StatCard
          title="Pending"
          value={pendingSlots}
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

      {/* TIMELINE (UNCHANGED UI) */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Daily Timeline
        </h2>

        <div className="space-y-3">
          {data.activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-xl p-4 hover:bg-slate-50 transition"
            >
              <div>
                <h3 className="font-semibold text-slate-800">
                  {activity.client}
                </h3>
                <p className="text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>

              <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                Pending
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVITY CARDS (UNCHANGED UI) */}
      <div className="space-y-6">

        {data.activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden"
          >

            <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Building2 size={20} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      {activity.client}
                    </h2>
                    <p className="text-blue-100 text-sm">
                      Activity Report
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-xl">
                  <Clock3 size={16} />
                  {activity.time}
                </div>

              </div>
            </div>

            <div className="p-5">

              <div className="mb-4 flex justify-between">
                <h3 className="font-semibold text-slate-700">
                  Social Platforms
                </h3>

                <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                  Pending
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {activity.platforms.map((platform) => (
                  <label
                    key={platform}
                    className="flex items-center gap-2 border rounded-xl p-3 hover:border-[#1ea7d7] hover:bg-cyan-50 transition"
                  >
                    <input type="checkbox" className="accent-[#ff9800]" />
                    <span className="text-sm font-medium text-slate-700">
                      {platform}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-5 space-y-4">

                <textarea
                  rows={3}
                  placeholder="Work update..."
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-cyan-200 outline-none"
                />

                <input
                  type="text"
                  placeholder="Manager remarks..."
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-cyan-200 outline-none"
                />

              </div>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-xs text-slate-500">
                  Last updated: Not submitted
                </p>

                <button className="bg-[#ff9800] hover:bg-[#e68900] text-white px-5 py-2 rounded-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Submit
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}