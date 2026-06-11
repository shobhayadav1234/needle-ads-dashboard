"use client";

import { taskManagement } from "@/data/employees";
import {
    ClipboardList,
    CheckCircle2,
    Clock3,
    CalendarDays,
    Building2,
} from "lucide-react";
import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/admin";

export default function Page() {

    const assignedTasks = taskManagement.length;

    const completedTasks = taskManagement.filter(
        (task) => task.status === "Completed"
    ).length;

    const pendingTasks = taskManagement.filter(
        (task) => task.status === "Pending"
    ).length;

    const getStatusBadge = (status: string) => {
        const base = "px-3 py-1 rounded-full text-xs font-medium";

        switch (status) {
            case "Pending":
                return (
                    <span className={`${base} bg-orange-100 text-orange-600`}>
                        Pending
                    </span>
                );

            case "In Progress":
                return (
                    <span className={`${base} bg-blue-100 text-blue-600`}>
                        In Progress
                    </span>
                );

            case "Completed":
                return (
                    <span className={`${base} bg-green-100 text-green-600`}>
                        Completed
                    </span>
                );

            case "Approved":
                return (
                    <span className={`${base} bg-purple-100 text-purple-600`}>
                        Approved
                    </span>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">

           {/* HEADER (CRM unified style) */}
                   <PageHeader
                     title={pageContent.taskManagement.title}
                     subtitle={pageContent.taskManagement.subtitle}
                   />
        
            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-slate-500 text-sm">Assigned Tasks</p>
                            <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                                {assignedTasks}
                            </h3>
                        </div>
                        <ClipboardList className="text-[#1ea7d7]" size={28} />
                    </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-slate-500 text-sm">Completed Tasks</p>
                            <h3 className="text-3xl font-bold text-green-600 mt-1">
                                {completedTasks}
                            </h3>
                        </div>
                        <CheckCircle2 className="text-green-600" size={28} />
                    </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-slate-500 text-sm">Pending Tasks</p>
                            <h3 className="text-3xl font-bold text-orange-500 mt-1">
                                {pendingTasks}
                            </h3>
                        </div>
                        <Clock3 className="text-orange-500" size={28} />
                    </div>
                </div>

            </div>

            {/* TASK CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {taskManagement.map((task) => (
                    <div
                        key={task.id}
                        className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden"
                    >

                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">

                            <h2 className="font-bold text-lg">
                                {task.taskName}
                            </h2>

                            <div className="flex items-center gap-2 text-blue-100 text-sm mt-2">
                                <Building2 size={16} />
                                {task.client}
                            </div>

                        </div>

                        {/* BODY */}
                        <div className="p-5 space-y-3 text-sm">

                            <div className="flex items-center gap-2 text-slate-600">
                                <CalendarDays size={16} />
                                Assigned: {task.assignedDate}
                            </div>

                            <div className="flex items-center gap-2 text-slate-600">
                                <CalendarDays size={16} />
                                Due: {task.dueDate}
                            </div>

                            {/* STATUS */}
                            <div className="pt-2">
                                {getStatusBadge(task.status)}
                            </div>

                        </div>

                        {/* BUTTON */}
                        <div className="p-5 pt-0">
                            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold transition">
                                View Task
                            </button>
                        </div>

                    </div>
                ))}

            </div>

            {/* TABLE (kept but unified design) */}
            <div className="hidden md:block mt-8 bg-white rounded-2xl border shadow-sm overflow-hidden">

                <div className="p-5 border-b">
                    <h2 className="text-lg font-bold text-[#0b5fa5]">
                        Task Overview
                    </h2>
                </div>

                <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left">
                        <tr>
                            <th className="p-4">Task</th>
                            <th className="p-4">Client</th>
                            <th className="p-4">Assigned</th>
                            <th className="p-4">Due</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {taskManagement.map((task) => (
                            <tr key={task.id} className="border-t hover:bg-slate-50">
                                <td className="p-4 font-medium">{task.taskName}</td>
                                <td className="p-4">{task.client}</td>
                                <td className="p-4">{task.assignedDate}</td>
                                <td className="p-4">{task.dueDate}</td>
                                <td className="p-4">{getStatusBadge(task.status)}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}