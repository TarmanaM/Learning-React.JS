
import { Button, ButtonBlack, ButtonRed, Button2, Button3, Button4, Button5 } from "./components/Elements/Button/Button.jsx";
import { InputForm} from "./components/Elements/index.jsx";

function App() {
 

  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-3 text-center text-black">Login</h1>
        <p className="font-medium text-slate-500 text-center"> Sign in to your account</p>
        <form action="">
          
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
            <input type="text" id="password"   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password" />
          </div>
          <Button5 >Login</Button5>
          
        </form>

      </div>
    </div>
   

  )
}

export default App
