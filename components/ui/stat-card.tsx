"use client";

import { LucideIcon } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500 text-sm">{title}</p>
          <h3 className={`text-3xl font-bold mt-1 ${color}`}>
            {value}
          </h3>
        </div>

        <Icon size={28} className={color} />

      </div>
    </div>
  );
}