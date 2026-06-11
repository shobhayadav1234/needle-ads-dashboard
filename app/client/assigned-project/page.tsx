"use client";

import React from "react";
import { clientProjectData } from "@/data/client";
import PageHeader from "@/components/ui/header";

export default function Page() {
  const { header, overview, accounts, updates } = clientProjectData;

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* ================= HEADER (FROM client.ts) ================= */}
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
      />

      {/* ================= PROJECT OVERVIEW ================= */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Company Project Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-sm text-slate-500">Project Name</p>
            <h3 className="font-bold text-[#0b5fa5]">
              {overview.projectName}
            </h3>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-sm text-slate-500">Project Status</p>
            <h3 className="font-bold text-green-600">
              {overview.status}
            </h3>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-sm text-slate-500">Start Date</p>
            <h3 className="font-bold">{overview.startDate}</h3>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-sm text-slate-500">Deadline</p>
            <h3 className="font-bold">{overview.deadline}</h3>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-sm text-slate-500">Deal Amount</p>
            <h3 className="font-bold text-green-600">
              {overview.dealAmount}
            </h3>
          </div>

        </div>
      </div>

      {/* ================= PROJECT PROGRESS ================= */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-slate-800">Project Progress</h2>
          <span className="font-bold text-[#0b5fa5]">
            {overview.progress}%
          </span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#1ea7d7] to-[#0b5fa5] h-3 rounded-full"
            style={{ width: `${overview.progress}%` }}
          />
        </div>

        <p className="text-sm text-slate-500 mt-3">
          Current completion status of the project.
        </p>
      </div>

      {/* ================= ASSIGNED ACCOUNTS ================= */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Assigned Social Media Accounts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {accounts.map((acc, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 hover:border-[#1ea7d7] transition"
            >
              <h3 className="font-semibold text-slate-800">
                {acc.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {acc.status}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* ================= RECENT PROJECT UPDATES ================= */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="font-bold text-slate-800 mb-5">
          Recent Project Updates
        </h2>

        <div className="space-y-5">

          {updates.map((u, index) => (
            <div
              key={index}
              className="border-l-4 pl-4"
              style={{ borderColor: u.color }}
            >
              <p className="font-semibold text-slate-800">
                {u.title}
              </p>
              <p className="text-sm text-slate-500">{u.desc}</p>
              <p className="text-xs text-slate-400 mt-1">{u.date}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}