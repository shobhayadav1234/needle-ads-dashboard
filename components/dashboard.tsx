import ClientCard from "./clientcard";
import { clients } from "@/data/Clients";

export default function Dashboard() {
  return (
    <section className="rounded-2xl md:rounded-3xl bg-white border border-sky-100 shadow-sm p-4 sm:p-6 md:p-8">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        Dashboard
      </h1>

      {/* Description */}
      <p className="mt-2 text-sm sm:text-base text-slate-500">
        Manage SEO Reports and Task Management Projects
      </p>

      {/* Clients List */}
      <div className="mt-6 md:mt-8 grid gap-3 sm:gap-4">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
          />
        ))}
      </div>
    </section>
  );
}