import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar role="manager" />

      <SidebarInset>
        {/* Mobile Header */}
        <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b bg-white px-4 lg:hidden">
          <SidebarTrigger />

          <h1 className="font-bold text-[#0b5fa5] text-sm">
            NEEDLEADS CRM
          </h1>
        </header>

        <main className="min-h-screen bg-slate-100">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}