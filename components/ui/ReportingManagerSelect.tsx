"use client";

import { useEffect, useState } from "react";

interface Manager {
    _id: string;
    name: string;
    email: string;
}

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function ReportingManagerSelect({
    value,
    onChange,
}: Props) {
    const [managers, setManagers] = useState<Manager[]>([]);
    const [loading, setLoading] = useState(false);

    const API =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://localhost:8000/api/v1";

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                setLoading(true);

                const token = localStorage.getItem("accessToken");

                console.log(token);
                

                const res = await fetch(`${API}/employee/reporting-managers`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await res.json();
                console.log(data)

                if (data.success) {
                    console.log(data)
                    setManagers(data.result || []);
                }
            } catch (error) {
                console.error("Failed to fetch managers", error);
            } finally {
                setLoading(false);
            }
        };

        fetchManagers();
    }, [API]);

    return (
        <div>
            <label className="block mb-2 font-medium">
                Reporting Manager
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                className="w-full border p-3 rounded-lg"
            >
                <option value="">
                    {loading
                        ? "Loading Managers..."
                        : "Select Reporting Manager"}
                </option>

                {managers.map((manager) => (
                    <option
                        key={manager._id}
                        value={manager._id}
                    >
                        {manager.name}
                    </option>
                ))}
            </select>
        </div>
    );
}