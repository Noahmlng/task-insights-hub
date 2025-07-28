import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}