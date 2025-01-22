import { AuthLayout } from "../Layouts/AuthLayout";
import { RegisterForm } from "../Fragments/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = (props) => {
  const { Action } = props;
  return (
    <AuthLayout
      Title="Register"
      Text="Please enter your details"
      Type="Register"
    >
      <RegisterForm Action={`${Action}`}></RegisterForm>
    </AuthLayout>
  );
};

export { RegisterPage };
