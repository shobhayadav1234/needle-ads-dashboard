"use client";

import { useState } from "react";
import {
    checkIn,
    checkOut,
    breakIn,
    breakOut,
} from "@/services/attendance";

import {
    User,
    CalendarDays,
} from "lucide-react";

import PageHeader from "@/components/ui/header";

type AttendanceState = {
    checkIn?: string | Date | null;
    checkOut?: string | Date | null;
    breakIn?: string | Date | null;
    breakOut?: string | Date | null;
    totalWorkMinutes?: number;
};

type EmployeeState = {
    name: string;
    designation: string;
    employeeId: string;
    profilePhoto: string;
};

const getInitialAttendance = (): AttendanceState => ({
    checkIn: null,
    checkOut: null,
    breakIn: null,
    breakOut: null,
    totalWorkMinutes: 0,
});

const getInitialEmployee = (): EmployeeState => {
    if (typeof window === "undefined") {
        return {
            name: "Employee",
            designation: "Employee",
            employeeId: "--",
            profilePhoto: "/images/needle-ads-logo.png",
        };
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");

    return {
        name: user.name || "Employee",
        designation: userDetail.designation || "Employee",
        employeeId: userDetail.employeeId || "--",
        profilePhoto:
            userDetail.profilePic ||
            userDetail.profilePhoto ||
            "/images/needle-ads-logo.png",
    };
};

export default function DailyAttendancePage() {
    const [attendance, setAttendance] = useState<AttendanceState>(getInitialAttendance);
    const [employee] = useState<EmployeeState>(getInitialEmployee);

    // ================= ACTIONS =================

    const handleLogin = async () => {
        try {
            const res = await checkIn();
            setAttendance(res.attendance as AttendanceState);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = async () => {
        try {
            const res = await checkOut();
            setAttendance(res.attendance as AttendanceState);
        } catch (err) {
            console.error(err);
        }
    };

    const handleBreakStart = async () => {
        try {
            const res = await breakIn();
            setAttendance(res.attendance as AttendanceState);
        } catch (err) {
            console.error(err);
        }
    };

    const handleBreakEnd = async () => {
        try {
            const res = await breakOut();
            setAttendance(res.attendance as AttendanceState);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">

            {/* HEADER */}
            <PageHeader
                title="Daily Attendance"
                subtitle="Track your working hours"
            />

            {/* EMPLOYEE CARD */}
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
                                {employee.employeeId}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ATTENDANCE CARDS */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {/* LOGIN */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border">
                    <h3 className="font-semibold">Check In</h3>

                    <p className="text-2xl mt-4 font-bold">
                        {attendance.checkIn
                            ? new Date(attendance.checkIn).toLocaleTimeString()
                            : "--:--"}
                    </p>

                    <button
                        onClick={handleLogin}
                        className="mt-5 w-full bg-green-600 text-white py-2 rounded-xl"
                    >
                        Login
                    </button>
                </div>

                {/* LOGOUT */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border">
                    <h3 className="font-semibold">Check Out</h3>

                    <p className="text-2xl mt-4 font-bold">
                        {attendance.checkOut
                            ? new Date(attendance.checkOut).toLocaleTimeString()
                            : "--:--"}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="mt-5 w-full bg-red-600 text-white py-2 rounded-xl"
                    >
                        Logout
                    </button>
                </div>

                {/* BREAK */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border">
                    <h3 className="font-semibold">Break</h3>

                    <p className="text-lg mt-4">
                        IN:{" "}
                        {attendance.breakIn
                            ? new Date(attendance.breakIn).toLocaleTimeString()
                            : "--"}
                    </p>

                    <p className="text-lg">
                        OUT:{" "}
                        {attendance.breakOut
                            ? new Date(attendance.breakOut).toLocaleTimeString()
                            : "--"}
                    </p>

                    <button
                        onClick={handleBreakStart}
                        className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-xl"
                    >
                        Start Break
                    </button>

                    <button
                        onClick={handleBreakEnd}
                        className="mt-2 w-full bg-gray-700 text-white py-2 rounded-xl"
                    >
                        End Break
                    </button>
                </div>

                {/* WORKING HOURS */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border">
                    <h3 className="font-semibold">Working Hours</h3>

                    <p className="text-3xl mt-4 font-bold text-blue-600">
                        {attendance.totalWorkMinutes
                            ? (attendance.totalWorkMinutes / 60).toFixed(2) + " hrs"
                            : "0 hrs"}
                    </p>

                    <div className="mt-3 text-sm text-blue-600">
                        Productivity Tracking
                    </div>
                </div>
            </div>
        </div>
    );
}
