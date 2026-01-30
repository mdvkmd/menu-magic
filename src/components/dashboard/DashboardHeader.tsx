import { Bell, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  className?: string;
}

export function DashboardHeader({ className }: DashboardHeaderProps) {
  return (
    <header className={cn(
      "h-16 flex items-center justify-between px-6 border-b border-border glass",
      className
    )}>
      {/* App Selector */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">📱</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">MyJio</span>
            <span className="text-xs text-muted-foreground">Mobile app platform</span>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground ml-2" />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <User className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
