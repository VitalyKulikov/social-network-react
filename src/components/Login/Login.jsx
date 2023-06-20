import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import style from "./login.module.css";
// import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.formLogin}>
      <div>
        <Field placeholder={"email"} name={"email"} component={"input"} />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={"input"}
          type="password"
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button> LogIn</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);