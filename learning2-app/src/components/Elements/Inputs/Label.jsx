import React from "react";

const Label= (props) => {
    const {children='...', htmlFor='...'}= props;
    return (
        <label htmlFor={`${htmlFor}`}  className="block mb-2 text-sm font-medium ">
        {children}
        </label>
    );
  };
  
  export default Label;
  
