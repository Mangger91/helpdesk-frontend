type BotaoProps = {
    children: React.ReactNode;
    type?: "button" | "submit";
};

export function Botao({ children, type = "button" }: BotaoProps) {
    return (
        <button
            type={type}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition w-full"
        >
            {children}
        </button>
    );
}