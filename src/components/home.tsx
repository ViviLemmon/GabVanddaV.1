import React from "react";
import Sidebar from "./layout/Sidebar";
import MetricsGrid from "./dashboard/MetricsGrid";
import RequestTracker from "./dashboard/RequestTracker";

interface HomeProps {
  pageTitle?: string;
}

const Home = ({
  pageTitle = "Quadro de gestão da Vereança (2025-2028)",
}: HomeProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
            <p className="mt-2 text-gray-600">
              Gerenciamento de atividades parlamentares focadas em políticas
              públicas para neurodiversidade
            </p>
          </div>

          <MetricsGrid />

          <RequestTracker />
        </div>
      </main>
    </div>
  );
};

export default Home;
