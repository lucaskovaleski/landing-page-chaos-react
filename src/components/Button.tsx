import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    variant?: "primary" | "secondary" | "tertiary";  // Nova propriedade para o tipo de botão
}

export default function Button({ text, variant = "primary" }: IButtonProps) {
    const className = `btn-${variant}`;
    
    return (
        <button className={className}>
            {text}
        </button>
    );
}
