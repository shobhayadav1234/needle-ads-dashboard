
"use client"

import { useRouter } from "next/navigation"

import { LogOut } from "lucide-react"
import api from "@/lib/api"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import {
  User,
  CalendarCheck,
  Activity,
  Building2,
  Users,
  ClipboardList,
  TrendingUp,
  BarChart3,
  FileText,
  CalendarDays,
  Plus,
} from "lucide-react"

const userData = {
  name: "Needle Ads",
  email: "needleads@gmail.com",
  avatar: "/avatars/shadcn.jpg",

}

const sidebarData = {
  admin: [
    {
      title: "Executive Profile",
      url: "/admin/executive-profile",
      icon: User,
    },
    {
      title: "Daily Attendance",
      url: "/admin/daily-attendance",
      icon: CalendarCheck,
    },
    {
      title: "45-Minute Activity Tracking",
      url: "/admin/activity",
      icon: Activity,
    },
    {
      title: "Company Account Management",
      url: "/admin/company-accounts",
      icon: Building2,
    },
    {
      title: "Client Accounts Assigned",
      url: "/admin/client-accounts",
      icon: Users,
    },
    {
      title: "Task Management",
      url: "/admin/task-management",
      icon: ClipboardList,
    },
    {
      title: "Productivity Analysis",
      url: "/admin/productivity-analysis",
      icon: TrendingUp,
    },
    {
      title: "Performance Dashboard",
      url: "/admin/performance-dashboard",
      icon: BarChart3,
    },
    {
      title: "Daily Report",
      url: "/admin/daily-report",
      icon: FileText,
    },
    {
      title: "Monthly Performance",
      url: "/admin/monthly-performance",
      icon: CalendarDays,
    },
  ],

  manager: [
    {
      title: "Executive Profile",
      url: "/manager/executive-profile",
      icon: User,
    },
    {
      title: "Daily Attendance",
      url: "/manager/daily-attendance",
      icon: CalendarCheck,
    },
    {
      title: "Client Accounts Assigned",
      url: "/manager/client-accounts",
      icon: Users,
    },
    {
      title: "Task Management",
      url: "/manager/task-management",
      icon: ClipboardList,
    },
    {
      title: "Productivity Analysis",
      url: "/manager/productivity-analysis",
      icon: TrendingUp,
    },
    {
      title: "Performance Dashboard",
      url: "/manager/performance-dashboard",
      icon: BarChart3,
    },
    {
      title: "Daily Report",
      url: "/manager/daily-report",
      icon: FileText,
    },
    {
      title: "Monthly Performance",
      url: "/manager/monthly-performance",
      icon: CalendarDays,
    },
  ],

  employee: [
    {
      title: "My Profile",
      url: "/employee/my-profile",
      icon: User,
    },
    {
      title: "Daily Attendance",
      url: "/employee/daily-attendance",  
      icon: CalendarCheck,
    },
    {
      title: "45-Minute Activity Tracking",
      url: "/employee/activity-tracking",
      icon: Activity,
    },
    {
      title: "Task Management",
      url: "/employee/task-management",
      icon: ClipboardList,
    },
    {
      title: "Daily Report",
      url: "/employee/daily-report",
      icon: FileText,
    },
    {
      title: "Monthly Performance",
      url: "/employee/monthly-performance",
      icon: CalendarDays,
    },
  ],

  client: [
    {
      title: "Assigned Project",
      url: "/client/assigned-project",
      icon: Users,
    },
    {
      title: "Reports",
      url: "/client/reports",
      icon: FileText,
    },
  ],
}

type Role = "admin" | "manager" | "employee" | "client"

export function AppSidebar({
  role = "admin",
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  role?: Role
}) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout")
    } catch (error) {
      console.error("Logout request failed", error)
    } finally {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("user")
      router.replace("/")
    }
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Logo */}
      <SidebarHeader className="flex items-center justify-center p-3">
        <Image
          src="/images/needle-ads-logo.png"
          alt="Needle Ads"
          width={150}
          height={110}
          className="rounded-md object-contain"
        />
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent>
        <NavMain items={sidebarData[role]} />

        {role === "admin" && (
          <div className="px-2 pb-3">
            <Link
              href="/admin/departments"
              className="flex w-full sm:w-36 items-center justify-center gap-2 rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <Building2 size={16} />
              <span>Add Department</span>
            </Link>
          </div>
        )}
        {role === "admin" && (
          <div className="px-2 pb-3">
            <Link
              href="/admin/register"
              className="flex w-full sm:w-28 items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium bg-black text-white"
            >
              <Plus size={18} />
              <span>Add User</span>
            </Link>
          </div>
        )}
      </SidebarContent>


      {/* User Footer */}
      <SidebarFooter>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-2 mx-auto flex w-full sm:w-28 items-center justify-center gap-2 rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600 transition"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
