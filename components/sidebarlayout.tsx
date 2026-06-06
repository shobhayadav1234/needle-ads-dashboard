"use client";

import {
    LayoutDashboard,
    User,
    Clock,
    ClipboardList,
    Building2,
    Users,
    CheckSquare,
    BarChart3,
    FileText,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SidebarLayout({ children }: any) {
    const [stats, setStats] = useState<any>({});
    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        fetch("/api/dashboard/stats")
            .then((res) => res.json())
            .then((data) => setStats(data));
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* MOBILE TOP BAR */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#0B3C5D] text-white flex items-center justify-between px-4 z-50">
                <Menu onClick={() => setMobileOpen(true)} />
                <button
                    onClick={() => setOpen(true)}
                    className="px-3 py-1 bg-[#00C897] text-black rounded text-sm"
                >
                    Sign In
                </button>
            </div>

            {/* SIDEBAR */}
            <div className="hidden md:flex w-72 h-screen flex-col bg-gradient-to-b from-[#06283D] via-[#0B3C5D] to-[#06283D] text-white shadow-xl">

                <div className="p-5 border-b border-white/10 flex items-center gap-3">
                    <img
                        src="/images/needle-ads-logo.png"
                        className="w-180 h-14 object-contain"
                        alt="logo"
                    />
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">

                    <Link href="/performance-dashboard">
                        <MenuItem
                            icon={<LayoutDashboard size={18} />}
                            label="Dashboard"
                            count={stats.totalEmployees}
                        />
                    </Link>
                    <Link href="/daily-report">
                        <MenuItem
                            icon={<ClipboardList size={18} />}
                            label="Daily Report"
                            count={stats.totalEmployees}
                        />
                    </Link>
                    <Link href="/executive-profile">
                        <MenuItem icon={<User size={18} />} label="Executive Profile" />
                    </Link>
                    <Link href="/daily-attendance">
                        <MenuItem
                            icon={<CheckSquare size={18} />}
                            label="Daily Attendance"
                            count={stats.Dailyattendance}
                        />
                    </Link>

                    <Link href="/activity-tracking">
                        <MenuItem icon={<ClipboardList size={18} />} label="Activity Tracking" />
                    </Link>
                    <Link href="/productivity-score">
                        <MenuItem
                            icon={<Users size={18} />}
                            label="Productivity Score"
                            count={stats.totalProductivity}
                        />
                    </Link>
                    <MenuItem icon={<Users size={18} />} label="Clients" count={stats.totalClients} />
                    <Link href="/task-management">
                        <MenuItem
                            icon={<CheckSquare size={18} />}
                            label="Tasks"
                            count={stats.totalTasks}
                        />
                    </Link>
                    <Link href="/company-accounts">
                        <MenuItem
                            icon={<Building2 size={18} />}
                            label="Company Accounts"
                        />
                    </Link>
                    <Link href="/performance-dashboard">
                        <MenuItem
                            icon={<BarChart3 size={18} />}
                            label="Performance Score"
                        />
                    </Link>
                    <Link href="/monthly-performance">
                        <MenuItem icon={<FileText size={18} />} label="Monthly Performance" />
                    </Link>
                </div>

                <div className="p-3 text-xs text-gray-400 border-t border-white/10">
                    © 2026 Needleads CRM
                </div>
            </div>

            {/* MOBILE SIDEBAR */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex">

                    <div className="w-72 bg-[#0B3C5D] text-white h-full flex flex-col">

                        <div className="p-4 flex justify-between items-center border-b border-white/10">
                            <span className="font-bold text-[#00C897]">NEEDLEADS</span>
                            <X onClick={() => setMobileOpen(false)} />
                        </div>

                        <div className="p-4 space-y-2 overflow-y-auto">
                            <MenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
                            <MenuItem icon={<User size={18} />} label="Profile" />
                            <MenuItem icon={<Clock size={18} />} label="Attendance" />
                            <MenuItem icon={<Users size={18} />} label="Clients" />
                            <MenuItem icon={<CheckSquare size={18} />} label="Tasks" />
                        </div>

                    </div>

                    <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
                </div>
            )}

            {/* MAIN CONTENT */}
            <div className="flex-1 pt-16 md:pt-0">
                <div className="hidden md:flex justify-end items-center p-4">
                    <button
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 bg-[#00C897] text-black rounded-md"
                    >
                        Sign In
                    </button>
                </div>

                <div className="p-6">{children}</div>
            </div>

            {open && <LoginModal onClose={() => setOpen(false)} />}
        </div>
    );
}

/* ---------------- MENU ITEM ---------------- */
function MenuItem({ icon, label, count }: any) {
    return (
        <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
            <div className="flex items-center gap-3">
                <span className="text-[#1D9BF0]">{icon}</span>
                <span className="text-sm">{label}</span>
            </div>

            {count !== undefined && (
                <span className="text-xs bg-[#00C897] text-black px-2 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </div>
    );
}

/* ---------------- SUB ITEM ---------------- */
function SubItem({ label, count, color }: any) {
    const colorMap: any = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
    };

    return (
        <div className="flex justify-between pl-10 pr-3 text-xs text-gray-300">
            <span>• {label}</span>
            <span className={`${colorMap[color]} px-2 rounded-full text-white`}>
                {count || 0}
            </span>
        </div>
    );
}

/* ---------------- LOGIN MODAL ---------------- */
function LoginModal({ onClose }: any) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="w-[90%] max-w-sm bg-white rounded-xl p-5 text-black">
                <h2 className="text-lg font-bold mb-4">Sign In</h2>

                <input className="w-full border p-2 rounded mb-3" placeholder="Email" />
                <input className="w-full border p-2 rounded mb-4" placeholder="Password" type="password" />

                <button className="w-full bg-[#0B3C5D] text-white py-2 rounded">
                    Login
                </button>

                <button onClick={onClose} className="w-full mt-2 text-sm text-gray-500">
                    Close
                </button>
            </div>
        </div>
    );
}