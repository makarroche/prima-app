type ButtonProps = {
  children: React.ReactNode;
  type: "button-search" | "button-slim";
  onClick: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
};

const Button = ({ children, type, onClick, onKeyDown }: ButtonProps) => {
  return (
    <button
      className={`button ${type}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
};

export default Button;
