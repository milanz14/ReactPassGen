// React imports
import React, { useState } from "react";

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
  const validNotification = () => toast.success("Password Generated :)");
  const invalidNotification = () => toast.error("You must select at least one password option");
  const noPassNotification = () => toast.error("Nothing to copy :(");

  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>(INIT_OPTIONS);
  const [password, setPassword] = useState<string>("");

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
    if (!password) {
      return noPassNotification();
    }
    copyNotification();
    navigator.clipboard.writeText(password);
  };

  const handleGeneratePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPassword("");
    const validOptions = Object.values(passwordOptions).some((value) => value === true);
    if (validOptions) {
      validNotification();
    } else {
      return invalidNotification();
    }

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '`~!@#$%^&*()_+-={}[]\\|:";<>?,./';
    let combinations = "";
    let placeHolderString = "";

    if (passwordOptions.hasLowerCase) {
      combinations += lower;
    }

    if (passwordOptions.hasUpperCase) {
      combinations += upper;
    }

    if (passwordOptions.hasNumbers) {
      combinations += numbers;
    }

    if (passwordOptions.hasSymbols) {
      combinations += symbols;
    }

    for (let i = 0; i < passwordOptions.length; i++) {
      let randomLetterInCombinations =
        combinations[Math.floor(Math.random() * combinations.length)];
      placeHolderString += randomLetterInCombinations;
    }
    setPassword(placeHolderString);
  };

  return (
    <div className="main-container">
      <h1>React PassGen</h1>
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
            <Button type="submit" text="Generate Passsword" />
          </div>
        </form>
        <div className="password-input">
          <textarea value={password} readOnly ref={(textArea) => (textArea = textArea)} />
          <button onClick={handleCopyClick} type="button" className="button">
            Copy Text
          </button>
          <ToastContainer position="top-center" theme="dark" hideProgressBar autoClose={2000} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
