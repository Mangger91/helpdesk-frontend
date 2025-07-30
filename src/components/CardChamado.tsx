interface Props {
  numero: string;
  nome: string;
  descricao: string;
  status: string;
  data: string;
}

export function CardChamado({ numero, nome, descricao, status, data }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <p><strong>Chamado:</strong> {numero}</p>
      <p><strong>Solicitante:</strong> {nome}</p>
      <p><strong>Descrição:</strong> {descricao}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Data:</strong> {data}</p>
    </div>
  );
}
