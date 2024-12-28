import React from "react";
import TeamRegistrationForm from "./TeamRegistrationForm";
import Sidebar from "../layout/Sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeamManagement = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Gestão de Equipe
            </h1>
            <p className="mt-2 text-gray-600">
              Cadastre e gerencie os membros da equipe do gabinete
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TeamRegistrationForm />

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Níveis de Acesso</h2>
              <div className="space-y-4">
                {[
                  {
                    level: "Administrador Major (Vereador)",
                    description:
                      "Acesso total ao sistema, único com permissão para gerenciar níveis de acesso",
                    badge: "Acesso Total",
                  },
                  {
                    level: "Administrador Senior",
                    description:
                      "Poderes específicos delegados pelo vereador, com acesso personalizado",
                    badge: "Acesso Personalizado",
                  },
                  {
                    level: "Operadores",
                    description:
                      "Acesso específico por área: Legislativo, Parlamentar ou Terceiro Setor",
                    badge: "Acesso por Área",
                  },
                  {
                    level: "Equipe de Comunicação",
                    description:
                      "Gestão de comunicação, mídias sociais e marketing",
                    badge: "Comunicação",
                  },
                  {
                    level: "Lideranças",
                    description:
                      "Gestão de atividades de campanha e pós-campanha",
                    badge: "Liderança",
                  },
                  {
                    level: "Instituições",
                    description:
                      "Acesso limitado para parceiros institucionais",
                    badge: "Institucional",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{item.level}</h3>
                      <Badge variant="secondary">{item.badge}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamManagement;
