
"use client";

import ProtectedRoute from "@/components/ui/ProtectedRoute";
import { useEffect, useState } from "react";
import ReportingManagerSelect from "@/components/ui/ReportingManagerSelect";
import { FileImage } from "lucide-react";


type RoleType = "employee" | "manager" | "client" | "";

type DepartmentOption = {
    _id: string;
    name: string;
};

type RegisterPayload = Record<string, any>;

export default function AdminRegisterPage() {
    const [loading, setLoading] = useState(false);
    const [departments, setDepartments] = useState<DepartmentOption[]>([]);
    const [departmentLoading, setDepartmentLoading] = useState(false);

    const [formData, setFormData] = useState({
        role: "" as RoleType,

        // Common Fields
        name: "",
        email: "",
        password: "",

        // Employee
        employeeId: "",
        profilePic: null as File | null,
        mobileNumber: "",
        designation: "",
        joiningDate: "",
        reportingManager: "",
        department: "",

        // Client
        companyName: "",
        companyEmail: "",
        companyPhone: "",
        companyAddress: "",
        website: "",
        gstNumber: "",
        industry: "",

        // Manager
        managerDepartment: "",
    });

    const API =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://localhost:8000/api/v1";


    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            setDepartmentLoading(true);

            const token = localStorage.getItem("accessToken");

            const res = await fetch(`${API}/department/list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            console.log("Departments:", data);

            if (res.ok && data.success) {
                setDepartments(data.items || []);
            }
        } catch (error) {
            console.error("Department fetch error:", error);
        } finally {
            setDepartmentLoading(false);
        }
    };



    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    // const handleSubmit = async (
    //     e: { preventDefault: () => void; }
    // ) => {
    //     e.preventDefault();

    //     try {
    //         setLoading(true);

    //         let endpoint = "";
    //         // let payload: RegisterPayload = {};


    //         const data = new FormData();

    //         data.append("name", formData.name);
    //         data.append("email", formData.email);
    //         data.append("role", "employee");
    //         data.append("mobileNumber", formData.mobileNumber);
    //         data.append("designation", formData.designation);
    //         data.append("joiningDate", formData.joiningDate);
    //         data.append("reportingManager", formData.reportingManager);
    //         data.append("department", formData.department);
    //         data.append("employeeId", formData.employeeId);

    //         if (formData.profilePic) {
    //             data.append("profilePic", formData.profilePic); // key must match multer field name
    //         }

    //         endpoint = `${API}/auth/register-employees`;


    //         const token = localStorage.getItem("accessToken");

    //         const res = await fetch(endpoint, {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: data,
    //         });

    //         const resdata = await res.json();

    //         console.log("Status:", res.status);
    //         console.log("Response:", resdata);

    //         if (!res.ok) {
    //             throw new Error(resdata.message || "Registration failed");
    //         }


    //         alert(`${formData.role} registered successfully`);

    //         setFormData({
    //             role: "",

    //             name: "",
    //             email: "",
    //             password: "",

    //             profilePic: null as File | null,
    //             mobileNumber: "",
    //             designation: "",
    //             joiningDate: "",
    //             employeeId: "",
    //             reportingManager: "",
    //             department: "",

    //             companyName: "",
    //             companyEmail: "",
    //             companyPhone: "",
    //             companyAddress: "",
    //             website: "",
    //             gstNumber: "",
    //             industry: "",

    //             managerDepartment: "",
    //         });
    //     } catch (error) {
    //         console.log("error", error)
    //         alert(error instanceof Error ? error.message : "Registration failed");
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const handleSubmit = async (
        e: { preventDefault: () => void; }
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            let endpoint = "";
            const data = new FormData();

            // Common fields for all roles
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("role", formData.role);

            if (formData.role === "employee") {
                endpoint = `${API}/auth/register-employees`;

                data.append("mobileNumber", formData.mobileNumber);
                data.append("designation", formData.designation);
                data.append("joiningDate", formData.joiningDate);
                data.append("reportingManager", formData.reportingManager);
                data.append("department", formData.department);
                data.append("employeeId", formData.employeeId);

                if (formData.profilePic) {
                    data.append("profilePic", formData.profilePic);
                }
            }

            if (formData.role === "manager") {
                endpoint = `${API}/auth/register-employees`;

                data.append("department", formData.managerDepartment);
            }

            if (formData.role === "client") {
                endpoint = `${API}/auth/register-employees`;

                data.append("companyName", formData.companyName);
                data.append("companyEmail", formData.companyEmail);
                data.append("companyPhone", formData.companyPhone);
                data.append("companyAddress", formData.companyAddress);
                data.append("website", formData.website);
                data.append("gstNumber", formData.gstNumber);
                data.append("industry", formData.industry);

                if (formData.profilePic) {
                    data.append("profilePic", formData.profilePic);
                }
            }

            const token = localStorage.getItem("accessToken");

            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: data,
            });

            const resdata = await res.json();

            console.log("Status:", res.status);
            console.log("Response:", resdata);

            if (!res.ok) {
                throw new Error(resdata.message || "Registration failed");
            }

            alert(`${formData.role} registered successfully`);

            setFormData({
                role: "" as RoleType,
                name: "",
                email: "",
                password: "",
                profilePic: null as File | null,
                mobileNumber: "",
                designation: "",
                joiningDate: "",
                employeeId: "",
                reportingManager: "",
                department: "",
                companyName: "",
                companyEmail: "",
                companyPhone: "",
                companyAddress: "",
                website: "",
                gstNumber: "",
                industry: "",
                managerDepartment: "",
            });

        } catch (error) {
            console.log("error", error);
            alert(error instanceof Error ? error.message : "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    // const handleSubmit = async (
    //     e: { preventDefault: () => void; }
    // ) => {
    //     e.preventDefault();

    //     try {
    //         setLoading(true);

    //         let endpoint = "";
    //         let payload: RegisterPayload = {};


    //         if (formData.role === "employee") {
    //             endpoint = `${API}/auth/register-employees`;

    //             payload = {
    //                 name: formData.name,
    //                 email: formData.email,
    //                 role: "employee",
    //                 profilePic: formData.profilePic,
    //                 mobileNumber: formData.mobileNumber,
    //                 designation: formData.designation,
    //                 joiningDate: formData.joiningDate,
    //                 reportingManager: formData.reportingManager,
    //                 department: formData.department,
    //                 employeeId: formData.employeeId
    //             };
    //         }

    //         if (formData.role === "manager") {
    //             endpoint = `${API}/auth/register-employees`;

    //             payload = {
    //                 name: formData.name,
    //                 email: formData.email,
    //                 role: "manager",
    //                 department: formData.managerDepartment,
    //             };
    //         }

    //         if (formData.role === "client") {
    //             endpoint = `${API}/auth/register-employees`;
    //             payload = {
    //                 name: formData.name,
    //                 email: formData.email,
    //                 role: "client",

    //                 profilePic: formData.profilePic,
    //                 companyName: formData.companyName,
    //                 companyEmail: formData.companyEmail,
    //                 companyPhone: formData.companyPhone,
    //                 companyAddress: formData.companyAddress,
    //                 website: formData.website,
    //                 gstNumber: formData.gstNumber,
    //                 industry: formData.industry,
    //             };

    //             console.log("payload:", payload);

    //         }

    //         console.log(payload, 'payload');


    //         const token = localStorage.getItem("accessToken");

    //         const res = await fetch(endpoint, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: JSON.stringify(payload),
    //         });

    //         const data = await res.json();

    //         console.log("Status:", res.status);
    //         console.log("Response:", data);

    //         if (!res.ok) {
    //             throw new Error(data.message || "Registration failed");
    //         }


    //         alert(`${formData.role} registered successfully`);

    //         setFormData({
    //             role: "",

    //             name: "",
    //             email: "",
    //             password: "",

    //             profilePic: null as File | null,
    //             mobileNumber: "",
    //             designation: "",
    //             joiningDate: "",
    //             employeeId: "",
    //             reportingManager: "",
    //             department: "",

    //             companyName: "",
    //             companyEmail: "",
    //             companyPhone: "",
    //             companyAddress: "",
    //             website: "",
    //             gstNumber: "",
    //             industry: "",

    //             managerDepartment: "",
    //         });
    //     } catch (error) {
    //         console.log("error", error)
    //         alert(error instanceof Error ? error.message : "Registration failed");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <ProtectedRoute allowedRoles={["admin"]}>
            <div className="min-h-screen bg-slate-100 py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Register User
                    </h1>

                    <form onSubmit={handleSubmit}>
                        {/* ROLE */}
                        <div className="mb-6">
                            <label className="block mb-2 font-medium">
                                Select Role
                            </label>

                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-3"
                            >
                                <option value="">
                                    Select User Type
                                </option>

                                <option value="employee">
                                    Employee
                                </option>

                                <option value="manager">
                                    Manager
                                </option>

                                <option value="client">
                                    Client
                                </option>
                            </select>
                        </div>

                        {/* COMMON FIELDS */}
                        {formData.role && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                                    {/* Full Name */}
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>



                                </div>
                            </>
                        )}

                        {/* EMPLOYEE */}
                        {formData.role === "employee" && (
                            <>
                                <h2 className="text-xl font-semibold mb-4">
                                    Employee Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Profile Picture
                                        </label>

                                        <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:border-[#0284C7] transition">
                                            <FileImage size={22} className="text-[#0284C7]" />

                                            <span className="flex-1 text-gray-600">
                                                {formData.profilePic
                                                    ? formData.profilePic.name
                                                    : "Choose Image File"}
                                            </span>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        profilePic: e.target.files?.[0] || null,  // grab actual File
                                                    })
                                                }
                                            />
                                        </label>

                                        {formData.profilePic && (
                                            <img
                                                src={URL.createObjectURL(formData.profilePic)}
                                                alt="Preview"
                                                className="mt-3 h-20 w-20 rounded-full object-cover border"
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobileNumber"
                                            placeholder="Mobile Number"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Designation
                                        </label>
                                        <input
                                            name="designation"
                                            placeholder="Designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Joining Date
                                        </label>
                                        <input
                                            type="date"
                                            name="joiningDate"
                                            value={formData.joiningDate}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Employ Id
                                        </label>
                                        <input
                                            type="text"
                                            name="employeeId"
                                            value={formData.employeeId}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <ReportingManagerSelect
                                        value={formData.reportingManager}
                                        onChange={(value) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                reportingManager: value,
                                            }))
                                        }
                                    />

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Department
                                        </label>

                                        <select
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            required
                                            className="w-full border p-3 rounded-lg"
                                        >
                                            <option value="">
                                                {departmentLoading
                                                    ? "Loading departments..."
                                                    : "Select Department"}
                                            </option>

                                            {departments.map((dept) => (
                                                <option key={dept._id} value={dept._id}>
                                                    {dept.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* CLIENT */}
                        {formData.role === "client" && (
                            <>
                                <h2 className="text-xl font-semibold mb-4">
                                    Client Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Profile Picture
                                        </label>

                                        <label className="flex items-center gap-3 w-full border p-3 rounded-lg cursor-pointer hover:border-[#0284C7] transition">
                                            <FileImage
                                                size={20}
                                                className="text-[#0284C7]"
                                            />

                                            <span className="text-gray-600 flex-1">
                                                {formData.profilePic
                                                    ? formData.profilePic.name
                                                    : "Choose Profile Picture"}
                                            </span>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        profilePic: e.target.files?.[0] || null,  // grab actual File
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Company Name
                                        </label>
                                        <input
                                            name="companyName"
                                            placeholder="Company Name"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Company Email
                                        </label>
                                        <input
                                            name="companyEmail"
                                            placeholder="Company Email"
                                            value={formData.companyEmail}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Company Phone Number
                                        </label>
                                        <input
                                            name="companyPhone"
                                            placeholder="Company Phone Number"
                                            value={formData.companyPhone}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Website (Optional)
                                        </label>
                                        <input
                                            name="website"
                                            placeholder="Website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            GST Number (Optional)
                                        </label>
                                        <input
                                            name="gstNumber"
                                            placeholder="GST Number"
                                            value={formData.gstNumber}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Industry (Optional)
                                        </label>
                                        <input
                                            name="industry"
                                            placeholder="Industry (Optional)"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block mb-2 font-medium">
                                            Company Address
                                        </label>
                                        <textarea
                                            name="companyAddress"
                                            placeholder="Company Address"
                                            value={formData.companyAddress}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                        />
                                    </div>

                                </div>
                            </>
                        )}

                        {/* MANAGER */}
                        {formData.role === "manager" && (
                            <>
                                <h2 className="text-xl font-semibold mb-4">
                                    Manager Details
                                </h2>

                                <select
                                    name="managerDepartment"
                                    value={formData.managerDepartment}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-3 rounded-lg"
                                >
                                    <option value="">
                                        {departmentLoading
                                            ? "Loading departments..."
                                            : "Select Department"}
                                    </option>

                                    {departments.map((dept) => (
                                        <option
                                            key={dept._id}
                                            value={dept._id}
                                        >
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>
                            </>
                        )}

                        {formData.role && (
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                            >
                                {loading
                                    ? "Please wait..."
                                    : formData.role === "employee"
                                        ? "Register Employee"
                                        : formData.role === "client"
                                            ? "Register Client"
                                            : "Register Manager"}
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
}
