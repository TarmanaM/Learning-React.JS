import React from "react";

import { Label } from "./Label";
import { Input } from "./Input";

const InputForm = (props) => {
  const { children = "...", type='text'} = props;
  return (
    <div className="mb-6">

      <Label htmlFor={`${type}`} >{`${children}`}</Label>
      <Input type={`${type}`} Id={`${type}`} placeholder={`${children}`} />

    </div>
  );
};

export default InputForm;
