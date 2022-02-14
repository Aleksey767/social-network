import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";



const LoginForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} name={'login'} component={Input}
                validate={[required]}/></div>
                <div><Field placeholder={"Password"} component={Input} name={'password'}
                validate={[required]}/></div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Please go through the authorization</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;