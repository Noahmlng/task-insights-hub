import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  params: string;
  expectedCount: number;
  publishTime: string;
  status: 'completed' | 'failed' | 'running' | 'pending';
  resultCount: number;
  excelLink?: string;
}

interface TaskTableProps {
  title: string;
  tasks: Task[];
}

const statusConfig = {
  completed: { label: '已完成', className: 'bg-success/10 text-success border-success/20' },
  failed: { label: '失败', className: 'bg-destructive/10 text-destructive border-destructive/20' },
  running: { label: '运行中', className: 'bg-warning/10 text-warning border-warning/20' },
  pending: { label: '待处理', className: 'bg-muted/10 text-muted-foreground border-muted/20' }
};

export function TaskTable({ title, tasks }: TaskTableProps) {
  return (
    <Card className="bg-card border border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">任务输入参数</TableHead>
              <TableHead className="text-muted-foreground">希望获得条数</TableHead>
              <TableHead className="text-muted-foreground">任务发布时间</TableHead>
              <TableHead className="text-muted-foreground">任务状态</TableHead>
              <TableHead className="text-muted-foreground">结果行数</TableHead>
              <TableHead className="text-muted-foreground">结果文件</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index} className="border-border hover:bg-muted/50 transition-colors">
                <TableCell className="text-foreground max-w-xs truncate" title={task.params}>
                  {task.params}
                </TableCell>
                <TableCell className="text-foreground">{task.expectedCount}</TableCell>
                <TableCell className="text-foreground font-mono text-sm">{task.publishTime}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn(statusConfig[task.status].className)}
                  >
                    {statusConfig[task.status].label}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{task.resultCount}</TableCell>
                <TableCell>
                  {task.excelLink ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 px-2"
                      onClick={() => window.open(task.excelLink, '_blank')}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      下载
                    </Button>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}