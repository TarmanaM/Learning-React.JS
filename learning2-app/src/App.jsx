import {
  Button,
  ButtonBlack,
  ButtonRed,
  Button2,
  Button3,
  Button4,
  Button5,
} from "./components/Elements/Button/Button.jsx";
import InputForm from "./components/Elements/Elements.jsx";

function App() {
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-3 text-center text-black">
          Login
        </h1>
        <p className="font-medium text-slate-500 text-center">
          {" "}
          Sign in to your account
        </p>
        <form action="">
          <InputForm
            type="email"
            Idny="usr-name"
            placeholder="example@mail.com"
            name="username"
          >
            Email
          </InputForm>
          <InputForm
            type="password"
            Idny="usr-password"
            placeholder="password"
            name="password"
          >
            Password
          </InputForm>
          <Button5>Login</Button5>
        </form>
      </div>
    </div>
  );
}

export default App;
