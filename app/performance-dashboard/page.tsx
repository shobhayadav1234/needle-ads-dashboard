"use client";

import {
  Users,
  FileText,
  Send,
  Image,
  Clapperboard,
  Clock3,
} from "lucide-react";

import { performanceData } from "@/data/employees";
import PageHeader from "@/components/ui/header";
import { pageContent } from "@/data/employees";

export default function Page() {
  const {
    totalClientsManaged,
    totalPostsCreated,
    totalPostsPublished,
    totalStoriesPublished,
    totalReelsPublished,
    clientApprovalsPending,
  } = performanceData;

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

     {/* HEADER (CRM unified style) */}
             <PageHeader
               title={pageContent.performanceDashboard.title}
               subtitle={pageContent.performanceDashboard.subtitle}
             />
  

      {/* STATS GRID (same as task management cards style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">

                {/* TEXT */}
                <div>
                  <p className="text-slate-500 text-sm">
                    {card.title}
                  </p>

                  <h3 className={`text-3xl font-bold mt-1 ${card.color}`}>
                    {card.value}
                  </h3>
                </div>

                {/* ICON */}
                <Icon size={28} className={card.color} />

              </div>
            </div>
          );
        })}

      </div>

      {/* INFO SECTION (Task style box) */}
      <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6">

        <h2 className="text-lg font-bold text-slate-800 mb-3">
          Performance Overview
        </h2>

        <p className="text-slate-600 text-sm leading-6">
          This dashboard provides a complete overview of client handling,
          content creation, publishing activities, reels performance, stories
          management, and pending client approvals in a structured CRM system.
        </p>

      </div>

    </div>
  );
}