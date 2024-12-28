import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon } from "lucide-react";

interface MetricCardProps {
  title?: string;
  value?: string | number;
  trend?: number;
  icon?: React.ReactNode;
  description?: string;
}

const MetricCard = ({
  title = "Projetos em Andamento",
  value = "12",
  trend = 8.2,
  icon = <TrendingUpIcon className="h-6 w-6 text-primary" />,
  description = "Comparado ao mês anterior",
}: MetricCardProps) => {
  const isPositiveTrend = trend >= 0;

  return (
    <Card className="w-[380px] h-[180px] bg-white hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 mt-4 text-sm">
          <span
            className={`flex items-center ${isPositiveTrend ? "text-green-600" : "text-red-600"}`}
          >
            {isPositiveTrend ? (
              <ArrowUpIcon className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 mr-1" />
            )}
            {Math.abs(trend)}%
          </span>
          <span className="text-muted-foreground">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
