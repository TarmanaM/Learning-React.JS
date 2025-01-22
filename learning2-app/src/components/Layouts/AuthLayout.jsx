import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { children, Title, Text, Type } = props;

  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-3 text-center text-black">
          {Title}
        </h1>
        <p className="font-medium text-slate-500 text-center"> {Text}</p>
        {children}

        {Type === "Login" ? (
          <p>
            Do not have Account?{""}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Register
            </Link>
          </p>
        ) : (
          <p>
            Already Have an Account?{""}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
export { AuthLayout };
