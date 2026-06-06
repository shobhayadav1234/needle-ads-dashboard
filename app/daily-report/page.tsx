import {
    CheckCircle,
    Clock,
    Users,
    AlertCircle,
    Send,
} from "lucide-react";

export default function DailyReportPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    Daily Report Dashboard
                </h1>
                <p className="text-slate-500 mt-2">
                    Track your daily work performance and report status.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Tasks Completed</p>
                            <h2 className="text-3xl font-bold mt-2">24</h2>
                        </div>
                        <CheckCircle className="text-green-600" size={40} />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Hours Worked</p>
                            <h2 className="text-3xl font-bold mt-2">8.5</h2>
                        </div>
                        <Clock className="text-blue-600" size={40} />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Clients Worked On</p>
                            <h2 className="text-3xl font-bold mt-2">12</h2>
                        </div>
                        <Users className="text-purple-600" size={40} />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Pending Tasks</p>
                            <h2 className="text-3xl font-bold mt-2">5</h2>
                        </div>
                        <AlertCircle className="text-red-600" size={40} />
                    </div>
                </div>
            </div>

            {/* Daily Report Form */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-6">
                    Submit End-of-Day Report
                </h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Tasks Completed
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Enter completed tasks..."
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Hours Worked
                        </label>
                        <input
                            type="number"
                            placeholder="Enter total hours worked"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Clients Worked On
                        </label>
                        <input
                            type="text"
                            placeholder="Enter client names"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Pending Tasks
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Enter pending tasks..."
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        <Send size={18} />
                        Submit End-of-Day Report
                    </button>
                </form>
            </div>
        </div>
    );
}