export default function Maquinas() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Máquinas</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Lista de máquinas ativas – simples pra caralho, foco no essencial: posição realtime, operador, velocidade, talhão.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder cards – depois vira lista real com Supabase realtime */}
        <div className="p-6 bg-card rounded-lg border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Trator John Deere 01</h2>
          <p className="mt-2"><strong>Operador:</strong> Zé da Roça</p>
          <p><strong>Velocidade:</strong> 18 km/h</p>
          <p><strong>Talhão:</strong> A1</p>
          <p className="mt-4 text-green-600 font-bold">Online</p>
        </div>

        <div className="p-6 bg-card rounded-lg border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Colheitadeira Case 02</h2>
          <p className="mt-2"><strong>Operador:</strong> Maria do Talhão</p>
          <p><strong>Velocidade:</strong> 12 km/h</p>
          <p><strong>Talhão:</strong> B2</p>
          <p className="mt-4 text-green-600 font-bold">Online</p>
        </div>
      </div>
    </div>
  );
}