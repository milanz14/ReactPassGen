import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return <div>Button</div>;
};

export default Button;
