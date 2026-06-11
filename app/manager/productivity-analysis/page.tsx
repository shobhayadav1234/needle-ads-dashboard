"use client";

import {
    Clock3,
    TrendingUp,
    Coffee,
    AlertTriangle,
    CheckCircle2,
} from "lucide-react";

import {
    productivityData,
    pageContent,
} from "@/data/manager";

import PageHeader from "@/components/ui/header";

export default function Page() {
    const {
        expectedHours = 0,
        breakHours = 0,
        productiveHours = 0,
        minimumRequiredHours = 0,
        rules = [],
    } = productivityData || {};

    const productivityScore =
        expectedHours > 0
            ? Math.round((productiveHours / expectedHours) * 100)
            : 0;

    const isRedZone = productiveHours < minimumRequiredHours;

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            {/* Header */}
            <PageHeader
                title={pageContent.productivityAnalysis.title}
                subtitle={pageContent.productivityAnalysis.subtitle}
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <p className="text-slate-500 text-sm">Expected Hours</p>
                    <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                        {expectedHours}h
                    </h3>
                    <Clock3 className="text-[#1ea7d7] mt-3" size={24} />
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <p className="text-slate-500 text-sm">Break Time</p>
                    <h3 className="text-3xl font-bold text-orange-500 mt-1">
                        {breakHours}h
                    </h3>
                    <Coffee className="text-orange-500 mt-3" size={24} />
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <p className="text-slate-500 text-sm">Productive Hours</p>
                    <h3 className="text-3xl font-bold text-green-600 mt-1">
                        {productiveHours}h
                    </h3>
                    <CheckCircle2 className="text-green-600 mt-3" size={24} />
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <p className="text-slate-500 text-sm">Productivity Score</p>
                    <h3 className="text-3xl font-bold text-[#1ea7d7] mt-1">
                        {productivityScore}%
                    </h3>
                    <TrendingUp className="text-[#1ea7d7] mt-3" size={24} />
                </div>
            </div>

            {/* Productivity Overview */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-[#0b5fa5] mb-5">
                    Productivity Overview
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-slate-500">Expected Hours</p>
                        <p className="font-bold text-[#0b5fa5]">
                            {expectedHours} Hours
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-slate-500">Productive Hours</p>
                        <p className="font-bold text-green-600">
                            {productiveHours} Hours
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-slate-500">Minimum Required</p>
                        <p className="font-bold text-orange-500">
                            {minimumRequiredHours} Hours
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-slate-500">Productivity Score</p>
                        <p className="font-bold text-[#1ea7d7]">
                            {productivityScore}%
                        </p>
                    </div>
                </div>
            </div>

            {/* Status Card */}
            <div
                className={`rounded-2xl border shadow-sm p-6 mb-6 ${isRedZone
                        ? "bg-red-50 border-red-200"
                        : "bg-green-50 border-green-200"
                    }`}
            >
                <div className="flex gap-4">
                    <AlertTriangle
                        size={26}
                        className={
                            isRedZone ? "text-red-600" : "text-green-600"
                        }
                    />

                    <div>
                        <h2
                            className={`text-xl font-bold ${isRedZone
                                    ? "text-red-600"
                                    : "text-green-600"
                                }`}
                        >
                            {isRedZone
                                ? "Red Zone Alert"
                                : "Performance Good"}
                        </h2>

                        <p className="text-slate-600 mt-2">
                            Minimum required productive hours:{" "}
                            {minimumRequiredHours} Hours
                        </p>
                    </div>
                </div>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
                <h2 className="text-lg font-bold text-[#0b5fa5] mb-4">
                    Break Management Rules
                </h2>

                <ul className="space-y-2 text-slate-600 text-sm">
                    {rules.map((rule: string, index: number) => (
                        <li key={index}>• {rule}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}