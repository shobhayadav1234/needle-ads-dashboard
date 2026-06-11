"use client";

import { useState } from "react";
import {
    dailyAttendance,
    employees,
    pageContent,
} from "@/data/admin";

import {
    LogIn,
    LogOut,
    Coffee,
    Clock3,
    User,
    CalendarDays,
} from "lucide-react";

import PageHeader from "@/components/ui/header";

export default function DailyAttendancePage() {
    const attendance = dailyAttendance?.[0];
    const employee = employees?.[0];

    const [loginTime, setLoginTime] = useState(
        attendance?.loginTime || "--:--"
    );
    const [logoutTime, setLogoutTime] = useState(
        attendance?.logoutTime || "--:--"
    );
    const [breakTime, setBreakTime] = useState(
        attendance?.breakTime || "00:00"
    );

    if (!attendance || !employee) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                No attendance data found
            </div>
        );
    }

    const getCurrentTime = () =>
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

    const handleLogin = () => {
        setLoginTime(getCurrentTime());
    };

    const handleLogout = () => {
        setLogoutTime(getCurrentTime());
    };

    const handleBreak = () => {
        setBreakTime(getCurrentTime());
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            {/* Header */}
            <PageHeader
                title={pageContent.dailyAttendance.title}
                subtitle={pageContent.dailyAttendance.subtitle}
            />

            {/* Employee Card */}
            <div className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <img
                        src={employee.profilePhoto}
                        alt={employee.name}
                        className="h-24 w-24 rounded-full border-4 border-slate-100 object-cover"
                    />

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            {employee.name}
                        </h2>

                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                {employee.designation}
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays size={16} />
                                {employee.id}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attendance Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {/* Login */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-600">
                            Login Time
                        </h3>

                        <div className="rounded-xl bg-green-100 p-3">
                            <LogIn className="text-green-600" size={22} />
                        </div>
                    </div>

                    <p className="mt-5 text-3xl font-bold text-slate-800">
                        {loginTime}
                    </p>

                    <button
                        onClick={handleLogin}
                        className="mt-5 w-full rounded-xl bg-green-600 py-2.5 font-medium text-white hover:bg-green-700 transition"
                    >
                        Login
                    </button>
                </div>

                {/* Logout */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-600">
                            Logout Time
                        </h3>

                        <div className="rounded-xl bg-red-100 p-3">
                            <LogOut className="text-red-600" size={22} />
                        </div>
                    </div>

                    <p className="mt-5 text-3xl font-bold text-slate-800">
                        {logoutTime}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="mt-5 w-full rounded-xl bg-red-600 py-2.5 font-medium text-white hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Break */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-600">
                            Break Time
                        </h3>

                        <div className="rounded-xl bg-yellow-100 p-3">
                            <Coffee className="text-yellow-600" size={22} />
                        </div>
                    </div>

                    <p className="mt-5 text-3xl font-bold text-slate-800">
                        {breakTime}
                    </p>

                    <button
                        onClick={handleBreak}
                        className="mt-5 w-full rounded-xl bg-yellow-500 py-2.5 font-medium text-white hover:bg-yellow-600 transition"
                    >
                        Start Break
                    </button>
                </div>

                {/* Working Hours */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-600">
                            Working Hours
                        </h3>

                        <div className="rounded-xl bg-blue-100 p-3">
                            <Clock3 className="text-blue-600" size={22} />
                        </div>
                    </div>

                    <p className="mt-5 text-3xl font-bold text-slate-800">
                        {attendance.totalWorkingHours}
                    </p>

                    <div className="mt-5 rounded-xl bg-blue-50 p-3 text-center text-sm font-medium text-blue-700">
                        Today's Productivity
                    </div>
                </div>
            </div>

            {/* Attendance Summary */}
            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">
                    Attendance Summary
                </h3>

                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Login</p>
                        <p className="font-bold">{loginTime}</p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Logout</p>
                        <p className="font-bold">{logoutTime}</p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Break</p>
                        <p className="font-bold">{breakTime}</p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">
                            Working Hours
                        </p>
                        <p className="font-bold">
                            {attendance.totalWorkingHours}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}