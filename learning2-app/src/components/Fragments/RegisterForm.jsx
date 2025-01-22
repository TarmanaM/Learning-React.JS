import { InputForm } from "../Elements/Index";
import { Button5 } from "../Elements/Buttons/Button";
const RegisterForm = (props) => {
  const { Action , children } = props;
  return (
    <form action={`${Action}`}>
      <InputForm name="username" type="email" placeholder="E5oI8@example.com">
        Username
      </InputForm>
      <InputForm name="name" type="text" placeholder="John Doe">
        Nama
      </InputForm>
      <InputForm name="phone" type="number" placeholder="08...">
        Phone
      </InputForm>
      <InputForm name="password" type="password">
        Password
      </InputForm>
      <InputForm name="repassword" type="password">
        Cofirm Password
      </InputForm>
      <Button5>Register</Button5>
      {children}
    </form>
  );
};
export { RegisterForm };
