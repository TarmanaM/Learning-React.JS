import { InputForm } from "../Elements/Index";
import { Button5 } from "../Elements/Buttons/Button";
import { Children } from "react";
const LoginForm = (props) => {
  const { Action,children } = props;
  return (
    <form action={`${Action}`}>
      <InputForm name="username" type="email" placeholder="E5oI8@example.com" >Username</InputForm>
      <InputForm name="password" type="password" >Password</InputForm>
      <Button5>Login</Button5>
      {children}
    </form>
  );
};
export { LoginForm };
