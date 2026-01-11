import { cn } from "@/lib/utils";

export type SpacingProps = {
    size: "sm" | "md" | "lg" | "xl";
}

export const Spacing = ({ size }: SpacingProps) => {
    const sizeClasses = {
        sm: "my-2",
        md: "my-4",
        lg: "my-6",
        xl: "my-8",
    };

    return <div className={cn(sizeClasses[size])} />;
}