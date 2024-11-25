import { AuthLayout } from "../Layouts/AuthLayout";
import { LoginForm } from "../Fragments/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const { Action } = props;
  return (
    <AuthLayout Title="Login" Text="Sign in to your account">
      <LoginForm Action={`${Action}`}>
        <p>
          Do not have Account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 font-bold"
          >
            Register
          </Link>
        </p>
      </LoginForm>
    </AuthLayout>
  );
};

export { LoginPage };
