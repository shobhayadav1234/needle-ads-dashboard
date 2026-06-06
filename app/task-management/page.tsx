"use client";

import { CheckSquare } from "lucide-react";

export default function TaskManagementPage() {
    const tasks = [
        {
            id: 1,
            task: "Create Instagram Post",
            assignedTo: "Rahul Sharma",
            status: "Pending",
        },
        {
            id: 2,
            task: "Publish Facebook Campaign",
            assignedTo: "Shobha Yadav",
            status: "In Progress",
        },
        {
            id: 3,
            task: "LinkedIn Content Upload",
            assignedTo: "Rahul Sharma",
            status: "Completed",
        },
        {
            id: 4,
            task: "YouTube Video Optimization",
            assignedTo: "Aman Verma",
            status: "Approved",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Pending":
                return "bg-red-100 text-red-600";
            case "In Progress":
                return "bg-blue-100 text-blue-600";
            case "Completed":
                return "bg-green-100 text-green-600";
            case "Approved":
                return "bg-purple-100 text-purple-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D]">
                    Task Management
                </h1>

                <p className="text-gray-600 mt-2">
                    Manage assigned, pending, completed and approved tasks.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <div className="bg-white rounded-xl p-4 shadow">
                    <h3 className="text-sm text-gray-500">Assigned Tasks</h3>
                    <p className="text-2xl font-bold text-[#0B3C5D]">24</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow">
                    <h3 className="text-sm text-gray-500">Completed Tasks</h3>
                    <p className="text-2xl font-bold text-green-600">12</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow">
                    <h3 className="text-sm text-gray-500">Pending Tasks</h3>
                    <p className="text-2xl font-bold text-red-600">8</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow">
                    <h3 className="text-sm text-gray-500">Approved Tasks</h3>
                    <p className="text-2xl font-bold text-purple-600">4</p>
                </div>

            </div>

            {/* Task Table */}
            <div className="bg-white rounded-xl shadow overflow-hidden">

                <div className="p-4 border-b">
                    <h2 className="font-semibold text-[#0B3C5D] flex items-center gap-2">
                        <CheckSquare size={18} />
                        Task List
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">

                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left p-4">Task</th>
                                <th className="text-left p-4">Assigned To</th>
                                <th className="text-left p-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tasks.map((task) => (
                                <tr
                                    key={task.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="p-4">{task.task}</td>

                                    <td className="p-4">{task.assignedTo}</td>

                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                task.status
                                            )}`}
                                        >
                                            {task.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
}