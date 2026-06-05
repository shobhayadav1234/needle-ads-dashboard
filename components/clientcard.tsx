import Link from "next/link";
import { Client } from "@/types/client";

interface Props {
    client: Client;
}

export default function ClientCard({ client }: Props) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-5">

            <div>
                <h3 className="text-base font-bold text-slate-800 sm:text-lg">
                    {client.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    {client.type}
                </p>
            </div>

            <Link
                href={`/client/${client.id}`}
                className="w-full sm:w-auto rounded-lg bg-[#21A9E1] px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-[#1494c7]"
            >
                Work
            </Link>
        </div>
    );
}