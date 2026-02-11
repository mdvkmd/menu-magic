import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICard {
  title: string;
  value: string;
  change: number;
}

const kpiData: KPICard[] = [
  { title: "MyJio DAU", value: "19.2M", change: -3.6 },
  { title: "Sessions", value: "32.0M", change: -4.3 },
  { title: "Successful logins", value: "779.6K", change: -2.2 },
  { title: "Login failures", value: "96.0K", change: -1.8 },
  { title: "Total Recharges", value: "1.3M", change: -5.1 },
  { title: "Sim leads (React Native)", value: "89", change: -5.3 },
  { title: "Sim leads web", value: "38", change: -9.5 },
  { title: "Fiber leads", value: "162.0", change: -12.4 },
  { title: "Choice no. activations", value: "4.3K", change: -6.6 },
  { title: "AirFiber Leads", value: "15,320", change: -3.2 },
  { title: "Mobility Pre-to-Post", value: "573.0", change: -9.0 },
  { title: "Low connectivity users", value: "1.0M", change: -8.3 },
  { title: "No internet users", value: "2.5M", change: -4.9 },
  { title: "Get balance failures", value: "680.4K", change: -5.0 },
  { title: "Search Users", value: "707.8K", change: 2.8 },
  { title: "Search Visits", value: "1.3M", change: 3.0 },
  { title: "HelloJio users", value: "262.8K", change: -6.9 },
  { title: "HelloJio visits", value: "519.4K", change: -5.8 },
  { title: "Logouts", value: "16.2K", change: -6.4 },
];

function KPIStatCard({ title, value, change }: KPICard) {
  const isPositive = change > 0;

  return (
    <div className="glass rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 hover:glow-subtle border-t-2 border-t-primary/40">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 bg-secondary/60 px-3 py-1 rounded">
        {title}
      </span>
      <span className="text-3xl font-bold text-foreground mb-1">{value}</span>
      <span className={cn(
        "text-xs font-medium flex items-center gap-0.5",
        isPositive ? "text-success" : "text-destructive"
      )}>
        {isPositive ? "↑" : "↓"} {isPositive ? "+" : ""}{change}%
      </span>
    </div>
  );
}

const Reports = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page Header with filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MyJio KPIs</h1>
                <p className="text-muted-foreground text-sm">Key performance indicators overview</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FilterDropdown label="Operating system" />
              <FilterDropdown label="App version" />
              <FilterDropdown label="Feb 5, 2026 - Feb 5, 2026" />
            </div>
          </div>

          {/* Accent bar */}
          <div className="h-1 w-full rounded-full bg-gradient-to-r from-primary via-primary/60 to-transparent mb-6" />

          {/* KPI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi) => (
              <KPIStatCard key={kpi.title} {...kpi} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
      <span>{label}</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  );
}

export default Reports;
