import { InputForm } from "../Elements/Index";
import { Button5 } from "../Elements/Buttons/Button";
const LoginForm = (props) => {
  const { Action } = props;
  return (
    <form action={`${Action}`}>
      <InputForm type="email">Username</InputForm>
      <InputForm type="password">Password</InputForm>
      <Button5>Login</Button5>
    </form>
  );
};
export { LoginForm };
