"use client";

import PageHeader from "@/components/ui/header";
import { employees, pageContent } from "@/data/employees";

import {
    User,
    Building2,
    CalendarDays,
    BadgeCheck,
} from "lucide-react";

export default function MyProfilePage() {
    const employee = employees?.[0];

    if (!employee) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                No Employee Data Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6">
            <PageHeader
                title={pageContent.myProfile?.title || "My Profile"}
                subtitle={pageContent.myProfile?.subtitle || "Employee Profile"}
            />

            {/* Profile Card */}
            <div className="bg-white rounded-3xl border shadow-sm overflow-hidden mb-6">
                <div className="h-32 bg-gradient-to-r from-[#0b5fa5] to-[#1ea7d7]" />

                <div className="px-6 pb-6">
                    <div className="-mt-16 flex flex-col md:flex-row md:items-end gap-4">
                        <img
                            src={employee.profilePhoto || "/avatar.png"}
                            alt={employee.name}
                            className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                        />

                        <div>
                            <h2 className="text-3xl font-bold text-slate-800">
                                {employee.name}
                            </h2>

                            <p className="text-slate-500 mt-1">
                                {employee.designation}
                            </p>

                            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                <BadgeCheck size={16} />
                                Active Employee
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-4">
                        Employee Information
                    </h3>

                    <div className="space-y-4">
                        <InfoRow
                            icon={<User size={18} />}
                            label="Employee ID"
                            value={employee.id}
                        />

                        <InfoRow
                            icon={<Building2 size={18} />}
                            label="Designation"
                            value={employee.designation}
                        />

                        {"department" in employee && (
                            <InfoRow
                                icon={<Building2 size={18} />}
                                label="Department"
                                value={(employee as any).department}
                            />
                        )}

                        {"joiningDate" in employee && (
                            <InfoRow
                                icon={<CalendarDays size={18} />}
                                label="Joining Date"
                                value={(employee as any).joiningDate}
                            />
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-4">
                        Profile Summary
                    </h3>

                    <p className="text-slate-600 leading-7">
                        This profile displays employee information from the
                        employee data source. Additional fields such as email,
                        phone number, department, reporting manager, attendance,
                        and performance can be shown once they are available in
                        employees.ts.
                    </p>
                </div>
            </div>
        </div>
    );
}

function InfoRow({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="text-[#0b5fa5]">{icon}</div>

            <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="font-semibold">{value}</p>
            </div>
        </div>
    );
}