import React from "react";

import { Label } from "./Inputs/Label";
import { Input } from "./Inputs/Input";

const InputForm = (props) => {
  const { children = "...", type='text',placeholder="..."} = props;
  return (
    <div className="mb-6">

      <Label htmlFor={`${type}`} >{`${children}`}</Label>
      <Input type={`${type}`} Id={`${type}`} placeholder={`${placeholder}`} />

    </div>
  );
};

export {InputForm};
