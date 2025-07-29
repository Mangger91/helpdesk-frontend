import { Input } from "./components/Input";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login do Sistema</h1>
        
        <form className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Entrar
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500 hover:underline cursor-pointer">
          Esqueci minha senha
        </p>
      </div>
    </div>
  );
}

export default App;
