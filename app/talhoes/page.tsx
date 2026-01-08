export default function Talhoes() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Talhões</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Gestão individualizada por talhão – área, cultura, NDVI, operações em andamento, tudo simples e direto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-card rounded-lg border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Talhão A1</h2>
          <p className="mt-2"><strong>Cultura:</strong> Soja</p>
          <p><strong>Área:</strong> 45 ha</p>
          <p><strong>NDVI médio:</strong> 0.82</p>
          <p><strong>Operação atual:</strong> Pulverização</p>
          <p className="mt-4 text-green-600 font-bold">Saudável</p>
        </div>

        <div className="p-6 bg-card rounded-lg border hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Talhão B2</h2>
          <p className="mt-2"><strong>Cultura:</strong> Milho</p>
          <p><strong>Área:</strong> 32 ha</p>
          <p><strong>NDVI médio:</strong> 0.68</p>
          <p><strong>Operação atual:</strong> Colheita</p>
          <p className="mt-4 text-yellow-600 font-bold">Atenção</p>
        </div>
      </div>
    </div>
  );
}