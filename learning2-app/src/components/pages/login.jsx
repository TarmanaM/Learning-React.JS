import { AuthLayout } from "../Layouts/AuthLayout";
import { LoginForm } from "../Fragments/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const { Action } = props;
  return (
    <AuthLayout Title="Login" Text="Sign in to your account"
     Type="Login"
    >
      <LoginForm Action={`${Action}`}></LoginForm>
    </AuthLayout>
  );
};

export { LoginPage };
