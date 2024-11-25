import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center text-center   min-h-screen items-center flex-col">
      <div className="flex justify-center  min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-3 text-black">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
            <h1>:(</h1>
          </p>
        </div>
      </div>
    </div>
  );
};

export { ErrorPage };
