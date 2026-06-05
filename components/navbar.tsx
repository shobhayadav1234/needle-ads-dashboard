"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
                    <Image
                        src="/images/needle-ads-logo.png"
                        alt="Needle Ads Technologies"
                        width={260}
                        height={70}
                        priority
                        className="h-auto w-36 sm:w-44 md:w-56 lg:w-64"
                    />

                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-lg bg-[#FF8C00] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#e97f00] sm:px-6 sm:text-base"
                    >
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-[#21A9E1]">
                                Sign In
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Welcome to Needle Ads Technologies
                            </p>
                        </div>

                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#21A9E1]"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#21A9E1]"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-[#21A9E1] py-3 font-semibold text-white transition hover:bg-[#1494c7]"
                            >
                                Login
                            </button>
                        </form>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 w-full rounded-lg border border-gray-300 py-2 text-gray-600 hover:bg-gray-100"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}