"use client";

import { useState } from "react";

export default function ActivityTrackingPage() {
    const [activities] = useState([
        {
            time: "10:00 - 10:45",
            client: "Client A",
            platforms: [
                "Instagram",
                "Facebook",
                "Twitter",
                "LinkedIn",
                "Pinterest",
                "TikTok",
                "YouTube",
            ],
        },
        {
            time: "10:45 - 11:30",
            client: "Client B",
            platforms: ["Instagram", "Facebook", "LinkedIn"],
        },
        {
            time: "11:00 - 11:30",
            client: "Client C",
            platforms: ["Instagram", "YouTube"],
        },
    ]);

    return (
        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <h1 className="text-xl sm:text-2xl font-bold text-[#0B3C5D] mb-2">
                45-Minute Activity Tracking
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-6">
                Every 45 minutes executive must update work status.
            </p>

            {/* Cards */}
            <div className="grid gap-4">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 sm:p-5 rounded-xl shadow-md border-l-4 border-[#00C897]"
                    >
                        {/* Time */}
                        <h2 className="text-base sm:text-lg font-semibold text-[#0B3C5D]">
                            {item.time}
                        </h2>

                        {/* Client */}
                        <p className="text-sm sm:text-base text-gray-700 font-medium mt-1">
                            {item.client}
                        </p>

                        {/* Platforms */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {item.platforms.map((p, i) => (
                                <span
                                    key={i}
                                    className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs bg-[#0B3C5D] text-white rounded-full"
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}