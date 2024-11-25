import React, { Children } from "react";
import { Button5 } from "../Elements/Buttons/Button";

const CardProduct = (props) => {
    const { children, size="w-1/4" } = props;
  return (
    <div className={`bg-white border border-gray-800 p-3 rounded-md shadow flex flex-col justify-between ${size}`}>
     {children}
    </div>
  );
};
const Header = (props   ) => {
  const { children } = props;
  return (
    <div className=" w-full bg-white flex items-center justify-center rounded-t-md border-b">
      {children}
    </div>
  );
};

const Body = (props ) => {
  const { children } = props;

  return (
    <div className=" w-full bg-white flex items-center justify-center">
      {children}
    </div>
  );
};

const Footer = (props   ) => {
  const { children } = props;
  return (
    <div className=" w-full bg-white flex items-center justify-center">
        {children}
    </div>    
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export {CardProduct};