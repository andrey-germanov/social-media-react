import React from 'react';  
import { Field, reduxForm } from 'redux-form';


const Login = (props) =>{
    const onSubmit = (formData) =>{
        
    }

    return(
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


const LoginForm = (props) =>{
    debugger;
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember me"} component={"input"}/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)




export default Login;