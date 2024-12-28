import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  User,
  Calendar,
  Tag,
  MapPin,
  Mail,
  MessageSquare,
  FileText,
} from "lucide-react";

interface Request {
  id: string;
  title: string;
  description: string;
  status: "analysis" | "in-progress" | "completed";
  assignee: string;
  dueDate: string;
  category: string;
  tags: string[];
}

interface RequestTrackerProps {
  requests?: Request[];
}

const RequestTracker = ({
  requests = [
    {
      id: "1",
      title: "Cadastro em Massa - Zona Sul",
      description: "Campanha de cadastramento de cidadãos",
      status: "in-progress",
      assignee: "Ana Silva",
      dueDate: "2024-03-15",
      category: "cadastro",
      tags: ["geoprocessamento", "cadastro"],
    },
    {
      id: "2",
      title: "Campanha de E-mail Marketing",
      description: "Newsletter mensal para base de eleitores",
      status: "analysis",
      assignee: "João Santos",
      dueDate: "2024-04-01",
      category: "comunicação",
      tags: ["email", "marketing"],
    },
    {
      id: "3",
      title: "Integração WhatsApp Business",
      description: "Configuração de mensagens automáticas",
      status: "completed",
      assignee: "Maria Costa",
      dueDate: "2024-02-28",
      category: "comunicação",
      tags: ["whatsapp", "automação"],
    },
    {
      id: "4",
      title: "Emenda Parlamentar #123",
      description: "Projeto de acessibilidade urbana",
      status: "analysis",
      assignee: "Pedro Alves",
      dueDate: "2024-05-10",
      category: "gestão",
      tags: ["emenda", "acessibilidade"],
    },
    {
      id: "5",
      title: "Formação Cidadã Online",
      description: "Curso de participação política",
      status: "in-progress",
      assignee: "Carla Lima",
      dueDate: "2024-04-15",
      category: "formação",
      tags: ["educação", "online"],
    },
  ],
}: RequestTrackerProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "analysis":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cadastro":
        return <MapPin className="h-4 w-4" />;
      case "comunicação":
        return <MessageSquare className="h-4 w-4" />;
      case "gestão":
        return <FileText className="h-4 w-4" />;
      case "formação":
        return <ClipboardList className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "analysis":
        return <ClipboardList className="h-4 w-4" />;
      case "in-progress":
        return <Clock className="h-4 w-4" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const columns = ["Em Análise", "Em Progresso", "Concluído"];

  return (
    <div className="w-full h-[600px] bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Acompanhamento de Demandas
      </h2>
      <div className="grid grid-cols-3 gap-4 h-[calc(100%-2rem)]">
        {columns.map((column, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-4">{column}</h3>
            <ScrollArea className="h-[calc(100%-2rem)]">
              <div className="space-y-4">
                {requests
                  .filter((request) => {
                    const status = request.status;
                    return (
                      (column === "Em Análise" && status === "analysis") ||
                      (column === "Em Progresso" && status === "in-progress") ||
                      (column === "Concluído" && status === "completed")
                    );
                  })
                  .map((request) => (
                    <Card
                      key={request.id}
                      className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {getCategoryIcon(request.category)}
                        <h4 className="font-medium">{request.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {request.description}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className={getStatusColor(request.status)}
                        >
                          <span className="flex items-center gap-1">
                            {getStatusIcon(request.status)}
                            {request.status}
                          </span>
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {request.assignee}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {request.dueDate}
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {request.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
              </div>
            </ScrollArea>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestTracker;
