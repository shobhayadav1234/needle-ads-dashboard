export default function ExecutiveProfilePage() {
    const employee = {
        name: "Rahul Sharma",
        employeeId: "NDL-EMP-001",
        mobile: "+91 9876543210",
        email: "rahul@example.com",
        designation: "SMO Executive",
        joiningDate: "01 Jan 2026",
        reportingManager: "Kirti Ma’am",
        department: "SMO",
        photo: "/images/user.png",
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold mb-6 text-[#0B3C5D]">
                Executive Profile
            </h1>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6">

                {/* Profile Photo */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="\images\rohit.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border-60 border-[#00C897]"
                    />

                    <h2 className="mt-3 text-xl font-semibold">
                        {employee.name}
                    </h2>

                    <p className="text-gray-500">{employee.designation}</p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">

                    <Info label="Employee Name" value={employee.name} />
                    <Info label="Employee ID" value={employee.employeeId} />
                    <Info label="Mobile Number" value={employee.mobile} />
                    <Info label="Email ID" value={employee.email} />
                    <Info label="Designation" value={employee.designation} />
                    <Info label="Joining Date" value={employee.joiningDate} />
                    <Info label="Reporting Manager" value={employee.reportingManager} />
                    <Info label="Department" value={employee.department} />

                </div>
            </div>
        </div>
    );
}

/* ---------------- INFO CARD ---------------- */
function Info({ label, value }: any) {
    return (
        <div className="p-3 border rounded-lg bg-gray-50">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-medium text-gray-800">{value}</p>
        </div>
    );
}