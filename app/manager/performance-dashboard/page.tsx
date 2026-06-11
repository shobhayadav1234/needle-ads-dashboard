"use client";

import {
  Users,
  FileText,
  Send,
  Image,
  Clapperboard,
  Clock3,
} from "lucide-react";

import {
  performanceData,
  pageContent,
} from "@/data/manager";

import PageHeader from "@/components/ui/header";

export default function Page() {
  const {
    totalClientsManaged = 0,
    totalPostsCreated = 0,
    totalPostsPublished = 0,
    totalStoriesPublished = 0,
    totalReelsPublished = 0,
    clientApprovalsPending = 0,
  } = performanceData || {};

  const cards = [
    {
      title: "Total Clients Managed",
      value: totalClientsManaged,
      icon: Users,
      color: "text-[#0b5fa5]",
    },
    {
      title: "Total Posts Created",
      value: totalPostsCreated,
      icon: FileText,
      color: "text-[#1ea7d7]",
    },
    {
      title: "Total Posts Published",
      value: totalPostsPublished,
      icon: Send,
      color: "text-green-600",
    },
    {
      title: "Total Stories Published",
      value: totalStoriesPublished,
      icon: Image,
      color: "text-purple-600",
    },
    {
      title: "Total Reels Published",
      value: totalReelsPublished,
      icon: Clapperboard,
      color: "text-pink-600",
    },
    {
      title: "Client Approvals Pending",
      value: clientApprovalsPending,
      icon: Clock3,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <PageHeader
        title={pageContent.performanceDashboard.title}
        subtitle={pageContent.performanceDashboard.subtitle}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-sm">
                    {card.title}
                  </p>

                  <h3 className={`text-3xl font-bold mt-1 ${card.color}`}>
                    {card.value}
                  </h3>
                </div>

                <Icon size={28} className={card.color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Overview */}
      <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-3">
          Performance Overview
        </h2>

        <p className="text-slate-600 text-sm leading-6">
          This dashboard provides a complete overview of client handling,
          content creation, publishing activities, reels performance,
          stories management, and pending client approvals. Managers can
          monitor team performance, track publishing progress, and ensure
          timely client approvals across all assigned accounts.
        </p>
      </div>
    </div>
  );
}