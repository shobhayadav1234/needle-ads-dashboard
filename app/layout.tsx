import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NeedleAds CRM",
  description: "Executive Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <TooltipProvider>
          <SidebarProvider>

            {/* Sidebar (Global CRM Layout) */}
            <AppSidebar />

            <SidebarInset>

              {/* Mobile Header */}
              <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b bg-white px-4 lg:hidden">
                <SidebarTrigger />

                <h1 className="font-bold text-[#0b5fa5] text-sm">
                  NEEDLEADS CRM
                </h1>
              </header>

              {/* Page Content */}
              <main className="min-h-screen bg-slate-100">
                {children}
              </main>

            </SidebarInset>

          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}