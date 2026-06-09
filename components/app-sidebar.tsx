"use client"

import * as React from "react"
import Image from "next/image"
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
} from "lucide-react"

const data = {
  user: {
    name: "Needle Ads",
    email: "needleads@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Executive-profile",
      url: "/executive-profile",
      icon: User,
    },
    {
      title: "Daily Attendance",
      url: "/daily-attendance",
      icon: CalendarCheck,
    },
    {
      title: "45-Minute Activity Tracking",
      url: "/activity",
      icon: Activity,
    },
    {
      title: "Company Account Management",
      url: "/company-accounts",
      icon: Building2,
    },
    {
      title: "Client Accounts Assigned",
      url: "/client-accounts",
      icon: Users,
    },
    {
      title: "Task Management",
      url: "/task-management",
      icon: ClipboardList,
    },
    {
      title: "Productivity Analysis",
      url: "/productivity-analysis",
      icon: TrendingUp,
    },
    {
      title: "Performance Dashboard",
      url: "/performance-dashboard",
      icon: BarChart3,
    },
    {
      title: "Daily Report",
      url: "/daily-report",
      icon: FileText,
    },
    {
      title: "Monthly Performance",
      url: "/monthly-performance",
      icon: CalendarDays,
    },
  ],
}

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center p-3">
        <Image
          src="/images/needle-ads-logo.png"
          alt="Needle Ads"
          width={150}
          height={110}
          className="rounded-md object-contain"
        />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />

      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}