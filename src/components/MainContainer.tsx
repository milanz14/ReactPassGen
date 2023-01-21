// React imports
import React, { useEffect, useState } from "react";

// components
import Button from "./Button";
import Checkbox from "./Checkbox";

// styles imports
import "../styles/MainContainer.css";

interface PasswordOptions {
  length: number;
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}

const MainContainer: React.FC = (): JSX.Element => {
  const INIT_OPTIONS: PasswordOptions = {
    length: 12,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumbers: false,
    hasSymbols: false,
  };

  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>(INIT_OPTIONS);
  const [password, setPassword] = useState<string>("");

  const updatePasswordCombinations = (): void => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '`~!@#$%^&*()_+-={}[]\\|:";<>?,./';
  };

  const handleLowerCaseChange = (): void => {
    setPasswordOptions({
      ...passwordOptions,
      hasLowerCase: !passwordOptions.hasLowerCase,
    });
  };

  const handleUpperCaseChange = (): void => {
    setPasswordOptions({
      ...passwordOptions,
      hasUpperCase: !passwordOptions.hasUpperCase,
    });
  };

  const handleNumbersChange = (): void => {
    setPasswordOptions({
      ...passwordOptions,
      hasNumbers: !passwordOptions.hasNumbers,
    });
  };

  const handleSymbolsChange = (): void => {
    setPasswordOptions({
      ...passwordOptions,
      hasSymbols: !passwordOptions.hasSymbols,
    });
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPasswordOptions({
      ...passwordOptions,
      length: Number(e.target.value),
    });
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="main-container">
      <div className="container">
        <form className="form">
          <div>
            <label>
              Password Length:
              <input
                type="range"
                value={passwordOptions.length}
                min={12}
                max={32}
                onChange={handleLengthChange}
              />
              <span>{passwordOptions.length}</span>
            </label>
          </div>
          <div className="inputdiv">
            <label>Lowercase letters</label>
            <Checkbox
              value={passwordOptions.hasLowerCase}
              onChange={handleLowerCaseChange}
              name="hasLowerCase"
            />
          </div>
          <div className="inputdiv">
            <label>Uppercase letters</label>
            <Checkbox
              value={passwordOptions.hasUpperCase}
              onChange={handleUpperCaseChange}
              name="hasUpperCase"
            />
          </div>
          <div className="inputdiv">
            <label>Numbers</label>
            <Checkbox
              value={passwordOptions.hasNumbers}
              onChange={handleNumbersChange}
              name="hasNumbers"
            />
          </div>
          <div className="inputdiv">
            <label>Symbols</label>
            <Checkbox
              value={passwordOptions.hasSymbols}
              onChange={handleSymbolsChange}
              name="hasSymbols"
            />
          </div>
          <div>
            <button onClick={updatePasswordCombinations}>Click Me</button>
          </div>
        </form>
        <div className="password-input">
          <input type="text" value={password} readOnly></input>
          <button onClick={handleCopyClick}>
            <i className="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
