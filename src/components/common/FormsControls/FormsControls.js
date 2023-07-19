/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + '' + (hasError ? styles.error : 'read')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} >< textarea {...input}{...restProps} /></FormControl>;
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props} >< input {...input} {...restProps} /></FormControl>
    );
}

export const createFields = (placeholder, name, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} component={component}
               {...props}
        /> {text}
    </div>
)

