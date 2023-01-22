// styles
import "../styles/Button.css";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  children?: any;
}

const Button: React.FC<ButtonProps> = ({ text, type }: ButtonProps) => {
  return (
    <button className="button" type={type}>
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
