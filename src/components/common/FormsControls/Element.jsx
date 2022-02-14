import React from "react";
import s from "./FormsControls-module.css"

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
         <div>
            <Element {...input} {...props} />
            { hasError && <div className="error"><span > { meta.error } </span></div> }
        </div>
    );
};