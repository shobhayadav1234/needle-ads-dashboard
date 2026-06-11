export const pageContent = {
    clientAccounts: {
        title: "Client Accounts Assigned (Manager)",
        subtitle: "Manage assigned client accounts",
    },
    dailyAttendance: {
        title: " Daily Attendance(Manager)",
        subtitle: "Monitor attendance of all employees",
    },
    dailyReport: {
        title: "Daily Reports(Manager)",
        subtitle: "View daily reports submitted by employees",
    },
    executiveProfile: {
        title: "Employee Profiles(Manager)",
        subtitle: "View and manage all employees",
    },
    monthlyPerformance: {
        title: "Monthly Performance (Manager)",
        subtitle: "Track employee monthly performance",
    },
    productivityAnalysis: {
        title: "Productivity Analysis(Manager)",
        subtitle: "Monitor employee productivity and break management",
    },
    performanceDashboard: {
        title: "Performance Dashboard (Manager)",
        subtitle: "Track overall social media and client management performance",
    },
    taskManagement: {
        title: "Task Management(Manager) ",
        subtitle: "Monitor and manage employee tasks",
    },
};

export const assignedClients = [
    {
        id: 1,
        clientName: "ABC Pvt Ltd",
        assignedDate: "10 Jun 2026",
        platforms: ["Facebook", "Instagram"],
        status: "Active",
    },
    {
        id: 2,
        clientName: "XYZ Company",
        assignedDate: "12 Jun 2026",
        platforms: ["LinkedIn"],
        status: "Pending",
    },
    {
        id: 3,
        clientName: "Tech Solutions",
        assignedDate: "15 Jun 2026",
        platforms: ["YouTube", "Twitter"],
        status: "Completed",
    },
];

export const employeeAttendance = [
    {
        id: 1,
        name: "Shobha Yadav",
        designation: "Full Stack Developer",
        loginTime: "09:00 AM",
        logoutTime: "06:00 PM",
        breakTime: "45m",
        totalWorkingHours: "8h 15m",
        status: "Present",
    },
    {
        id: 2,
        name: "Rahul Sharma",
        designation: "Backend Developer",
        loginTime: "09:15 AM",
        logoutTime: "06:15 PM",
        breakTime: "30m",
        totalWorkingHours: "8h",
        status: "Present",
    },
    {
        id: 3,
        name: "Priya Singh",
        designation: "UI Designer",
        loginTime: "-",
        logoutTime: "-",
        breakTime: "0m",
        totalWorkingHours: "0h",
        status: "Absent",
    },
];

export const dailyReports = [
    {
        id: 1,
        employeeName: "Shobha Yadav",
        designation: "Full Stack Developer",
        date: "10 June 2026",
        status: "Submitted",
        workSummary: "Worked on Admin Panel and API integration.",
        pendingWork: "Employee Add/Edit module remaining.",
    },
    {
        id: 2,
        employeeName: "Rahul Sharma",
        designation: "Backend Developer",
        date: "10 June 2026",
        status: "Pending",
        workSummary: "Attendance APIs completed.",
        pendingWork: "Task management APIs.",
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
export const monthlyPerformanceData = {
    attendancePercentage: 95,
    taskCompletionRate: 90,
    clientSatisfactionScore: 4.8,
    productivityScore: 92,
    monthlyRanking: 2,
    employeePerformanceGrade: "A+",

    summary: {
        totalTasks: 120,
        completedTasks: 110,
        clientsHandled: 25,
        workingDays: 26,
    },
};

export const productivityData = {
    expectedHours: 8,
    breakHours: 1,
    productiveHours: 7.5,
    minimumRequiredHours: 7.75,

    rules: [
        "Maximum break time allowed is 1 hour per day",
        "Lunch break should not exceed 45 minutes",
        "Continuous inactivity may affect productivity score",
        "Minimum productive hours required: 7h 45m",
        "Managers can review productivity reports anytime",
    ],
};
export const performanceData = {
    totalClientsManaged: 18,
    totalPostsCreated: 245,
    totalPostsPublished: 220,
    totalStoriesPublished: 185,
    totalReelsPublished: 96,
    clientApprovalsPending: 12,
};

export const taskManagement = [
    {
        id: 1,
        taskName: "Create Social Media Posts",
        client: "ABC Pvt Ltd",
        assignedDate: "01 Jun 2026",
        dueDate: "05 Jun 2026",
        status: "Completed",
    },
    {
        id: 2,
        taskName: "Facebook Ads Campaign",
        client: "XYZ Company",
        assignedDate: "03 Jun 2026",
        dueDate: "08 Jun 2026",
        status: "In Progress",
    },
    {
        id: 3,
        taskName: "Instagram Reel Design",
        client: "Tech Solutions",
        assignedDate: "05 Jun 2026",
        dueDate: "10 Jun 2026",
        status: "Pending",
    },
];