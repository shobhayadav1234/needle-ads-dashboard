export const clientProjectData = {
    header: {
        title: "Client Project Dashboard",
        subtitle: "Overview of assigned project, progress, accounts & updates",
    },

    overview: {
        projectName: "CRM Management System",
        status: "In Progress",
        startDate: "01 May 2026",
        deadline: "30 June 2026",
        dealAmount: "₹1,50,000",
        progress: 75,
    },

    accounts: [
        { name: "Facebook", status: "Active Account" },
        { name: "Instagram", status: "Active Account" },
        { name: "LinkedIn", status: "Active Account" },
        { name: "YouTube", status: "Active Account" },
    ],

    updates: [
        {
            title: "Dashboard Module Completed",
            desc: "Admin dashboard development completed successfully.",
            date: "10 June 2026",
            color: "#1ea7d7",
        },
        {
            title: "API Integration Completed",
            desc: "Backend APIs integrated with frontend modules.",
            date: "08 June 2026",
            color: "#22c55e",
        },
        {
            title: "Testing Phase Started",
            desc: "QA team started testing all project modules.",
            date: "12 June 2026",
            color: "#f97316",
        },
        {
            title: "Client Review Pending",
            desc: "Final review and approval awaited from client.",
            date: "15 June 2026",
            color: "#a855f7",
        },
    ],
};

export const reportsData = {
    summary: {
        totalRevenue: "₹5,20,000",
        totalInvoices: 24,
        pendingPayments: "₹1,20,000",
        paidInvoices: 18,
    },

    invoices: [
        {
            id: "INV-101",
            client: "ABC Pvt Ltd",
            amount: "₹25,000",
            status: "Paid",
            date: "01 June 2026",
        },
        {
            id: "INV-102",
            client: "XYZ Solutions",
            amount: "₹18,000",
            status: "Pending",
            date: "03 June 2026",
        },
        {
            id: "INV-103",
            client: "Tech Nova",
            amount: "₹30,000",
            status: "Paid",
            date: "05 June 2026",
        },
    ],
};