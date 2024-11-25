import React from "react";

import { Label } from "./Inputs/Label";
import { Input } from "./Inputs/Input";

const InputForm = (props) => {
  const { children = "...", type='text',name,placeholder="...",Id} = props;
  return (
    <div className="mb-6">

      <Label name={`${name}`} >{`${children}`}</Label>
      <Input name={`${name}`} type={`${type}`} placeholder={`${placeholder}`} />

    </div>
  );
};

export {InputForm};
