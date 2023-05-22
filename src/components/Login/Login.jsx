import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";


 const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
     <div>
         <Field placeholder={'Login'} name={'login'} component={'input'}/>
     </div>
     <div>
         <Field placeholder={'Password'} name={'password'} component={'input'}/>
     </div>
     <div>
         <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> remember me
     </div>
     <div>
         <button> Log In</button>
     </div>
        </form>
    </div>
 }

 const LoginReduxForm  = reduxForm({form: 'login'})(LoginForm)

 const Login = (props) =>{

     const onSubmit = (formData)=>{
         console.log('formData');
     }

     return <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
     </div>
 }



 export default Login;