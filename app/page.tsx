import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapClient } from "./map-client";
import { Button } from "@/components/ui/button";

const getSelectedClient = () => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("selectedClient");
  return stored ? JSON.parse(stored) : null;
};

const selectedClient = getSelectedClient();

export default function Home() {
  // Se não tem cliente selecionado, manda pra seleção, seu corno!
  if (!selectedClient) {
    redirect("/select-client");
  }

  const handleChangeClient = () => {
    localStorage.removeItem("selectedClient");
    window.location.href = "/select-client";
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 p-6">
      {/* Header com nome da fazenda selecionada + botão trocar cliente */}
      <div className="lg:col-span-3 flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard - {selectedClient.name}</h1>
          <p className="text-muted-foreground">{selectedClient.location} • {selectedClient.talhoes} talhões</p>
        </div>
        <Button variant="outline" onClick={handleChangeClient}>
          Trocar Cliente
        </Button>
      </div>

      {/* Coluna esquerda: Cards de resumo */}
      <div className="space-y-6 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo ao Precision Farm</CardTitle>
            <CardDescription>Plataforma brasileira que humilha os gringo 🇧🇷🚜</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Dashboard com posições realtime de máquinas, talhões, operações e tudo que tua fazenda precisa.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Máquinas Ativas</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">online agora (em breve realtime)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Talhões Monitorados</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">camadas carregadas</p>
          </CardContent>
        </Card>
      </div>

      {/* Coluna direita: Mapa foda */}
      <div className="lg:col-span-2">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Mapa da Fazenda</CardTitle>
            <CardDescription>Visão geral em tempo real</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 relative overflow-hidden rounded-lg">
            <div id="map" className="absolute inset-0" />
            <MapClient />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}