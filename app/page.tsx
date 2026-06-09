"use client";

import { employees } from "@/data/employees";
import { User, Mail, Phone, CalendarDays, Building2 } from "lucide-react";

import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/employees";

export default function Page() {
  if (!employees || employees.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No employee found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER (CRM unified style) */}
      <PageHeader
        title={pageContent.executiveProfile.title}
        subtitle={pageContent.executiveProfile.subtitle}
      />

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {employees.slice(0, 5).map((employee) => (
          <div
            key={employee.id}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >

            {/* Top Profile Section */}
            <div className="flex items-center gap-4 mb-5">

              <img
                src={employee.profilePhoto}
                alt={employee.name}
                className="h-20 w-20 rounded-full border-4 border-slate-100 object-cover"
              />

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {employee.name}
                </h2>

                <p className="text-sm text-slate-500">
                  {employee.designation}
                </p>

                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                  <Building2 size={14} />
                  {employee.department}
                </div>
              </div>

            </div>

            {/* Details (Attendance card style) */}
            <div className="space-y-3 text-sm">

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <User size={14} /> ID
                </span>
                <span className="font-medium">{employee.id}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <Phone size={14} /> Mobile
                </span>
                <span className="font-medium">{employee.mobile}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <Mail size={14} /> Email
                </span>
                <span className="font-medium truncate max-w-[160px]">
                  {employee.email}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <CalendarDays size={14} /> Joining
                </span>
                <span className="font-medium">
                  {employee.joiningDate}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Manager
                </span>
                <span className="font-medium">
                  {employee.reportingManager}
                </span>
              </div>

            </div>

            {/* Button (Attendance style) */}
            <button className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-white font-medium hover:bg-slate-800 transition">
              View Profile
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}