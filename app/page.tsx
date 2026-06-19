"use client";

import { useState } from "react";
import Image from "next/image";
import api from "@/lib/api"; // 

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const showMsg = (type: "success" | "error", text: string) => {
    setMessage({ type, text });

    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (!data?.success) {
        throw new Error(data?.message || "Login failed");
      }

      const { accessToken, user, userDetail } = data;

      // store auth
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      if (userDetail) {
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
      }

      showMsg("success", "Login successful 🎉");

      // role-based routing
      const role = user?.role;

      const routes: Record<string, string> = {
        admin: "/admin/executive-profile",
        manager: "/manager/executive-profile",
        employee: "/employee/my-profile",
        client: "/client/assigned-project",
      };

      const redirectTo = routes[role || ""] || "/";

      setTimeout(() => {
        window.location.href = redirectTo;
      }, 500);
    } catch (err) {
      console.error("Login Error:", err);

      const error = err as {
        response?: { data?: { message?: string } };
        message?: string;
      };

      showMsg(
        "error",
        error.response?.data?.message || error.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

        {/* MESSAGE */}
        {message.text && (
          <div
            className={`mb-4 p-3 text-sm rounded text-center font-medium ${message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
              }`}
          >
            {message.text}
          </div>
        )}

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/needle-ads-logo.png"
            alt="logo"
            width={150}
            height={50}
          />
          <p className="text-sm text-gray-500 mt-2">
            Pinpoint Growth Strategy
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded-lg pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
