"use client";

import {
  LogIn,
  LogOut,
  Coffee,
  Clock3,
  User,
} from "lucide-react";

import PageHeader from "@/components/ui/header";
import {
  pageContent,
  employeeAttendance,
} from "@/data/manager";

export default function DailyAttendancePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      
      <PageHeader
        title={pageContent.dailyAttendance.title}
        subtitle={pageContent.dailyAttendance.subtitle}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Total Employees
          </h3>
          <p className="text-3xl font-bold text-[#0b5fa5] mt-2">
            {employeeAttendance.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Present Today
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {
              employeeAttendance.filter(
                (emp) => emp.status === "Present"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            On Break
          </h3>
          <p className="text-3xl font-bold text-yellow-500 mt-2">
            {
              employeeAttendance.filter(
                (emp) => emp.breakTime !== "0m"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Absent
          </h3>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {
              employeeAttendance.filter(
                (emp) => emp.status === "Absent"
              ).length
            }
          </p>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-lg font-bold text-[#0b5fa5]">
            Employee Attendance
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Employee</th>
              <th className="p-4 text-left">Designation</th>
              <th className="p-4 text-left">Login</th>
              <th className="p-4 text-left">Logout</th>
              <th className="p-4 text-left">Break</th>
              <th className="p-4 text-left">Working Hours</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {employeeAttendance.map((employee) => (
              <tr
                key={employee.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {employee.name}
                </td>

                <td className="p-4">
                  {employee.designation}
                </td>

                <td className="p-4">
                  {employee.loginTime}
                </td>

                <td className="p-4">
                  {employee.logoutTime}
                </td>

                <td className="p-4">
                  {employee.breakTime}
                </td>

                <td className="p-4">
                  {employee.totalWorkingHours}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      employee.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {employeeAttendance.map((employee) => (
          <div
            key={employee.id}
            className="bg-white rounded-2xl border p-5 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <User size={20} className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {employee.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {employee.designation}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <LogIn size={16} className="text-green-600" />
                Login: {employee.loginTime}
              </div>

              <div className="flex items-center gap-2">
                <LogOut size={16} className="text-red-600" />
                Logout: {employee.logoutTime}
              </div>

              <div className="flex items-center gap-2">
                <Coffee size={16} className="text-yellow-600" />
                Break: {employee.breakTime}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} className="text-blue-600" />
                Working Hours: {employee.totalWorkingHours}
              </div>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  employee.status === "Present"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {employee.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}