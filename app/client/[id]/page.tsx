import { clients } from "@/data/Clients";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ClientPage({
    params,
}: PageProps) {
    const { id } = await params;

    const client = clients.find(
        (item) => item.id === Number(id)
    );

    if (!client) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-sky-50 p-6">
            <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow">

                <h1 className="text-3xl font-bold text-slate-800">
                    {client.name}
                </h1>

                <p className="mt-2 text-slate-500">
                    {client.type}
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                    <div className="rounded-xl border p-6">
                        <h2 className="text-xl font-semibold">
                            SEO Report
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Client SEO report details will appear here.
                        </p>
                    </div>

                    <div className="rounded-xl border p-6">
                        <h2 className="text-xl font-semibold">
                            Task Management
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Client tasks will appear here.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}