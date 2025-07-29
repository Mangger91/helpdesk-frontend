type InputProps = {
    type: string;
    placeholder: string;
};
 export function Input({ type, placeholder }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border p-2 rounded w-full"
        />
    );
}
