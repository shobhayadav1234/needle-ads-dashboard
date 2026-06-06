"use client";

import { useState } from "react";

export default function DailyAttendancePage() {
    const [loginTime, setLoginTime] = useState("");
    const [logoutTime, setLogoutTime] = useState("");
    const [breakTime, setBreakTime] = useState("");

    const calculateHours = () => {
        if (!loginTime || !logoutTime) return 0;

        const login = new Date(`2024-01-01 ${loginTime}`);
        const logout = new Date(`2024-01-01 ${logoutTime}`);

        const diff = (logout.getTime() - login.getTime()) / (1000 * 60 * 60);

        return (diff - Number(breakTime || 0)).toFixed(2);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold text-[#0B3C5D] mb-6">
                Daily Attendance
            </h1>

            {/* FORM CARD */}
            <div className="bg-white p-6 rounded-xl shadow-md grid gap-4 max-w-2xl">

                {/* LOGIN TIME */}
                <div>
                    <label className="text-sm font-medium">Login Time</label>
                    <input
                        type="time"
                        value={loginTime}
                        onChange={(e) => setLoginTime(e.target.value)}
                        className="w-full border p-2 rounded mt-1"
                    />
                </div>

                {/* LOGOUT TIME */}
                <div>
                    <label className="text-sm font-medium">Logout Time</label>
                    <input
                        type="time"
                        value={logoutTime}
                        onChange={(e) => setLogoutTime(e.target.value)}
                        className="w-full border p-2 rounded mt-1"
                    />
                </div>

                {/* BREAK TIME */}
                <div>
                    <label className="text-sm font-medium">Break Time (hours)</label>
                    <input
                        type="number"
                        value={breakTime}
                        onChange={(e) => setBreakTime(e.target.value)}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="e.g. 1"
                    />
                </div>

                {/* RESULT */}
                <div className="bg-[#0B3C5D] text-white p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Working Summary</h2>

                    <p>Login Time: {loginTime || "--:--"}</p>
                    <p>Logout Time: {logoutTime || "--:--"}</p>
                    <p>Break Time: {breakTime || 0} Hour</p>

                    <hr className="my-2 border-white/30" />

                    <p className="font-bold">
                        Total Working Hours: {calculateHours()} hrs
                    </p>
                </div>

            </div>
        </div>
    );
}