import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { 
  Users, 
  Eye, 
  Smartphone, 
  Server, 
  CheckCircle, 
  Cpu, 
  HardDrive,
  RefreshCw 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar 
        collapsed={sidebarCollapsed} 
        onCollapsedChange={setSidebarCollapsed}
      />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Overview</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Consolidated view of Business Metrics, Analytics & Server Health
              </p>
            </div>
            <button className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors glow-subtle">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {/* Analytics Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs">📊</span>
              </div>
              <h2 className="text-lg font-semibold text-foreground">Analytics (MyJio)</h2>
              <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
                Data as of: 30 Jan 2026
              </span>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-success text-sm font-medium">875.7K Live Users</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Active Users"
                value="65.60M"
                subtitle="Last 7 days"
                icon={Users}
                accentColor="primary"
              />
              <StatCard
                title="Sessions"
                value="205.04M"
                subtitle="Last 7 days"
                icon={Eye}
                accentColor="primary"
              />
              <StatCard
                title="Page Views"
                value="686.54M"
                subtitle="Last 7 days"
                icon={Smartphone}
                accentColor="primary"
              />
              <StatCard
                title="Device Split"
                value="78%"
                subtitle="Mobile devices"
                icon={Smartphone}
                accentColor="primary"
              />
            </div>
          </section>

          {/* Server Health Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                <span className="text-xs">🖥️</span>
              </div>
              <h2 className="text-lg font-semibold text-foreground">Server Health</h2>
              <div className="ml-auto flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-success text-sm font-medium">All Systems Operational</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Pods"
                value="3283"
                subtitle="Running instances"
                icon={Server}
                accentColor="success"
              />
              <StatCard
                title="Healthy Pods"
                value="3283"
                subtitle="100% uptime"
                icon={CheckCircle}
                accentColor="success"
              />
              <StatCard
                title="CPU Usage"
                value="4.2%"
                subtitle="Cluster average"
                icon={Cpu}
                accentColor="success"
              />
              <StatCard
                title="Memory Usage"
                value="29.0%"
                subtitle="Cluster average"
                icon={HardDrive}
                accentColor="success"
              />
            </div>
          </section>

          {/* Top Countries */}
          <section>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Top Countries (Live)</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { country: "India", value: "872.3K", color: "bg-primary/20 text-primary border-primary/30" },
                { country: "UAE", value: "968", color: "bg-warning/20 text-warning border-warning/30" },
                { country: "United States", value: "501", color: "bg-primary/20 text-primary border-primary/30" },
                { country: "Saudi Arabia", value: "477", color: "bg-destructive/20 text-destructive border-destructive/30" },
                { country: "Canada", value: "181", color: "bg-muted text-muted-foreground border-border" },
              ].map((item) => (
                <span 
                  key={item.country}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium border",
                    item.color
                  )}
                >
                  {item.country}: {item.value}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
