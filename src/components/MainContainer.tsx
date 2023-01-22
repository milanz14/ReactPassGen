// React imports
import React, { useEffect, useState } from "react";

// npm packages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const copyNotification = () => toast.success("Copied to clipboard!");
  const invalidNotification = () => toast.error("You must select at least one password option");

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
      length: Number(value),
    });
  };

  const handleCopyClick = () => {
    copyNotification();
    navigator.clipboard.writeText(password);
  };

  const handleGeneratePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validOptions = Object.values(passwordOptions).every((value) => value === true);
    if (!validOptions) {
      invalidNotification();
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <form className="form" onSubmit={handleGeneratePassword}>
          <div>
            <label>Password Length:</label>
            <input
              type="range"
              value={passwordOptions.length}
              min={12}
              max={32}
              onChange={handleLengthChange}
            />
            <span>{passwordOptions.length}</span>
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
            <button type="submit">Generate Password</button>
          </div>
        </form>
        <div className="password-input">
          <input type="text" value={password} readOnly></input>
          <button onClick={handleCopyClick} disabled={password.length ? false : true}>
            <i className="fa-regular fa-copy"></i>
          </button>
          <ToastContainer position="top-center" theme="dark" hideProgressBar autoClose={2000} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
