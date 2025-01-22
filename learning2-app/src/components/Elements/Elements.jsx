import React from "react";

import Label  from "./Inputs/Label.jsx";
import  Input  from "./Inputs/Input.jsx";

const InputForm = (props) => {
  const { children = "...", placeholder,name, type='text',Idny} = props;
  return (
    <div className="mb-6">

      <Label htmlFor={`${name}`} >{`${children}`}</Label>
      <Input type={`${type}`} placeholder={`${placeholder}`} namex={`${name}`} idnya={`${Idny}`} />

    </div>
  );
};

export default InputForm;
