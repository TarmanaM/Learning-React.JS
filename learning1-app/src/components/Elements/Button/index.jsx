import React from "react";
class Button extends React.Component {
    render() {
      return (
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
        >
          Buy now
        </button>
      );
    }
  }
  
  // Function Component
  function ButtonBlack() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-slate-400 text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  }
  // function arrow component
  const ButtonRed = () => {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  };
  
  // funct arrow dengan parameter
  const Button2 = (props) => {
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${props.Attributnya} text-white`}
        type="submit"
      >
        {props.tulisan}
      </button>
    );
  };
  
  // func arrow dg variable children
  const Button3 = (props) => {
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${props.Attributnya} text-white`}
        type="submit"
      >
        {props.children}
      </button>
    );
  };
  
  // func arrow dg variable children dipersingkat
  const Button4 = (props) => {
    const {children,Attributnya} =props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${Attributnya} text-white`}
        type="submit"
      >
        {children}
      </button>
    );
  };
  
  // func arrow dg parameter children with deafault
  const Button5= (props) => {
    const {children='...', Attributnya="bg-black"}= props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${Attributnya} text-white`}
        type="submit"
      >
        {children}
      </button>
    );
  };
  
  export { Button, ButtonBlack, ButtonRed, Button2, Button3, Button4, Button5 };