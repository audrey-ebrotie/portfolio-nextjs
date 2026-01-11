import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-3xl font-bold text-foreground">Audrey EBROTIE</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "size-6 p-0")} href="https://github.com/audreyebrotie" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon size={16} className="text-foreground"></GithubIcon>
                    </Link>

                    <Link className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "size-6 p-0")} href="https://www.linkedin.com/in/audreyebrotie" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon size={16} className="text-foreground"></LinkedinIcon>
                    </Link>

                </ul>
            </Section>
        </header>
    )
}