import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { DeploymentsTable } from "@/components/dashboard/DeploymentsTable";
import { 
  Rocket, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  RefreshCw 
} from "lucide-react";

const Index = () => {
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
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MyJio — Current Production</h1>
                <p className="text-muted-foreground text-sm">
                  Latest deployment per service • MyJio • Production Environment
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-sm font-medium">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Services"
              value="447"
              subtitle="MyJio production services"
              icon={Rocket}
              accentColor="primary"
            />
            <StatCard
              title="Successful"
              value="128"
              subtitle="29% success rate"
              icon={CheckCircle}
              accentColor="success"
            />
            <StatCard
              title="Failed"
              value="4"
              subtitle="Needs attention"
              icon={AlertTriangle}
              accentColor="warning"
            />
            <StatCard
              title="In Progress"
              value="0"
              subtitle="Active deployments"
              icon={Clock}
              accentColor="primary"
            />
          </div>

          {/* Deployments Table */}
          <DeploymentsTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
