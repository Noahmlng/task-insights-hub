import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    percentage: number;
    trend: 'up' | 'down';
  };
  icon?: React.ReactNode;
  className?: string;
}

export function KpiCard({ title, value, change, icon, className }: KpiCardProps) {
  return (
    <Card className={cn("bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-200", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <div className="flex items-center space-x-2">
              {change.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span 
                className={cn(
                  "text-sm font-medium",
                  change.trend === 'up' ? "text-success" : "text-destructive"
                )}
              >
                {change.trend === 'up' ? '+' : ''}{change.percentage}% ({change.trend === 'up' ? '+' : ''}{change.value})
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}