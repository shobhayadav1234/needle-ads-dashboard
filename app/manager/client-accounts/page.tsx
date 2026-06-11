"use client";

import {
    assignedClients,
    pageContent,
} from "@/data/manager";

import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    Building2,
} from "lucide-react";

import PageHeader from "@/components/ui/header";

export default function Page() {
    const activeClients = assignedClients.filter(
        (client) => client.status === "Active"
    ).length;

    const pendingClients = assignedClients.filter(
        (client) => client.status === "Pending"
    ).length;

    const completedClients = assignedClients.filter(
        (client) => client.status === "Completed"
    ).length;

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            {/* Header */}
            <PageHeader
                title={pageContent.clientAccounts.title}
                subtitle={pageContent.clientAccounts.subtitle}
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <p className="text-slate-500 text-sm">Total Clients</p>
                    <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                        {assignedClients.length}
                    </h3>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <p className="text-slate-500 text-sm">Active Clients</p>
                    <h3 className="text-3xl font-bold text-green-600 mt-1">
                        {activeClients}
                    </h3>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <p className="text-slate-500 text-sm">Pending Clients</p>
                    <h3 className="text-3xl font-bold text-orange-500 mt-1">
                        {pendingClients}
                    </h3>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <p className="text-slate-500 text-sm">Completed Clients</p>
                    <h3 className="text-3xl font-bold text-blue-600 mt-1">
                        {completedClients}
                    </h3>
                </div>
            </div>

            {/* Client Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {assignedClients.map((client) => (
                    <div
                        key={client.id}
                        className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">
                            <div className="flex items-center gap-3">
                                <Building2 size={22} />

                                <div>
                                    <h2 className="font-bold text-lg">
                                        {client.clientName}
                                    </h2>

                                    <p className="text-blue-100 text-sm">
                                        Assigned Client
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 space-y-4 text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                                <CalendarDays
                                    size={16}
                                    className="text-[#1ea7d7]"
                                />
                                {client.assignedDate}
                            </div>

                            <div>
                                <p className="text-slate-500 mb-2">
                                    Platforms
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {client.platforms.map((platform) => (
                                        <span
                                            key={platform}
                                            className="px-3 py-1 text-xs rounded-full bg-cyan-50 text-[#0b5fa5] font-medium"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                                {client.status === "Active" && (
                                    <>
                                        <CheckCircle2
                                            className="text-green-600"
                                            size={18}
                                        />
                                        <span className="text-green-600 font-medium">
                                            Active
                                        </span>
                                    </>
                                )}

                                {client.status === "Pending" && (
                                    <>
                                        <Clock3
                                            className="text-orange-500"
                                            size={18}
                                        />
                                        <span className="text-orange-500 font-medium">
                                            Pending
                                        </span>
                                    </>
                                )}

                                {client.status === "Completed" && (
                                    <>
                                        <CheckCircle2
                                            className="text-blue-600"
                                            size={18}
                                        />
                                        <span className="text-blue-600 font-medium">
                                            Completed
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Footer Button */}
                        <div className="p-5 pt-0">
                            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold transition">
                                View Client Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}