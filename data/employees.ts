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

export const activityTracking = [
    {
        employeeId: "NDL-EMP-001",
        activities: [
            {
                time: "10:00 AM - 10:45 AM",
                client: "Client A",
                platforms: [
                    "Instagram",
                    "Facebook",
                    "Twitter",
                    "LinkedIn",
                    "Pinterest",
                    "TikTok",
                    "YouTube",
                ],
            },
            {
                time: "10:45 AM - 11:30 AM",
                client: "Client B",
                platforms: [
                    "Instagram",
                    "Facebook",
                    "Twitter",
                    "LinkedIn",
                    "Pinterest",
                    "TikTok",
                    "YouTube",
                ],
            },
            {
                time: "11:30 AM - 12:15 PM",
                client: "Client C",
                platforms: [
                    "Instagram",
                    "Facebook",
                    "Twitter",
                    "LinkedIn",
                    "Pinterest",
                    "TikTok",
                    "YouTube",
                ],
            },
        ],
    },
];

export const companyAccounts = [
    {
        id: 1,
        platform: "Instagram",
        username: "@needleads",
        followers: "25.4K",
        status: "Active",
    },
    {
        id: 2,
        platform: "Facebook",
        username: "NeedleAds",
        followers: "18.2K",
        status: "Active",
    },
    {
        id: 3,
        platform: "LinkedIn",
        username: "NeedleAds Technologies",
        followers: "8.5K",
        status: "Active",
    },
    {
        id: 4,
        platform: "Twitter/X",
        username: "@needleads",
        followers: "5.1K",
        status: "Active",
    },
    {
        id: 5,
        platform: "YouTube",
        username: "NeedleAds Official",
        followers: "12.3K",
        status: "Active",
    },
    {
        id: 6,
        platform: "Google Business Profile",
        username: "NeedleAds Technologies",
        followers: "4.8 Rating",
        status: "Verified",
    },
];

export const assignedClients = [
    {
        id: 1,
        clientName: "ABC School",
        assignedDate: "01 June 2026",
        status: "Active",
        platforms: ["Instagram", "Facebook", "LinkedIn"],
    },
    {
        id: 2,
        clientName: "XYZ Builder",
        assignedDate: "03 June 2026",
        status: "Active",
        platforms: ["Instagram", "Google Business Profile"],
    },
    {
        id: 3,
        clientName: "Tech Vision",
        assignedDate: "05 June 2026",
        status: "Pending",
        platforms: ["Instagram", "Facebook"],
    },
    {
        id: 4,
        clientName: "Sunrise Hospital",
        assignedDate: "07 June 2026",
        status: "Completed",
        platforms: ["LinkedIn", "Google Business Profile"],
    },
];
export const taskManagement = [
    {
        id: 1,
        taskName: "Create Instagram Posts",
        client: "ABC School",
        assignedDate: "10 Jun 2026",
        dueDate: "12 Jun 2026",
        status: "Pending",
    },
    {
        id: 2,
        taskName: "Facebook Campaign Setup",
        client: "XYZ Builder",
        assignedDate: "09 Jun 2026",
        dueDate: "11 Jun 2026",
        status: "In Progress",
    },
    {
        id: 3,
        taskName: "LinkedIn Content Publishing",
        client: "Tech Vision",
        assignedDate: "08 Jun 2026",
        dueDate: "10 Jun 2026",
        status: "Completed",
    },
    {
        id: 4,
        taskName: "Google Business Profile Update",
        client: "Sunrise Hospital",
        assignedDate: "07 Jun 2026",
        dueDate: "09 Jun 2026",
        status: "Approved",
    },
];

export const productivityData = {
    expectedHours: 9,
    breakHours: 1,
    productiveHours: 8,
    minimumRequiredHours: 7.75,

    rules: [
        "Total shift duration: 9 Hours",
        "Allowed break duration: 1 Hour",
        "Employee must update break status before leaving for break.",
        "After returning from break, break timer automatically stops.",
        "Minimum productive hours required: 7 Hours 45 Minutes",
        "Below minimum productive hours employee enters Red Zone.",
    ],
};

export const performanceData = {
    totalClientsManaged: 24,
    totalPostsCreated: 320,
    totalPostsPublished: 285,
    totalStoriesPublished: 142,
    totalReelsPublished: 98,
    clientApprovalsPending: 12,
};

export const dailyReportData = {
    tasksCompleted: 12,
    hoursWorked: 8,
    clientsWorkedOn: 6,
    pendingTasks: 3,
};

export const monthlyPerformanceData = {
    attendancePercentage: 96,
    taskCompletionRate: 92,
    clientSatisfactionScore: 4.8,
    productivityScore: 94,
    monthlyRanking: 3,
    employeePerformanceGrade: "A+",

    summary: {
        totalTasks: 145,
        completedTasks: 134,
        clientsHandled: 18,
        workingDays: 26,
    },
};

export const pageContent = {
    executiveProfile: {
        title: "Executive Profile",
        subtitle: "Complete employee overview and details",
    },

    dailyAttendance: {
        title: "Daily Attendance",
        subtitle: "Track daily work progress and attendance",
    },

    activityTracking: {
        title: "Activity Tracking",
        subtitle: "45-minute executive work monitoring dashboard",
    },

    companyAccounts: {
        title: "Company Account Management",
        subtitle: "Manage company social media accounts",
    },

    clientAccounts: {
        title: "Client Accounts Assigned",
        subtitle: "Manage assigned client social media accounts",
    },

    taskManagement: {
        title: "Task Management",
        subtitle: "Track assigned and completed tasks",
    },

    productivityAnalysis: {
        title: "Productivity Analysis",
        subtitle: "Employee productivity insights and metrics",
    },

    performanceDashboard: {
        title: "Performance Dashboard",
        subtitle: "Client management and performance tracking",
    },

    dailyReport: {
        title: "Daily Report",
        subtitle: "Submit and track daily work reports",
    },

    monthlyPerformance: {
        title: "Monthly Performance",
        subtitle: "Complete monthly performance overview",
    },
};