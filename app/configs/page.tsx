export default function Operacoes() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Operações</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Kanban simples das operações no campo – arrasta e solta, foco no que tá acontecendo agora.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-muted/40 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">To Do</h2>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded border">
              <p className="font-medium">Pulverização Talhão A1</p>
              <p className="text-sm text-muted-foreground">Produto: Fungicida</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/40 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Doing</h2>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded border">
              <p className="font-medium">Colheita Talhão B2</p>
              <p className="text-sm text-muted-foreground">Máquina: Colheitadeira Case 02</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/40 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded border opacity-60">
              <p className="font-medium">Adubação Talhão C3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}