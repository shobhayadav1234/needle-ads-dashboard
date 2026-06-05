import { clients } from "@/data/Clients";
import { notFound } from "next/navigation";
import { Upload } from "lucide-react";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ClientPage({
    params,
}: PageProps) {
    const { id } = await params;

    const client = clients.find(
        (item) => item.id === Number(id)
    );

    if (!client) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-sky-50 p-4 md:p-6">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
                    <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
                        {client.name}
                    </h1>

                    <p className="mt-2 text-slate-500">
                        SEO Report & Task Management Dashboard
                    </p>
                </div>

                {/* Calendar */}
                <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#21A9E1]">
                        Work Calendar
                    </h2>

                    <input
                        type="date"
                        className="mt-4 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-[#21A9E1]"
                    />
                </div>

                {/* Daily Work Update */}
                <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#FF8C00]">
                        Daily Work Update
                    </h2>

                    <div className="mt-4 grid gap-4">

                        {/* Platform Selection */}
                        <div>
                            <label className="mb-2 block font-medium text-slate-700">
                                Platform
                            </label>

                            <select className="w-full rounded-lg border border-slate-300 p-3">
                                <option>Select Platform</option>
                                <option>Instagram</option>
                                <option>Facebook</option>
                                <option>LinkedIn</option>
                                <option>Google Ads</option>
                                <option>Google Business Profile</option>
                                <option>YouTube</option>
                                <option>Twitter / X</option>
                                <option>Pinterest</option>
                                <option>Website SEO</option>
                                <option>Blog Posting</option>
                                <option>Email Marketing</option>
                                <option>WhatsApp Marketing</option>
                            </select>
                        </div>

                        {/* Multiple Platforms */}
                        <div>
                            <label className="mb-2 block font-medium text-slate-700">
                                Platforms Worked On
                            </label>

                            <div className="grid grid-cols-2 gap-3 rounded-lg border border-slate-300 p-4 md:grid-cols-3">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Instagram
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Facebook
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    LinkedIn
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Google Ads
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    YouTube
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Website SEO
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Blog Posting
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Email Marketing
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    WhatsApp Marketing
                                </label>
                            </div>
                        </div>

                        {/* Work Title */}
                        <input
                            type="text"
                            placeholder="Work Title"
                            className="w-full rounded-lg border border-slate-300 p-3"
                        />

                        {/* Description */}
                        <textarea
                            rows={5}
                            placeholder="Work Description"
                            className="w-full rounded-lg border border-slate-300 p-3"
                        />

                        <div>
                            <label className="mb-2 block font-medium text-slate-700">
                                Work Upload
                            </label>

                            <label className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 p-6 transition hover:border-[#21A9E1] hover:bg-sky-50">
                                <Upload className="h-6 w-6 text-[#21A9E1]" />

                                <div className="text-center">
                                    <p className="font-medium text-slate-700">
                                        Upload Work File
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        PDF, DOCX, XLSX, PNG, JPG
                                    </p>
                                </div>

                                <input
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <button className="rounded-lg bg-[#21A9E1] px-6 py-3 font-medium text-white hover:bg-[#1494c7]">
                            Save Work
                        </button>
                    </div>
                </div>
                {/* Approval Section */}
                <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-green-600">
                        Approval Management
                    </h2>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">

                        {/* Approval By */}
                        <div>
                            <label className="mb-2 block font-medium text-slate-700">
                                Approved By
                            </label>

                            <select className="w-full rounded-lg border border-slate-300 p-3">
                                <option>Select Approver</option>
                                <option>Client</option>
                                <option>Manager</option>
                            </select>
                        </div>

                        {/* Approval Status */}
                        <div>
                            <label className="mb-2 block font-medium text-slate-700">
                                Approval Status
                            </label>

                            <select className="w-full rounded-lg border border-slate-300 p-3">
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                            </select>
                        </div>

                    </div>

                    {/* Remarks */}
                    <div className="mt-4">
                        <label className="mb-2 block font-medium text-slate-700">
                            Remarks
                        </label>

                        <textarea
                            rows={3}
                            placeholder="Approval comments..."
                            className="w-full rounded-lg border border-slate-300 p-3"
                        />
                    </div>
                </div>
                {/* SEO Report + Task Management */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* SEO Report */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-[#21A9E1]">
                            SEO Report
                        </h2>

                        <div className="mt-4 space-y-3">
                            <p>Website URL: www.example.com</p>
                            <p>Keywords Ranking: 120</p>
                            <p>Organic Traffic: 5,000</p>
                            <p>Backlinks: 350</p>
                        </div>
                    </div>

                    {/* Task Management */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-[#FF8C00]">
                            Task Management
                        </h2>

                        <div className="mt-4 space-y-3">
                            <p>Task: SEO Optimization</p>
                            <p>Status: In Progress</p>
                            <p>Priority: High</p>
                            <p>Assigned To: Employee Name</p>
                        </div>
                    </div>

                </div>

                {/* Work History */}
                <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-800">
                        Work History
                    </h2>

                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-sky-50">
                                    <th className="border p-3 text-left">Date</th>
                                    <th className="border p-3 text-left">Work Title</th>
                                    <th className="border p-3 text-left">Employee</th>
                                    <th className="border p-3 text-left">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border p-3">01 June 2026</td>
                                    <td className="border p-3">SEO Audit</td>
                                    <td className="border p-3">Shobha Yadav</td>
                                    <td className="border p-3 text-green-600">
                                        Approved
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}