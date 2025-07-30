import { Input } from "../components/Input";
import { Botao } from "../components/Botao";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login do Sistema</h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/chamados");
          }}
        >
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Botao type="submit">Entrar</Botao>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500 hover:underline cursor-pointer">
          Esqueci minha senha
        </p>
      </div>
    </div>
  );
}
