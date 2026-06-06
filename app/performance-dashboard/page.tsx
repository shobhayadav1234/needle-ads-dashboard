"use client";

import {
    Users,
    FileText,
    Send,
    Image,
    Video,
    Clock3,
} from "lucide-react";

export default function PerformanceDashboardPage() {
    const dashboardData = {
        totalClients: 25,
        totalPostsCreated: 180,
        totalPostsPublished: 150,
        totalStoriesPublished: 95,
        totalReelsPublished: 60,
        clientApprovalsPending: 12,
    };

    const cards = [
        {
            title: "Total Clients Managed",
            value: dashboardData.totalClients,
            icon: <Users size={28} />,
            color: "bg-blue-500",
        },
        {
            title: "Total Posts Created",
            value: dashboardData.totalPostsCreated,
            icon: <FileText size={28} />,
            color: "bg-green-500",
        },
        {
            title: "Total Posts Published",
            value: dashboardData.totalPostsPublished,
            icon: <Send size={28} />,
            color: "bg-purple-500",
        },
        {
            title: "Total Stories Published",
            value: dashboardData.totalStoriesPublished,
            icon: <Image size={28} />,
            color: "bg-orange-500",
        },
        {
            title: "Total Reels Published",
            value: dashboardData.totalReelsPublished,
            icon: <Video size={28} />,
            color: "bg-pink-500",
        },
        {
            title: "Client Approvals Pending",
            value: dashboardData.clientApprovalsPending,
            icon: <Clock3 size={28} />,
            color: "bg-red-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D]">
                    Performance Dashboard
                </h1>

                <p className="text-gray-600 mt-2">
                    Monitor overall SMO executive performance and client activities.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-gray-500 text-sm">
                                    {card.title}
                                </p>

                                <h2 className="text-3xl font-bold text-[#0B3C5D] mt-2">
                                    {card.value}
                                </h2>
                            </div>

                            <div
                                className={`${card.color} text-white p-3 rounded-xl`}
                            >
                                {card.icon}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Performance Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-8">

                <h2 className="text-xl font-semibold text-[#0B3C5D] mb-5">
                    Performance Summary
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between border-b pb-3">
                        <span>Total Clients Managed</span>
                        <span className="font-semibold">
                            {dashboardData.totalClients}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span>Total Posts Created</span>
                        <span className="font-semibold">
                            {dashboardData.totalPostsCreated}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span>Total Posts Published</span>
                        <span className="font-semibold">
                            {dashboardData.totalPostsPublished}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span>Total Stories Published</span>
                        <span className="font-semibold">
                            {dashboardData.totalStoriesPublished}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span>Total Reels Published</span>
                        <span className="font-semibold">
                            {dashboardData.totalReelsPublished}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span>Client Approvals Pending</span>
                        <span className="font-semibold text-red-600">
                            {dashboardData.clientApprovalsPending}
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
}