// "use client";

// import { employees, pageContent } from "@/data/manager";

// import {
//   User,
//   Mail,
//   Phone,
//   CalendarDays,
//   Building2,
//   Plus,
// } from "lucide-react";

// import PageHeader from "@/components/ui/header";

// export default function Page() {
//   if (!employees || employees.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         No employee found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 p-6">
//       {/* Header + Action Buttons */}
//       <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//         <PageHeader
//           title={pageContent.executiveProfile.title}
//           subtitle={pageContent.executiveProfile.subtitle}
//         />

//         <div className="flex flex-col sm:flex-row gap-3 lg:mt-1">
//           <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-medium transition shadow-sm">
//             <Plus size={18} />
//             Add Employee
//           </button>

//           <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-medium transition shadow-sm">
//             <Plus size={18} />
//             Edit Employee
//           </button>
//         </div>
//       </div>

//       {/* Employee Grid */}
//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {employees.map((employee) => (
//           <div
//             key={employee.id}
//             className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
//           >
//             {/* Profile */}
//             <div className="flex items-center gap-4 mb-5">
//               <img
//                 src={employee.profilePhoto}
//                 alt={employee.name}
//                 className="h-20 w-20 rounded-full border-4 border-slate-100 object-cover"
//               />

//               <div>
//                 <h2 className="text-xl font-bold text-slate-800">
//                   {employee.name}
//                 </h2>

//                 <p className="text-sm text-slate-500">
//                   {employee.designation}
//                 </p>

//                 <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
//                   <Building2 size={14} />
//                   {employee.department}
//                 </div>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-500 flex items-center gap-2">
//                   <User size={14} />
//                   ID
//                 </span>
//                 <span className="font-medium">{employee.id}</span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-slate-500 flex items-center gap-2">
//                   <Phone size={14} />
//                   Mobile
//                 </span>
//                 <span className="font-medium">{employee.mobile}</span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-slate-500 flex items-center gap-2">
//                   <Mail size={14} />
//                   Email
//                 </span>
//                 <span className="font-medium truncate max-w-[160px]">
//                   {employee.email}
//                 </span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-slate-500 flex items-center gap-2">
//                   <CalendarDays size={14} />
//                   Joining
//                 </span>
//                 <span className="font-medium">
//                   {employee.joiningDate}
//                 </span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-slate-500">
//                   Manager
//                 </span>
//                 <span className="font-medium">
//                   {employee.reportingManager}
//                 </span>
//               </div>
//             </div>

//             {/* View Profile Button */}
//             <button className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-white font-medium hover:bg-slate-800 transition">
//               View Profile
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  Building2,
  Plus,
} from "lucide-react";

import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/employees";

export default function Page() {

  const API =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000/api/v1";


  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    setRole(user.role || "");

    fetchEmployees();
  }, []);

  const handleEdit = (employee: any) => {
    setSelectedEmployee({
      ...employee,
      name: employee.userDetail?.name || "",
      email: employee.userDetail?.email || "",
    });

    setShowModal(true);
  };
  // ✅ Fix
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(`${API}/employee/${selectedEmployee._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: selectedEmployee.name,
          email: selectedEmployee.email,
          employeeId: selectedEmployee.employeeId,
          mobileNumber: selectedEmployee.mobileNumber,
          designation: selectedEmployee.designation,
          department: selectedEmployee.department,
          joiningDate: selectedEmployee.joiningDate,
          reportingManager: selectedEmployee.reportingManager,
        }),
      }
      );

      const data = await res.json();
      console.log("Update response:", data); // pehle dekho kya aa raha hai

      if (res.ok) {  // ✅ data.success ke bajaye res.ok use karo
        await fetchEmployees();
        setShowModal(false);
        alert("Employee updated successfully");
      } else {
        alert(data.message || "Update failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this employee?")) return;

    try {
      const token = localStorage.getItem("accessToken");

      await fetch(`${API}/employee/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees((prev) =>
        prev.filter((emp) => emp._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log(token)

      const res = await fetch(
        `${API}/employee/list?page=1&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log("data :", data);

      if (data.success) {
        setEmployees(data.items || []);
      }
    } catch (error) {
      console.error("Failed to fetch employees", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading employees...
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No employee found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <PageHeader
          title={pageContent.executiveProfile.title}
          subtitle={pageContent.executiveProfile.subtitle}
        />
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {employees.map((employee: any) => (
          <div
            key={employee._id}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Top Profile Section */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={employee.profilePic || "/avatar.png"}
                alt={employee.userDetail?.name || "Employee"}
                className="h-20 w-20 rounded-full border-4 border-slate-100 object-cover"
              />

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {employee.userDetail?.name || "-"}
                </h2>

                <p className="text-sm text-slate-500">
                  {employee.designation}
                </p>

                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                  <Building2 size={14} />
                  {employee.department}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <User size={14} /> ID
                </span>
                <span className="font-medium">
                  {employee.employeeId}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <Phone size={14} /> Mobile
                </span>
                <span className="font-medium">
                  {employee.mobileNumber}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <Mail size={14} /> Email
                </span>
                <span className="font-medium truncate max-w-[160px]">
                  {employee.userDetail?.email}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2">
                  <CalendarDays size={14} /> Joining
                </span>
                <span className="font-medium">
                  {new Date(employee.joiningDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Manager
                </span>
                <span className="font-medium">
                  {employee.reportingManager}
                </span>
              </div>
            </div>
            {role === "admin" && (
              <div className="mt-5 flex gap-2 justify-end">
                <button
                  onClick={() => handleEdit(employee)}
                  className="px-4 py-2 rounded-lg bg-[#0284C7] text-sm text-white font-medium hover:bg-[#0369A1]"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(employee._id)}
                  className="px-4 py-2 rounded-lg bg-[#FF9800] text-sm text-white font-medium hover:bg-[#EA580C]"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {role === "admin" &&
        showModal &&
        selectedEmployee && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg">

              <h2 className="text-xl font-bold mb-5">
                Edit Employee
              </h2>

              <div className="space-y-3">

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Name"
                  value={selectedEmployee.name}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Email"
                  value={selectedEmployee.email}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      email: e.target.value,
                    })
                  }
                />

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Mobile"
                  value={selectedEmployee.mobileNumber}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      mobileNumber: e.target.value,
                    })
                  }
                />

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Designation"
                  value={selectedEmployee.designation}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      designation: e.target.value,
                    })
                  }
                />

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Department"
                  value={selectedEmployee.department}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      department: e.target.value,
                    })
                  }
                />

              </div>

              <div className="flex gap-3 mt-5 justify-end">
                <button
                  onClick={handleUpdate}
                  className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}