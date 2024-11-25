
const  AuthLayout = (props) =>{
    const {children,Title} = props;
    return(
<div className="flex justify-center  min-h-screen items-center">
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-3 text-center text-black">{Title}</h1>
      <p className="font-medium text-slate-500 text-center"> Sign in to your account</p>
        {children}
    </div>
  </div>

)}
export { AuthLayout};
