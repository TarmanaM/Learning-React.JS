import { AuthLayout } from "../Layouts/AuthLayout";
import { RegisterForm } from "../Fragments/RegisterForm";

const RegisterPage = (props) => { 
    const {Action}=props;
    return(
    <AuthLayout Title ="Login">
        <RegisterForm Action={`${Action}`}></RegisterForm>
    </AuthLayout>
)}

export {RegisterPage};