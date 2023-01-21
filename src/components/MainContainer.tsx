import React, { useState } from "react";

import Button from "./Button";

const MainContainer: React.FC = (): JSX.Element => {
  const [length, setLength] = useState<number>(12);
  const [hasLowerCase, setHasLowerCase] = useState<boolean>(false);
  const [hasUpperCase, setHasUpperCase] = useState<boolean>(false);

  const handleGenerationClick = () => {
    //
  };

  return (
    <div>
      MainContainer
      <Button text="test" onClick={handleGenerationClick} />
    </div>
  );
};

export default MainContainer;
