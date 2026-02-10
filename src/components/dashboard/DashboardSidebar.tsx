import { useState } from "react";
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Heart, 
  Cloud, 
  Rocket,
  Shield,
  MessageSquare, 
  ChevronLeft,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  isActive?: boolean;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    label: "DASHBOARD",
    items: [
      { title: "Overview", icon: LayoutDashboard, href: "/overview" },
    ],
  },
  {
    label: "ANALYTICS",
    items: [
      { title: "Business Metrics", icon: TrendingUp, href: "/business-metrics" },
      { title: "Google Analytics", icon: BarChart3, href: "/analytics" },
      { title: "Reports", icon: FileText, href: "/reports" },
    ],
  },
  {
    label: "INFRASTRUCTURE",
    items: [
      { title: "Server Health", icon: Heart, href: "/server-health" },
      { title: "CDN Statistics", icon: Cloud, href: "/cdn-statistics" },
      { title: "Deployments", icon: Rocket, href: "/deployments", isActive: true },
      { title: "Certificate Manager", icon: Shield, href: "/certificate-manager" },
    ],
  },
  {
    label: "AI ASSISTANT",
    items: [
      { title: "Chat", icon: MessageSquare, href: "/chat" },
    ],
  },
];

interface DashboardSidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function DashboardSidebar({ collapsed = false, onCollapsedChange }: DashboardSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    navSections.map(s => s.label)
  );

  const toggleSection = (label: string) => {
    setExpandedSections(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  return (
    <aside 
      className={cn(
        "h-screen sticky top-0 flex flex-col border-r border-sidebar-border transition-all duration-300 ease-in-out",
        "glass",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className={cn(
        "flex items-center gap-3 p-4 border-b border-sidebar-border",
        collapsed && "justify-center"
      )}>
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center glow-subtle">
          <LayoutDashboard className="w-4 h-4 text-primary" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-semibold text-foreground text-gradient">OneView AI</span>
            <span className="text-xs text-muted-foreground">One Platform. Total Intelligence.</span>
          </div>
        )}
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {navSections.map((section) => {
          const isExpanded = expandedSections.includes(section.label);
          
          return (
            <div key={section.label} className="mb-4">
              {!collapsed && (
                <button
                  onClick={() => toggleSection(section.label)}
                  className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                >
                  <span>{section.label}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </button>
              )}

              {(collapsed || isExpanded) && (
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                        "hover:bg-sidebar-muted group",
                        item.isActive && "sidebar-item-active text-primary",
                        !item.isActive && "text-sidebar-foreground hover:text-foreground",
                        collapsed && "justify-center px-2"
                      )}
                    >
                      <item.icon 
                        className={cn(
                          "w-5 h-5 transition-all duration-200",
                          item.isActive && "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]",
                          !item.isActive && "text-muted-foreground group-hover:text-primary"
                        )} 
                      />
                      {!collapsed && <span>{item.title}</span>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={() => onCollapsedChange?.(!collapsed)}
          className={cn(
            "flex items-center justify-center w-full py-2 rounded-lg",
            "text-muted-foreground hover:text-foreground hover:bg-sidebar-muted",
            "transition-all duration-200"
          )}
        >
          <ChevronLeft 
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              collapsed && "rotate-180"
            )} 
          />
        </button>
      </div>
    </aside>
  );
}
