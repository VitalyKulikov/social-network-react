import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import style from './login.module.css';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.formLogin}>
      <div>
        <Field placeholder={'email'} name={'email'} component={'Input'} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          component={'Input'}
          type='password'
        />
      </div>
      <div>
        <Field component={'Input'} name={'rememberMe'} type={'checkbox'} />{' '}
        remember me
      </div>
      <div>
        <button> LogIn</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

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
