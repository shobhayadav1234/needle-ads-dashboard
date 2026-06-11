"use client";

import { useState } from "react";
import {
    Search,
    User,
    Clock3,
    LogIn,
    LogOut,
} from "lucide-react";

import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/employees";

const attendanceData = [
    {
        id: "EMP001",
        name: "Shobha Yadav",
        designation: "Full Stack Developer",
        loginTime: "09:00 AM",
        logoutTime: "06:00 PM",
        workingHours: "8h 30m",
        status: "Present",
    },
    {
        id: "EMP002",
        name: "Rahul Sharma",
        designation: "Backend Developer",
        loginTime: "09:15 AM",
        logoutTime: "06:10 PM",
        workingHours: "8h 20m",
        status: "Late",
    },
    {
        id: "EMP003",
        name: "Priya Singh",
        designation: "UI Designer",
        loginTime: "--",
        logoutTime: "--",
        workingHours: "--",
        status: "Absent",
    },
];

export default function AdminAttendancePage() {
    const [search, setSearch] = useState("");

    const filteredData = attendanceData.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6">
            <PageHeader
                title={pageContent.dailyAttendance.title}
                subtitle="View attendance of all employees"
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
                            <th className="p-4 text-left">Login</th>
                            <th className="p-4 text-left">Logout</th>
                            <th className="p-4 text-left">Hours</th>
                            <th className="p-4 text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((emp) => (
                            <tr
                                key={emp.id}
                                className="border-t hover:bg-slate-50"
                            >
                                <td className="p-4">
                                    <div>
                                        <p className="font-semibold">{emp.name}</p>
                                        <p className="text-xs text-slate-500">
                                            {emp.id}
                                        </p>
                                    </div>
                                </td>

                                <td className="p-4">
                                    {emp.designation}
                                </td>

                                <td className="p-4">
                                    {emp.loginTime}
                                </td>

                                <td className="p-4">
                                    {emp.logoutTime}
                                </td>

                                <td className="p-4">
                                    {emp.workingHours}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${emp.status === "Present"
                                                ? "bg-green-100 text-green-700"
                                                : emp.status === "Late"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {emp.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="grid gap-4 lg:hidden">
                {filteredData.map((emp) => (
                    <div
                        key={emp.id}
                        className="rounded-2xl border bg-white p-4 shadow-sm"
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <User size={18} />
                            <div>
                                <h3 className="font-semibold">
                                    {emp.name}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    {emp.designation}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <LogIn size={16} />
                                Login: {emp.loginTime}
                            </div>

                            <div className="flex items-center gap-2">
                                <LogOut size={16} />
                                Logout: {emp.logoutTime}
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock3 size={16} />
                                Hours: {emp.workingHours}
                            </div>

                            <span
                                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${emp.status === "Present"
                                        ? "bg-green-100 text-green-700"
                                        : emp.status === "Late"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {emp.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary Cards */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm border">
                    <p className="text-sm text-slate-500">
                        Total Employees
                    </p>
                    <h2 className="mt-2 text-3xl font-bold">
                        {attendanceData.length}
                    </h2>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm border">
                    <p className="text-sm text-slate-500">
                        Present Today
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-green-600">
                        {
                            attendanceData.filter(
                                (e) => e.status === "Present"
                            ).length
                        }
                    </h2>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm border">
                    <p className="text-sm text-slate-500">
                        Absent Today
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-red-600">
                        {
                            attendanceData.filter(
                                (e) => e.status === "Absent"
                            ).length
                        }
                    </h2>
                </div>
            </div>
        </div>
    );
}