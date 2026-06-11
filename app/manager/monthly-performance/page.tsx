"use client";

import {
  CalendarCheck,
  CheckCircle2,
  Users,
  TrendingUp,
  Trophy,
  Award,
} from "lucide-react";

import {
  monthlyPerformanceData,
  pageContent,
} from "@/data/manager";

import PageHeader from "@/components/ui/header";

export default function Page() {
  const {
    attendancePercentage,
    taskCompletionRate,
    clientSatisfactionScore,
    productivityScore,
    monthlyRanking,
    employeePerformanceGrade,
    summary,
  } = monthlyPerformanceData;

  const stats = [
    {
      title: "Attendance Percentage",
      value: `${attendancePercentage}%`,
      icon: CalendarCheck,
      color: "text-green-600",
    },
    {
      title: "Task Completion Rate",
      value: `${taskCompletionRate}%`,
      icon: CheckCircle2,
      color: "text-cyan-600",
    },
    {
      title: "Client Satisfaction Score",
      value: clientSatisfactionScore,
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Productivity Score",
      value: `${productivityScore}%`,
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Monthly Ranking",
      value: `#${monthlyRanking}`,
      icon: Trophy,
      color: "text-orange-500",
    },
    {
      title: "Performance Grade",
      value: employeePerformanceGrade,
      icon: Award,
      color: "text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <PageHeader
        title={pageContent.monthlyPerformance.title}
        subtitle={pageContent.monthlyPerformance.subtitle}
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-sm">
                    {item.title}
                  </p>

                  <h3 className={`text-3xl font-bold mt-1 ${item.color}`}>
                    {item.value}
                  </h3>
                </div>

                <Icon size={28} className={item.color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Monthly Summary */}
      <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Monthly Summary
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500 text-sm">Total Tasks</p>
            <h3 className="text-xl font-bold text-blue-600 mt-1">
              {summary.totalTasks}
            </h3>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500 text-sm">Completed Tasks</p>
            <h3 className="text-xl font-bold text-green-600 mt-1">
              {summary.completedTasks}
            </h3>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500 text-sm">Clients Handled</p>
            <h3 className="text-xl font-bold text-purple-600 mt-1">
              {summary.clientsHandled}
            </h3>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500 text-sm">Working Days</p>
            <h3 className="text-xl font-bold text-orange-500 mt-1">
              {summary.workingDays}
            </h3>
          </div>
        </div>
      </div>

      {/* Grade Card */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-3">
          Employee Performance Grade
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-slate-600 text-sm">
            Based on attendance, productivity, task completion,
            client satisfaction and overall monthly performance.
          </p>

          <div className="bg-slate-900 text-white px-6 py-3 rounded-xl text-2xl font-bold">
            {employeePerformanceGrade}
          </div>
        </div>
      </div>
    </div>
  );
}