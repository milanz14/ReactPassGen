import React, { useState } from "react";

import Button from "./Button";

interface PasswordOptions {
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}

const MainContainer: React.FC = (): JSX.Element => {
  const INIT_OPTIONS: PasswordOptions = {
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumbers: false,
    hasSymbols: false,
  };

  const [length, setLength] = useState<number>(12);
  const [password, setPassword] = useState<string>("");
  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>(INIT_OPTIONS);
  const [combinations, setCombinations] = useState<string[]>([]);

  const handleGenerationClick = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '`!@#$%^&*()_+{}[]:"\\<>?/|';
  };

  return (
    <div className="main-container">
      <Button text="test" onClick={handleGenerationClick} />
    </div>
  );
};

export default MainContainer;
