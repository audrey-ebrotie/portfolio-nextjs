import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon, MessageCircle, Rss, StickyNote } from "lucide-react";
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-3 w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground text-sm">
                        Side, fun project
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <div key={index}>
                                <SideProject
                                    Logo={project.Logo}
                                    title={project.title}
                                    description={project.description}
                                    url="#"
                                />
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-2 w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    Work
                </Card>
                <Card className="p-4 flex-1">
                    Contact Me
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS = [
    {
        Logo: Code,
        title: "Project One",
        description: "Description for project one."
    },
    {
        Logo: StickyNote,
        title: "Project Two",
        description: "Description for project two."         
    },
    {
        Logo: Rss,
        title: "Project Three",
        description: "Description for project three."       
    },
    {
        Logo: MessageCircle,
        title: "Project Four",
        description: "Description for project four."       
    },
];

type SideProjectProps = { Logo: LucideIcon, title: string, description: string, url: string };

const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-border hover:bg-accent/50 hover:text-accent-foreground transition-colors p-1 rounded" >
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}