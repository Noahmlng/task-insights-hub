import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface User {
  email: string;
  projectCount: number;
  taskCount: number;
}

interface UserTableProps {
  title: string;
  users: User[];
}

export function UserTable({ title, users }: UserTableProps) {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">用户邮箱</TableHead>
              <TableHead className="text-muted-foreground">新增项目数</TableHead>
              <TableHead className="text-muted-foreground">新增任务数</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index} className="border-border hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium text-foreground">{user.email}</TableCell>
                <TableCell className="text-foreground">{user.projectCount}</TableCell>
                <TableCell className="text-foreground">{user.taskCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}