export const pageContent = {
    adminActivityTracking: {
        title: "Activity Tracking(Admin)",
        subtitle: "Track employee activities and performance",
    },

    companyAccounts: {
        title: "Company Accounts(Admin)",
        subtitle: "Manage all social media company accounts",
    },
    clientAccounts: {
        title: "Client Accounts Assigned (Admin)",
        subtitle: "Manage assigned client social media accounts",
    },
    taskManagement: {
        title: "Task Management (Admin)",
        subtitle: "Track assigned tasks and their progress",
    },
    performanceDashboard: {
        title: "Performance Dashboard (Admin)",
        subtitle: "Monitor employee productivity and performance metrics",
    },
    productivityAnalysis: {
        title: "Productivity Analysis (Admin)",
        subtitle: "Monitor productive hours and break management",
    },
    monthlyPerformance: {
        title: "Monthly Performance Report (Admin)",
        subtitle: "Monitor employee monthly performance and achievements",
    },
    dailyReports: {
        title: "Daily Reports (Admin)",
        subtitle: "View all employee daily work reports",
    },
    dailyAttendance: {
        title: "Daily Attendance (Admin)",
        subtitle: "Track employee attendance",
    },

    executiveProfile: {
        title: "Executive Profile (Admin)",
        subtitle: "Employee information and details",
    },
};

export const adminActivityTracking = [
    {
        id: 1,
        employee: "Shobha Yadav",
        designation: "Full Stack Developer",
        client: "ABC Pvt Ltd",
        time: "09:30 AM",
        status: "Completed",
        platforms: ["Facebook", "Instagram"],
        workUpdate: "Updated client dashboard and integrated APIs.",
        remarks: "Good progress",
    },
    {
        id: 2,
        employee: "Rahul Kumar",
        designation: "SMO Executive",
        client: "XYZ Company",
        time: "11:00 AM",
        status: "Pending",
        platforms: ["LinkedIn", "Twitter"],
        workUpdate: "Prepared social media campaign content.",
        remarks: "Waiting for approval",
    },
];

export const companyAccounts = [
    {
        id: 1,
        platform: "Instagram",
        username: "@company",
        followers: "25K",
        status: "Active",
        verified: true,
        url: "https://instagram.com/company",
    },
    {
        id: 2,
        platform: "Facebook",
        username: "Company Official",
        followers: "12K",
        status: "Active",
        verified: true,
        url: "https://facebook.com/company",
    },
    {
        id: 3,
        platform: "LinkedIn",
        username: "Company Pvt Ltd",
        followers: "8K",
        status: "active",
        verified: true,
        url: "https://linkedin.com/company/company",
    },
];

export const assignedClients = [
    {
        id: 1,
        clientName: "ABC Pvt Ltd",
        assignedDate: "01 May 2026",
        platforms: ["Facebook", "Instagram"],
        status: "Active",
    },
    {
        id: 2,
        clientName: "XYZ Company",
        assignedDate: "03 May 2026",
        platforms: ["LinkedIn"],
        status: "Pending",
    },
    {
        id: 3,
        clientName: "Tech Solutions",
        assignedDate: "05 May 2026",
        platforms: ["Facebook", "Instagram", "YouTube"],
        status: "Completed",
    },
];

export const taskManagement = [
    {
        id: 1,
        taskName: "Social Media Campaign",
        client: "ABC Pvt Ltd",
        assignedDate: "01 May 2026",
        dueDate: "05 May 2026",
        status: "Completed",
    },
    {
        id: 2,
        taskName: "Website Content Update",
        client: "XYZ Company",
        assignedDate: "02 May 2026",
        dueDate: "08 May 2026",
        status: "Pending",
    },
];

export const performanceData = {
    totalClientsManaged: 15,
    totalPostsCreated: 120,
    totalPostsPublished: 98,
    totalStoriesPublished: 65,
    totalReelsPublished: 42,
    clientApprovalsPending: 7,
};
export const productivityData = {
    expectedHours: 9,
    breakHours: 1,
    productiveHours: 8,
    minimumRequiredHours: 7.75,

    rules: [
        "Total office hours must be completed daily.",
        "Break time should not exceed the allowed limit.",
        "Minimum productive hours required: 7h 45m.",
        "Excessive breaks may impact productivity score.",
        "Employees falling below minimum productive hours enter the red zone.",
    ],
};
export const monthlyPerformanceData = {
    employeeName: "Shobha Yadav",
    designation: "Full Stack Developer",

    attendancePercentage: 98,
    taskCompletionRate: 95,
    clientSatisfactionScore: "4.8/5",
    productivityScore: 92,
    monthlyRanking: 1,
    employeePerformanceGrade: "A+",

    summary: {
        totalTasks: 45,
        completedTasks: 43,
        clientsHandled: 12,
        workingDays: 26,
    },
};

export const dailyReports = [
    {
        id: 1,
        employee: "Shobha Yadav",
        designation: "Full Stack Developer",
        manager: "Kriti Ma'am",
        date: "10 June 2026",
        status: "Submitted",
        summary:
            "Worked on Admin Panel frontend integration and dashboard updates.",
    },
    {
        id: 2,
        employee: "Rahul Sharma",
        designation: "Backend Developer",
        manager: "Kriti Ma'am",
        date: "10 June 2026",
        status: "Submitted",
        summary:
            "Created APIs for employee management and attendance modules.",
    },
    {
        id: 3,
        employee: "Priya Singh",
        designation: "UI Designer",
        manager: "Kriti Ma'am",
        date: "10 June 2026",
        status: "Pending",
        summary:
            "Working on CRM dashboard responsive design improvements.",
    },
];
export const employees = [
    {
        id: "NDL-EMP-001",
        name: "Rahul Sharma",
        profilePhoto: "/images/employ.jpg",
        mobile: "+91 9876543210",
        email: "rahul@example.com",
        designation: "SMO Executive",
        joiningDate: "01 Jan 2026",
        reportingManager: "Kirti Ma’am",
        department: "SMO",
    },
    {
        id: "NDL-EMP-002",
        name: "Priya Verma",
        profilePhoto: "/images/sharma.jpg",
        mobile: "+91 9876543211",
        email: "priya@example.com",
        designation: "SMO Executive",
        joiningDate: "10 Jan 2026",
        reportingManager: "Kirti Ma’am",
        department: "SMO",
    },
    {
        id: "NDL-EMP-003",
        name: "Amit Kumar",
        profilePhoto: "/images/employ1.jpg",
        mobile: "+91 9876543212",
        email: "amit@example.com",
        designation: "SMO Executive",
        joiningDate: "15 Jan 2026",
        reportingManager: "Kirti Ma’am",
        department: "SMO",
    },
    {
        id: "NDL-EMP-004",
        name: "Sneha Gupta",
        profilePhoto: "/images/gupta.jpg",
        mobile: "+91 9876543213",
        email: "sneha@example.com",
        designation: "SMO Executive",
        joiningDate: "20 Jan 2026",
        reportingManager: "Kirti Ma’am",
        department: "SMO",
    },
    {
        id: "NDL-EMP-005",
        name: "Rohit Singh",
        profilePhoto: "/images/employ2.jpg",
        mobile: "+91 9876543214",
        email: "rohit@example.com",
        designation: "SMO Executive",
        joiningDate: "25 Jan 2026",
        reportingManager: "Kirti Ma’am",
        department: "SMO",
    },
];
export const dailyAttendance = [
    {
        employeeId: "NDL-EMP-001",
        loginTime: "10:00 AM",
        logoutTime: "07:00 PM",
        breakTime: "1 Hour",
        totalWorkingHours: "8 Hours",
    },

    {
        employeeId: "NDL-EMP-002",
        loginTime: "09:30 AM",
        logoutTime: "06:30 PM",
        breakTime: "45 Minutes",
        totalWorkingHours: "8 Hours",
    },
];
