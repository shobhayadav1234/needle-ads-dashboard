import Navbar from "@/components/navbar";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Dashboard />
      </div>
    </main>
  );
}