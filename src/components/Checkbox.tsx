import React from "react";

interface CheckboxProps {
  value: boolean;
  name: string;
  onChange: () => void;
}

const Checkbox = ({ value, name, onChange }: CheckboxProps): JSX.Element => {
  return (
    <>
      <input type="checkbox" checked={value} onChange={onChange} name={name} />
    </>
  );
};

export default Checkbox;
