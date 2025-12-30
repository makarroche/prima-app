type ButtonProps = {
  children: React.ReactNode;
  type: "button-search" | "button-slim";
  onClick: () => void;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
