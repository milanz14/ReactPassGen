import React, { useState } from "react";

import Button from "./Button";

const MainContainer: React.FC = (): JSX.Element => {
  const [length, setLength] = useState<number>(12);
  const [password, setPassword] = useState<string>("");
  const [hasLowerCase, setHasLowerCase] = useState<boolean>(false);
  const [hasUpperCase, setHasUpperCase] = useState<boolean>(false);
  const [hasNumbers, setHasNumbers] = useState<boolean>(false);
  const [hasSymbols, setHasSymbols] = useState<boolean>(false);

  const handleGenerationClick = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '`!@#$%^&*()_+{}[]:"\\<>?/|';

    let combinations = [];
    if (hasLowerCase) combinations.push(lower);
    if (hasUpperCase) combinations.push(upper);
    if (hasNumbers) combinations.push(numbers);
    if (hasSymbols) combinations.push(symbols);
  };

  return (
    <div className="main-container">
      <Button text="test" onClick={handleGenerationClick} />
    </div>
  );
};

export default MainContainer;
