// Mock data for the dashboard

export const mockOverviewData = {
  totalUsers: {
    value: 1247,
    change: { value: 25, percentage: 2.1, trend: 'up' as const }
  },
  weeklyActiveUsers: {
    value: 342,
    change: { value: -15, percentage: -4.2, trend: 'down' as const }
  },
  totalProjects: {
    value: 863,
    change: { value: 45, percentage: 5.5, trend: 'up' as const }
  },
  totalTasks: {
    value: 12453,
    change: { value: 234, percentage: 1.9, trend: 'up' as const }
  }
};

export const mockActiveUsers = [
  { email: "zhang.wei@company.com", projectCount: 12, taskCount: 85 },
  { email: "li.ming@startup.io", projectCount: 8, taskCount: 72 },
  { email: "wang.lei@tech.cn", projectCount: 15, taskCount: 68 },
  { email: "chen.yan@enterprise.com", projectCount: 6, taskCount: 64 },
  { email: "zhao.jun@digital.net", projectCount: 9, taskCount: 58 },
  { email: "liu.fang@innovation.org", projectCount: 11, taskCount: 56 },
  { email: "wu.qiang@solutions.biz", projectCount: 7, taskCount: 52 },
  { email: "huang.mei@systems.co", projectCount: 13, taskCount: 48 },
  { email: "xu.gang@platform.dev", projectCount: 5, taskCount: 45 },
  { email: "song.li@services.pro", projectCount: 10, taskCount: 42 }
];

export const mockCustomers = [
  "customer-a@example.com",
  "customer-b@example.com", 
  "customer-c@example.com",
  "customer-d@example.com",
  "customer-e@example.com"
];

export const mockTasks = [
  {
    params: "获取用户行为数据，筛选条件：活跃度>80%，注册时间<30天",
    expectedCount: 500,
    publishTime: "2024-01-15 14:30",
    status: 'completed' as const,
    resultCount: 487,
    excelLink: "https://example.com/download/report_001.xlsx"
  },
  {
    params: "分析产品使用频率，按地区分组统计",
    expectedCount: 1000,
    publishTime: "2024-01-15 13:45",
    status: 'completed' as const,
    resultCount: 956,
    excelLink: "https://example.com/download/report_002.xlsx"
  },
  {
    params: "提取客户反馈数据，时间范围：最近7天",
    expectedCount: 200,
    publishTime: "2024-01-15 12:20",
    status: 'running' as const,
    resultCount: 0
  },
  {
    params: "生成销售漏斗分析报告，包含转化率计算",
    expectedCount: 300,
    publishTime: "2024-01-15 11:15",
    status: 'failed' as const,
    resultCount: 0
  },
  {
    params: "统计用户留存率，按月度维度分析",
    expectedCount: 800,
    publishTime: "2024-01-15 10:30",
    status: 'pending' as const,
    resultCount: 0
  },
  {
    params: "导出产品功能使用情况统计表",
    expectedCount: 150,
    publishTime: "2024-01-15 09:45",
    status: 'completed' as const,
    resultCount: 142,
    excelLink: "https://example.com/download/report_003.xlsx"
  }
];

export const mockUserTaskData = {
  projectCount: {
    value: 24,
    change: { value: 5, percentage: 26.3, trend: 'up' as const }
  },
  taskCount: {
    value: 156,
    change: { value: -8, percentage: -4.9, trend: 'down' as const }
  }
};