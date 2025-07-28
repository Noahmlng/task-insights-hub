import { KpiCard } from "@/components/dashboard/KpiCard";
import { UserTable } from "@/components/dashboard/UserTable";
import { Users, Activity, FolderOpen, CheckSquare } from "lucide-react";
import { mockOverviewData, mockActiveUsers } from "@/data/mockData";

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* 第一行：用户核心指标 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          title="总用户数"
          value={mockOverviewData.totalUsers.value.toLocaleString()}
          change={mockOverviewData.totalUsers.change}
          icon={<Users className="h-5 w-5" />}
        />
        <KpiCard
          title="周活跃用户数(WAU)"
          value={mockOverviewData.weeklyActiveUsers.value.toLocaleString()}
          change={mockOverviewData.weeklyActiveUsers.change}
          icon={<Activity className="h-5 w-5" />}
        />
        <div className="md:col-span-2 lg:col-span-1">
          <UserTable
            title="近一周活跃用户列表"
            users={mockActiveUsers}
          />
        </div>
      </div>

      {/* 第二行：产品核心指标 */}
      <div className="grid gap-6 md:grid-cols-2">
        <KpiCard
          title="总项目数"
          value={mockOverviewData.totalProjects.value.toLocaleString()}
          change={mockOverviewData.totalProjects.change}
          icon={<FolderOpen className="h-5 w-5" />}
        />
        <KpiCard
          title="总任务数"
          value={mockOverviewData.totalTasks.value.toLocaleString()}
          change={mockOverviewData.totalTasks.change}
          icon={<CheckSquare className="h-5 w-5" />}
        />
      </div>
    </div>
  );
}