import React, { useState } from 'react';
import {useField} from "formik";

export const TextInput = ({...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            {props.type !== "password" &&
            <input
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />}
            {props.type === "password" && (
                <input
                    invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                />
            )}
            {meta.touched && meta.error ? (
                <p>{meta.error}</p>
            ) : (
                <p style={{visibility: "hidden"}}>.</p>
            )}
        </>
    )
}


