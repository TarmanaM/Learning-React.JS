import { InputForm } from "../Elements/Index";
import { Button5 } from "../Elements/Buttons/Button";
const RegisterForm = (props) => {
  const { Action } = props;
  return (
    <form action={`${Action}`}>
      <InputForm Id="username" type="email" placeholder="E5oI8@example.com">
        Username
      </InputForm>
      <InputForm Id="name" type="text" placeholder="John Doe">
        Nama
      </InputForm>
      <InputForm Id="phone" type="number" placeholder="08...">
        Phone
      </InputForm>
      <InputForm Id="password" type="password">
        Password
      </InputForm>
      <InputForm Id="repassword" type="password">
        Password
      </InputForm>
      <Button5>Register</Button5>
    </form>
  );
};
export { RegisterForm };
