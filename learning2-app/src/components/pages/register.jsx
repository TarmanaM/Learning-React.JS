import { AuthLayout } from "../Layouts/AuthLayout";
import { RegisterForm } from "../Fragments/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = (props) => {
  const { Action } = props;
  return (
    <AuthLayout Title="Register" Text="Please enter your details">
      <RegisterForm Action={`${Action}`}>
        <p>
          Do not have Account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 font-bold"
          >
            Login
          </Link>
        </p>
      </RegisterForm>
    </AuthLayout>
  );
};

export { RegisterPage };
