import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import TeamManagement from "./components/team/TeamManagement";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Carregando...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamManagement />} />
        <Route path="/recruitment" element={<div>Cadastro de Cidadãos</div>} />
        <Route path="/schedule" element={<div>Agenda Parlamentar</div>} />
        <Route path="/documents" element={<div>Propostas de Vereança</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route
          path="/citizen-training"
          element={<div>Central de Formação Cidadã</div>}
        />
        <Route
          path="/parliamentary-management"
          element={<div>Gestão de Atuação Parlamentar</div>}
        />
        <Route
          path="/demand-control"
          element={<div>Gestão de Controle de Demandas</div>}
        />
        <Route
          path="/budget-management"
          element={<div>Gestão de Verbas Parlamentares</div>}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
