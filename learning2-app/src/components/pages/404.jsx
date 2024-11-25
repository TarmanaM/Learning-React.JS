import { useRouteError } from "react-router-dom";
import { AuthLayout } from "../Layouts/AuthLayout";
const ErrorPage =() => {
    const error = useRouteError();
    return (
        <div className="flex justify-center text-center   min-h-screen items-center flex-col" >
            <AuthLayout >
            <h1 className="text-3xl font-bold mb-3 text-black">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
                <h1>:(</h1>
            </p>
            </AuthLayout>
        </div>
    );

}

export {ErrorPage};