import { AuthLayout } from "../Layouts/AuthLayout";
import { LoginForm } from "../Fragments/LoginForm";

const LoginPage = (props) => { 
    const {Action}=props;
    return(
    <AuthLayout Title ="Login">
        <LoginForm Action={`${Action}`}></LoginForm>
    </AuthLayout>
)}

export {LoginPage};