import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls-module.css"


const LoginForm = ({handleSubmit,error,captchaUrl}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={"Login"} name={'email'} component={Input}
                            validate={[required]} type={"email"}/></div>

                <div><Field placeholder={"Password"} component={Input} name={'password'}
                            validate={[required]} type={"password"}/></div>

                <div className="checkbox"><Field component={Input} id={'rememberMe'}
                            type={"checkbox"}/>remember me</div>

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field placeholder={"Symbols from image"} component={Input} name={'captcha'}
                                      validate={[required]}  type={"text"}/>}


                {error && <div className="formSummaryError">
                    {error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl
    }
)

export default connect(mapStateToProps, {login})(Login);