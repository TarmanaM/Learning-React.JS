import React from "react";

const Input= (props) => {
    const { type="text",Id,placeholder="..."}= props;
    return (
        <input type={`${type}`} id={`${Id}`} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" 
        placeholder={`${placeholder}`} />
    );
  };
  
  export default Input;
  
