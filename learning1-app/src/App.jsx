
import { Button, ButtonBlack, ButtonRed, Button2, Button3, Button4, Button5 } from "./components/Elements/Button/index.jsx";

// class component







function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="grid gap-4">
        <h1>Isa Tarmana Tutorial</h1>
        
        <div className="flex gap-x-3 justify-center">
          <ButtonBlack></ButtonBlack>
          <ButtonRed></ButtonRed>
        </div>
        <div className="flex gap-x-3 justify-center">
          <Button2 Attributnya="bg-black" tulisan="Login" ></Button2>
          <Button2 Attributnya="bg-slate-700" tulisan="Logout" ></Button2>
        </div>
        <div className="flex gap-x-3 justify-center">
          <Button3 Attributnya="bg-black"  >Keluar</Button3>
          <Button4 Attributnya="bg-green">Confirm</Button4>
          <Button5></Button5>
        </div>
      </div>
    </div>
  );
 
}
export default App;


