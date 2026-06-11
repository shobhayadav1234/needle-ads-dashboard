"use client";

import {
  CheckSquare,
  Clock3,
  Users,
  ClipboardList,
  Send,
} from "lucide-react";

import { dailyReportData } from "@/data/employees";

import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/employees";

export default function Page() {
  const {
    tasksCompleted,
    hoursWorked,
    clientsWorkedOn,
    pendingTasks,
  } = dailyReportData;

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER (CRM unified style) */}
      <PageHeader
        title={pageContent.dailyReport.title}
        subtitle={pageContent.dailyReport.subtitle}
      />

      {/* STATS GRID (Task Management style cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Tasks Completed</p>
              <h3 className="text-3xl font-bold text-green-600 mt-1">
                {tasksCompleted}
              </h3>
            </div>
            <CheckSquare className="text-green-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Hours Worked</p>
              <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                {hoursWorked}h
              </h3>
            </div>
            <Clock3 className="text-[#0b5fa5]" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Clients Worked On</p>
              <h3 className="text-3xl font-bold text-[#1ea7d7] mt-1">
                {clientsWorkedOn}
              </h3>
            </div>
            <Users className="text-[#1ea7d7]" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Pending Tasks</p>
              <h3 className="text-3xl font-bold text-orange-500 mt-1">
                {pendingTasks}
              </h3>
            </div>
            <ClipboardList className="text-orange-500" size={28} />
          </div>
        </div>

      </div>

      {/* REPORT FORM (Task style card) */}
      <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6 mb-8">

        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Submit End-of-Day Report
        </h2>

        <div className="space-y-5">

          <div>
            <label className="block text-slate-600 text-sm mb-2">
              Work Summary
            </label>

            <textarea
              rows={5}
              placeholder="Enter today's completed work details..."
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-cyan-100 focus:border-[#1ea7d7] outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-2">
              Pending Work
            </label>

            <textarea
              rows={4}
              placeholder="Enter pending tasks for tomorrow..."
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-cyan-100 focus:border-[#1ea7d7] outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-2">
              Manager Remarks
            </label>

            <input
              type="text"
              placeholder="Optional remarks..."
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-cyan-100 focus:border-[#1ea7d7] outline-none"
            />
          </div>

          <button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
            <Send size={18} />
            Submit Report
          </button>

        </div>
      </div>

      {/* GUIDELINES (Task style box) */}
      <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6">

        <h2 className="text-lg font-bold text-slate-800 mb-3">
          Daily Reporting Guidelines
        </h2>

        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• Submit report before end of shift</li>
          <li>• Mention all completed client tasks</li>
          <li>• Include pending work for next day</li>
          <li>• Ensure work hours are accurate</li>
          <li>• Manager remarks are optional</li>
        </ul>

      </div>

    </div>
  );
}