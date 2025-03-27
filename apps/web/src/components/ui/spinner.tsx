import type * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "default" | "primary" | "secondary";
}

export function Spinner({ size = "md", variant = "default", className, ...props }: SpinnerProps) {
    const sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-3",
        xl: "h-12 w-12 border-4",
    };

    const variantClasses = {
        default: "border-muted-foreground/20 border-t-muted-foreground/60",
        primary: "border-primary/20 border-t-primary",
        secondary: "border-secondary/20 border-t-secondary",
    };

    return (
        <div
            className={cn("animate-spin rounded-full", sizeClasses[size], variantClasses[variant], className)}
            role="status"
            aria-label="Loading"
            {...props}
        />
    );
}

export function SpinnerWithText({
    text = "Loading...",
    size = "md",
    variant = "default",
    className,
    ...props
}: SpinnerProps & { text?: string; }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2" {...props}>
            <Spinner size={size} variant={variant} className={className} />
            <p className="text-sm text-muted-foreground">{text}</p>
        </div>
    );
}