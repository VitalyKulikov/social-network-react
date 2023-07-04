import React from 'react';
import styles from './FormsControls.module.css';

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={styles.formControl + '' + (hasError ? styles.error : 'read')}
    >
      <div>
        {props.children}
        {/* <textarea {...input} {...props} /> */}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) =>{
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl> 
}

export const Input = (props) =>{
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl> 
}
