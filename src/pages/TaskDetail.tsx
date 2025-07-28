import * as React from "react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { TaskTable } from "@/components/dashboard/TaskTable";
import { DateRangePicker } from "@/components/dashboard/DateRangePicker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, CheckSquare } from "lucide-react";
import { mockCustomers, mockTasks, mockUserTaskData } from "@/data/mockData";

export default function TaskDetail() {
  const [selectedCustomer, setSelectedCustomer] = React.useState(mockCustomers[0]);
  const [dateRange, setDateRange] = React.useState<{ from: Date; to: Date } | undefined>(() => {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000);
    return { from: weekAgo, to: today };
  });

  return (
    <div className="space-y-6">
      {/* 筛选器区域 */}
      <Card className="bg-card border border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">筛选条件</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">客户选择</label>
              <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="选择客户" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {mockCustomers.map((customer) => (
                    <SelectItem key={customer} value={customer} className="text-foreground hover:bg-muted">
                      {customer}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">时间段选择</label>
              <DateRangePicker
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 数据展示区域 */}
      <div className="space-y-6">
        {/* KPI 卡片 */}
        <div className="grid gap-6 md:grid-cols-2">
          <KpiCard
            title="项目总数 (筛选后)"
            value={mockUserTaskData.projectCount.value}
            change={mockUserTaskData.projectCount.change}
            icon={<FolderOpen className="h-5 w-5" />}
          />
          <KpiCard
            title="任务总数 (筛选后)"
            value={mockUserTaskData.taskCount.value}
            change={mockUserTaskData.taskCount.change}
            icon={<CheckSquare className="h-5 w-5" />}
          />
        </div>

        {/* 详细任务列表 */}
        <TaskTable
          title="详细任务列表"
          tasks={mockTasks}
        />
      </div>
    </div>
  );
}