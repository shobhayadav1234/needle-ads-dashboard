"use client";

import React from "react";
import { reportsData } from "@/data/client";

export default function ReportsPage() {
  const { summary, invoices } = reportsData;

  // Simple invoice download (demo PDF/text)
  const downloadInvoice = (invoice: any) => {
    const content = `
INVOICE DETAILS

Invoice ID: ${invoice.id}
Client: ${invoice.client}
Amount: ${invoice.amount}
Status: ${invoice.status}
Date: ${invoice.date}

Thank you for your business!
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${invoice.id}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    const content = invoices
      .map(
        (i) =>
          `ID: ${i.id} | Client: ${i.client} | Amount: ${i.amount} | Status: ${i.status} | Date: ${i.date}`
      )
      .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "all-invoices.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Reports & Invoices
          </h1>
          <p className="text-slate-500">
            Manage revenue, invoices and payment records
          </p>
        </div>

        <button
          onClick={downloadAll}
          className="bg-[#0b5fa5] text-white px-4 py-2 rounded-lg hover:bg-[#094a82]"
        >
          Download All
        </button>
      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl border">
          <p className="text-sm text-slate-500">Total Revenue</p>
          <h2 className="text-xl font-bold text-green-600">
            {summary.totalRevenue}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl border">
          <p className="text-sm text-slate-500">Total Invoices</p>
          <h2 className="text-xl font-bold">
            {summary.totalInvoices}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl border">
          <p className="text-sm text-slate-500">Pending Payments</p>
          <h2 className="text-xl font-bold text-orange-500">
            {summary.pendingPayments}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl border">
          <p className="text-sm text-slate-500">Paid Invoices</p>
          <h2 className="text-xl font-bold text-blue-600">
            {summary.paidInvoices}
          </h2>
        </div>

      </div>

      {/* ================= INVOICE TABLE ================= */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">

        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-slate-800">
            Invoice List
          </h2>
        </div>

        <table className="w-full text-left">
          <thead className="bg-slate-100 text-slate-600 text-sm">
            <tr>
              <th className="p-3">Invoice ID</th>
              <th className="p-3">Client</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((inv, index) => (
              <tr key={index} className="border-t hover:bg-slate-50">
                <td className="p-3 font-medium">{inv.id}</td>
                <td className="p-3">{inv.client}</td>
                <td className="p-3">{inv.amount}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      inv.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="p-3">{inv.date}</td>
                <td className="p-3">
                  <button
                    onClick={() => downloadInvoice(inv)}
                    className="text-sm bg-slate-800 text-white px-3 py-1 rounded hover:bg-black"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}