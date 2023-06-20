import React from "react"
import styles from "./FormsControls.module.css"

export const Textarea = ({input, meta,  ...props}) =>{
  
  const hasError = meta.touched && meta.error;

  return(
    <div className={styles.formControl + (hasError ? styles.error : "read")}>
      <div>
        <textarea {...input}{...props}/>
      </div>
      {hasError && <span className={styles.hasError}>{meta.error}</span>}
    </div>
  ) 
} 