import React, { ReactEventHandler, useEffect, useState } from "react";

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
  const [combinationString, setCombinationString] = useState<string>("");

  useEffect(() => {
    updatePasswordCombinations();
  }, [passwordOptions]);

  const updatePasswordCombinations = (): void => {
    setCombinations([]);
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '`~!@#$%^&*()_+-={}[]\\|:";<>?,./';

    if (passwordOptions.hasLowerCase) {
      setCombinations([...combinations, ...lower]);
    }
    if (passwordOptions.hasLowerCase) {
      setCombinations([...combinations, ...upper]);
    }
    if (passwordOptions.hasNumbers) {
      setCombinations([...combinations, ...numbers]);
    }
    if (passwordOptions.hasSymbols) {
      setCombinations([...combinations, ...symbols]);
    }
  };

  const handleCheckedChange = (e) => {
    const { name } = e.target;
    setPasswordOptions((passwordOptions) => ({
      ...passwordOptions,
      [name]: true,
    }));
  };

  return (
    <div className="main-container">
      <label>
        <input
          type="checkbox"
          checked={passwordOptions.hasLowerCase}
          onChange={handleCheckedChange}
          name="hasLowerCase"
        />
        Lowercase letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={passwordOptions.hasUpperCase}
          onChange={handleCheckedChange}
          name="hasUpperCase"
        />
        Uppercase letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={passwordOptions.hasNumbers}
          onChange={handleCheckedChange}
          name="hasNumbers"
        />
        Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={passwordOptions.hasSymbols}
          onChange={handleCheckedChange}
          name="hasSymbols"
        />
        Symbols
      </label>
      <button onClick={() => console.log(combinations)}>Click Me</button>
    </div>
  );
};

export default MainContainer;
