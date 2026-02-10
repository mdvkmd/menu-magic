import { useState } from "react";
import { Search, ChevronDown, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Deployment {
  service: string;
  imageTag: string;
  build: string;
  status: "Success" | "Pending" | "Failed";
  deployedBy: string;
  deployedAt: string;
}

const deployments: Deployment[] = [
  { service: "MyJio-Personalization-ai-agentic-ui", imageTag: "20260210.1", build: "20260210.1", status: "Success", deployedBy: "Alok Gogate", deployedAt: "55m" },
  { service: "MyJio-Personalization-pers-postgresql-8", imageTag: "20260210.1", build: "20260210.1", status: "Success", deployedBy: "Alok Gogate", deployedAt: "3h ago" },
  { service: "MyJio - Personalization-pers-cmsupload-gcp - test", imageTag: "20260202.1", build: "20260202.1", status: "Success", deployedBy: "Mangalam Gupta", deployedAt: "4h ago" },
  { service: "LittleNest-littlenest-ds-memory-agent", imageTag: "20260210.1", build: "20260210.1", status: "Success", deployedBy: "Ashish Khamari", deployedAt: "4h ago" },
  { service: "MyJio-Personalization-pers-bayclub-helios-gui", imageTag: "20260209.3", build: "20260209.3", status: "Pending", deployedBy: "System", deployedAt: "20h ago" },
  { service: "MyJio-Personalization-langfuse-server", imageTag: "20260209.9", build: "20260209.9", status: "Success", deployedBy: "Alok Gogate", deployedAt: "21h ago" },
  { service: "MyJio-Personalization-pers-airsync-files", imageTag: "20260209.2", build: "20260209.2", status: "Pending", deployedBy: "System", deployedAt: "1d ago" },
  { service: "MyJio-MyJio", imageTag: "Release-1180", build: "-", status: "Pending", deployedBy: "System", deployedAt: "1d ago" },
  { service: "MyJio - myjio-config-cache-service", imageTag: "myjio-config-cache-service_master_7900891_20251006.1", build: "myjio-config-cache-service_master_7900891_20251006.1", status: "Pending", deployedBy: "System", deployedAt: "1d ago" },
];

const statusConfig = {
  Success: { icon: CheckCircle, className: "bg-success/20 text-success border-success/30" },
  Pending: { icon: Clock, className: "bg-muted text-muted-foreground border-border" },
  Failed: { icon: AlertCircle, className: "bg-destructive/20 text-destructive border-destructive/30" },
};

export function DeploymentsTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = deployments.filter((d) => {
    const matchesSearch = d.service.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 w-72">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search deployments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30 border border-border/50 text-sm text-foreground hover:bg-secondary transition-colors">
            {statusFilter}
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <span className="text-sm text-muted-foreground">
          Showing {filtered.length} of {deployments.length} services
        </span>
      </div>

      {/* Table */}
      <div className="glass rounded-xl overflow-hidden border border-border/30">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30">
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Service</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Image Tag</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Build</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Deployed By</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Deployed At</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((dep, i) => {
              const StatusIcon = statusConfig[dep.status].icon;
              return (
                <tr key={i} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                  <td className="px-5 py-3.5">
                    <span className="text-sm text-primary hover:underline cursor-pointer">{dep.service}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <code className="text-sm text-muted-foreground font-mono">{dep.imageTag}</code>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-sm text-muted-foreground">{dep.build}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                      statusConfig[dep.status].className
                    )}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {dep.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{dep.deployedBy}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{dep.deployedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
