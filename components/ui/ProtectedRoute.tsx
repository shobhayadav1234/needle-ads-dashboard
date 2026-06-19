"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LOGIN_ROUTE = "/";

export default function ProtectedRoute({
    children,
    allowedRoles = [],
}: {
    children: React.ReactNode;
    allowedRoles?: string[];
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        if (!token) {
            router.replace(LOGIN_ROUTE);
            return;
        }

        if (allowedRoles.length && !allowedRoles.includes(user.role)) {
            router.replace(LOGIN_ROUTE);
            return;
        }

        setLoading(false);
    }, [router, allowedRoles]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return <>{children}</>;
}
