import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapClient } from "./map-client";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 p-6">
      {/* Coluna esquerda: Cards de resumo – simples, clean, foco no essencial */}
      <div className="space-y-6 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo ao Precision Farm</CardTitle>
            <CardDescription>Plataforma brasileira que humilha os gringo 🇧🇷🚜</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Dashboard com posições realtime de máquinas, talhões, operações e tudo que tua fazenda precisa pra parar de usar planilha Excel cagada.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Máquinas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">online agora (em breve realtime)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Talhões Monitorados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">camadas carregadas</p>
          </CardContent>
        </Card>
      </div>

      {/* Coluna direita: Mapa foda ocupando espaço inteiro */}
      <div className="lg:col-span-2">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Mapa da Fazenda</CardTitle>
            <CardDescription>Visão geral em tempo real (em breve com máquinas ao vivo)</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 relative overflow-hidden rounded-lg">
            {/* Container do mapa com height 100% e absolute pra ocupar todo o CardContent */}
            <div id="map" className="absolute inset-0" />
            <MapClient />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}