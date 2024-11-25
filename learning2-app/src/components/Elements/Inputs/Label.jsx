import React from "react";

const Label= (props) => {
    const {children='...', name='...'}= props;
    return (
        <label htmlFor={`${name}`}  className="block mb-2 text-sm font-medium ">
        {children}
        </label>
    );
  };
  
  export {Label};
  
