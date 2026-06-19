"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus, Building2 } from "lucide-react";

const API =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

interface Department {
    _id: string;
    name: string;
    description?: string;
}

export default function DepartmentManager() {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");

    const [departments, setDepartments] = useState<Department[]>([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const fetchDepartments = async () => {
        try {
            setFetching(true);

            const token = localStorage.getItem("accessToken");

            const res = await fetch(`${API}/department/list`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            console.log("Department List:", data);

            if (res.ok && data.success) {
                setDepartments(data.items || []);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Fetch Department Error:", error);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleCreate = async () => {
        if (!departmentName.trim()) {
            alert("Please enter department name");
            return;
        }

        try {
            setLoading(true);

            const token = localStorage.getItem("accessToken");

            const res = await fetch(`${API}/department/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: departmentName.trim(),
                    description: departmentDescription.trim(),
                }),
            });

            const data = await res.json();

            console.log("Create Department:", data);

            if (res.ok && data.success) {
                setDepartmentName("");
                setDepartmentDescription("");

                await fetchDepartments();

                alert("Department added successfully");
            } else {
                alert(data.message || "Failed to add department");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this department?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("accessToken");

            const res = await fetch(`${API}/department/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("res", res)

           
            if ( res.ok) {
                setDepartments((prev) =>
                    prev.filter((dept) => dept._id !== id)
                );

                alert("Department deleted successfully");
            } else {
                alert( "Failed to delete department");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-6">
            {/* Header */}
            <div className="bg-white rounded-2xl border shadow-sm p-5 sm:p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                    <Building2 className="text-[#0284C7]" size={28} />
                    <h2 className="text-xl sm:text-2xl font-bold">
                        Department Management
                    </h2>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Department Name */}
                    <input
                        type="text"
                        value={departmentName}
                        placeholder="Enter Department Name"
                        onChange={(e) => setDepartmentName(e.target.value)}
                        className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />

                    {/* Department Description */}
                    <textarea
                        value={departmentDescription}
                        placeholder="Write Department Description"
                        onChange={(e) =>
                            setDepartmentDescription(e.target.value)
                        }
                        rows={4}
                        className="border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />

                    {/* Add Button */}
                    <button
                        onClick={handleCreate}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 py-3 rounded-xl transition disabled:opacity-50"
                    >
                        <Plus size={18} />
                        {loading ? "Adding..." : "Add Department"}
                    </button>
                </div>
            </div>

            {/* Department List */}
            <div className="bg-white rounded-2xl border shadow-sm p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-5">
                    Department List
                </h3>

                {fetching ? (
                    <div className="text-center py-8 text-gray-500">
                        Loading departments...
                    </div>
                ) : departments.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No departments found
                    </div>
                ) : (
                    <div className="space-y-3">
                        {departments.map((department) => (
                            <div
                                key={department._id}
                                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border rounded-xl p-4"
                            >
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-800 text-lg">
                                        {department.name}
                                    </h4>

                                    {department.description && (
                                        <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">
                                            {department.description}
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleDelete(department._id)}
                                    className="flex items-center justify-center gap-2 bg-[#FF9800] hover:bg-[#EA580C] text-white px-4 py-2 rounded-lg transition w-full sm:w-auto"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}