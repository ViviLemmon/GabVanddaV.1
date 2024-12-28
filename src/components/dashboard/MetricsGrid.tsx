import React from "react";
import MetricCard from "./MetricCard";
import {
  Users,
  FileText,
  Calendar,
  Mail,
  MessageSquare,
  GraduationCap,
} from "lucide-react";

interface MetricsGridProps {
  metrics?: Array<{
    title: string;
    value: string | number;
    trend: number;
    icon: React.ReactNode;
    description: string;
  }>;
}

const MetricsGrid = ({ metrics }: MetricsGridProps) => {
  const defaultMetrics = [
    {
      title: "Cadastros Realizados",
      value: 1256,
      trend: 8.2,
      icon: <Users className="h-6 w-6 text-primary" />,
      description: "Cidadãos cadastrados no sistema",
    },
    {
      title: "E-mails Enviados",
      value: 5430,
      trend: 12.5,
      icon: <Mail className="h-6 w-6 text-primary" />,
      description: "Comunicações via e-mail marketing",
    },
    {
      title: "Mensagens WhatsApp",
      value: 2891,
      trend: 15.0,
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      description: "Interações via WhatsApp",
    },
    {
      title: "Formações Realizadas",
      value: 24,
      trend: 33.3,
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      description: "Central de Formação Cidadã",
    },
    {
      title: "Documentos Processados",
      value: 342,
      trend: 5.8,
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: "Documentos e processos",
    },
    {
      title: "Eventos Agendados",
      value: 18,
      trend: 20.0,
      icon: <Calendar className="h-6 w-6 text-primary" />,
      description: "Próximos 30 dias",
    },
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayMetrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            trend={metric.trend}
            icon={metric.icon}
            description={metric.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
