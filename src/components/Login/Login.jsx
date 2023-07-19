import React from 'react';
// eslint-disable-next-line no-unused-vars
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import style from './login.module.css';
import {Navigate} from 'react-router-dom';
import {createFields, Input} from '../common/FormsControls/FormsControls';

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={style.formLogin}>
            {createFields('email', 'email', Input)}
            {createFields('Password', 'password', Input, {type: 'password'})}
            {createFields(null, 'rememberMe', Input, {type: 'checkbox'}, 'remember me')}
            <div>
                <button> LogIn</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>;
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);
