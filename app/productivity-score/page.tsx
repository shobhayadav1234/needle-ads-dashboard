"use client";

export default function ProductivityScorePage() {
    const expectedHours = 9;
    const breakHours = 1;
    const actualHours = 8;

    const productivityScore = Math.round(
        (actualHours / (expectedHours - breakHours)) * 100
    );

    const isRedZone = actualHours < 7.75;

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D]">
                    Productivity Score
                </h1>

                <p className="text-gray-600 mt-2">
                    Monitor daily productivity and working hours.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500 text-sm">
                        Expected Working Hours
                    </h3>
                    <p className="text-3xl font-bold text-[#0B3C5D] mt-2">
                        9 Hrs
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500 text-sm">
                        Break Time
                    </h3>
                    <p className="text-3xl font-bold text-orange-500 mt-2">
                        1 Hr
                    </p>
                </div>

                <div
                    className={`rounded-xl shadow p-5 ${isRedZone ? "bg-red-50 border border-red-300" : "bg-white"
                        }`}
                >
                    <h3 className="text-gray-500 text-sm">
                        Actual Productive Hours
                    </h3>

                    <p
                        className={`text-3xl font-bold mt-2 ${isRedZone ? "text-red-600" : "text-green-600"
                            }`}
                    >
                        {actualHours} Hrs
                    </p>

                    {isRedZone && (
                        <p className="text-red-500 text-xs mt-2">
                            Red Zone (Minimum 7 Hours 45 Minutes Required)
                        </p>
                    )}
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500 text-sm">
                        Productivity Score
                    </h3>

                    <p className="text-3xl font-bold text-[#00C897] mt-2">
                        {productivityScore}%
                    </p>
                </div>
            </div>

            {/* Details Section */}
            <div className="bg-white rounded-xl shadow p-6 mt-6">

                <h2 className="text-xl font-semibold text-[#0B3C5D] mb-4">
                    Productivity Details
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Expected Working Hours
                        </span>
                        <span>9 Hours</span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Break Time
                        </span>
                        <span>1 Hour</span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Actual Productive Hours
                        </span>
                        <span>8 Hours</span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Minimum Required Hours
                        </span>
                        <span>7 Hours 45 Minutes</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Productivity Score
                        </span>

                        <span className="font-bold text-[#00C897]">
                            {productivityScore}%
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}