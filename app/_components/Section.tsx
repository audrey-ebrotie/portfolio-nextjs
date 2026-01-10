import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react"

export const Section = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
    return (
        <section className={cn("max-w-3xl px-4 m-auto", className)}>
            {children}
        </section>
    )
}