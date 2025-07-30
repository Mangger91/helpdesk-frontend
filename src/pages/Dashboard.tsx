import { CardChamado } from "../components/CardChamado";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Chamados Recentes</h1>

      <CardChamado
        numero="CH-001"
        nome="Roberto Mangger"
        descricao="Não consigo acessar o sistema"
        status="Aberto"
        data="29/07/2025"
      />

      <CardChamado
        numero="CH-002"
        nome="Maria Oliveira"
        descricao="Impressora não imprime"
        status="Em andamento"
        data="28/07/2025"
      />
    </div>
  );
}   