import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  accentColor?: "primary" | "success" | "warning";
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon,
  accentColor = "primary",
  className 
}: StatCardProps) {
  const accentStyles = {
    primary: "text-primary border-t-primary",
    success: "text-success border-t-success",
    warning: "text-warning border-t-warning",
  };

  return (
    <div className={cn(
      "glass rounded-xl p-5 border-t-2 transition-all duration-300 hover:glow-subtle",
      accentStyles[accentColor],
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-lg flex items-center justify-center",
          "bg-secondary/50"
        )}>
          <Icon className={cn("w-4 h-4", accentStyles[accentColor].split(" ")[0])} />
        </div>
      </div>
      <div className="space-y-1">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
