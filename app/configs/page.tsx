export default function Configs() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Configs</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Configurações da fazenda – simples, direto, sem poluição.
      </p>

      <div className="max-w-2xl space-y-6">
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Fazenda</h2>
          <p>Nome: Fazenda Boa Vista</p>
          <p>Localização: Ponta Grossa, PR</p>
        </div>

        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Notificações</h2>
          <p>Alertas de máquina parada</p>
          <p>NDVI abaixo do limite</p>
        </div>
      </div>
    </div>
  );
}