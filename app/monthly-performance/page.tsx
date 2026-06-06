import {
    CalendarCheck,
    CheckCircle,
    Smile,
    TrendingUp,
    Trophy,
    Award,
} from "lucide-react";

export default function MonthlyPerformancePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    Monthly Performance Dashboard
                </h1>
                <p className="text-slate-500 mt-2">
                    Track employee monthly performance metrics and achievements.
                </p>
            </div>

            {/* Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Attendance Percentage */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Attendance Percentage</p>
                            <h2 className="text-3xl font-bold mt-2">96%</h2>
                        </div>
                        <CalendarCheck size={40} className="text-green-600" />
                    </div>
                </div>

                {/* Task Completion Rate */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Task Completion Rate</p>
                            <h2 className="text-3xl font-bold mt-2">92%</h2>
                        </div>
                        <CheckCircle size={40} className="text-blue-600" />
                    </div>
                </div>

                {/* Client Satisfaction Score */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Client Satisfaction Score</p>
                            <h2 className="text-3xl font-bold mt-2">4.8/5</h2>
                        </div>
                        <Smile size={40} className="text-yellow-500" />
                    </div>
                </div>

                {/* Productivity Score */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Productivity Score</p>
                            <h2 className="text-3xl font-bold mt-2">88%</h2>
                        </div>
                        <TrendingUp size={40} className="text-purple-600" />
                    </div>
                </div>

                {/* Monthly Ranking */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Monthly Ranking</p>
                            <h2 className="text-3xl font-bold mt-2">#3</h2>
                        </div>
                        <Trophy size={40} className="text-orange-500" />
                    </div>
                </div>

                {/* Employee Performance Grade */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Performance Grade</p>
                            <h2 className="text-3xl font-bold mt-2">A+</h2>
                        </div>
                        <Award size={40} className="text-red-500" />
                    </div>
                </div>

            </div>

            {/* Summary Section */}
            <div className="mt-8 bg-white rounded-xl border p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                    Monthly Performance Summary
                </h2>

                <div className="space-y-3 text-gray-700">
                    <p>✅ Attendance Percentage: 96%</p>
                    <p>✅ Task Completion Rate: 92%</p>
                    <p>✅ Client Satisfaction Score: 4.8/5</p>
                    <p>✅ Productivity Score: 88%</p>
                    <p>🏆 Monthly Ranking: #3</p>
                    <p>🎖️ Employee Performance Grade: A+</p>
                </div>
            </div>
        </div>
    );
}