"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Password reset link sent to ${email}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-2">
                    Forgot Password
                </h1>

                <p className="text-sm text-slate-500 text-center mb-6">
                    Enter your registered email address.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="w-full px-3 py-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
}