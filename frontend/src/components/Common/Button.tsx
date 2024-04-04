interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="btn truncate whitespace-nowrap" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
