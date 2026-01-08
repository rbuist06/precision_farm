"use client"; // Torna a página inteira Client Component – mata o erro de prerender na hora, simples pra caralho!

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const clientsTest = [
  { id: "1", name: "Fazenda Joao", location: "Ponta Grossa, PR", talhoes: 45 },
  { id: "2", name: "Fazenda do Zé", location: "Castro, PR", talhoes: 32 },
  { id: "3", name: "Agro Precision Teste1", location: "Carambeí, PR", talhoes: 28 },
];

export default function SelectClient() {
  const handleSelectClient = (client: typeof clientsTest[0]) => {
    localStorage.setItem("selectedClient", JSON.stringify(client));
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl">Selecione a Fazenda</CardTitle>
          <CardDescription>Escolha o cliente para acessar o dashboard de precisão</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {clientsTest.map((client) => (
            <Button
              key={client.id}
              variant="outline"
              className="w-full justify-start text-left p-6 h-auto hover:bg-accent"
              onClick={() => handleSelectClient(client)} // onClick direto funciona porque a página é "use client"
            >
              <div>
                <p className="font-semibold text-lg">{client.name}</p>
                <p className="text-sm text-muted-foreground">{client.location} • {client.talhoes} talhões</p>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}