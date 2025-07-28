import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  dateRange: { from: Date; to: Date } | undefined;
  onDateRangeChange: (range: { from: Date; to: Date } | undefined) => void;
  quickOptions?: Array<{
    label: string;
    value: () => { from: Date; to: Date };
  }>;
}

export function DateRangePicker({ 
  dateRange, 
  onDateRangeChange, 
  quickOptions = [] 
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);

  const defaultQuickOptions = [
    {
      label: "今天",
      value: () => {
        const today = new Date();
        return { from: today, to: today };
      }
    },
    {
      label: "昨天", 
      value: () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return { from: yesterday, to: yesterday };
      }
    },
    {
      label: "上周",
      value: () => {
        const today = new Date();
        const lastWeekEnd = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const lastWeekStart = new Date(lastWeekEnd.getTime() - 6 * 24 * 60 * 60 * 1000);
        return { from: lastWeekStart, to: lastWeekEnd };
      }
    },
    {
      label: "近一周",
      value: () => {
        const today = new Date();
        const weekAgo = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000);
        return { from: weekAgo, to: today };
      }
    },
    {
      label: "上月",
      value: () => {
        const today = new Date();
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
        return { from: lastMonth, to: lastMonthEnd };
      }
    },
    {
      label: "本月",
      value: () => {
        const today = new Date();
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        return { from: monthStart, to: today };
      }
    }
  ];

  const allQuickOptions = quickOptions.length > 0 ? quickOptions : defaultQuickOptions;

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-wrap gap-2">
        {allQuickOptions.map((option) => (
          <Button
            key={option.label}
            variant="outline"
            size="sm"
            onClick={() => {
              const range = option.value();
              onDateRangeChange(range);
            }}
            className="h-8 px-3 text-xs"
          >
            {option.label}
          </Button>
        ))}
      </div>
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "yyyy年MM月dd日", { locale: zhCN })} -{" "}
                  {format(dateRange.to, "yyyy年MM月dd日", { locale: zhCN })}
                </>
              ) : (
                format(dateRange.from, "yyyy年MM月dd日", { locale: zhCN })
              )
            ) : (
              "选择日期范围"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
            className="pointer-events-auto"
            locale={zhCN}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}