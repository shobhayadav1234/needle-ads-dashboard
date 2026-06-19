"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

import {
    ClipboardList,
    CheckCircle2,
    Clock3,
    CalendarDays,
    Building2,
} from "lucide-react";

import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/admin";

type Task = {
    _id: string;
    title: string;
    description: string;
    estimatedHours: number;
    status: "pending" | "in_progress" | "completed";
    taskDate: string;
    createdAt: string;
    employeeId: {
        _id: string;
        userId: {
            name: string;
            email: string;
        };
    };
};

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

export default function Page() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);



    const deleteTask = async (id: string) => {
        const res = await api.delete(`/task/${id}`);
        return res.data;
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) return;

        try {
            await api.delete(`/task/${id}`);

            alert("Task Deleted Successfully");

            fetchTasks();
        } catch (error) {
            console.error(error);
            alert("Failed to delete task");
        }
    };



    const [formData, setFormData] = useState({
        title: "",
        description: "",
        employeeId: "",
        estimatedHours: "",
        taskDate: "",
        status: "pending",
    });

    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const handleEdit = (task: Task) => {
        setEditingTaskId(task._id);

        setFormData({
            title: task.title,
            description: task.description,
            employeeId: task.employeeId?._id || "",
            estimatedHours: String(task.estimatedHours),
            taskDate: task.taskDate?.split("T")[0],
            status: task.status,
        });

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };


    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        console.log("Employees State:", employees);
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const res = await api.get("/employee/list");

            console.log("FULL RESPONSE:", res);
            console.log("DATA:", res.data);

            setEmployees(res.data.items || []);

        } catch (error) {
            console.error("Employee Error:", error);
        }
    };
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const userData = localStorage.getItem("user");

        let assignedBy: User | null = null;

        if (userData) {
            assignedBy = JSON.parse(userData) as User;
        }

        try {
            const payload = {
                title: formData.title,
                description: formData.description,
                employeeId: formData.employeeId,
                estimatedHours: Number(formData.estimatedHours),
                taskDate: formData.taskDate,
                status: formData.status,
                assignedBy: assignedBy?.id,
            };

            console.log("Payload:", payload);

            if (editingTaskId) {
                const res = await api.patch(
                    `/task/${editingTaskId}`,
                    payload
                );

                console.log("Update Task Response:", res.data);

                alert("Task Updated Successfully");
            } else {
                const res = await api.post(
                    "/task/create-task",
                    payload
                );

                console.log("Create Task Response:", res.data);

                alert("Task Assigned Successfully");
            }

            setEditingTaskId(null);

            setFormData({
                title: "",
                description: "",
                employeeId: "",
                estimatedHours: "",
                taskDate: "",
                status: "pending",
            });

            fetchTasks();
        } catch (error) {
            console.error(error);
            alert(
                editingTaskId
                    ? "Failed to update task"
                    : "Failed to create task"
            );
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await api.get("/task/task-list");

            console.log("Task API Response:", res.data);
            console.log("Employees Array:", res.data.ems);


            setTasks(res.data.items || []);
        } catch (error) {
            console.error("Task Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const assignedTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === "completed"
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.status === "pending"
    ).length;

    const getStatusBadge = (status: string) => {
        const base =
            "px-3 py-1 rounded-full text-xs font-medium";

        switch (status) {
            case "pending":
                return (
                    <span className={`${base} bg-orange-100 text-orange-600`}>
                        Pending
                    </span>
                );

            case "in_progress":
                return (
                    <span className={`${base} bg-blue-100 text-blue-600`}>
                        In Progress
                    </span>
                );

            case "completed":
                return (
                    <span className={`${base} bg-green-100 text-green-600`}>
                        Completed
                    </span>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <PageHeader
                title={pageContent.taskManagement.title}
                subtitle={pageContent.taskManagement.subtitle}
            />

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-slate-500 text-sm">
                                Assigned Tasks
                            </p>
                            <h3 className="text-3xl font-bold text-[#0b5fa5] mt-1">
                                {assignedTasks}
                            </h3>
                        </div>
                        <ClipboardList
                            className="text-[#1ea7d7]"
                            size={28}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-slate-500 text-sm">
                                Completed Tasks
                            </p>
                            <h3 className="text-3xl font-bold text-green-600 mt-1">
                                {completedTasks}
                            </h3>
                        </div>
                        <CheckCircle2
                            className="text-green-600"
                            size={28}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-slate-500 text-sm">
                                Pending Tasks
                            </p>
                            <h3 className="text-3xl font-bold text-orange-500 mt-1">
                                {pendingTasks}
                            </h3>
                        </div>
                        <Clock3
                            className="text-orange-500"
                            size={28}
                        />
                    </div>
                </div>
            </div>

            {/* TASK CARDS */}
            {loading ? (
                <div className="text-center py-10 ">
                    Loading Tasks...
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {tasks.map((task) => (
                        <div
                            key={task._id}
                            className="bg-white rounded-2xl border shadow-sm overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] text-white p-5">
                                <h2 className="font-bold text-lg">
                                    {task.title}
                                </h2>

                                <div className="flex items-center gap-2 text-blue-100 text-sm mt-2">
                                    <Building2 size={16} />
                                    {task.employeeId?.userId?.name}
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <p className="text-sm text-slate-600">
                                    {task.description}
                                </p>

                                <div className="text-sm text-slate-600">
                                    Estimated Hours: {task.estimatedHours}
                                </div>

                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                    <CalendarDays size={16} />
                                    Task Date:
                                    {new Date(
                                        task.taskDate
                                    ).toLocaleDateString()}
                                </div>

                                <div>{getStatusBadge(task.status)}</div>
                                <div className="flex gap-3 pt-3">
                                    <button
                                        onClick={() => handleEdit(task)}
                                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(task._id)}
                                        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                        </div>

                    ))}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl border p-6 mb-8 shadow-sm"
                    >
                        <h2 className="text-xl font-bold mb-5">
                            Assign Task
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                type="text"
                                placeholder="Task Title"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                                className="border p-3 rounded-lg"
                                required
                            />

                            <input
                                type="number"
                                placeholder="Estimated Hours"
                                value={formData.estimatedHours}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        estimatedHours: e.target.value,
                                    })
                                }
                                className="border p-3 rounded-lg"
                                required
                            />

                            <select
                                value={formData.employeeId}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        employeeId: e.target.value,
                                    })
                                }
                                className="border p-3 rounded-lg"
                                required
                            >
                                <option value="">Select Employee</option>

                                {employees.map((emp: any) => (
                                    <option
                                        key={emp.id}
                                        value={emp.id}
                                    >
                                        {emp.userDetail?.name} ({emp.employeeId})
                                    </option>
                                ))}
                            </select>


                            <input
                                type="date"
                                value={formData.taskDate}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        taskDate: e.target.value,
                                    })
                                }
                                className="border p-3 rounded-lg"
                                required
                            />

                        </div>

                        <textarea
                            placeholder="Task Description"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                            rows={4}
                            className="border p-3 rounded-lg w-full mt-4"
                            required
                        />

                        <button
                            type="submit"
                            className="mt-5 bg-[#0284C7] text-white px-6 py-3 rounded-xl hover:bg-[#0369A1]"
                        >
                            {editingTaskId ? "Update Task" : "Assign Task"}
                        </button>

                    </form>

                </div>

            )}
        </div>
    );
}