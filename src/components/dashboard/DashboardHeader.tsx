import { Bell, Settings, Search, ChevronDown } from "lucide-react";
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
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center">
            <span className="text-sm">📱</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">MyJio</span>
            <span className="text-xs text-muted-foreground">Mobile app platform</span>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground ml-1" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 w-64">
          <Search className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search...</span>
          <kbd className="ml-auto text-xs text-muted-foreground bg-secondary/50 px-1.5 py-0.5 rounded border border-border/50">⌘K</kbd>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-3 ml-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">VD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">vijaykumar deenaraju</span>
            <span className="text-xs text-muted-foreground">IT Department</span>
          </div>
        </div>
      </div>
    </header>
  );
}
