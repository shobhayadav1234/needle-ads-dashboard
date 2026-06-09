"use client"

type SectionBoxProps = {
    title: string
    children: React.ReactNode
}

export function SectionBox({ title, children }: SectionBoxProps) {
    return (
        <div className="mt-6 bg-white rounded-2xl border shadow-sm p-5 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-[#0b5fa5] mb-3">
                {title}
            </h2>

            {children}
        </div>
    )
}